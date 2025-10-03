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
    fontSize: '16px'
  });

  /**
   * Format text using document.execCommand
   */
  const formatText = useCallback((command, value = null) => {
    document.execCommand(command, false, value);
    
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
    }
  }, []);

  return {
    currentFormat,
    formatText
  };
};
