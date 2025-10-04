import React from 'react';
import { useSelector } from 'react-redux';
import { FileText, Plus, X, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * PageManager Component - Simplified
 * Redux-connected component for managing document pages
 * Displays page navigation controls and page settings
 * 
 * All navigation logic is delegated to the parent via callbacks
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onNavigate - Callback when page changes (pageIndex)
 * @param {Function} props.onAddPage - Callback when page is added
 * @param {Function} props.onDeletePage - Callback when page is deleted (pageIndex)
 * @param {Function} props.onPageSizeChange - Callback when page size changes (newSize)
 */
export const PageManager = ({ 
  onNavigate, 
  onAddPage,
  onDeletePage,
  onPageSizeChange
} = {}) => {
  const { pageBoundaries, activePage, pageSize } = useSelector((state) => state.document);

  // Simple page count from boundaries
  const totalPages = pageBoundaries.length || 1;

  const handleNavigate = (pageIndex) => {
    // Delegate to parent - parent handles Redux dispatch and scrolling
    if (onNavigate) {
      onNavigate(pageIndex);
    }
  };

  const handleAddPage = () => {
    // Delegate to parent - parent handles Redux dispatch
    if (onAddPage) {
      onAddPage();
    }
  };

  const handleDeletePage = (pageIndex) => {
    if (totalPages <= 1) {
      console.warn('[PageManager] Cannot delete the only page');
      return;
    }
    
    // Delegate to parent - parent handles Redux dispatch
    if (onDeletePage) {
      onDeletePage(pageIndex);
    }
  };

  const handlePageSizeChange = (newSize) => {
    // Delegate to parent - parent handles Redux dispatch
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
        {pageBoundaries.map((boundary, index) => (
          <div key={boundary.id || `page-${index}`} className="page-item">
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

export default React.memo(PageManager);