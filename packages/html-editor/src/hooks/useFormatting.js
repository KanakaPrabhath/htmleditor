import { useState, useCallback, useRef, useEffect } from 'react';
import { DEFAULT_FONT_SIZE } from '../lib/editor/font-sizes';
import { useDocumentActions } from '../context/DocumentContext';
import {
  isResizableImage,
  createResizeOverlay,
  removeResizeOverlay,
  updateResizeOverlay,
  RESIZE_HANDLERS,
  DEFAULT_IMAGE_RESIZE_OPTIONS
} from '../lib/editor/image-resize-utils';

// Constants for better maintainability
// Font size mapping for execCommand (legacy HTML font sizes 1-7)
const FONT_SIZE_MAP = {
  '10px': '1',   // 7.5 pt
  '12px': '2',   // 9 pt
  '13px': '2',   // 10 pt
  '15px': '3',   // 11 pt (Word default)
  '16px': '3',   // 12 pt
  '19px': '4',   // 14 pt
  '21px': '4',   // 16 pt
  '24px': '5',   // 18 pt
  '27px': '5',   // 20 pt
  '32px': '6',   // 24 pt
  '37px': '6',   // 28 pt
  '48px': '6',   // 36 pt
  '64px': '7',   // 48 pt
  '96px': '7'    // 72 pt
};

// Reverse mapping from legacy font size to pixel value
const REVERSE_FONT_SIZE_MAP = {
  '1': '10px',   // 7.5 pt
  '2': '12px',   // 9 pt (representative value)
  '3': '16px',   // 12 pt (Word default, most common)
  '4': '21px',   // 16 pt (representative value)
  '5': '27px',   // 20 pt (representative value)
  '6': '32px',   // 24 pt (representative value)
  '7': '64px',   // 48 pt (representative value)
  '8': '96px'    // 72 pt
};

const DEFAULT_FORMAT = {
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  alignLeft: false,
  alignCenter: false,
  alignRight: false,
  alignJustify: false,
  fontFamily: 'Arial',
  fontSize: DEFAULT_FONT_SIZE,
  headingLevel: 'p', // Add heading level tracking
  // Image resize state
  imageSelected: false,
  imageResizeOptions: DEFAULT_IMAGE_RESIZE_OPTIONS,
  preserveAspectRatio: true
};

/**
 * useFormatting - Hook for managing text formatting state and commands
 * Handles document.execCommand for rich text formatting
 * Optimized with better selection handling and error recovery
 */
