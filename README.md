# @kanaka-prabhath/html-editor

[![npm version](https://badge.fury.io/js/%40kanaka-prabhath%2Fhtml-editor.svg)](https://badge.fury.io/js/%40kanaka-prabhath%2Fhtml-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Issues](https://img.shields.io/github/issues/KanakaPrabhath/htmleditor)](https://github.com/KanakaPrabhath/htmleditor/issues)
[![GitHub Stars](https://img.shields.io/github/stars/KanakaPrabhath/htmleditor)](https://github.com/KanakaPrabhath/htmleditor/stargazers)

A React-based WYSIWYG HTML editor with automatic page reflow, rich text formatting, and multi-page document management. Perfect for creating documents, reports, and rich content editors.

![HTML Editor Screenshot](docs/screenshot.png)

## ✨ Features

- **WYSIWYG Editing**: Real-time HTML content editing with rich text formatting
- **Automatic Page Reflow**: Content automatically flows across pages with intelligent page break insertion
- **Multi-Page Management**: Navigate, add, delete, and manage pages seamlessly
- **Rich Text Formatting**: Bold, italic, underline, strikethrough, alignment, fonts, and font sizes
- **Page Size Support**: A4, Letter, and Legal page formats with programmatic configuration
- **Page Margin Control**: Customizable page margins with preset and custom options
- **Advanced Content Selection**: Retrieve selected HTML content for advanced editing workflows
- **Zoom Controls**: 50%-200% zoom with keyboard shortcuts and programmatic control
- **Table Support**: Advanced table creation, resizing, and manipulation with column/row resizing
- **Image Manipulation**: Image upload, insertion, and resize controls with aspect ratio preservation
- **Indentation System**: Tab-based paragraph indentation with toolbar buttons and keyboard shortcuts
- **Keyboard Shortcuts**: Comprehensive keyboard shortcuts for formatting, navigation, and operations
- **Content Normalization**: Automatic HTML content normalization for tables, lists, images, headings, and complex structures
- **Page Break Management**: Visual page break removal with automatic content reflow
- **Customizable UI**: Show/hide sidebar, toolbar, and page manager components
- **Performance Optimized**: Efficient reflow algorithms and debounced operations
- **TypeScript Ready**: Full type definitions included
- **Responsive Design**: Works across desktop and mobile devices
- **Accessibility**: Keyboard navigation, focus indicators, and ARIA attributes
- **Image Storage**: IndexedDB-based image storage for offline functionality
- **Undo/Redo Support**: Browser-native undo/redo functionality
- **Content Export**: HTML and plain text content extraction methods

## 📦 Installation

```bash
# Install the editor library
npm install @kanaka-prabhath/html-editor

# Install peer dependencies (if not already installed)
npm install react react-dom
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { HtmlEditor, DocumentProvider } from '@kanaka-prabhath/html-editor';
import '@kanaka-prabhath/html-editor/styles';

function App() {
  return (
    <DocumentProvider>
      <HtmlEditor />
    </DocumentProvider>
  );
}

export default App;
```

## 🎯 Advanced Usage

### Zoom Controls

```jsx
import { useDocumentState, useDocumentActions } from '@kanaka-prabhath/html-editor';

function ZoomControls() {
  const { zoomLevel } = useDocumentState();
  const { setZoomLevel, zoomIn, zoomOut, resetZoom } = useDocumentActions();

  return (
    <div>
      <p>Current Zoom: {zoomLevel}%</p>
      <button onClick={() => setZoomLevel(125)}>Set 125%</button>
      <button onClick={zoomIn}>Zoom In</button>
      <button onClick={zoomOut}>Zoom Out</button>
      <button onClick={resetZoom}>Reset Zoom</button>
    </div>
  );
}
```

### Table Manipulation

```jsx
import { createTableResizeOverlay, applyTableDimensions } from '@kanaka-prabhath/html-editor';

function TableEditor() {
  const handleTableResize = (tableElement, newDimensions) => {
    applyTableDimensions(tableElement, newDimensions);
  };

  return (
    <div>
      {/* Tables in the editor automatically get resize handles */}
      {/* Use the utilities for programmatic table manipulation */}
    </div>
  );
}
```

### Indentation System

```jsx
function IndentationExample() {
  const editorRef = useRef(null);

  const insertIndentedContent = () => {
    // Insert content with indentation
    editorRef.current.insertContent('<p data-indent-level="2">Indented paragraph</p>');
  };

  return (
    <div>
      <DocumentProvider>
        <HtmlEditor ref={editorRef} />
      </DocumentProvider>
      <button onClick={insertIndentedContent}>Insert Indented Content</button>
    </div>
  );
}
```

### Keyboard Shortcuts

The editor supports comprehensive keyboard shortcuts:

**Formatting:**
- `Ctrl+B` - Bold
- `Ctrl+I` - Italic  
- `Ctrl+U` - Underline
- `Ctrl+A` then formatting - Apply to selection

**Navigation:**
- `Tab` - Increase indent (at cursor or selection)
- `Shift+Tab` - Decrease indent (selection only)
- `Ctrl+A` - Select all

**Zoom:**
- `Ctrl++` - Zoom in
- `Ctrl+-` - Zoom out
- `Ctrl+0` - Reset zoom

### Image Management

```jsx
import { saveImage, getImage, deleteImage } from '@kanaka-prabhath/html-editor';

function ImageManager() {
  const handleImageUpload = async (file) => {
    try {
      const imageKey = await saveImage(file);
      const imageDataUrl = await getImage(imageKey);
      // Use imageDataUrl in your content
      return imageDataUrl;
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const handleImageDelete = async (imageKey) => {
    await deleteImage(imageKey);
  };

  return <div>{/* Your image management UI */}</div>;
}
```

## 🔧 API Reference

### HtmlEditor

The main editor component with ref access to content methods.

**Props:**
- `pageManagerComponent?: ReactNode` - Custom page manager component
- `onNavigatePage?: (pageIndex: number) => void` - Page navigation callback
- `onAddPage?: () => void` - Page addition callback
- `onDeletePage?: (pageIndex: number) => void` - Page deletion callback
- `onPageSizeChange?: (size: 'A4' | 'Letter' | 'Legal') => void` - Page size change callback
- `onPageMarginsChange?: (margins: PageMarginPreset | CustomMargins) => void` - Page margins change callback
- `onChange?: (htmlContent: string) => void` - Content change callback
- `showSidebar?: boolean` - Show/hide sidebar (default: true)
- `showToolbar?: boolean` - Show/hide toolbar (default: true)
- `showPageManager?: boolean` - Show/hide page manager (default: true)

**Ref Methods:**
- `getHTMLContent(): string` - Returns current HTML content
- `getSelectedHTMLContent(): string` - Returns selected HTML content (supports images and tables)
- `getPlainText(): string` - Returns plain text content
- `setContent(html: string): void` - Set editor content programmatically
- `setPageSize(size: 'A4' | 'Letter' | 'Legal'): void` - Set page size programmatically
- `setPageMargins(margins: PageMarginPreset | CustomMargins): void` - Set page margins programmatically
- `insertContent(html: string): void` - Insert content at cursor position without replacing existing content

### DocumentProvider

Context provider for document state management.

```jsx
<DocumentProvider initialState={{ title: "Document", pageSize: "A4" }}>
  <HtmlEditor />
</DocumentProvider>
```

### Context Hooks

**useDocumentState()** - Access current document state
- Returns: `{ id, title, createdAt, updatedAt, pages, activePage, pageSize, zoomLevel, continuousContent, pageBoundaries, ... }`

**useDocumentActions()** - Access document state actions
- `updateContinuousContent(html: string)` - Update continuous content
- `setActivePage(index: number)` - Set active page
- `addPage()` - Add new page
- `deletePage(index: number)` - Delete page at index
- `setPageSize(size: string)` - Set page size
- `setZoomLevel(level: number)` - Set zoom level (50-200)
- `zoomIn()` - Increase zoom by 5%
- `zoomOut()` - Decrease zoom by 5%
- `resetZoom()` - Reset zoom to 100%

### Formatting Hooks

**useFormatting()** - Text formatting state and commands
- Returns: `{ currentFormat, formatText, applyFormatting }`

**useContinuousReflow(pageSize, editorRef, zoomLevel?)** - Automatic content reflow engine
- Returns: `{ checkAndUpdateBoundaries, triggerAutoReflow, scrollToPage, getCurrentPage, positionCursorAtPage, removePageAndContent }`

### Image Storage Utilities

- `saveImage(file: File): Promise<string>` - Save image to IndexedDB, returns storage key
- `getImage(key: string): Promise<string>` - Retrieve image data URL by key
- `deleteImage(key: string): Promise<void>` - Delete image by key
- `clearImages(): Promise<void>` - Clear all stored images
- `getAllImageKeys(): Promise<string[]>` - Get all stored image keys

### Page and Font Utilities

- `PAGE_SIZES` - Object with A4, Letter, Legal dimensions
- `getPageDimensions(size: string): {width: number, height: number}` - Get page dimensions in pixels
- `isValidPageSize(size: string): boolean` - Validate page size
- `getAvailablePageSizes(): string[]` - Get available page sizes
- `FONT_SIZE_MAP` - Font size mappings
- `pointsToPixels(points: number): number` - Convert points to pixels
- `pixelsToPoints(pixels: number): number` - Convert pixels to points
- `isValidFontSize(size: number): number` - Validate and return valid font size

### Table Manipulation Utilities

- `isResizableTable(element: HTMLElement): boolean` - Check if element is a resizable table
- `getTableStructure(table: HTMLTableElement)` - Get table structure info
- `calculateTableResizeDimensions(params): object` - Calculate resize dimensions
- `applyTableDimensions(table: HTMLTableElement, dimensions, type?)` - Apply dimensions to table
- `createTableResizeOverlay(table: HTMLTableElement)` - Create resize overlay
- `updateTableResizeOverlay(overlay: HTMLElement, table: HTMLTableElement)` - Update overlay

### Image Manipulation Utilities

- `isResizableImage(element: HTMLElement): boolean` - Check if element is a resizable image
- `getImageDimensions(img: HTMLImageElement)` - Get image dimensions
- `applyImageDimensions(img: HTMLImageElement, dimensions)` - Apply dimensions to image
- `createResizeOverlay(img: HTMLImageElement)` - Create image resize overlay
- `updateResizeOverlay(overlay: HTMLElement, img: HTMLImageElement)` - Update overlay
- `removeResizeOverlay()` - Remove resize overlay

### Types

**PageMarginPreset:**
- `'NORMAL'` - 1" margins all sides
- `'NARROW'` - 0.5" margins all sides  
- `'MODERATE'` - 1" top/bottom, 0.75" left/right
- `'WIDE'` - 1" top/bottom, 2" left/right
- `'OFFICE_2003'` - 1" top/bottom, 1.25" left/right

**CustomMargins:**
```typescript
{
  top: number,    // Top margin in inches
  bottom: number, // Bottom margin in inches  
  left: number,   // Left margin in inches
  right: number   // Right margin in inches
}
```

## 📖 Documentation

For complete documentation, check out our [Wiki](https://github.com/KanakaPrabhath/htmleditor/wiki) which includes:

- [Getting Started](https://github.com/KanakaPrabhath/htmleditor/wiki/01-Getting-Started)
- [API Reference](https://github.com/KanakaPrabhath/htmleditor/wiki/02-API-Reference)
- [Advanced Usage](https://github.com/KanakaPrabhath/htmleditor/wiki/03-Advanced-Usage)
- [Architecture](https://github.com/KanakaPrabhath/htmleditor/wiki/04-Architecture)
- [Troubleshooting](https://github.com/KanakaPrabhath/htmleditor/wiki/05-Troubleshooting)

## 🎨 Styling

Import default styles:

```jsx
import '@kanaka-prabhath/html-editor/styles';
```

Or use your own CSS:

```css
.multi-page-editor {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.editor-toolbar {
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}
```

## 🔍 Examples

### Custom Page Manager

```jsx
import { useDocumentActions, useDocumentState } from '@kanaka-prabhath/html-editor';

function CustomPageManager() {
  const { pages, activePage } = useDocumentState();
  const { setActivePage, addPage } = useDocumentActions();

  return (
    <div className="custom-pager">
      <button onClick={addPage}>+ Add Page</button>
      {pages.map((_, index) => (
        <button 
          key={index}
          onClick={() => setActivePage(index)}
          className={index === activePage ? 'active' : ''}
        >
          Page {index + 1}
        </button>
      ))}
    </div>
  );
}

// Usage
<HtmlEditor pageManagerComponent={<CustomPageManager />} />
```

### Programmatic Content Control

```jsx
function TemplateLoader() {
  const editorRef = useRef(null);

  const loadTemplate = (template) => {
    editorRef.current.setContent(template);
  };

  const insertSignature = () => {
    editorRef.current.insertContent('<p><em>-- Document Signature</em></p>');
  };

  return (
    <div>
      <DocumentProvider>
        <HtmlEditor ref={editorRef} />
      </DocumentProvider>
      <button onClick={() => loadTemplate('<h1>Template</h1><p>Content</p>')}>
        Load Template
      </button>
      <button onClick={insertSignature}>
        Insert Signature
      </button>
    </div>
  );
}
```

## 🧪 Testing

The library includes a comprehensive test suite covering unit tests, integration tests, and end-to-end tests:

### Test Categories

**Unit Tests** (`tests/unit/`):
- Component exports and library structure
- Document context contract and state management
- Hook functionality (useContinuousReflow, useFormatting)
- Utility functions (table resize, image handling, font utilities)
- Page size and margin calculations
- Content normalization and validation

**Integration Tests** (`tests/integration/`):
- Page size dimensions and boundaries
- Zoom controls and keyboard shortcuts
- Cross-component interactions

**End-to-End Tests** (`tests/e2e/`):
- Core text editing workflows
- Image upload and manipulation
- Page content management
- Table creation and resizing
- Indentation system (Tab/Shift+Tab)
- UI specifications and responsive design
- Keyboard shortcuts and accessibility

### Running Tests

```bash
# Run all tests (unit + integration)
npm test

# Run end-to-end tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in debug mode
npm run test:e2e:debug

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

The test suite covers:
- ✅ WYSIWYG editing functionality
- ✅ Automatic page reflow and boundary calculations
- ✅ Multi-page document management
- ✅ Rich text formatting (bold, italic, underline, etc.)
- ✅ Page size and margin controls
- ✅ Zoom functionality (50%-200%)
- ✅ Table creation, resizing, and manipulation
- ✅ Image upload, storage, and resizing
- ✅ Indentation system with Tab/Shift+Tab
- ✅ Keyboard shortcuts
- ✅ Content selection and manipulation
- ✅ Responsive design and accessibility
- ✅ Performance and edge cases

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 🐛 Reporting Issues

Found a bug? Please [create an issue](https://github.com/KanakaPrabhath/htmleditor/issues) with:

- Steps to reproduce
- Expected vs actual behavior
- Browser and environment information

## 💡 Feature Requests

Have an idea for improvement? [Suggest a feature](https://github.com/KanakaPrabhath/htmleditor/issues) with:

- Use case description
- Proposed implementation
- Value it would provide

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **GitHub**: https://github.com/KanakaPrabhath/htmleditor
- **npm**: https://www.npmjs.com/package/@kanaka-prabhath/html-editor
- **Issues**: https://github.com/KanakaPrabhath/htmleditor/issues
- **Discussions**: https://github.com/KanakaPrabhath/htmleditor/discussions

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

---

**Made with ❤️ by Kanaka Prabhath**

If you find this library useful, please consider giving it a star on GitHub! ⭐