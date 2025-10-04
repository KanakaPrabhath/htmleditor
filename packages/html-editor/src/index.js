// Main library entry point
// Export all public components, hooks, and utilities

// === CONTEXT-BASED STATE MANAGEMENT (New!) ===
// Import DocumentProvider to wrap your app and use the editor
export { DocumentProvider, useDocument, useDocumentState, useDocumentActions } from './context/DocumentContext';

// === CORE EDITOR COMPONENT ===
// ContentEditableEditor - Must be wrapped in DocumentProvider
export { default as ContentEditableEditor } from './components/editor/ContentEditableEditor';

// === STANDALONE COMPONENTS ===
// Individual Components (can be used separately with your own state)
export { default as EditorToolbar } from './components/editor/EditorToolbar';
export { default as Sidebar } from './components/editor/Sidebar';
export { default as ContinuousPageView } from './components/editor/ContinuousPageView';

// PageManager - COMPLETELY STANDALONE
// Use this in external apps with your own state management
export { default as PageManager } from './components/editor/PageManager';

// PageManagerConnected - Context-connected wrapper
// Use this if you're using DocumentProvider
export { default as PageManagerConnected } from './components/editor/PageManagerConnected';

// === CUSTOM HOOKS ===
// These hooks require DocumentProvider context
export { useFormatting, useContinuousReflow } from './hooks';

// === LEGACY REDUX SUPPORT (Deprecated) ===
// Keep for backward compatibility - will be removed in v2.0
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
  setEditorMode,
  insertPageAt,
  movePageTo,
  duplicatePage
} from './store/slices/documentSlice';

// === STORAGE UTILITIES ===
export { saveImage, getImage, deleteImage, clearImages, getAllImageKeys } from './lib/storage/local-storage';

// === CONSTANTS ===
export const PAGE_DIMENSIONS = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};

// === LOGGER UTILITY ===
export { default as logger } from './lib/editor/utils/logger';
