import { useState, useCallback } from 'react';

// Constants for better maintainability
const FONT_SIZE_MAP = {
  '10px': '1',
  '12px': '2',
  '14px': '3',
  '16px': '4',
  '18px': '5',
  '24px': '6',
  '32px': '7'
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
  fontSize: '12px',
  headingLevel: 'p' // Add heading level tracking
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
          break;
        case 'justifyLeft':
          updateAlignment('left');
          break;
        case 'justifyCenter':
          updateAlignment('center');
          break;
        case 'justifyRight':
          updateAlignment('right');
          break;
        case 'justifyFull':
          updateAlignment('justify');
          break;
        case 'fontName':
          setCurrentFormat(prev => ({ ...prev, fontFamily: value }));
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
  }, [handleFontSize, updateAlignment]);

  /**
   * Reset formatting to default
   */
  const resetFormat = useCallback(() => {
    setCurrentFormat(DEFAULT_FORMAT);
  }, []);

  return {
    currentFormat,
    formatText,
    resetFormat
  };
};
