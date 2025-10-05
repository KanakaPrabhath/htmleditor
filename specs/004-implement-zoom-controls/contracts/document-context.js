// DocumentContext Contract
// Defines the actions and state for document management including zoom

/**
 * @typedef {Object} DocumentState
 * @property {string} id
 * @property {string} title
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {Page[]} pages
 * @property {number} activePage
 * @property {string} pageSize
 * @property {string} editorMode
 * @property {string} continuousContent
 * @property {PageBoundary[]} pageBoundaries
 * @property {number} zoomLevel - New zoom state
 */

/**
 * @typedef {Object} DocumentActions
 * @property {function(string): void} updateContinuousContent
 * @property {function(PageBoundary[]): void} updatePageBoundaries
 * @property {function(number): void} setZoomLevel - New zoom action
 * @property {function(): void} zoomIn - New zoom action
 * @property {function(): void} zoomOut - New zoom action
 * @property {function(): void} resetZoom - New zoom action
 */

/**
 * @typedef {Object} DocumentContextType
 * @property {DocumentState} state
 * @property {DocumentActions} actions
 */