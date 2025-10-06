import React from 'react';
import PropTypes from 'prop-types';
import { FileText, Plus, X, Settings, ZoomIn, ZoomOut } from 'lucide-react';
import { MARGIN_PRESETS, getMarginPresetNames, getMarginPresetLabel, DEFAULT_MARGIN_PRESET } from '../../lib/editor/margin-utils';

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
 * @param {string} props.pageMargins - Current page margin preset ('NORMAL', 'NARROW', etc.)
 * @param {number} props.zoomLevel - Current zoom level (50-200)
 * @param {boolean} props.canZoomIn - Whether zoom in is allowed
 * @param {boolean} props.canZoomOut - Whether zoom out is allowed
 * @param {Function} props.onNavigate - Callback when page changes (pageIndex)
 * @param {Function} props.onAddPage - Callback when page is added
 * @param {Function} props.onDeletePage - Callback when page is deleted (pageIndex)
 * @param {Function} props.onPageSizeChange - Callback when page size changes (newSize)
 * @param {Function} props.onPageMarginsChange - Callback when page margins change (newMargins)
 * @param {Function} props.onZoomIn - Callback when zoom in is clicked
 * @param {Function} props.onZoomOut - Callback when zoom out is clicked
 * @param {Function} props.onZoomReset - Callback when zoom reset is clicked
 */
export const PageManager = ({ 
  pageBoundaries = [{ id: 'page-0', pageNumber: 1 }],
  activePage = 0,
  pageSize = 'A4',
  pageMargins = DEFAULT_MARGIN_PRESET,
  zoomLevel = 100,
  canZoomIn = true,
  canZoomOut = true,
  onNavigate, 
  onAddPage,
  onDeletePage,
  onPageSizeChange,
  onPageMarginsChange,
  onZoomIn,
  onZoomOut,
  onZoomReset
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

  const handlePageMarginsChange = (newMargins) => {
    // Delegate to parent callback
    if (onPageMarginsChange) {
      onPageMarginsChange(newMargins);
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

      {/* Page Margins Selector */}
      <div className="page-margins-controls">
        <label htmlFor="page-margins-selector">
          <Settings size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          Margins:
        </label>
        <select
          id="page-margins-selector"
          role="combobox"
          aria-label="Page margins selector"
          value={pageMargins}
          onChange={(e) => handlePageMarginsChange(e.target.value)}
        >
          {getMarginPresetNames().map((presetName) => (
            <option key={presetName} value={presetName}>
              {getMarginPresetLabel(presetName)}
            </option>
          ))}
        </select>
      </div>

      {/* Zoom Controls */}
      <div className="zoom-controls">
        <button
          type="button"
          className="zoom-button"
          onClick={onZoomOut}
          disabled={!canZoomOut}
          aria-label="Zoom out"
          title="Zoom out (Ctrl + -)"
        >
          <ZoomOut size={14} />
        </button>
        <button
          type="button"
          className="zoom-reset-button"
          onClick={onZoomReset}
          aria-label="Reset zoom"
          title="Reset zoom to 100% (Ctrl + 0)"
        >
          {zoomLevel}%
        </button>
        <button
          type="button"
          className="zoom-button"
          onClick={onZoomIn}
          disabled={!canZoomIn}
          aria-label="Zoom in"
          title="Zoom in (Ctrl + +)"
        >
          <ZoomIn size={14} />
        </button>
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

PageManager.propTypes = {
  pageBoundaries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pageNumber: PropTypes.number.isRequired,
      top: PropTypes.number,
      height: PropTypes.number
    })
  ),
  activePage: PropTypes.number,
  pageSize: PropTypes.oneOf(['A4', 'Letter', 'Legal']),
  pageMargins: PropTypes.string,
  zoomLevel: PropTypes.number,
  canZoomIn: PropTypes.bool,
  canZoomOut: PropTypes.bool,
  onNavigate: PropTypes.func,
  onAddPage: PropTypes.func,
  onDeletePage: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onPageMarginsChange: PropTypes.func,
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func,
  onZoomReset: PropTypes.func
};

PageManager.defaultProps = {
  pageBoundaries: [{ id: 'page-0', pageNumber: 1 }],
  activePage: 0,
  pageSize: 'A4',
  pageMargins: DEFAULT_MARGIN_PRESET,
  zoomLevel: 100,
  canZoomIn: true,
  canZoomOut: true,
  onNavigate: undefined,
  onAddPage: undefined,
  onDeletePage: undefined,
  onPageSizeChange: undefined,
  onPageMarginsChange: undefined,
  onZoomIn: undefined,
  onZoomOut: undefined,
  onZoomReset: undefined
};

export default React.memo(PageManager);