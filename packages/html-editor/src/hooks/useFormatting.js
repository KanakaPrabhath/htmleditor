import { useState, useCallback, useRef, useEffect } from 'react';
import { DEFAULT_FONT_SIZE } from '../lib/editor/font-sizes';
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

  /**
   * Update alignment state helper
   */
  const updateAlignment = useCallback((align) => {
    setCurrentFormat(prev => ({
      ...prev,
      alignLeft: align === 'left',
      alignCenter: align === 'center',
      alignRight: align === 'right',
      alignJustify: align === 'justify'
    }));
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
        // Fallback to execCommand
        const sizeNumber = FONT_SIZE_MAP[value] || '2';
        document.execCommand('fontSize', false, sizeNumber);
        setCurrentFormat(prev => ({ ...prev, fontSize: value }));
        return true;
      }
    } catch (error) {
      console.warn('[useFormatting] Font size change failed:', error);
      return false;
    }
  }, []);

  /**
   * Format text using document.execCommand
   * Optimized with better error handling and selection management
   */
  const formatText = useCallback((command, value = null) => {
    try {
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

      // Execute the command
      const success = document.execCommand(command, false, value);
      
      if (!success) {
        console.warn(`[useFormatting] Command "${command}" failed`);
      }

      // Update format state based on command
      switch (command) {
        case 'bold':
          setCurrentFormat(prev => ({ ...prev, bold: !prev.bold }));
          break;
        case 'italic':
          setCurrentFormat(prev => ({ ...prev, italic: !prev.italic }));
          break;
        case 'underline':
          setCurrentFormat(prev => ({ ...prev, underline: !prev.underline }));
          break;
        case 'strikethrough':
          setCurrentFormat(prev => ({ ...prev, strikethrough: !prev.strikethrough }));
        case 'justifyLeft':
          updateAlignment('left');
          break;
        case 'justifyCenter':
          updateAlignment('center');
        case 'justifyRight':
          updateAlignment('right');
        case 'justifyFull':
          updateAlignment('justify');
        case 'fontName':
          setCurrentFormat(prev => ({ ...prev, fontFamily: value }));
        case 'formatBlock':
          setCurrentFormat(prev => ({ ...prev, headingLevel: value }));
        default:
          // Commands like insertUnorderedList, createLink, etc. don't need state updates
          break;
      }
    } catch (error) {
      console.warn(`[useFormatting] Error executing command "${command}":`, error);
    }
  }, [handleFontSize, updateAlignment]);

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
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio
  };
};

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
