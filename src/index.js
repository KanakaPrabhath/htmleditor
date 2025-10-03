// Main library entry point
// Export all public components, hooks, and utilities

// Core Editor Component (without PageManager)
export { default as ContentEditableEditor } from './components/editor/ContentEditableEditor';

// Individual Components (can be used separately)
export { default as EditorToolbar } from './components/editor/EditorToolbar';
export { default as Sidebar } from './components/editor/Sidebar';
export { default as ContinuousPageView } from './components/editor/ContinuousPageView';

// PageManager is exported separately so parent apps can customize or replace it
export { default as PageManager } from './components/editor/PageManager';

// Custom Hooks
export { useFormatting, useContinuousReflow } from './hooks';

// Redux Store and Slice
export { default as documentReducer } from './store/slices/documentSlice';
export {
  initializeDocument,
  updateTitle,
  updatePageContent,
  updatePages,
  addPage,
  deletePage,
  setActivePage,
  updatePageSize,
  resetDocument,
  updateContinuousContent,
  updatePageBoundaries,
  addPageBreak,
  removePageBreak,
  setEditorMode
} from './store/slices/documentSlice';

// Storage utilities
export { saveImage, getImage, deleteImage, clearImages, getAllImageKeys } from './lib/storage/local-storage';

// Constants
export const PAGE_DIMENSIONS = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};

// Logger utility
export { default as logger } from './lib/editor/utils/logger';