export const useFormatting = () => {
  const [currentFormat, setCurrentFormat] = useState(DEFAULT_FORMAT);
  const actions = useDocumentActions();

  /**
   * Handle font family with improved reliability
   */
  const handleFontName = useCallback((value) => {
    try {
      // Save current selection
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return false;
      }

      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      if (!selectedText) {
        // No text selected - just update state for next input
        setCurrentFormat(prev => ({ ...prev, fontFamily: value }));
        return false;
      }

      // Try modern approach first - wrap in span with style
      try {
        const span = document.createElement('span');
        span.style.fontFamily = value;

        // Extract contents and wrap
        const fragment = range.extractContents();
        span.appendChild(fragment);
        range.insertNode(span);

        // Restore selection
        range.selectNodeContents(span);
        selection.removeAllRanges();
        selection.addRange(range);

        setCurrentFormat(prev => ({ ...prev, fontFamily: value }));
        return true;
      } catch (error) {
        // Fallback to execCommand
        document.execCommand('fontName', false, value);
        setCurrentFormat(prev => ({ ...prev, fontFamily: value }));
        return true;
      }
    } catch (error) {
      console.warn('[useFormatting] Font family change failed:', error);
      return false;
    }
  }, []);

  /**
   * Handle font size with improved reliability
   */
  const handleFontSize = useCallback((value) => {
    try {
      // Save current selection
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return false;
      }

      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      if (!selectedText) {
        // No text selected - just update state for next input
        setCurrentFormat(prev => ({ ...prev, fontSize: value }));
        return false;
      }

      // Try modern approach first - wrap in span with style
      try {
        const span = document.createElement('span');
        span.style.fontSize = value;

        // Extract contents and wrap
        const fragment = range.extractContents();
        span.appendChild(fragment);
        range.insertNode(span);

        // Restore selection
        range.selectNodeContents(span);
        selection.removeAllRanges();
        selection.addRange(range);

        setCurrentFormat(prev => ({ ...prev, fontSize: value }));
        return true;
      } catch (error) {
        // Fallback to execCommand with mapped size
        const mappedSize = FONT_SIZE_MAP[value] || '3';
        document.execCommand('fontSize', false, mappedSize);
        setCurrentFormat(prev => ({ ...prev, fontSize: value }));
        return true;
      }
    } catch (error) {
      console.warn('[useFormatting] Font size change failed:', error);
      return false;
    }
  }, []);

  /**
   * Handle text alignment by applying styles directly to paragraph elements
   * instead of wrapping content in divs with text-align
   */
  const handleTextAlignment = useCallback((command) => {
    try {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return false;
      }

      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      // Map command to CSS text-align value
      const alignMap = {
        justifyLeft: 'left',
        justifyCenter: 'center',
        justifyRight: 'right',
        justifyFull: 'justify'
      };

      const textAlign = alignMap[command];
      if (!textAlign) {
        return false;
      }

      if (!selectedText) {
        // No text selected - apply to current paragraph or create new one
        const startContainer = range.startContainer;
        const element = startContainer.nodeType === Node.TEXT_NODE
          ? startContainer.parentElement
          : startContainer;

        const blockElement = findNearestBlockElement(element) || createParagraphAtCursor();
        if (blockElement) {
          blockElement.style.textAlign = textAlign;
          // Update format state
          updateAlignmentState(textAlign);
        }
        return true;
      }

      // Text is selected - find all block elements in the selection and apply alignment
      const blockElements = findBlockElementsInRange(range);
      
      if (blockElements.length === 0) {
        // No block elements found, wrap selection in a paragraph with alignment
        const p = document.createElement('p');
        p.style.textAlign = textAlign;
        
        const fragment = range.extractContents();
        p.appendChild(fragment);
        range.insertNode(p);
        
        // Restore selection
        range.selectNodeContents(p);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // Apply alignment to all block elements in the selection
        blockElements.forEach(block => {
          block.style.textAlign = textAlign;
        });
      }

      // Update format state
      updateAlignmentState(textAlign);
      return true;
    } catch (error) {
      console.warn('[useFormatting] Text alignment failed:', error);
      return false;
    }
  }, []);

  /**
   * Update alignment state based on text-align value
   */
  const updateAlignmentState = useCallback((textAlign) => {
    setCurrentFormat(prev => ({
      ...prev,
      alignLeft: textAlign === 'left',
      alignCenter: textAlign === 'center',
      alignRight: textAlign === 'right',
      alignJustify: textAlign === 'justify'
    }));
  }, []);

  /**
   * Format text using document.execCommand or custom undo/redo
   * Optimized with better error handling and selection management
   */
  const formatText = useCallback((command, value = null) => {
    try {
      // Handle undo/redo commands using custom system
      if (command === 'undo') {
        actions.undo();
        return;
      }
      
      if (command === 'redo') {
        actions.redo();
        return;
      }

      // Check if document.execCommand is supported
      if (typeof document.execCommand !== 'function') {
        console.warn('[useFormatting] execCommand not supported');
        return;
      }

      // Handle fontSize separately for better control
      if (command === 'fontSize') {
        handleFontSize(value);
        return;
      }

      // Handle fontName separately for better control
      if (command === 'fontName') {
        handleFontName(value);
        return;
      }

      // Handle alignment commands specially to apply to paragraph elements instead of wrapping in divs
      if (['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'].includes(command)) {
        handleTextAlignment(command);
        return;
      }

      // Execute the command
      const success = document.execCommand(command, false, value);
      
      if (!success) {
        console.warn(`[useFormatting] Command "${command}" failed`);
      }

      // Update format state based on command - but let selection change handle the actual state
      // This is kept for immediate feedback but will be overridden by selection change
      switch (command) {
        case 'bold':
        case 'italic':
        case 'underline':
        case 'strikethrough':
        case 'justifyLeft':
        case 'justifyCenter':
        case 'justifyRight':
        case 'justifyFull':
        case 'fontName':
          // These will be updated by the selection change listener
          break;
        case 'formatBlock':
          setCurrentFormat(prev => ({ ...prev, headingLevel: value }));
          break;
        default:
          // Commands like insertUnorderedList, createLink, etc. don't need state updates
          break;
      }
    } catch (error) {
      console.warn(`[useFormatting] Error executing command "${command}":`, error);
    }
  }, [handleFontSize, handleFontName, actions]);

  // Image resize state and refs
  const resizeOverlayRef = useRef(null);
  const resizeImageRef = useRef(null);
  const resizeStartRef = useRef(null);
  const resizeHandlerRef = useRef(null);
  const resizeOptionsRef = useRef(DEFAULT_IMAGE_RESIZE_OPTIONS);

  /**
   * Handle image selection
   */
  const handleImageSelection = useCallback((imageElement) => {
    if (!isResizableImage(imageElement)) return;

    // Clear any existing resize overlay
    if (resizeOverlayRef.current) {
      removeResizeOverlay(resizeOverlayRef.current);
      resizeOverlayRef.current = null;
    }

    // Mark image as selected
    imageElement.classList.add('selected');

    // Create resize overlay
    const overlay = createResizeOverlay(imageElement);
    if (overlay) {
      resizeOverlayRef.current = overlay;
      resizeImageRef.current = imageElement;
      
      // Add overlay to document body
      document.body.appendChild(overlay);
      
      // Update format state
      setCurrentFormat(prev => ({
        ...prev,
        imageSelected: true,
        preserveAspectRatio: resizeOptionsRef.current.preserveAspectRatio
      }));
    }
  }, []);

  /**
   * Clear image selection
   */
  const clearImageSelection = useCallback(() => {
    if (resizeImageRef.current) {
      resizeImageRef.current.classList.remove('selected');
      resizeImageRef.current = null;
    }

    if (resizeOverlayRef.current) {
      removeResizeOverlay(resizeOverlayRef.current);
      resizeOverlayRef.current = null;
    }

    resizeStartRef.current = null;
    resizeHandlerRef.current = null;

    setCurrentFormat(prev => ({
      ...prev,
      imageSelected: false
    }));
  }, []);

  /**
   * Handle aspect ratio toggle
   */
  const toggleAspectRatio = useCallback(() => {
    const newPreserveRatio = !resizeOptionsRef.current.preserveAspectRatio;
    
    resizeOptionsRef.current = {
      ...resizeOptionsRef.current,
      preserveAspectRatio: newPreserveRatio,
      aspectRatio: newPreserveRatio
    };

    setCurrentFormat(prev => ({
      ...prev,
      preserveAspectRatio: newPreserveRatio
    }));
  }, []);

  /**
   * Start image resize operation
   */
  const startImageResize = useCallback((handler, startX, startY) => {
    if (!resizeImageRef.current) return;

    resizeStartRef.current = {
      x: startX,
      y: startY,
      width: resizeImageRef.current.offsetWidth,
      height: resizeImageRef.current.offsetHeight
    };

    resizeHandlerRef.current = handler;

    // Add resize class to prevent text selection
    document.body.classList.add('resize-in-progress');

    // Update cursor based on handler
    document.body.style.cursor = getCursorForHandler(handler);
  }, []);

  /**
   * Perform image resize operation
   */
  const performImageResize = useCallback((currentX, currentY) => {
    if (!resizeImageRef.current || !resizeStartRef.current || !resizeHandlerRef.current) return;

    const { x: startX, y: startY, width: startWidth, height: startHeight } = resizeStartRef.current;
    const handler = resizeHandlerRef.current;

    // Calculate new dimensions
    const newDimensions = calculateResizeDimensions({
      handler,
      startX,
      startY,
      currentX,
      currentY,
      startWidth,
      startHeight,
      options: resizeOptionsRef.current
    });

    // Apply new dimensions to the image
    applyImageDimensions(resizeImageRef.current, newDimensions);

    // Update resize overlay
    if (resizeOverlayRef.current) {
      updateResizeOverlay(resizeOverlayRef.current, resizeImageRef.current);
    }
  }, []);

  /**
   * End image resize operation
   */
  const endImageResize = useCallback(() => {
    resizeStartRef.current = null;
    resizeHandlerRef.current = null;

    // Remove resize classes
    document.body.classList.remove('resize-in-progress');
    document.body.style.cursor = '';

    // Update content in document context
    if (resizeImageRef.current) {
      // Trigger input event to update document state
      const inputEvent = new Event('input', { bubbles: true, cancelable: true });
      resizeImageRef.current.dispatchEvent(inputEvent);
    }
  }, []);

  /**
   * Update current format state based on current selection
   */
  const updateCurrentFormatFromSelection = useCallback(() => {
    try {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return;
      }

      // Get the current selection range
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      let fontSize = DEFAULT_FONT_SIZE;
      let fontFamily = 'Arial';
      let headingLevel = 'p';
      let textAlign = 'left'; // Default alignment

      if (selectedText) {
        // Try to get font size from computed style of selected element
        const startContainer = range.startContainer;
        const element = startContainer.nodeType === Node.TEXT_NODE
          ? startContainer.parentElement
          : startContainer;

        if (element) {
          const computedStyle = window.getComputedStyle(element);
          const computedFontSize = computedStyle.fontSize;
          const computedFontFamily = computedStyle.fontFamily;

          // Convert computed font size to our format (e.g., "16px" -> "16px")
          if (computedFontSize && computedFontSize.endsWith('px')) {
            fontSize = computedFontSize;
          }

          if (computedFontFamily && computedFontFamily !== 'serif') {
            fontFamily = computedFontFamily.split(',')[0].replace(/['"]/g, '').trim();
          }

          // Find the nearest block-level element (heading or paragraph)
          const blockElement = findNearestBlockElement(element);
          if (blockElement) {
            const tagName = blockElement.tagName?.toLowerCase();
            if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(tagName)) {
              headingLevel = tagName;
            }
            
            // Get text alignment from the block element's style
            const blockComputedStyle = window.getComputedStyle(blockElement);
            const computedTextAlign = blockComputedStyle.textAlign;
            if (['left', 'center', 'right', 'justify'].includes(computedTextAlign)) {
              textAlign = computedTextAlign;
            }
          }
        }
      }

      // Fallback to execCommand for other formatting (bold, italic, etc.)
      const formatState = {
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        underline: document.queryCommandState('underline'),
        strikethrough: document.queryCommandState('strikethrough'),
        alignLeft: textAlign === 'left',
        alignCenter: textAlign === 'center',
        alignRight: textAlign === 'right',
        alignJustify: textAlign === 'justify',
        fontFamily: fontFamily,
        fontSize: fontSize,
        headingLevel: headingLevel
      };

      setCurrentFormat(prev => ({
        ...prev,
        ...formatState
      }));
    } catch (error) {
      console.warn('[useFormatting] Error updating format from selection:', error);
    }
  }, []);

  /**
   * Reset formatting to default
   */
  const resetFormat = useCallback(() => {
    clearImageSelection();
    setCurrentFormat(DEFAULT_FORMAT);
  }, [clearImageSelection]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (resizeOverlayRef.current) {
        removeResizeOverlay(resizeOverlayRef.current);
      }
    };
  }, []);

  return {
    currentFormat,
    formatText,
    resetFormat,
    updateCurrentFormatFromSelection,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio
  };
};

