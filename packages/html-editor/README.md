# @prabhath-tharaka/html-editor

[![npm version](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor.svg)](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React-based WYSIWYG continuous HTML editor with automatic page reflow, rich text formatting, and multi-page document management.

## ✨ Features

- **WYSIWYG Editing**: Real-time HTML content editing with rich text formatting
- **Automatic Page Reflow**: Content automatically flows across pages with intelligent page break insertion
- **Multi-Page Management**: Navigate, add, delete, and manage pages seamlessly
- **Rich Text Formatting**: Bold, italic, underline, strikethrough, alignment, fonts, and more
- **Page Size Support**: A4, Letter, and Legal page formats
- **Customizable UI**: Show/hide sidebar, toolbar, and page manager components
- **Performance Optimized**: Efficient reflow algorithms and debounced operations
- **TypeScript Ready**: Full type definitions included
- **Responsive Design**: Works across desktop and mobile devices

## 📦 Installation

```bash
npm install @prabhath-tharaka/html-editor
npm install react react-dom
```

## 🚀 Quick Start

```jsx
import React, { useRef } from 'react';
import { ContentEditableEditor, DocumentProvider } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function App() {
  const editorRef = useRef(null);

  const handleSave = () => {
    const htmlContent = editorRef.current.getHTMLContent();
    const plainText = editorRef.current.getPlainText();
    console.log('HTML Content:', htmlContent);
    console.log('Plain Text:', plainText);
  };

  return (
    <div>
      <DocumentProvider>
        <ContentEditableEditor ref={editorRef} />
      </DocumentProvider>
      <button onClick={handleSave}>Save Content</button>
    </div>
  );
}

export default App;
```

## 🔧 API Reference

### Components

#### ContentEditableEditor

The main editor component with ref access to content methods.

**Props:**
- `pageManagerComponent?: ReactNode` - Custom page manager component
- `onNavigatePage?: (pageIndex: number) => void` - Callback when navigating pages
- `onAddPage?: () => void` - Callback when adding a page
- `onDeletePage?: (pageIndex: number) => void` - Callback when deleting a page
- `onPageSizeChange?: (size: 'A4' | 'Letter' | 'Legal') => void` - Callback when page size changes
- `onChange?: (htmlContent: string) => void` - Callback when content changes
- `showSidebar?: boolean` - Show/hide sidebar (default: true)
- `showToolbar?: boolean` - Show/hide toolbar (default: true)
- `showPageManager?: boolean` - Show/hide page manager (default: true)

**Ref Methods:**
- `getHTMLContent(): string` - Returns current HTML content
- `getPlainText(): string` - Returns plain text content (HTML stripped)
- `setContent(html: string): void` - Set editor content programmatically

#### DocumentProvider

Context provider for document state management.

```jsx
<DocumentProvider initialState={{ title: "My Document", pageSize: "A4" }}>
  <ContentEditableEditor />
</DocumentProvider>
```

### Hooks

#### useFormatting()

Manages text formatting state and commands.

```jsx
const { currentFormat, formatText, resetFormat } = useFormatting();

// Usage
formatText('bold'); // Toggle bold
formatText('fontSize', '16px'); // Set font size
formatText('justifyCenter'); // Center align
```

#### useContinuousReflow()

Handles automatic page reflow and boundary calculations.

```jsx
const { 
  updateBoundaries, 
  getCurrentPage, 
  scrollToPage, 
  triggerAutoReflow 
} = useContinuousReflow(pageSize, editorRef);
```

### Context

#### useDocument()

Access document state and actions.

```jsx
const { state, actions } = useDocument();

// State includes:
// - continuousContent: string
// - pageBoundaries: PageBoundary[]
// - activePage: number
// - pageSize: string
// - pages: Page[]
```

#### useDocumentState()

Access document state only.

```jsx
const { continuousContent, pageBoundaries, activePage } = useDocumentState();
```

#### useDocumentActions()

Access document actions only.

```jsx
const { updateContinuousContent, setActivePage, updatePageSize } = useDocumentActions();
```

## 📄 Page Management

The editor supports automatic page management with:

- **Automatic Page Breaks**: Content automatically flows to new pages when exceeding page height
- **Manual Page Breaks**: Insert page breaks at cursor position
- **Page Navigation**: Navigate between pages with smooth scrolling
- **Page Deletion**: Remove pages and their content
- **Page Size Switching**: Change between A4, Letter, and Legal formats

## 🎨 Styling

Import the default styles:

```jsx
import '@prabhath-tharaka/html-editor/styles';
```

Or customize with your own CSS:

```css
.multi-page-editor {
  /* Your custom styles */
}

.editor-toolbar {
  /* Custom toolbar styles */
}

.continuous-content {
  /* Custom editor content styles */
}
```

## 🔧 Advanced Usage

### Custom Page Manager

```jsx
function CustomPageManager({ onNavigate, onAddPage, onDeletePage }) {
  return (
    <div>
      <button onClick={() => onAddPage()}>Add Page</button>
      {/* Your custom page navigation UI */}
    </div>
  );
}

function App() {
  return (
    <DocumentProvider>
      <ContentEditableEditor 
        pageManagerComponent={<CustomPageManager />}
      />
    </DocumentProvider>
  );
}
```

### Programmatic Content Control

```jsx
function App() {
  const editorRef = useRef(null);

  const loadTemplate = () => {
    const template = `
      <h1>Document Title</h1>
      <p>This is a template content.</p>
    `;
    editorRef.current.setContent(template);
  };

  const extractContent = () => {
    const html = editorRef.current.getHTMLContent();
    const text = editorRef.current.getPlainText();
    // Process content as needed
  };

  return (
    <div>
      <DocumentProvider>
        <ContentEditableEditor ref={editorRef} />
      </DocumentProvider>
      <button onClick={loadTemplate}>Load Template</button>
      <button onClick={extractContent}>Extract Content</button>
    </div>
  );
}
```

## 🧪 Testing

The library includes comprehensive end-to-end tests using Playwright:

```bash
# Run tests
npm test

# Run specific test suite
npm test -- core-text-editing
```

## 📊 Performance

The editor is optimized for performance with:

- **Debounced Operations**: Boundary calculations and reflow operations are debounced
- **Efficient Algorithms**: Smart page break insertion and content management
- **Memory Management**: Proper cleanup and garbage collection
- **Responsive Design**: Smooth editing experience even with large documents

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines.

## 📝 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/Prabhath-Tharaka/htmleditor)
- [npm Package](https://www.npmjs.com/package/@prabhath-tharaka/html-editor)
- [Issue Tracker](https://github.com/Prabhath-Tharaka/htmleditor/issues)

## 🆕 Changelog

### v1.1.0
- Added automatic page reflow functionality
- Improved performance with debounced operations
- Enhanced page management features
- Added comprehensive test coverage
- Improved documentation

### v1.0.0
- Initial release with basic WYSIWYG editing
- Rich text formatting support
- Multi-page document management
- Customizable UI components
