import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_FONT_SIZE } from '../../lib/editor/font-sizes';
import { getMarginPixels, DEFAULT_MARGIN_PRESET } from '../../lib/editor/margin-utils';

/**
 * PageView - MS Word-like continuous contenteditable surface
 * Single contenteditable div with manual page breaks using <page-break> tags
 * Content flows continuously with explicit page boundaries
 * Supports zoom scaling via CSS transform
 */
const PageView = ({ 
  content, 
  dimensions, 
  pageSize,
  pageBoundaries = [],
  editorRef,
  onInput,
  onKeyDown,
  onClick,
  onScroll,
  zoomLevel = 100,
  pageMargins = DEFAULT_MARGIN_PRESET
}) => {
  // Convert margin preset to pixel values
  const padding = getMarginPixels(pageMargins);

  // Calculate zoom multiplier
  const zoomMultiplier = zoomLevel / 100;

  // Helper function to check if cursor is in padding area
  const isInPaddingArea = (element, clientY) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    
    // Check if in top or bottom padding
    if (relativeY < padding.top || relativeY > (rect.height - padding.bottom)) {
      return true;
    }
    
    return false;
  };

  // Helper function to check if element is or contains a page-break
  const isPageBreakElement = (node) => {
    if (!node) return false;
    if (node.nodeType === Node.ELEMENT_NODE) {
      return node.tagName === 'PAGE-BREAK' || node.getAttribute('data-page-break') === 'true';
    }
    return node.parentElement && isPageBreakElement(node.parentElement);
  };

  // Prevent deletion of page-break elements and handle Tab key
  const handleKeyDown = (event) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const { startContainer, endContainer } = range;

    // Prevent typing on page-break elements
    if (isPageBreakElement(startContainer) || isPageBreakElement(endContainer)) {
      if (event.key.length === 1 || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        return false;
      }
    }

    // Handle Tab key to insert tab character
    if (event.key === 'Tab') {
      event.preventDefault();
      document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
      return false;
    }

    // Prevent deletion of page-break elements
    if (event.key === 'Backspace' || event.key === 'Delete') {
      if (isPageBreakElement(startContainer) || isPageBreakElement(endContainer)) {
        event.preventDefault();
        return false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  // Handle click events to prevent cursor placement in padding areas
  const handleClick = (event) => {
    if (!editorRef.current) return;

    const clickedElement = event.target;
    
    // Prevent clicking on page-break elements
    if (isPageBreakElement(clickedElement)) {
      event.preventDefault();
      return;
    }

    // Check if click is in padding area
    if (isInPaddingArea(editorRef.current, event.clientY)) {
      event.preventDefault();
      
      // Move cursor to the nearest valid content area
      const rect = editorRef.current.getBoundingClientRect();
      const relativeY = event.clientY - rect.top;
      
      if (relativeY < padding.top) {
        // Click was in top padding - move to first content element
        const firstChild = editorRef.current.firstElementChild;
        if (firstChild && firstChild.tagName !== 'PAGE-BREAK') {
          const range = document.createRange();
          const sel = window.getSelection();
          range.setStart(firstChild, 0);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      } else {
        // Click was in bottom padding - move to last content element
        const lastChild = editorRef.current.lastElementChild;
        if (lastChild && lastChild.tagName !== 'PAGE-BREAK') {
          const range = document.createRange();
          const sel = window.getSelection();
          range.selectNodeContents(lastChild);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  // Prevent input in padding areas and on page breaks
  const handleBeforeInput = (event) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const { startContainer } = range;

    // Prevent input on page-break elements
    if (isPageBreakElement(startContainer)) {
      event.preventDefault();
      return false;
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
        minHeight: '100vh',
        transform: `scale(${zoomMultiplier})`,
        transformOrigin: 'top center',
        transition: 'transform 0.2s ease-out'
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
          width: `${dimensions.width}px`,
          backgroundColor: 'white',
          padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
          boxSizing: 'border-box',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          outline: 'none',
          cursor: 'text',
          fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
          fontSize: DEFAULT_FONT_SIZE,
          lineHeight: '1.3',
          color: '#333',
          wordWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'break-word',
          border: '1px solid #e0e0e0'
        }}
        onInput={onInput}
        onKeyDown={handleKeyDown}
        onBeforeInput={handleBeforeInput}
        onClick={handleClick}
        onScroll={onScroll}
        data-testid="continuous-editor"
      >
        {/* Content is set via innerHTML in parent component */}
      </div>
    </div>
  );
};

PageView.propTypes = {
  content: PropTypes.string.isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  pageSize: PropTypes.oneOf(['A4', 'Letter', 'Legal']).isRequired,
  pageBoundaries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pageNumber: PropTypes.number.isRequired,
      top: PropTypes.number,
      height: PropTypes.number
    })
  ),
  editorRef: PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object)
  }).isRequired,
  onInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
  onScroll: PropTypes.func,
  zoomLevel: PropTypes.number,
  pageMargins: PropTypes.string
};

PageView.defaultProps = {
  pageBoundaries: [],
  onKeyDown: undefined,
  onClick: undefined,
  onScroll: undefined,
  zoomLevel: 100,
  pageMargins: DEFAULT_MARGIN_PRESET
};

export default PageView;
