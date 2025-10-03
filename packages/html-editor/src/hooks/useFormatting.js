import { useState, useCallback } from 'react';

/**
 * useFormatting - Hook for managing text formatting state and commands
 * Handles document.execCommand for rich text formatting
 */
export const useFormatting = () => {
  const [currentFormat, setCurrentFormat] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    alignJustify: false,
    fontFamily: 'Arial',
    fontSize: '12px'
  });

  /**
   * Format text using document.execCommand
   */
  const formatText = useCallback((command, value = null) => {
    // Handle fontSize with proper font size number (1-7 scale)
    if (command === 'fontSize') {
      // Convert px value to font size number for execCommand
      const sizeMap = {
        '10px': '1',
        '12px': '2',
        '14px': '3',
        '16px': '4',
        '18px': '5',
        '24px': '6',
        '32px': '7'
      };
      const sizeNumber = sizeMap[value] || '2';
      document.execCommand('fontSize', false, sizeNumber);
      
      // Then set the actual pixel size using style
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        if (selectedText) {
          const span = document.createElement('span');
          span.style.fontSize = value;
          range.surroundContents(span);
        }
      }
    } else {
      document.execCommand(command, false, value);
    }
    
    // Update format state
    if (command === 'bold') {
      setCurrentFormat(prev => ({ ...prev, bold: !prev.bold }));
    } else if (command === 'italic') {
      setCurrentFormat(prev => ({ ...prev, italic: !prev.italic }));
    } else if (command === 'underline') {
      setCurrentFormat(prev => ({ ...prev, underline: !prev.underline }));
    } else if (command === 'strikethrough') {
      setCurrentFormat(prev => ({ ...prev, strikethrough: !prev.strikethrough }));
    } else if (command === 'justifyLeft') {
      setCurrentFormat(prev => ({ ...prev, alignLeft: true, alignCenter: false, alignRight: false, alignJustify: false }));
    } else if (command === 'justifyCenter') {
      setCurrentFormat(prev => ({ ...prev, alignLeft: false, alignCenter: true, alignRight: false, alignJustify: false }));
    } else if (command === 'justifyRight') {
      setCurrentFormat(prev => ({ ...prev, alignLeft: false, alignCenter: false, alignRight: true, alignJustify: false }));
    } else if (command === 'justifyFull') {
      setCurrentFormat(prev => ({ ...prev, alignLeft: false, alignCenter: false, alignRight: false, alignJustify: true }));
    } else if (command === 'fontSize') {
      setCurrentFormat(prev => ({ ...prev, fontSize: value }));
    }
  }, []);

  return {
    currentFormat,
    formatText
  };
};
