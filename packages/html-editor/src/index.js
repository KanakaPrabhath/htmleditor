// Main library entry point
// Export all public components, hooks, and utilities

// === CONTEXT-BASED STATE MANAGEMENT (New!) ===
// Import DocumentProvider to wrap your app and use the editor
export { DocumentProvider, useDocument, useDocumentState, useDocumentActions } from './context/DocumentContext';

// === CORE EDITOR COMPONENT ===
// HtmlEditor - Must be wrapped in DocumentProvider
export { default as HtmlEditor } from './components/editor/HtmlEditor';

// === ERROR HANDLING ===
// ErrorBoundary - Wrap your components for error recovery
export { default as ErrorBoundary } from './components/ErrorBoundary';

// === STANDALONE COMPONENTS ===
// Individual Components (can be used separately with your own state)
export { default as EditorToolbar } from './components/editor/EditorToolbar';
export { default as Sidebar } from './components/editor/Sidebar';
export { default as PageView } from './components/editor/PageView';
export { default as ImageResizeHandlers } from './components/editor/ImageResizeHandlers';

// PageManager - COMPLETELY STANDALONE
// Use this in external apps with your own state management
export { default as PageManager } from './components/editor/PageManager';

// === CUSTOM HOOKS ===
// These hooks require DocumentProvider context
export { useFormatting, useContinuousReflow } from './hooks';

// === STORAGE UTILITIES ===
export { saveImage, getImage, deleteImage, clearImages, getAllImageKeys } from './lib/storage/index-db';

// === CONSTANTS ===
// Page dimensions at 96 DPI (Microsoft Word standard for screen display)
// Import from centralized page-sizes module
import { PAGE_SIZES } from './lib/editor/page-sizes';

export const PAGE_DIMENSIONS = {
  A4: { width: PAGE_SIZES.A4.width, height: PAGE_SIZES.A4.height },
  Letter: { width: PAGE_SIZES.Letter.width, height: PAGE_SIZES.Letter.height },
  Legal: { width: PAGE_SIZES.Legal.width, height: PAGE_SIZES.Legal.height }
};

// Also export the full PAGE_SIZES for advanced usage
export { PAGE_SIZES, getPageDimensions, isValidPageSize, getAvailablePageSizes, DEFAULT_PAGE_SIZE } from './lib/editor/page-sizes';

// === FONT SIZE UTILITIES ===
// Font size conversions and constants (96 DPI, matching Microsoft Word)
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

// === LOGGER UTILITY ===
export { default as logger } from './lib/editor/utils/logger';

// === IMAGE RESIZE UTILITIES ===
// Image resize utilities for custom implementations
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
