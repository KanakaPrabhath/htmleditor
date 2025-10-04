import React from 'react';
import { FileText, Plus, X, Settings } from 'lucide-react';

/**
 * PageManager Component - Standalone Component
 * 
 * COMPLETELY INDEPENDENT - can be used with or without the editor
 * Accepts all state as props, uses callbacks for all actions
 * Perfect for external apps that want to provide their own PageManager UI
 * 
 * @param {Object} props - Component props
 * @param {Array} props.pageBoundaries - Array of page boundary objects [{id, pageNumber, top, height}, ...]
 * @param {number} props.activePage - Current active page index (0-based)
 * @param {string} props.pageSize - Current page size ('A4', 'Letter', or 'Legal')
 * @param {Function} props.onNavigate - Callback when page changes (pageIndex)
 * @param {Function} props.onAddPage - Callback when page is added
 * @param {Function} props.onDeletePage - Callback when page is deleted (pageIndex)
 * @param {Function} props.onPageSizeChange - Callback when page size changes (newSize)
 */
export const PageManager = ({ 
  pageBoundaries = [{ id: 'page-0', pageNumber: 1 }],
  activePage = 0,
  pageSize = 'A4',
  onNavigate, 
  onAddPage,
  onDeletePage,
  onPageSizeChange
} = {}) => {
  // Ensure we always have at least one page
  const totalPages = Math.max(pageBoundaries?.length || 0, 1);

  const handleNavigate = (pageIndex) => {
    // Delegate to parent callback
    if (onNavigate) {
      onNavigate(pageIndex);
    }
  };

  const handleAddPage = () => {
    // Delegate to parent callback
    if (onAddPage) {
      onAddPage();
    }
  };

  const handleDeletePage = (pageIndex) => {
    if (totalPages <= 1) {
      console.warn('[PageManager] Cannot delete the only page');
      return;
    }
    
    // Delegate to parent callback
    if (onDeletePage) {
      onDeletePage(pageIndex);
    }
  };

  const handlePageSizeChange = (newSize) => {
    // Delegate to parent callback
    if (onPageSizeChange) {
      onPageSizeChange(newSize);
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

      {/* Page List */}
      <div className="page-list">
        {(pageBoundaries && pageBoundaries.length > 0 ? pageBoundaries : [{ id: 'page-0', pageNumber: 1 }]).map((boundary, index) => (
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