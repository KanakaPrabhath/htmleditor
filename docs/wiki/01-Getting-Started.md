# Getting Started with HTML Editor

## Overview

The `@prabhath-tharaka/html-editor` is a React-based WYSIWYG HTML editor that provides rich text editing capabilities with automatic page reflow and multi-page document management.

## Prerequisites

- Node.js 16+ 
- React 18+ or 19+
- React DOM 18+ or 19+

## Installation

```bash
# Install the editor library
npm install @prabhath-tharaka/html-editor

# Install peer dependencies
npm install react react-dom
```

## Basic Usage

### Minimal Setup

```jsx
import React from 'react';
import { HtmlEditor, DocumentProvider } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function App() {
  return (
    <DocumentProvider>
      <HtmlEditor />
    </DocumentProvider>
  );
}

export default App;
```

### With Custom Configuration

```jsx
import React, { useRef } from 'react';
import { HtmlEditor, DocumentProvider } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function App() {
  const editorRef = useRef(null);

  const handleSave = () => {
    const htmlContent = editorRef.current.getHTMLContent();
    const plainText = editorRef.current.getPlainText();
    console.log('HTML:', htmlContent);
    console.log('Text:', plainText);
  };

  const handlePageChange = (pageIndex) => {
    console.log('Navigated to page:', pageIndex);
  };

  return (
    <div>
      <DocumentProvider initialState={{ title: "My Document", pageSize: "A4" }}>
        <HtmlEditor 
          ref={editorRef}
          onNavigatePage={handlePageChange}
          showSidebar={true}
          showToolbar={true}
          showPageManager={true}
        />
      </DocumentProvider>
      <button onClick={handleSave}>Save Document</button>
    </div>
  );
}

export default App;
```

## Project Structure

```
packages/html-editor/
├── src/
│   ├── components/
│   │   ├── editor/
│   │   │   ├── HtmlEditor.jsx    # Main editor component
│   │   │   ├── PageView.jsx          # Continuous page view
│   │   │   ├── EditorToolbar.jsx            # Formatting toolbar
│   │   │   ├── PageManager.jsx              # Page management UI
│   │   │   ├── Sidebar.jsx                  # Document sidebar
│   │   │   └── MultiPageEditor.css          # Editor styles
│   │   └── ErrorBoundary.jsx                # Error handling
│   ├── context/
│   │   └── DocumentContext.jsx              # State management context
│   ├── hooks/
│   │   ├── useFormatting.js                 # Text formatting logic
│   │   ├── useContinuousReflow.js          # Page reflow logic
│   │   └── index.js                         # Hooks exports
│   ├── lib/
│   │   ├── editor/
│   │   │   └── utils/
│   │   │       └── logger.js                 # Logging utilities
│   │   └── storage/
│   │       └── index-db.js                   # IndexedDB storage utilities
│   └── index.js                             # Library entry point
├── package.json                             # Package configuration
├── vite.config.js                          # Build configuration
└── README.md                               # Documentation
```

## Key Features

### 1. WYSIWYG Editing
- Real-time HTML content editing
- Rich text formatting support
- ContentEditable-based implementation

### 2. Automatic Page Reflow
- Content automatically flows across pages
- Intelligent page break insertion
- Debounced boundary calculations

### 3. Multi-Page Management
- Page navigation and management
- Page addition and deletion
- Page size switching (A4, Letter, Legal)

### 4. Rich Text Formatting
- Bold, italic, underline, strikethrough
- Text alignment (left, center, right, justify)
- Font family and size selection
- Color formatting

### 5. Customizable UI
- Show/hide sidebar
- Show/hide toolbar
- Show/hide page manager
- Custom component injection

## Next Steps

- Learn about [API Reference](02-API-Reference.md)
- Explore [Advanced Usage](03-Advanced-Usage.md)
- Understand [Architecture](04-Architecture.md)
- Check [Troubleshooting](05-Troubleshooting.md)