/**
 * Helper function to find the nearest block-level element (heading or paragraph)
 * Walks up the DOM tree from the given element
 */
function findNearestBlockElement(element) {
  let current = element;
  
  // Walk up the DOM tree until we find a block element or reach the contenteditable root
  while (current && current !== document.body) {
    const tagName = current.tagName?.toLowerCase();
    
    // Check if this is a block-level element we're interested in
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(tagName)) {
      return current;
    }
    
    // Stop if we reach the contenteditable container
    if (current.contentEditable === 'true' || current.contentEditable === '') {
      break;
    }
    
    current = current.parentElement;
  }
  
  return null;
}

/**
 * Helper function to find all block elements within a range
 */
function findBlockElementsInRange(range) {
  const blockElements = [];
  const startContainer = range.startContainer;
  const endContainer = range.endContainer;
  
  // If range is within a single block element
  const startBlock = findNearestBlockElement(
    startContainer.nodeType === Node.TEXT_NODE ? startContainer.parentElement : startContainer
  );
  const endBlock = findNearestBlockElement(
    endContainer.nodeType === Node.TEXT_NODE ? endContainer.parentElement : endContainer
  );
  
  if (startBlock === endBlock && startBlock) {
    return [startBlock];
  }
  
  // Find all block elements in the range
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node) => {
        const tagName = node.tagName?.toLowerCase();
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(tagName) 
          ? NodeFilter.FILTER_ACCEPT 
          : NodeFilter.FILTER_SKIP;
      }
    }
  );
  
  let current = walker.nextNode();
  while (current) {
    // Check if this block element intersects with the range
    if (range.intersectsNode(current)) {
      blockElements.push(current);
    }
    current = walker.nextNode();
  }
  
  return blockElements;
}

