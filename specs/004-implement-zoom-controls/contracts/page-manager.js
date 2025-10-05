// PageManager Component Contract
// Defines the interface for the PageManager component with zoom controls

/**
 * @typedef {Object} PageManagerProps
 * @property {number} currentPage
 * @property {number} totalPages
 * @property {string} pageSize
 * @property {function(string): void} onPageSizeChange
 * @property {function(number): void} onPageChange
 * @property {function(): void} onAddPage
 * @property {function(): void} onDeletePage
 * @property {number} zoomLevel - New zoom props
 * @property {function(): void} onZoomIn - New zoom props
 * @property {function(): void} onZoomOut - New zoom props
 * @property {function(): void} onZoomReset - New zoom props
 * @property {boolean} canZoomIn - New zoom props
 * @property {boolean} canZoomOut - New zoom props
 */

/**
 * @typedef {function(PageManagerProps): JSX.Element} PageManagerComponent
 */