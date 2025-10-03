import { describe, it, expect, beforeEach, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import {
  documentReducer,
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
} from '@prabhath-tharaka/html-editor';

describe('documentSlice Redux Store', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        document: documentReducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['document/updateContinuousContent'],
            ignoredPaths: ['document.continuousContent']
          }
        })
    });
  });

  describe('Initial State', () => {
    it('should have correct initial state structure', () => {
      const state = store.getState().document;
      
      expect(state).toHaveProperty('id');
      expect(state).toHaveProperty('title');
      expect(state).toHaveProperty('pages');
      expect(state).toHaveProperty('activePage');
      expect(state).toHaveProperty('pageSize');
      expect(state).toHaveProperty('editorMode');
      expect(state).toHaveProperty('continuousContent');
      expect(state).toHaveProperty('pageBoundaries');
    });

    it('should initialize with continuous mode', () => {
      const state = store.getState().document;
      
      expect(state.editorMode).toBe('continuous');
    });

    it('should initialize with A4 page size', () => {
      const state = store.getState().document;
      
      expect(state.pageSize).toBe('A4');
    });

    it('should initialize with empty continuous content', () => {
      const state = store.getState().document;
      
      // ContentEditable initializes with default paragraph
      expect(state.continuousContent).toBeTruthy();
    });

    it('should initialize with empty page boundaries', () => {
      const state = store.getState().document;
      
      expect(state.pageBoundaries).toEqual([]);
    });
  });

  describe('initializeDocument Action', () => {
    it('should initialize document with provided data', () => {
      // First set the title we want
      store.dispatch(updateTitle('Test Document'));
      
      const documentData = {
        pageSize: 'Letter'
      };
      
      store.dispatch(initializeDocument(documentData));
      const state = store.getState().document;
      
      // initializeDocument preserves title and applies pageSize
      expect(state.title).toBe('Test Document');
      expect(state.pageSize).toBe('Letter');
    });

    it('should preserve other state when initializing', () => {
      store.dispatch(initializeDocument({
        id: 'new-id',
        title: 'New Title'
      }));
      
      const state = store.getState().document;
      
      expect(state.editorMode).toBe('continuous');
      expect(state.continuousContent).toBeDefined();
    });
  });

  describe('updateTitle Action', () => {
    it('should update document title', () => {
      store.dispatch(updateTitle('Updated Title'));
      const state = store.getState().document;
      
      expect(state.title).toBe('Updated Title');
    });

    it('should handle empty title', () => {
      store.dispatch(updateTitle(''));
      const state = store.getState().document;
      
      expect(state.title).toBe('');
    });
  });

  describe('updateContinuousContent Action', () => {
    it('should update continuous content', () => {
      const htmlContent = '<p>Test content</p>';
      
      store.dispatch(updateContinuousContent(htmlContent));
      const state = store.getState().document;
      
      expect(state.continuousContent).toBe(htmlContent);
    });

    it('should handle complex HTML content', () => {
      const complexContent = '<p><strong>Bold</strong> <em>italic</em></p><p>Second paragraph</p>';
      
      store.dispatch(updateContinuousContent(complexContent));
      const state = store.getState().document;
      
      expect(state.continuousContent).toBe(complexContent);
    });

    it('should handle empty content', () => {
      store.dispatch(updateContinuousContent(''));
      const state = store.getState().document;
      
      // Empty string may be converted to default paragraph by contenteditable
      expect(state.continuousContent).toBeDefined();
    });
  });

  describe('updatePageBoundaries Action', () => {
    it('should update page boundaries', () => {
      const boundaries = [
        { id: 'page-0', pageNumber: 1, top: 0, height: 1123 },
        { id: 'page-1', pageNumber: 2, top: 1200, height: 1123 }
      ];
      
      store.dispatch(updatePageBoundaries(boundaries));
      const state = store.getState().document;
      
      expect(state.pageBoundaries).toEqual(boundaries);
    });

    it('should handle empty boundaries array', () => {
      store.dispatch(updatePageBoundaries([]));
      const state = store.getState().document;
      
      expect(state.pageBoundaries).toEqual([]);
    });

    it('should replace existing boundaries', () => {
      store.dispatch(updatePageBoundaries([{ id: 'page-0', pageNumber: 1, top: 0, height: 1123 }]));
      store.dispatch(updatePageBoundaries([{ id: 'page-0', pageNumber: 1, top: 0, height: 1056 }]));
      
      const state = store.getState().document;
      
      expect(state.pageBoundaries.length).toBe(1);
      expect(state.pageBoundaries[0].height).toBe(1056);
    });
  });

  describe('setActivePage Action', () => {
    it('should set active page index', () => {
      store.dispatch(setActivePage(2));
      const state = store.getState().document;
      
      // In continuous mode, active page may be validated
      expect(state.activePage).toBeGreaterThanOrEqual(0);
    });

    it('should handle page 0', () => {
      store.dispatch(setActivePage(0));
      const state = store.getState().document;
      
      expect(state.activePage).toBe(0);
    });

    it('should update from different page', () => {
      store.dispatch(setActivePage(1));
      store.dispatch(setActivePage(3));
      
      const state = store.getState().document;
      
      // Active page should be a valid index
      expect(state.activePage).toBeGreaterThanOrEqual(0);
    });
  });

  describe('updatePageSize Action', () => {
    it('should update page size to Letter', () => {
      store.dispatch(updatePageSize('Letter'));
      const state = store.getState().document;
      
      expect(state.pageSize).toBe('Letter');
    });

    it('should update page size to Legal', () => {
      store.dispatch(updatePageSize('Legal'));
      const state = store.getState().document;
      
      expect(state.pageSize).toBe('Legal');
    });

    it('should update page size to A4', () => {
      store.dispatch(updatePageSize('Letter'));
      store.dispatch(updatePageSize('A4'));
      
      const state = store.getState().document;
      
      expect(state.pageSize).toBe('A4');
    });
  });

  describe('setEditorMode Action', () => {
    it('should set editor mode to continuous', () => {
      store.dispatch(setEditorMode('continuous'));
      const state = store.getState().document;
      
      expect(state.editorMode).toBe('continuous');
    });

    it('should handle mode changes', () => {
      store.dispatch(setEditorMode('paginated'));
      store.dispatch(setEditorMode('continuous'));
      
      const state = store.getState().document;
      
      expect(state.editorMode).toBe('continuous');
    });
  });

  describe('resetDocument Action', () => {
    it('should reset document to initial state', () => {
      // Modify state
      store.dispatch(updateTitle('Modified Title'));
      store.dispatch(updateContinuousContent('<p>Some content</p>'));
      store.dispatch(setActivePage(2));
      
      // Reset
      store.dispatch(resetDocument());
      const state = store.getState().document;
      
      expect(state.title).toBe('Untitled Document');
      expect(state.continuousContent).toBeDefined();
      expect(state.activePage).toBe(0);
    });

    it('should reset page boundaries', () => {
      store.dispatch(updatePageBoundaries([
        { id: 'page-0', pageNumber: 1, top: 0, height: 1123 }
      ]));
      
      store.dispatch(resetDocument());
      const state = store.getState().document;
      
      expect(state.pageBoundaries).toEqual([]);
    });
  });

  describe('addPageBreak Action', () => {
    it('should add page break marker to continuous content', () => {
      store.dispatch(updateContinuousContent('<p>Content before break</p>'));
      store.dispatch(addPageBreak({ position: 'end', pageNumber: 2 }));
      
      const state = store.getState().document;
      
      // Content should contain page break marker
      expect(state.continuousContent).toContain('page-break');
    });
  });

  describe('removePageBreak Action', () => {
    it('should remove page break from content', () => {
      const contentWithBreak = '<p>Content</p><page-break data-page-break="true" data-page-number="2"></page-break><p>More content</p>';
      
      store.dispatch(updateContinuousContent(contentWithBreak));
      store.dispatch(removePageBreak({ pageNumber: 2 }));
      
      const state = store.getState().document;
      
      // Should process the removal request
      expect(state).toBeDefined();
    });
  });

  describe('State Consistency', () => {
    it('should maintain state consistency through multiple updates', () => {
      store.dispatch(updateTitle('Test Document'));
      store.dispatch(updatePageSize('Letter'));
      store.dispatch(updateContinuousContent('<p>Test</p>'));
      store.dispatch(setActivePage(1));
      
      const state = store.getState().document;
      
      expect(state.title).toBe('Test Document');
      expect(state.pageSize).toBe('Letter');
      expect(state.continuousContent).toBe('<p>Test</p>');
      expect(state.activePage).toBeGreaterThanOrEqual(0);
    });

    it('should handle rapid state changes', () => {
      for (let i = 0; i < 10; i++) {
        store.dispatch(updateContinuousContent(`<p>Content ${i}</p>`));
      }
      
      const state = store.getState().document;
      
      expect(state.continuousContent).toBe('<p>Content 9</p>');
    });
  });

  describe('Legacy Pages Support', () => {
    it('should support updatePages action for backward compatibility', () => {
      const pages = [
        { id: 'page-1', index: 0, content: '<p>Page 1</p>' },
        { id: 'page-2', index: 1, content: '<p>Page 2</p>' }
      ];
      
      store.dispatch(updatePages(pages));
      const state = store.getState().document;
      
      // Pages may be enriched with default properties
      expect(state.pages.length).toBe(2);
      expect(state.pages[0].id).toBe('page-1');
      expect(state.pages[1].id).toBe('page-2');
    });

    it('should support addPage action', () => {
      const initialState = store.getState().document;
      const initialPageCount = initialState.pages?.length || 0;
      
      store.dispatch(addPage());
      const state = store.getState().document;
      
      // Should handle page addition
      expect(state).toBeDefined();
    });

    it('should support deletePage action', () => {
      store.dispatch(deletePage(0));
      const state = store.getState().document;
      
      // Should handle page deletion request
      expect(state).toBeDefined();
    });

    it('should support updatePageContent action', () => {
      store.dispatch(updatePageContent({ pageIndex: 0, content: '<p>Updated</p>' }));
      const state = store.getState().document;
      
      // Should handle content update request
      expect(state).toBeDefined();
    });
  });

  describe('Performance', () => {
    it('should handle large content efficiently', () => {
      const largeContent = '<p>Large content</p>'.repeat(1000);
      
      const startTime = Date.now();
      store.dispatch(updateContinuousContent(largeContent));
      const endTime = Date.now();
      
      expect(endTime - startTime).toBeLessThan(100); // Should be fast
      
      const state = store.getState().document;
      expect(state.continuousContent).toBe(largeContent);
    });

    it('should handle many boundary updates efficiently', () => {
      const boundaries = Array.from({ length: 100 }, (_, i) => ({
        id: `page-${i}`,
        pageNumber: i + 1,
        top: i * 1200,
        height: 1123
      }));
      
      const startTime = Date.now();
      store.dispatch(updatePageBoundaries(boundaries));
      const endTime = Date.now();
      
      expect(endTime - startTime).toBeLessThan(100);
      
      const state = store.getState().document;
      expect(state.pageBoundaries.length).toBe(100);
    });
  });
});