/**
 * Helper function to create a paragraph element at cursor position
 */
function createParagraphAtCursor() {
  try {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    const range = selection.getRangeAt(0);
    const p = document.createElement('p');
    p.innerHTML = '<br>';
    
    // Insert the paragraph
    range.insertNode(p);
    
    // Move cursor into the paragraph
    range.selectNodeContents(p);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    
    return p;
  } catch (error) {
    console.warn('[useFormatting] Failed to create paragraph at cursor:', error);
    return null;
  }
}

/**
 * Helper function to get cursor for resize handler
 */
function getCursorForHandler(handler) {
  switch (handler) {
    case RESIZE_HANDLERS.TOP_LEFT:
    case RESIZE_HANDLERS.BOTTOM_RIGHT:
      return 'nwse-resize';
    case RESIZE_HANDLERS.TOP_RIGHT:
    case RESIZE_HANDLERS.BOTTOM_LEFT:
      return 'nesw-resize';
    case RESIZE_HANDLRES.TOP:
    case RESIZE_HANDLERS.BOTTOM:
      return 'ns-resize';
    case RESIZE_HANDLERS.LEFT:
    case RESIZE_HANDLERS.RIGHT:
      return 'ew-resize';
    default:
      return 'default';
  }
}

/**
 * Helper function to calculate resize dimensions
 */
