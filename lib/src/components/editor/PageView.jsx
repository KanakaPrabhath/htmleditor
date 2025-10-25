import { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_FONT_SIZE } from '../../lib/editor/font-sizes';
import { getMarginPixels, DEFAULT_MARGIN_PRESET } from '../../lib/editor/margin-utils';
import { handlePaste as processPasteEvent } from '../../lib/editor/paste-utils';
import { handleTabIndentation } from '../../lib/editor/indentation-utils';

/**
 * Helper function to check if element is or contains a page-break
 */
const isPageBreakElement = (node) => {
  if (!node) return false;
  if (node.nodeType === Node.ELEMENT_NODE) {
    return node.tagName === 'PAGE-BREAK' || node.getAttribute('data-page-break') === 'true';
  }
  return node.parentElement && isPageBreakElement(node.parentElement);
};

/**
 * PageView - MS Word-like continuous contenteditable surface
 * Single contenteditable div with manual page breaks using <page-break> tags
 * Content flows continuously with explicit page boundaries
 * Supports zoom scaling via CSS transform
 */
const PageView = ({ 
  dimensions, 
  editorRef,
  onInput,
  onContentChange,
  onKeyDown,
  onClick,
  onScroll,
  onPaste,
  onRemovePageBreak,
  zoomLevel = 100,
  pageMargins = DEFAULT_MARGIN_PRESET
}) => {
  // Memoize padding calculation
  const padding = useMemo(() => getMarginPixels(pageMargins), [pageMargins]);

  // Calculate zoom multiplier
  const zoomMultiplier = zoomLevel / 100;

  // Helper function to check if cursor is in padding area
  const isInPaddingArea = useCallback((element, clientY) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    
    // Check if in top or bottom padding
    if (relativeY < padding.top || relativeY > (rect.height - padding.bottom)) {
      return true;
    }
    
    return false;
  }, [padding.top, padding.bottom]);

  // Handle page-break click logic
  const handlePageBreakClick = useCallback((clickedElement, event) => {
    event.preventDefault();
    
    // Check if click is in the remove button area (top-right corner)
    const rect = clickedElement.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    
    // Remove button is positioned at right: 20px, top: -12px
    // Button is 20px wide and 20px tall
    const removeButtonLeft = rect.width - 40; // 20px from right
    const removeButtonTop = -12;
    const removeButtonRight = rect.width - 20;
    const removeButtonBottom = 8; // -12px + 20px
    
    // Check if click is within the remove button area
    if (relativeX >= removeButtonLeft && 
        relativeX <= removeButtonRight && 
        relativeY >= removeButtonTop && 
        relativeY <= removeButtonBottom) {
      // Click is on remove button
      if (onRemovePageBreak) {
        onRemovePageBreak(clickedElement);
      }
    }
  }, [onRemovePageBreak]);

  // Handle padding click logic
  const handlePaddingClick = useCallback((event) => {
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
  }, [editorRef, padding.top]);

  // Prevent deletion of page-break elements and handle Tab key
  const handleKeyDown = useCallback((event) => {
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

    // Handle Tab key for indentation (multi-line or single line)
    if (handleTabIndentation(event)) {
      // Update content after indentation
      if (onContentChange) {
        onContentChange();
      }
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
  }, [onKeyDown, onContentChange]);

  // Handle click events to prevent cursor placement in padding areas
  const handleClick = useCallback((event) => {
    if (!editorRef.current) return;

    const clickedElement = event.target;
    
    // Check if click is on a page-break element
    if (isPageBreakElement(clickedElement)) {
      handlePageBreakClick(clickedElement, event);
      return;
    }

    // Check if click is in padding area
    if (isInPaddingArea(editorRef.current, event.clientY)) {
      handlePaddingClick(event);
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }, [editorRef, onClick, handlePageBreakClick, handlePaddingClick, isInPaddingArea]);

  // Prevent input in padding areas and on page breaks
  const handleBeforeInput = useCallback((event) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const { startContainer } = range;

    // Prevent input on page-break elements
    if (isPageBreakElement(startContainer)) {
      event.preventDefault();
      return false;
    }
  }, []);

  // Handle paste events with custom processing
  const handlePaste = useCallback((event) => {
    // Use the custom paste handler from utils
    const processedContent = processPasteEvent(event);
    
    // Call parent onPaste callback if provided
    if (onPaste) {
      onPaste(event, processedContent);
    }
  }, [onPaste]);

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
          lineHeight: '1.4',
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
        onPaste={handlePaste}
        data-testid="continuous-editor"
      >
        {/* Content is set via innerHTML in parent component */}
      </div>
    </div>
  );
};

PageView.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  editorRef: PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object)
  }).isRequired,
  onInput: PropTypes.func.isRequired,
  onContentChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
  onScroll: PropTypes.func,
  onPaste: PropTypes.func,
  onRemovePageBreak: PropTypes.func,
  zoomLevel: PropTypes.number,
  pageMargins: PropTypes.string
};

PageView.defaultProps = {
  onContentChange: undefined,
  onKeyDown: undefined,
  onClick: undefined,
  onScroll: undefined,
  onPaste: undefined,
  onRemovePageBreak: undefined,
  zoomLevel: 100,
  pageMargins: DEFAULT_MARGIN_PRESET
};

export default memo(PageView);
