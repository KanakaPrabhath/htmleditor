import { useState, useCallback } from 'react';
import { DEFAULT_FONT_SIZE } from '../lib/editor/font-sizes';
import { useDocumentActions } from '../context/DocumentContext';

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
  headingLevel: 'p' // Add heading level tracking
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
   * Helper function to apply a style to the current selection
   */
  const applyStyleToSelection = useCallback((styleProperty, value, fallbackCommand = null) => {
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
        setCurrentFormat(prev => ({ ...prev, [styleProperty]: value }));
        return false;
      }

      // Try modern approach first - wrap in span with style
      try {
        const span = document.createElement('span');
        span.style[styleProperty] = value;

        // Extract contents and wrap
        const fragment = range.extractContents();
        span.appendChild(fragment);
        range.insertNode(span);

        // Restore selection
        range.selectNodeContents(span);
        selection.removeAllRanges();
        selection.addRange(range);

        setCurrentFormat(prev => ({ ...prev, [styleProperty]: value }));
        return true;
      } catch {
        // Fallback to execCommand if provided
        if (fallbackCommand) {
          const mappedValue = styleProperty === 'fontSize' ? (FONT_SIZE_MAP[value] || '3') : value;
          document.execCommand(fallbackCommand, false, mappedValue);
          setCurrentFormat(prev => ({ ...prev, [styleProperty]: value }));
          return true;
        }
        return false;
      }
    } catch (error) {
      console.warn(`[useFormatting] Style application failed for ${styleProperty}:`, error);
      return false;
    }
  }, []);

  /**
   * Handle font family with improved reliability
   */
  const handleFontName = useCallback((value) => {
    return applyStyleToSelection('fontFamily', value, 'fontName');
  }, [applyStyleToSelection]);

  /**
   * Handle font size with improved reliability
   */
  const handleFontSize = useCallback((value) => {
    return applyStyleToSelection('fontSize', value, 'fontSize');
  }, [applyStyleToSelection]);

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
  }, [updateAlignmentState]);

  /**
   * Handle insertHTML command with special handling for block elements like tables
   * Ensures tables and other block elements are not wrapped in paragraphs
   */
  const handleInsertHTML = useCallback((html) => {
    try {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return false;
      }

      const range = selection.getRangeAt(0);

      // Check if the HTML contains block elements that shouldn't be wrapped in paragraphs
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const hasBlockElements = Array.from(tempDiv.children).some(child =>
        ['TABLE', 'UL', 'OL', 'BLOCKQUOTE', 'PRE', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(child.tagName)
      );

      if (hasBlockElements) {
        // For block elements, we need to ensure they're inserted outside of any paragraph context
        const startContainer = range.startContainer;
        const startElement = startContainer.nodeType === Node.TEXT_NODE
          ? startContainer.parentElement
          : startContainer;

        // Find the nearest block element (paragraph, heading, etc.)
        const blockElement = findNearestBlockElement(startElement);

        if (blockElement && ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(blockElement.tagName)) {
          // We're inside a paragraph or heading - we need to split it or insert after it
          const blockTagName = blockElement.tagName.toLowerCase();

          // Check if cursor is at the beginning of the block
          const isAtStart = range.startOffset === 0 &&
            (startContainer === blockElement ||
             (startContainer.nodeType === Node.TEXT_NODE && startContainer === blockElement.firstChild));

          if (isAtStart) {
            // Insert before the current block element
            blockElement.parentNode.insertBefore(tempDiv, blockElement);
          } else {
            // Check if cursor is at the end of the block
            const isAtEnd = range.startOffset === startContainer.textContent?.length &&
              startContainer === blockElement.lastChild &&
              range.endOffset === startContainer.textContent?.length;

            if (isAtEnd) {
              // Insert after the current block element
              const nextSibling = blockElement.nextSibling;
              if (nextSibling) {
                blockElement.parentNode.insertBefore(tempDiv, nextSibling);
              } else {
                blockElement.parentNode.appendChild(tempDiv);
              }
            } else {
              // Split the block element at cursor position
              const fragment = range.extractContents();
              const remainingText = document.createTextNode('');

              // Create new block element for remaining content
              const newBlock = document.createElement(blockTagName);
              newBlock.appendChild(remainingText);
              newBlock.appendChild(fragment);

              // Insert the HTML and new block after current block
              const parent = blockElement.parentNode;
              parent.insertBefore(tempDiv, blockElement.nextSibling);
              parent.insertBefore(newBlock, tempDiv.nextSibling);

              // If original block is now empty, remove it
              if (!blockElement.textContent.trim() && blockElement.children.length === 0) {
                parent.removeChild(blockElement);
              }
            }
          }
        } else {
          // Not inside a paragraph/heading, insert normally
          range.insertNode(tempDiv);
        }

        // Move cursor after the inserted content
        range.setStartAfter(tempDiv);
        range.setEndAfter(tempDiv);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // For inline content, use standard execCommand
        document.execCommand('insertHTML', false, html);
      }

      return true;
    } catch (error) {
      console.warn('[useFormatting] InsertHTML failed:', error);
      // Fallback to standard execCommand
      try {
        document.execCommand('insertHTML', false, html);
        return true;
      } catch (fallbackError) {
        console.warn('[useFormatting] InsertHTML fallback also failed:', fallbackError);
        return false;
      }
    }
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

      // Handle insertHTML specially for block elements like tables
      if (command === 'insertHTML' && value) {
        handleInsertHTML(value);
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
  }, [handleFontSize, handleFontName, handleTextAlignment, handleInsertHTML, actions]);

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
    setCurrentFormat(DEFAULT_FORMAT);
  }, []);

  return {
    currentFormat,
    formatText,
    resetFormat,
    updateCurrentFormatFromSelection
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
