import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook for handling selection changes and cursor position management
 * @param {Object} params
 * @param {Function} params.updateCurrentFormatFromSelection - Function to update format from selection
 * @param {React.RefObject} params.editorRef - Editor ref
 * @returns {Object} - Returns cursor management functions
 */
export const useSelectionHandling = ({ updateCurrentFormatFromSelection, editorRef }) => {
  const lastCursorPositionRef = useRef(null);

  // Helper to restore cursor position or position at editor end
  const restoreCursorPosition = useCallback(() => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (lastCursorPositionRef.current) {
      try {
        selection.removeAllRanges();
        selection.addRange(lastCursorPositionRef.current);
        return;
      } catch (error) {
        console.warn('[restoreCursorPosition] Failed to restore cursor:', error);
      }
    }

    // Fallback: position at end of editor
    const lastChild = editorRef.current.lastChild;
    if (lastChild) {
      const range = document.createRange();
      if (lastChild.nodeType === Node.TEXT_NODE) {
        range.setStart(lastChild, lastChild.textContent.length);
      } else {
        range.setStartAfter(lastChild);
      }
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [editorRef]);

  // Helper to check if there's an active selection in the editor
  const hasActiveCursorSelection = useCallback(() => {
    if (!editorRef.current) return false;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return false;

    const activeRange = selection.getRangeAt(0);
    return editorRef.current.contains(activeRange.commonAncestorContainer);
  }, [editorRef]);

  // Update format state when selection changes
  useEffect(() => {
    const handleSelectionChange = () => {
      updateCurrentFormatFromSelection();

      // Update last cursor position (only for caret/collapsed selections)
      if (editorRef.current) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          if (range.collapsed && editorRef.current.contains(range.commonAncestorContainer)) {
            lastCursorPositionRef.current = range.cloneRange(); // Clone to store
          }
        }
      }
    };

    // Listen for selection changes
    document.addEventListener('selectionchange', handleSelectionChange);

    // Also update when editor gets focus
    const handleFocus = () => {
      setTimeout(updateCurrentFormatFromSelection, 10);

      // Restore cursor to last position if available
      if (lastCursorPositionRef.current && editorRef.current) {
        try {
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(lastCursorPositionRef.current);
        } catch (error) {
          console.warn('[handleFocus] Failed to restore cursor:', error);
        }
      }
    };

    if (editorRef.current) {
      editorRef.current.addEventListener('focus', handleFocus);
    }

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      if (editorRef.current) {
        editorRef.current.removeEventListener('focus', handleFocus);
      }
    };
  }, [updateCurrentFormatFromSelection, editorRef]);

  return {
    restoreCursorPosition,
    hasActiveCursorSelection
  };
};