import { useEffect } from 'react';

/**
 * Custom hook for handling keyboard shortcuts in the HTML editor
 * @param {Object} handlers - Object containing handler functions
 * @param {Function} handlers.handleZoomIn - Zoom in handler
 * @param {Function} handlers.handleZoomOut - Zoom out handler
 * @param {Function} handlers.handleZoomReset - Zoom reset handler
 * @param {Function} handlers.handleUndo - Undo handler
 * @param {Function} handlers.handleRedo - Redo handler
 * @param {Object} refs - Object containing refs
 * @param {React.RefObject} refs.editorRef - Editor ref
 * @param {React.RefObject} refs.containerRef - Container ref
 */
export const useKeyboardShortcuts = (handlers, refs) => {
  const { handleZoomIn, handleZoomOut, handleZoomReset, handleUndo, handleRedo } = handlers;
  const { editorRef, containerRef } = refs;

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl key (or Cmd on Mac) is pressed
      if (event.ctrlKey || event.metaKey) {
        // Prevent default browser behavior for our shortcuts
        if (['+', '=', '-', '_', '0', 'z', 'y'].includes(event.key)) {
          event.preventDefault();
        }

        // Only handle shortcuts when editor or its container has focus
        // or when no specific input elements are focused
        const isEditorFocused = document.activeElement === editorRef.current;
        const isContainerFocused = document.activeElement === containerRef.current;
        const isInputFocused = document.activeElement?.tagName === 'INPUT' ||
                               document.activeElement?.tagName === 'TEXTAREA' ||
                               document.activeElement?.isContentEditable === false;

        if (isEditorFocused || isContainerFocused || !isInputFocused) {
          switch (event.key) {
            case '+':
            case '=':
              handleZoomIn();
              break;
            case '-':
            case '_':
              handleZoomOut();
              break;
            case '0':
              handleZoomReset();
              break;
            case 'z':
              if (!event.shiftKey) {
                handleUndo();
              }
              break;
            case 'y':
              handleRedo();
              break;
            default:
              break;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleZoomIn, handleZoomOut, handleZoomReset, handleUndo, handleRedo, editorRef, containerRef]);
};