function calculateResizeDimensions({
  handler,
  startX,
  startY,
  currentX,
  currentY,
  startWidth,
  startHeight,
  options = DEFAULT_IMAGE_RESIZE_OPTIONS
}) {
  const deltaX = currentX - startX;
  const deltaY = currentY - startY;
  
  let newWidth = startWidth;
  let newHeight = startHeight;
  
  // Calculate based on handler position
  switch (handler) {
    case RESIZE_HANDLERS.TOP_LEFT:
      newWidth = Math.max(options.minWidth, startWidth - deltaX);
      newHeight = Math.max(options.minHeight, startHeight - deltaY);
      break;
      
    case RESIZE_HANDLERS.TOP_RIGHT:
      newWidth = Math.max(options.minWidth, startWidth + deltaX);
      newHeight = Math.max(options.minHeight, startHeight - deltaY);
      break;
      
    case RESIZE_HANDLERS.BOTTOM_LEFT:
      newWidth = Math.max(options.minWidth, startWidth - deltaX);
      newHeight = Math.max(options.minHeight, startHeight + deltaY);
      break;
      
    case RESIZE_HANDLERS.BOTTOM_RIGHT:
      newWidth = Math.max(options.minWidth, startWidth + deltaX);
      newHeight = Math.max(options.minHeight, startHeight + deltaY);
      break;
      
    case RESIZE_HANDLERS.TOP:
      newHeight = Math.max(options.minHeight, startHeight - deltaY);
      break;
      
    case RESIZE_HANDLERS.BOTTOM:
      newHeight = Math.max(options.minHeight, startHeight + deltaY);
      break;
      
    case RESIZE_HANDLERS.LEFT:
      newWidth = Math.max(options.minWidth, startWidth - deltaX);
      break;
      
    case RESIZE_HANDLERS.RIGHT:
      newWidth = Math.max(options.minWidth, startWidth + deltaX);
      break;
      
    default:
      return { width: newWidth, height: newHeight };
  }
  
  // Apply aspect ratio if needed
  if (options.preserveAspectRatio && options.aspectRatio) {
    const aspectRatio = startWidth / startHeight;
    
    // For corner handlers, maintain aspect ratio
    if ([RESIZE_HANDLERS.TOP_LEFT, RESIZE_HANDLERS.TOP_RIGHT, 
         RESIZE_HANDLERS.BOTTOM_LEFT, RESIZE_HANDLERS.BOTTOM_RIGHT].includes(handler)) {
      // Use the larger dimension to maintain aspect ratio
      if (newWidth / aspectRatio > newHeight) {
        newHeight = Math.max(options.minHeight, newWidth / aspectRatio);
      } else {
        newWidth = Math.max(options.minWidth, newHeight * aspectRatio);
      }
    }
    // For edge handlers, maintain aspect ratio
    else if ([RESIZE_HANDLERS.TOP, RESIZE_HANDLERS.BOTTOM].includes(handler)) {
      newWidth = newHeight * aspectRatio;
    } else if ([RESIZE_HANDLERS.LEFT, RESIZE_HANDLERS.RIGHT].includes(handler)) {
      newHeight = newWidth / aspectRatio;
    }
  }
  
  // Apply max dimensions
  if (options.maxWidth && newWidth > options.maxWidth) {
    newWidth = options.maxWidth;
    if (options.preserveAspectRatio && options.aspectRatio) {
      newHeight = newWidth / (startWidth / startHeight);
    }
  }
  
  if (options.maxHeight && newHeight > options.maxHeight) {
    newHeight = options.maxHeight;
    if (options.preserveAspectRatio && options.aspectRatio) {
      newWidth = newHeight * (startWidth / startHeight);
    }
  }
  
  // Ensure minimum dimensions
  newWidth = Math.max(options.minWidth, newWidth);
  newHeight = Math.max(options.minHeight, newHeight);
  
  return {
    width: Math.round(newWidth),
    height: Math.round(newHeight)
  };
}

/**
 * Helper function to apply image dimensions
 */
function applyImageDimensions(element, { width, height }) {
  if (!isResizableImage(element)) return;
  
  // For img elements
  if (element.tagName === 'IMG') {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.width = width;
    element.height = height;
  }
  // For div elements with background images
  else if (element.tagName === 'DIV') {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
  }
}
