import { describe, it, expect } from 'vitest';
import * as HtmlEditor from '@kanaka-prabhath/html-editor';

describe('Library Exports', () => {
  describe('Component Exports', () => {
    it('should export HtmlEditor component', () => {
      expect(HtmlEditor.HtmlEditor).toBeDefined();
      // HtmlEditor is wrapped in forwardRef, which returns an object
      expect(['function', 'object']).toContain(typeof HtmlEditor.HtmlEditor);
    });

    it('should export EditorToolbar component', () => {
      expect(HtmlEditor.EditorToolbar).toBeDefined();
      expect(typeof HtmlEditor.EditorToolbar).toBe('function');
    });

    it('should export Sidebar component', () => {
      expect(HtmlEditor.Sidebar).toBeDefined();
      expect(typeof HtmlEditor.Sidebar).toBe('function');
    });

    it('should export PageView component', () => {
      expect(HtmlEditor.PageView).toBeDefined();
      // PageView is wrapped in React.memo, which returns an object
      expect(['function', 'object']).toContain(typeof HtmlEditor.PageView);
    });

    it('should export PageManager component', () => {
      expect(HtmlEditor.PageManager).toBeDefined();
      // PageManager is wrapped in React.memo, which returns an object
      expect(['function', 'object']).toContain(typeof HtmlEditor.PageManager);
    });

    it('should export ImageResizeHandlers component', () => {
      expect(HtmlEditor.ImageResizeHandlers).toBeDefined();
      expect(typeof HtmlEditor.ImageResizeHandlers).toBe('function');
    });

    it('should export ColorPickerDropdown component', () => {
      expect(HtmlEditor.ColorPickerDropdown).toBeDefined();
      expect(typeof HtmlEditor.ColorPickerDropdown).toBe('function');
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

  describe('Context Exports', () => {
    it('should export DocumentProvider', () => {
      expect(HtmlEditor.DocumentProvider).toBeDefined();
      expect(['function', 'object']).toContain(typeof HtmlEditor.DocumentProvider);
    });

    it('should export useDocument hook', () => {
      expect(HtmlEditor.useDocument).toBeDefined();
      expect(typeof HtmlEditor.useDocument).toBe('function');
    });

    it('should export useDocumentState hook', () => {
      expect(HtmlEditor.useDocumentState).toBeDefined();
      expect(typeof HtmlEditor.useDocumentState).toBe('function');
    });

    it('should export useDocumentActions hook', () => {
      expect(HtmlEditor.useDocumentActions).toBeDefined();
      expect(typeof HtmlEditor.useDocumentActions).toBe('function');
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
    it('should export PAGE_SIZES constant', () => {
      expect(HtmlEditor.PAGE_SIZES).toBeDefined();
      expect(typeof HtmlEditor.PAGE_SIZES).toBe('object');
    });

    it('should have correct PAGE_SIZES structure', () => {
      const { PAGE_SIZES } = HtmlEditor;
      
      expect(PAGE_SIZES.A4).toBeDefined();
      expect(PAGE_SIZES.A4.width).toBe(794);
      expect(PAGE_SIZES.A4.height).toBe(1123);
      
      expect(PAGE_SIZES.Letter).toBeDefined();
      expect(PAGE_SIZES.Letter.width).toBe(816);
      expect(PAGE_SIZES.Letter.height).toBe(1056);
      
      expect(PAGE_SIZES.Legal).toBeDefined();
      expect(PAGE_SIZES.Legal.width).toBe(816);
      expect(PAGE_SIZES.Legal.height).toBe(1344);
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
        'DocumentProvider',
        'useDocument',
        'useDocumentState',
        'useDocumentActions',
        'HtmlEditor',
        'ErrorBoundary',
        'EditorToolbar',
        'Sidebar',
        'PageView',
        'PageManager',
        'useFormatting',
        'useContinuousReflow',
        'saveImage',
        'getImage',
        'deleteImage',
        'clearImages',
        'getAllImageKeys',
        'PAGE_SIZES',
        'getPageDimensions',
        'isValidPageSize',
        'getAvailablePageSizes',
        'DEFAULT_PAGE_SIZE',
        'FONT_SIZE_MAP',
        'COMMON_FONT_SIZES',
        'DEFAULT_FONT_SIZE',
        'pointsToPixels',
        'pixelsToPoints',
        'getPixelValue',
        'getPointValue',
        'isValidFontSize',
        'logger',
        'DEFAULT_IMAGE_RESIZE_OPTIONS',
        'RESIZE_HANDLERS',
        'calculateResizeDimensions',
        'isResizableImage',
        'getImageDimensions',
        'applyImageDimensions',
        'createResizeOverlay',
        'updateResizeOverlay',
        'removeResizeOverlay',
        'DEFAULT_TABLE_RESIZE_OPTIONS',
        'TABLE_RESIZE_HANDLERS',
        'calculateTableResizeDimensions',
        'isResizableTable',
        'getTableStructure',
        'applyTableDimensions',
        'createTableResizeOverlay',
        'updateTableResizeOverlay',
        'removeTableResizeOverlay'
      ];
      
      expectedExports.forEach(exportName => {
        expect(HtmlEditor[exportName]).toBeDefined();
      });
    });

    it('should not have unexpected additional exports', () => {
      const actualExports = Object.keys(HtmlEditor);
      const expectedExports = [
        'DocumentProvider',
        'useDocument',
        'useDocumentState',
        'useDocumentActions',
        'HtmlEditor',
        'ErrorBoundary',
        'EditorToolbar',
        'Sidebar',
        'PageView',
        'PageManager',
        'ImageResizeHandlers',
        'ColorPickerDropdown',
        'TableResizeHandlers',
        'useFormatting',
        'useContinuousReflow',
        'saveImage',
        'getImage',
        'deleteImage',
        'clearImages',
        'getAllImageKeys',
        'PAGE_SIZES',
        'getPageDimensions',
        'isValidPageSize',
        'getAvailablePageSizes',
        'DEFAULT_PAGE_SIZE',
        'FONT_SIZE_MAP',
        'COMMON_FONT_SIZES',
        'DEFAULT_FONT_SIZE',
        'pointsToPixels',
        'pixelsToPoints',
        'getPixelValue',
        'getPointValue',
        'isValidFontSize',
        'logger',
        'DEFAULT_IMAGE_RESIZE_OPTIONS',
        'RESIZE_HANDLERS',
        'calculateResizeDimensions',
        'isResizableImage',
        'getImageDimensions',
        'applyImageDimensions',
        'createResizeOverlay',
        'updateResizeOverlay',
        'removeResizeOverlay',
        'DEFAULT_TABLE_RESIZE_OPTIONS',
        'TABLE_RESIZE_HANDLERS',
        'calculateTableResizeDimensions',
        'isResizableTable',
        'getTableStructure',
        'applyTableDimensions',
        'createTableResizeOverlay',
        'updateTableResizeOverlay',
        'removeTableResizeOverlay'
      ];
      
      // All actual exports should be in expected list
      actualExports.forEach(exportName => {
        expect(expectedExports).toContain(exportName);
      });
    });
  });

  describe('Type Validation', () => {
    it('should have correct types for all exports', () => {
      // Components should be functions (or objects for forwardRef)
      expect(['function', 'object']).toContain(typeof HtmlEditor.HtmlEditor);
      expect(typeof HtmlEditor.EditorToolbar).toBe('function');
      expect(typeof HtmlEditor.Sidebar).toBe('function');
      // PageView is wrapped in React.memo, which returns an object
      expect(['function', 'object']).toContain(typeof HtmlEditor.PageView);
      // PageManager is wrapped in React.memo, which returns an object
      expect(['function', 'object']).toContain(typeof HtmlEditor.PageManager);
      
      // Hooks should be functions
      expect(typeof HtmlEditor.useFormatting).toBe('function');
      expect(typeof HtmlEditor.useContinuousReflow).toBe('function');
      
      // Context hooks should be functions
      expect(typeof HtmlEditor.useDocument).toBe('function');
      expect(typeof HtmlEditor.useDocumentState).toBe('function');
      expect(typeof HtmlEditor.useDocumentActions).toBe('function');
      
      // Utilities should be functions
      expect(typeof HtmlEditor.saveImage).toBe('function');
      expect(typeof HtmlEditor.getImage).toBe('function');
      
      // Constants should be objects
      expect(typeof HtmlEditor.PAGE_SIZES).toBe('object');
      // Logger is a function (default export)
      expect(typeof HtmlEditor.logger).toBe('function');
    });
  });
});
