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
- **Rich Text Formatting**: Bold, italic, underline, strikethrough, alignment, fonts, and more
- **Page Size Support**: A4, Letter, and Legal page formats with programmatic configuration
- **Page Margin Control**: Customizable page margins with preset and custom options
- **Advanced Content Selection**: Retrieve selected HTML content for advanced editing workflows
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

  const handleSave = () => {
    const htmlContent = editorRef.current.getHTMLContent();
    const plainText = editorRef.current.getPlainText();
    console.log('HTML:', htmlContent);
    console.log('Text:', plainText);
  };

  const handleInsertContent = () => {
    // Insert content at cursor position without replacing existing content
    editorRef.current.insertContent('<p><strong>New content inserted!</strong></p>');
  };

  const handleSetContent = () => {
    const sampleContent = '<h1>Sample Document</h1><p>This is sample content.</p>';
    editorRef.current.setContent(sampleContent);
  };

  const handleGetSelectedContent = () => {
    const selectedHtml = editorRef.current.getSelectedHTMLContent();
    console.log('Selected HTML:', selectedHtml);
  };

  const handleChangePageSize = () => {
    // Cycle through available page sizes
    const sizes = ['A4', 'Letter', 'Legal'];
    const currentSize = 'A4'; // In a real app, you'd track this in state
    const nextSize = sizes[(sizes.indexOf(currentSize) + 1) % sizes.length];
    editorRef.current.setPageSize(nextSize);
    console.log('Page size changed to:', nextSize);
  };

  const handleSetCustomMargins = () => {
    // Set custom margins (in inches)
    const customMargins = { top: 0.6, bottom: 0.6, left: 0.6, right: 0.6 };
    editorRef.current.setPageMargins(customMargins);
    console.log('Page margins set to:', customMargins);
  };

  return (
    <div>
      <DocumentProvider>
        <HtmlEditor ref={editorRef} />
      </DocumentProvider>
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <button onClick={handleSave}>Save Content</button>
        <button onClick={handleInsertContent}>Insert Content</button>
        <button onClick={handleSetContent}>Set Sample Content</button>
        <button onClick={handleGetSelectedContent}>Get Selected Content</button>
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
  return (
    <DocumentProvider initialState={{ title: "My Document", pageSize: "A4" }}>
      <HtmlEditor 
        showSidebar={true}
        showToolbar={true}
        showPageManager={true}
        onNavigatePage={(pageIndex) => console.log('Page:', pageIndex)}
        onAddPage={() => console.log('Page added')}
        onChange={(html) => console.log('Content changed')}
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