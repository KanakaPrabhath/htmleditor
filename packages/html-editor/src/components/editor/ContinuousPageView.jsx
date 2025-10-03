import React from 'react';

/**
 * ContinuousPageView - MS Word-like continuous contenteditable surface
 * Single contenteditable div with manual page breaks using <page-break> tags
 * Content flows continuously with explicit page boundaries
 */
const ContinuousPageView = ({ 
  content, 
  dimensions, 
  pageSize,
  pageBoundaries = [],
  editorRef,
  onInput,
  onKeyDown,
  onClick,
  onScroll
}) => {
  const padding = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  };

  // Prevent deletion of page-break elements and handle Tab key
  const handleKeyDown = (event) => {
    // Handle Tab key to insert tab character
    if (event.key === 'Tab') {
      event.preventDefault();
      document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
      return false;
    }

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const { startContainer, endContainer } = range;

    // Check if we're trying to delete a page-break
    const checkNode = (node) => {
      if (!node) return false;
      if (node.nodeType === Node.ELEMENT_NODE) {
        return node.tagName === 'PAGE-BREAK' || node.getAttribute('data-page-break') === 'true';
      }
      return node.parentElement && checkNode(node.parentElement);
    };

    if (event.key === 'Backspace' || event.key === 'Delete') {
      if (checkNode(startContainer) || checkNode(endContainer)) {
        event.preventDefault();
        return false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <div 
      className="continuous-page-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: `${dimensions.width}px`,
        margin: '40px auto',
        backgroundColor: 'transparent',
        minHeight: '100vh'
      }}
    >
      {/* Continuous contenteditable surface with page styling */}
      <div
        ref={editorRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="continuous-content"
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: `${dimensions.height}px`,
          backgroundColor: 'white',
          padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          outline: 'none',
          cursor: 'text',
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
          lineHeight: '1.15',
          color: '#333',
          wordWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'break-word',
          border: '1px solid #e0e0e0'
        }}
        onInput={onInput}
        onKeyDown={handleKeyDown}
        onClick={onClick}
        onScroll={onScroll}
        data-testid="continuous-editor"
      >
        {/* Content is set via innerHTML in parent component */}
      </div>
    </div>
  );
};

export default ContinuousPageView;
