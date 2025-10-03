import React from 'react';

/**
 * PageManager Component
 * Displays page thumbnails and controls for navigating between pages
 * @param {Object} props
 * @param {Array} props.pages - Array of page objects in the document
 * @param {number} props.activePage - Index of the currently active page
 * @param {string} props.pageSize - Current page size setting
 * @param {Function} props.onNavigate - Callback when page selection changes
 * @param {Function} props.onAddPage - Callback to add a new page (paged mode only)
 * @param {Function} props.onDeletePage - Callback to delete a page (paged mode only)
 * @param {Function} props.onPageSizeChange - Callback to change page size
 * @param {boolean} props.continuousMode - Whether in continuous mode (hides add/delete buttons)
 */
export const PageManager = ({ 
  pages, 
  activePage, 
  pageSize,
  onNavigate, 
  onAddPage,
  onDeletePage,
  onPageSizeChange,
  continuousMode = false
}) => {
  return (
    <div className="page-manager">
      {/* Page Size Selector */}
      <div className="page-size-controls">
        <label htmlFor="page-size-selector">Page Size:</label>
        <select
          id="page-size-selector"
          role="combobox"
          aria-label="Page size selector"
          value={pageSize}
          onChange={(e) => onPageSizeChange(e.target.value)}
        >
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
        </select>
      </div>

      <div className="page-list">
        {pages.map((page, index) => (
          <div key={page.id} className="page-item">
            <button
              type="button"
              className={`page-button ${index === activePage ? 'active' : ''}`}
              onClick={() => onNavigate(index)}
              aria-label={`Go to page ${index + 1}`}
            >
              Page {index + 1}
            </button>
            {/* Show delete button for all pages when more than 1 page exists */}
            {!continuousMode && pages.length > 1 && (
              <button
                type="button"
                className="delete-page-button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeletePage(index);
                }}
                aria-label={`Delete page ${index + 1}`}
                title="Delete this page and its content"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
      {!continuousMode && (
        <button
          type="button"
          className="add-page-button"
          onClick={onAddPage}
          aria-label="Add new page"
        >
          + Add Page
        </button>
      )}
    </div>
  );
};

export default PageManager;