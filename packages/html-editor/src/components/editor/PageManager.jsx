import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileText, Plus, X, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  setActivePage, 
  addPageBreak, 
  removePageBreak, 
  updatePageSize 
} from '../../store/slices/documentSlice';

/**
 * PageManager Component
 * Redux-connected component for managing document pages
 * Displays page thumbnails, navigation controls, and page settings
 * 
 * @param {Object} props - Optional callbacks for external integrations
 * @param {Function} props.onNavigate - Optional callback when page changes (pageIndex)
 * @param {Function} props.onAddPage - Optional callback when page is added
 * @param {Function} props.onDeletePage - Optional callback when page is deleted (pageIndex)
 * @param {Function} props.onPageSizeChange - Optional callback when page size changes (newSize)
 * @param {Object} props.scrollContainerRef - Ref to the scroll container for navigation
 */
export const PageManager = ({ 
  onNavigate, 
  onAddPage,
  onDeletePage,
  onPageSizeChange,
  scrollContainerRef
} = {}) => {
  const dispatch = useDispatch();
  const { pageBoundaries, activePage, pageSize } = useSelector((state) => state.document);
  const navigationTimeoutRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  // Construct pages array from pageBoundaries for display
  const pages = pageBoundaries.map((boundary, index) => ({
    id: boundary.id || `page-${index}`,
    index,
    size: pageSize
  }));

  const totalPages = pages.length || 1;

  /**
   * Scroll to a specific page in the editor and position cursor
   */
  const scrollToPageInEditor = (pageIndex, boundary) => {
    if (!scrollContainerRef?.current) {
      return;
    }

    const container = scrollContainerRef.current;
    
    // Scroll to the page with smooth behavior
    container.scrollTo({
      top: boundary.top - 40, // Offset for better visibility
      behavior: 'smooth'
    });

    // Position cursor at the start of the page after scrolling
    setTimeout(() => {
      positionCursorAtPage(pageIndex);
    }, 400); // Wait for smooth scroll to complete
  };

  /**
   * Position cursor at the start of a specific page
   */
  const positionCursorAtPage = (pageIndex) => {
    // Find the contenteditable element
    const editorElement = scrollContainerRef?.current?.querySelector('[contenteditable="true"]');
    if (!editorElement) {
      return;
    }

    editorElement.focus();

    try {
      let targetNode = null;
      let targetOffset = 0;

      if (pageIndex === 0) {
        // First page - position at start
        targetNode = editorElement.firstChild;
        targetOffset = 0;
      } else {
        // Find the page break element for this page
        const pageBreaks = editorElement.querySelectorAll('page-break, [data-page-break="true"]');
        const breakElement = pageBreaks[pageIndex - 1];
        
        if (breakElement && breakElement.nextSibling) {
          targetNode = breakElement.nextSibling;
          targetOffset = 0;
        }
      }

      if (targetNode) {
        const range = document.createRange();
        const selection = window.getSelection();
        
        // If target is a text node, use it directly
        if (targetNode.nodeType === Node.TEXT_NODE) {
          range.setStart(targetNode, targetOffset);
        } else if (targetNode.firstChild) {
          // If it's an element, try to position at its first child
          range.setStart(targetNode.firstChild, 0);
        } else {
          // Otherwise position at the element itself
          range.setStart(targetNode, 0);
        }
        
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } catch (error) {
      console.warn('[positionCursorAtPage] Failed to position cursor:', error);
      // Fallback: just focus the editor
      editorElement.focus();
    }
  };

  const handleNavigate = (pageIndex) => {
    // Update Redux state immediately
    dispatch(setActivePage(pageIndex));
    
    // Scroll to the page if we have the container ref
    if (scrollContainerRef?.current && pageBoundaries[pageIndex]) {
      // Clear any pending navigation
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      
      // Immediate scroll and cursor positioning
      navigationTimeoutRef.current = setTimeout(() => {
        scrollToPageInEditor(pageIndex, pageBoundaries[pageIndex]);
      }, 50);
    }
    
    // Call parent callback if provided
    if (onNavigate) {
      onNavigate(pageIndex);
    }
  };

  const handleAddPage = () => {
    dispatch(addPageBreak({ position: 'end' }));
    if (onAddPage) {
      onAddPage();
    }
  };

  const handleDeletePage = (pageIndex) => {
    if (totalPages <= 1) {
      console.warn('Cannot delete the only page');
      return;
    }
    
    dispatch(removePageBreak({ pageIndex }));
    if (onDeletePage) {
      onDeletePage(pageIndex);
    }
  };

  const handlePageSizeChange = (newSize) => {
    dispatch(updatePageSize(newSize));
    if (onPageSizeChange) {
      onPageSizeChange(newSize);
    }
  };

  const handlePreviousPage = () => {
    if (activePage > 0) {
      handleNavigate(activePage - 1);
    }
  };

  const handleNextPage = () => {
    if (activePage < totalPages - 1) {
      handleNavigate(activePage + 1);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle keyboard navigation if PageManager is visible and focused
      if (!e.target.closest('.page-manager')) return;
      
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          handlePreviousPage();
        } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          handleNextPage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage, totalPages]);

  return (
    <div className="page-manager">
      {/* Page Size Selector */}
      <div className="page-size-controls">
        <label htmlFor="page-size-selector">
          <Settings size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          Page Size:
        </label>
        <select
          id="page-size-selector"
          role="combobox"
          aria-label="Page size selector"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(e.target.value)}
        >
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
        </select>
      </div>

      {/* Page Counter and Navigation */}
      <div className="page-navigation-controls">
        <button
          type="button"
          className="nav-button"
          onClick={handlePreviousPage}
          disabled={activePage === 0}
          aria-label="Previous page"
          title="Previous page (Ctrl+↑)"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="page-counter" aria-live="polite">
          Page {activePage + 1} of {totalPages}
        </span>
        <button
          type="button"
          className="nav-button"
          onClick={handleNextPage}
          disabled={activePage >= totalPages - 1}
          aria-label="Next page"
          title="Next page (Ctrl+↓)"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Page List */}
      <div className="page-list">
        {pages.map((page, index) => (
          <div key={page.id} className="page-item">
            <button
              type="button"
              className={`page-button ${index === activePage ? 'active' : ''}`}
              onClick={() => handleNavigate(index)}
              aria-label={`Go to page ${index + 1}`}
              aria-current={index === activePage ? 'page' : undefined}
            >
              <FileText size={14} />
              <span>Page {index + 1}</span>
            </button>
            {/* Show delete button for all pages when more than 1 page exists */}
            {totalPages > 1 && (
              <button
                type="button"
                className="delete-page-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeletePage(index);
                }}
                aria-label={`Delete page ${index + 1}`}
                title="Delete this page and its content"
              >
                <X size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
      
      {/* Add Page Button */}
      <button
        type="button"
        className="add-page-button"
        onClick={handleAddPage}
        aria-label="Add new page"
        title="Add new page at end"
      >
        <Plus size={16} />
        <span>Add Page</span>
      </button>
    </div>
  );
};

export default PageManager;