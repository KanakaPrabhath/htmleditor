import { describe, it, expect } from 'vitest';
import * as HtmlEditor from '@prabhath-tharaka/html-editor';

describe('Library Exports', () => {
  describe('Component Exports', () => {
    it('should export ContentEditableEditor component', () => {
      expect(HtmlEditor.ContentEditableEditor).toBeDefined();
      expect(typeof HtmlEditor.ContentEditableEditor).toBe('function');
    });

    it('should export EditorToolbar component', () => {
      expect(HtmlEditor.EditorToolbar).toBeDefined();
      expect(typeof HtmlEditor.EditorToolbar).toBe('function');
    });

    it('should export Sidebar component', () => {
      expect(HtmlEditor.Sidebar).toBeDefined();
      expect(typeof HtmlEditor.Sidebar).toBe('function');
    });

    it('should export ContinuousPageView component', () => {
      expect(HtmlEditor.ContinuousPageView).toBeDefined();
      expect(typeof HtmlEditor.ContinuousPageView).toBe('function');
    });

    it('should export PageManager component', () => {
      expect(HtmlEditor.PageManager).toBeDefined();
      expect(typeof HtmlEditor.PageManager).toBe('function');
    });
  });

  describe('Hook Exports', () => {
    it('should export useFormatting hook', () => {
      expect(HtmlEditor.useFormatting).toBeDefined();
      expect(typeof HtmlEditor.useFormatting).toBe('function');
    });

    it('should export useContinuousReflow hook', () => {
      expect(HtmlEditor.useContinuousReflow).toBeDefined();
      expect(typeof HtmlEditor.useContinuousReflow).toBe('function');
    });
  });

  describe('Redux Store Exports', () => {
    it('should export documentReducer', () => {
      expect(HtmlEditor.documentReducer).toBeDefined();
      expect(typeof HtmlEditor.documentReducer).toBe('function');
    });

    it('should export initializeDocument action', () => {
      expect(HtmlEditor.initializeDocument).toBeDefined();
      expect(typeof HtmlEditor.initializeDocument).toBe('function');
    });

    it('should export updateTitle action', () => {
      expect(HtmlEditor.updateTitle).toBeDefined();
      expect(typeof HtmlEditor.updateTitle).toBe('function');
    });

    it('should export updatePageContent action', () => {
      expect(HtmlEditor.updatePageContent).toBeDefined();
      expect(typeof HtmlEditor.updatePageContent).toBe('function');
    });

    it('should export updatePages action', () => {
      expect(HtmlEditor.updatePages).toBeDefined();
      expect(typeof HtmlEditor.updatePages).toBe('function');
    });

    it('should export addPage action', () => {
      expect(HtmlEditor.addPage).toBeDefined();
      expect(typeof HtmlEditor.addPage).toBe('function');
    });

    it('should export deletePage action', () => {
      expect(HtmlEditor.deletePage).toBeDefined();
      expect(typeof HtmlEditor.deletePage).toBe('function');
    });

    it('should export setActivePage action', () => {
      expect(HtmlEditor.setActivePage).toBeDefined();
      expect(typeof HtmlEditor.setActivePage).toBe('function');
    });

    it('should export updatePageSize action', () => {
      expect(HtmlEditor.updatePageSize).toBeDefined();
      expect(typeof HtmlEditor.updatePageSize).toBe('function');
    });

    it('should export resetDocument action', () => {
      expect(HtmlEditor.resetDocument).toBeDefined();
      expect(typeof HtmlEditor.resetDocument).toBe('function');
    });

    it('should export updateContinuousContent action', () => {
      expect(HtmlEditor.updateContinuousContent).toBeDefined();
      expect(typeof HtmlEditor.updateContinuousContent).toBe('function');
    });

    it('should export updatePageBoundaries action', () => {
      expect(HtmlEditor.updatePageBoundaries).toBeDefined();
      expect(typeof HtmlEditor.updatePageBoundaries).toBe('function');
    });

    it('should export addPageBreak action', () => {
      expect(HtmlEditor.addPageBreak).toBeDefined();
      expect(typeof HtmlEditor.addPageBreak).toBe('function');
    });

    it('should export removePageBreak action', () => {
      expect(HtmlEditor.removePageBreak).toBeDefined();
      expect(typeof HtmlEditor.removePageBreak).toBe('function');
    });

    it('should export setEditorMode action', () => {
      expect(HtmlEditor.setEditorMode).toBeDefined();
      expect(typeof HtmlEditor.setEditorMode).toBe('function');
    });
  });

  describe('Storage Utility Exports', () => {
    it('should export saveImage utility', () => {
      expect(HtmlEditor.saveImage).toBeDefined();
      expect(typeof HtmlEditor.saveImage).toBe('function');
    });

    it('should export getImage utility', () => {
      expect(HtmlEditor.getImage).toBeDefined();
      expect(typeof HtmlEditor.getImage).toBe('function');
    });

    it('should export deleteImage utility', () => {
      expect(HtmlEditor.deleteImage).toBeDefined();
      expect(typeof HtmlEditor.deleteImage).toBe('function');
    });

    it('should export clearImages utility', () => {
      expect(HtmlEditor.clearImages).toBeDefined();
      expect(typeof HtmlEditor.clearImages).toBe('function');
    });

    it('should export getAllImageKeys utility', () => {
      expect(HtmlEditor.getAllImageKeys).toBeDefined();
      expect(typeof HtmlEditor.getAllImageKeys).toBe('function');
    });
  });

  describe('Constants and Utilities', () => {
    it('should export PAGE_DIMENSIONS constant', () => {
      expect(HtmlEditor.PAGE_DIMENSIONS).toBeDefined();
      expect(typeof HtmlEditor.PAGE_DIMENSIONS).toBe('object');
    });

    it('should have correct PAGE_DIMENSIONS structure', () => {
      const { PAGE_DIMENSIONS } = HtmlEditor;
      
      expect(PAGE_DIMENSIONS.A4).toBeDefined();
      expect(PAGE_DIMENSIONS.A4.width).toBe(794);
      expect(PAGE_DIMENSIONS.A4.height).toBe(1123);
      
      expect(PAGE_DIMENSIONS.Letter).toBeDefined();
      expect(PAGE_DIMENSIONS.Letter.width).toBe(816);
      expect(PAGE_DIMENSIONS.Letter.height).toBe(1056);
      
      expect(PAGE_DIMENSIONS.Legal).toBeDefined();
      expect(PAGE_DIMENSIONS.Legal.width).toBe(816);
      expect(PAGE_DIMENSIONS.Legal.height).toBe(1344);
    });

    it('should export logger utility', () => {
      expect(HtmlEditor.logger).toBeDefined();
      // Logger is exported as a function (default export)
      expect(typeof HtmlEditor.logger).toBe('function');
    });
  });

  describe('Export Completeness', () => {
    it('should have all expected exports', () => {
      const expectedExports = [
        'ContentEditableEditor',
        'EditorToolbar',
        'Sidebar',
        'ContinuousPageView',
        'PageManager',
        'useFormatting',
        'useContinuousReflow',
        'documentReducer',
        'initializeDocument',
        'updateTitle',
        'updatePageContent',
        'updatePages',
        'addPage',
        'deletePage',
        'setActivePage',
        'updatePageSize',
        'resetDocument',
        'updateContinuousContent',
        'updatePageBoundaries',
        'addPageBreak',
        'removePageBreak',
        'setEditorMode',
        'insertPageAt',
        'movePageTo',
        'duplicatePage',
        'saveImage',
        'getImage',
        'deleteImage',
        'clearImages',
        'getAllImageKeys',
        'PAGE_DIMENSIONS',
        'logger'
      ];
      
      expectedExports.forEach(exportName => {
        expect(HtmlEditor[exportName]).toBeDefined();
      });
    });

    it('should not have unexpected additional exports', () => {
      const actualExports = Object.keys(HtmlEditor);
      const expectedExports = [
        'ContentEditableEditor',
        'EditorToolbar',
        'Sidebar',
        'ContinuousPageView',
        'PageManager',
        'useFormatting',
        'useContinuousReflow',
        'documentReducer',
        'initializeDocument',
        'updateTitle',
        'updatePageContent',
        'updatePages',
        'addPage',
        'deletePage',
        'setActivePage',
        'updatePageSize',
        'resetDocument',
        'updateContinuousContent',
        'updatePageBoundaries',
        'addPageBreak',
        'removePageBreak',
        'setEditorMode',
        'insertPageAt',
        'movePageTo',
        'duplicatePage',
        'saveImage',
        'getImage',
        'deleteImage',
        'clearImages',
        'getAllImageKeys',
        'PAGE_DIMENSIONS',
        'logger'
      ];
      
      // All actual exports should be in expected list
      actualExports.forEach(exportName => {
        expect(expectedExports).toContain(exportName);
      });
    });
  });

  describe('Type Validation', () => {
    it('should have correct types for all exports', () => {
      // Components should be functions
      expect(typeof HtmlEditor.ContentEditableEditor).toBe('function');
      expect(typeof HtmlEditor.EditorToolbar).toBe('function');
      expect(typeof HtmlEditor.Sidebar).toBe('function');
      expect(typeof HtmlEditor.ContinuousPageView).toBe('function');
      expect(typeof HtmlEditor.PageManager).toBe('function');
      
      // Hooks should be functions
      expect(typeof HtmlEditor.useFormatting).toBe('function');
      expect(typeof HtmlEditor.useContinuousReflow).toBe('function');
      
      // Reducer should be a function
      expect(typeof HtmlEditor.documentReducer).toBe('function');
      
      // Actions should be functions
      expect(typeof HtmlEditor.initializeDocument).toBe('function');
      expect(typeof HtmlEditor.updateTitle).toBe('function');
      
      // Utilities should be functions
      expect(typeof HtmlEditor.saveImage).toBe('function');
      expect(typeof HtmlEditor.getImage).toBe('function');
      
      // Constants should be objects
      expect(typeof HtmlEditor.PAGE_DIMENSIONS).toBe('object');
      // Logger is a function (default export)
      expect(typeof HtmlEditor.logger).toBe('function');
    });
  });
});
