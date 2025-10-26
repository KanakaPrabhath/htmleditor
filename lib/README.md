# @kanaka-prabhath/html-editor

[![npm version](https://badge.fury.io/js/%40kanaka-prabhath%2Fhtml-editor.svg)](https://badge.fury.io/js/%40kanaka-prabhath%2Fhtml-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Issues](https://img.shields.io/github/issues/KanakaPrabhath/htmleditor)](https://github.com/KanakaPrabhath/htmleditor/issues)
[![GitHub Stars](https://img.shields.io/github/stars/KanakaPrabhath/htmleditor)](https://github.com/KanakaPrabhath/htmleditor/stargazers)

A React-based WYSIWYG HTML editor with automatic page reflow, rich text formatting, and multi-page document management. Perfect for creating documents, reports, and rich content editors.

![HTML Editor Screenshot](https://raw.githubusercontent.com/KanakaPrabhath/htmleditor/main/docs/screenshot.png)

## ✨ Features

- **WYSIWYG Editing**: Real-time HTML content editing with rich text formatting
- **Automatic Page Reflow**: Content automatically flows across pages with intelligent page break insertion
- **Multi-Page Management**: Navigate, add, delete, and manage pages seamlessly
- **Rich Text Formatting**: Bold, italic, underline, strikethrough, alignment, fonts, and more
- **Page Size Support**: A4, Letter, and Legal page formats with programmatic configuration
- **Page Margin Control**: Customizable page margins with preset and custom options
- **Advanced Content Selection**: Retrieve selected HTML content for advanced editing workflows
- **Cursor Position Tracking**: Get current cursor position with page, line, and character information
- **Customizable UI**: Show/hide sidebar, toolbar, and page manager components
- **Performance Optimized**: Efficient reflow algorithms and debounced operations
- **TypeScript Ready**: Full type definitions included
- **Responsive Design**: Works across desktop and mobile devices
- **Advanced Content Support**: Comprehensive HTML content normalization for tables, lists, images, headings, and complex structures
- **Page Break Management**: Visual page break removal with automatic content reflow
- **Enhanced Table Support**: Optimized table resizing and manipulation with improved performance
- **Image Manipulation**: Advanced image resize controls with aspect ratio preservation
- **Keyboard Shortcuts**: Comprehensive keyboard shortcuts for common operations

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

## 🎯 Basic Usage

### With Ref Access

```jsx
import React, { useRef } from 'react';

function App() {
  const editorRef = useRef(null);

  // Get the current HTML content from the editor
  const handleSave = () => {
    const htmlContent = editorRef.current.getHTMLContent();
    const plainText = editorRef.current.getPlainText();
    console.log('HTML:', htmlContent);
    console.log('Text:', plainText);
  };

  // Insert content at cursor position without replacing existing content
  const handleInsertContent = () => {
    editorRef.current.insertContent('<p><strong>New content inserted!</strong></p>');
  };

  // Set editor content programmatically
  const handleSetContent = () => {
    const sampleContent = '<h1>Sample Document</h1><p>This is sample content.</p>';
    editorRef.current.setContent(sampleContent);
  };

  // Get selected HTML content (supports images and tables)
  const handleGetSelectedContent = () => {
    const selectedHtml = editorRef.current.getSelectedHTMLContent();
    console.log('Selected HTML:', selectedHtml);
  };

  // Get current cursor position in the editor
  const handleGetCursorPosition = () => {
    const cursorPos = editorRef.current.getCursorPosition();
    if (cursorPos) {
      console.log('Cursor at page:', cursorPos.pageNumber, 'line:', cursorPos.lineNumber);
    }
  };

  // Cycle through available page sizes
  const handleChangePageSize = () => {
    const sizes = ['A4', 'Letter', 'Legal'];
    const currentSize = 'A4'; // In a real app, you'd track this in state
    const nextSize = sizes[(sizes.indexOf(currentSize) + 1) % sizes.length];
    editorRef.current.setPageSize(nextSize);
    console.log('Page size changed to:', nextSize);
  };

  // Set custom margins (in inches)
  const handleSetCustomMargins = () => {
    const customMargins = { top: 0.6, bottom: 0.6, left: 0.6, right: 0.6 };
    editorRef.current.setPageMargins(customMargins);
    console.log('Page margins set to:', customMargins);
  };

  return (
    <div>
      <DocumentProvider>
        <HtmlEditor ref={editorRef} />
      </DocumentProvider>
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={handleSave}>Save Content</button>
        <button onClick={handleInsertContent}>Insert Content</button>
        <button onClick={handleSetContent}>Set Sample Content</button>
        <button onClick={handleGetSelectedContent}>Get Selected Content</button>
        <button onClick={handleGetCursorPosition}>Get Cursor Position</button>
        <button onClick={handleChangePageSize}>Change Page Size</button>
        <button onClick={handleSetCustomMargins}>Set Custom Margins</button>
      </div>
    </div>
  );
}
```

### Custom Configuration

```jsx
function App() {
  // Handle page navigation callback
  const handlePageNavigation = (pageIndex) => {
    console.log('Navigated to page:', pageIndex);
  };

  // Handle page addition callback
  const handlePageAddition = () => {
    console.log('New page added');
  };

  // Handle content change callback
  const handleContentChange = (html) => {
    console.log('Content changed, length:', html.length);
  };

  return (
    <DocumentProvider initialState={{ title: "My Document", pageSize: "A4" }}>
      <HtmlEditor 
        showSidebar={true}           // Show document sidebar (default: true)
        showToolbar={true}           // Show formatting toolbar (default: true)
        showPageManager={true}       // Show page navigation controls (default: true)
        onNavigatePage={handlePageNavigation}  // Callback when navigating pages
        onAddPage={handlePageAddition}         // Callback when adding pages
        onChange={handleContentChange}         // Callback when content changes
      />
    </DocumentProvider>
  );
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
- `getHTMLContent(): string` - Returns current HTML content with page breaks
- `getSelectedHTMLContent(): string` - Returns selected HTML content (supports images and tables)
- `getPlainText(): string` - Returns plain text content (HTML stripped)
- `getCursorPosition(): Object|null` - Returns cursor position object with page number, line number, and character offset, or null if no selection
- `setContent(html: string): void` - Set editor content programmatically
- `setPageSize(size: 'A4' | 'Letter' | 'Legal'): void` - Set page size programmatically
- `setPageMargins(margins: PageMarginPreset | CustomMargins): void` - Set page margins programmatically
- `insertContent(html: string): void` - Insert content at cursor position without replacing existing content

### DocumentProvider

Context provider for document state management.

**Props:**
- `initialState?: Object` - Initial document state configuration

**Initial State Options:**
```jsx
<DocumentProvider initialState={{
  title: "My Document",           // Document title (default: "Untitled Document")
  pageSize: "A4",                 // Page size: 'A4', 'Letter', 'Legal' (default: 'A4')
  pageMargins: "NORMAL",          // Margin preset or custom object (default: 'NORMAL')
  continuousContent: "<p>Initial content</p>",  // Initial HTML content (default: empty paragraph)
  activePage: 0,                  // Active page index (default: 0)
  zoomLevel: 1.0                  // Zoom level (default: 1.0)
}}>
  <HtmlEditor />
</DocumentProvider>
```

### Exported Utilities

The library exports various utilities for advanced usage:

#### Document Context Hooks
```jsx
import { useDocumentState, useDocumentActions } from '@kanaka-prabhath/html-editor';

// Access document state
const { pages, activePage, pageSize, pageMargins, continuousContent } = useDocumentState();

// Access document actions
const actions = useDocumentActions();
actions.updateContinuousContent('<p>New content</p>');
actions.setActivePage(1);
```

#### Custom Hooks
```jsx
import { useFormatting, useContinuousReflow } from '@kanaka-prabhath/html-editor';

// Text formatting hook
const { currentFormat, formatText } = useFormatting();

// Continuous reflow hook for advanced page management
const { 
  checkAndUpdateBoundaries, 
  getCurrentPage, 
  scrollToPage,
  triggerAutoReflow 
} = useContinuousReflow(pageSize, editorRef);
```

#### Page Size Utilities
```jsx
import { PAGE_SIZES, getPageDimensions, getAvailablePageSizes } from '@kanaka-prabhath/html-editor';

// Get dimensions for A4 page
const dimensions = getPageDimensions('A4'); // { width: 794, height: 1123 }

// Get all available page sizes
const sizes = getAvailablePageSizes(); // ['A4', 'Letter', 'Legal']
```

#### Font Size Utilities
```jsx
import { FONT_SIZE_MAP, COMMON_FONT_SIZES, pointsToPixels } from '@kanaka-prabhath/html-editor';

// Convert 12pt to pixels
const pixels = pointsToPixels(12); // 16

// Access font size mappings
console.log(FONT_SIZE_MAP['12pt']); // { pt: 12, px: 16, label: '12' }
```

#### Image Resize Utilities
```jsx
import { 
  calculateResizeDimensions, 
  isResizableImage, 
  getImageDimensions,
  applyImageDimensions 
} from '@kanaka-prabhath/html-editor';

// Check if an image element can be resized
const canResize = isResizableImage(imageElement);

// Calculate new dimensions maintaining aspect ratio
const newDimensions = calculateResizeDimensions(originalWidth, originalHeight, newWidth, newHeight, preserveAspectRatio);

// Apply dimensions to image element
applyImageDimensions(imageElement, { width: 300, height: 200 });
```

#### Table Resize Utilities
```jsx
import { 
  calculateTableResizeDimensions, 
  isResizableTable, 
  getTableStructure,
  applyTableDimensions 
} from '@kanaka-prabhath/html-editor';

// Check if a table element can be resized
const canResize = isResizableTable(tableElement);

// Get table structure information
const structure = getTableStructure(tableElement);

// Calculate new table dimensions
const newDimensions = calculateTableResizeDimensions(currentWidth, currentHeight, deltaX, deltaY);

// Apply dimensions to table
applyTableDimensions(tableElement, { width: 600, height: 400 });
```

#### Image Storage Utilities
```jsx
import { saveImage, getImage, deleteImage, clearImages, getAllImageKeys } from '@kanaka-prabhath/html-editor';

// Save image to IndexedDB and get storage key
const imageKey = await saveImage(file);

// Retrieve image data URL by key
const imageDataUrl = await getImage(imageKey);

// Delete specific image
await deleteImage(imageKey);

// Clear all stored images
await clearImages();

// Get all stored image keys
const keys = await getAllImageKeys();
```

#### Logger Utility
```jsx
import logger from '@kanaka-prabhath/html-editor';

// Log debug information
logger.debug('Debug message', { data: 'value' });

// Log info messages
logger.info('Info message');

// Log warnings
logger.warn('Warning message');

// Log errors
logger.error('Error message', error);
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
  // Access current document state
  const { pages, activePage } = useDocumentState();
  
  // Access document actions for navigation and page management
  const { setActivePage, addPage } = useDocumentActions();

  return (
    <div className="custom-pager">
      {/* Button to add a new page */}
      <button onClick={addPage}>+ Add Page</button>
      
      {/* Render page navigation buttons */}
      {pages.map((_, index) => (
        <button 
          key={index}
          onClick={() => setActivePage(index)}  // Navigate to specific page
          className={index === activePage ? 'active' : ''}  // Highlight active page
        >
          Page {index + 1}
        </button>
      ))}
    </div>
  );
}

// Usage with custom page manager component
<HtmlEditor pageManagerComponent={<CustomPageManager />} />
```

### Programmatic Content Control

```jsx
function TemplateLoader() {
  const editorRef = useRef(null);

  // Load a predefined template into the editor
  const loadTemplate = (template) => {
    editorRef.current.setContent(template);
  };

  // Insert signature at current cursor position
  const insertSignature = () => {
    editorRef.current.insertContent('<p><em>-- Document Signature</em></p>');
  };

  return (
    <div>
      <DocumentProvider>
        <HtmlEditor ref={editorRef} />
      </DocumentProvider>
      
      {/* Template loading buttons */}
      <button onClick={() => loadTemplate('<h1>Meeting Notes</h1><p>Agenda:</p><ul><li>Item 1</li></ul>')}>
        Load Meeting Template
      </button>
      <button onClick={() => loadTemplate('<h1>Report</h1><p>Executive Summary:</p><p>Details:</p>')}>
        Load Report Template
      </button>
      
      {/* Insert signature button */}
      <button onClick={insertSignature}>
        Insert Signature
      </button>
    </div>
  );
}
```

## 🧪 Testing

The library includes comprehensive tests:

```bash
# Run unit tests
npm test

# Run end-to-end tests
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

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