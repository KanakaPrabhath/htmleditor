// Main library entry point
// Export all public components, hooks, and utilities

// === CONTEXT-BASED STATE MANAGEMENT ===
export { DocumentProvider, useDocument, useDocumentState, useDocumentActions } from './context/DocumentContext';

// === CORE EDITOR COMPONENT ===
export { default as HtmlEditor } from './components/editor/HtmlEditor';

// === ERROR HANDLING ===
export { default as ErrorBoundary } from './components/ErrorBoundary';

// === STANDALONE COMPONENTS ===
export { default as EditorToolbar } from './components/editor/EditorToolbar';
export { default as Sidebar } from './components/editor/Sidebar';
export { default as PageView } from './components/editor/PageView';
export { default as ImageResizeHandlers } from './components/editor/ImageResizeHandlers';
export { default as TableResizeHandlers } from './components/editor/TableResizeHandlers';
export { default as PageManager } from './components/editor/PageManager';

// === CUSTOM HOOKS ===
export { useFormatting, useContinuousReflow } from './hooks';

// === STORAGE UTILITIES ===
export { saveImage, getImage, deleteImage, clearImages, getAllImageKeys } from './lib/storage/index-db';

// === PAGE SIZE CONSTANTS ===
export { PAGE_SIZES, getPageDimensions, isValidPageSize, getAvailablePageSizes, DEFAULT_PAGE_SIZE } from './lib/editor/page-sizes';

// === FONT SIZE UTILITIES ===
export {
  FONT_SIZE_MAP,
  COMMON_FONT_SIZES,
  DEFAULT_FONT_SIZE,
  pointsToPixels,
  pixelsToPoints,
  getPixelValue,
  getPointValue,
  isValidFontSize
} from './lib/editor/font-sizes';

// === UTILITIES ===
export { default as logger } from './lib/editor/utils/logger';
export {
  DEFAULT_IMAGE_RESIZE_OPTIONS,
  RESIZE_HANDLERS,
  calculateResizeDimensions,
  isResizableImage,
  getImageDimensions,
  applyImageDimensions,
  createResizeOverlay,
  updateResizeOverlay,
  removeResizeOverlay
} from './lib/editor/image-resize-utils';
export {
  DEFAULT_TABLE_RESIZE_OPTIONS,
  TABLE_RESIZE_HANDLERS,
  calculateTableResizeDimensions,
  isResizableTable,
  getTableStructure,
  applyTableDimensions,
  createTableResizeOverlay,
  updateTableResizeOverlay,
  removeTableResizeOverlay
} from './lib/editor/table-resize-utils';
