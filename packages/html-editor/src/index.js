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

// PageManager - COMPLETELY STANDALONE
// Use this in external apps with your own state management
export { default as PageManager } from './components/editor/PageManager';

// === CUSTOM HOOKS ===
// These hooks require DocumentProvider context
export { useFormatting, useContinuousReflow } from './hooks';

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
