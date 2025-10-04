# HTML Editor Library - Quick Reference Guide

## 🚀 Installation

```bash
npm install @prabhath-tharaka/html-editor
```

## 📦 Basic Setup

```jsx
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ContentEditableEditor, documentReducer } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/dist/html-editor.css';

const store = configureStore({
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

function App() {
  return (
    <Provider store={store}>
      <div style={{ height: '100vh' }}>
        <ContentEditableEditor />
      </div>
    </Provider>
  );
}

export default App;
```

## 🎨 Component Props

```jsx
<ContentEditableEditor
  showToolbar={true}              // Show formatting toolbar
  showSidebar={true}              // Show document info sidebar
  showPageManager={true}          // Show page navigation panel
  onNavigatePage={(pageIndex) => {}}  // Page navigation callback
  onAddPage={() => {}}            // Page added callback
  onDeletePage={(pageIndex) => {}}    // Page deleted callback
  onPageSizeChange={(newSize) => {}}  // Page size changed callback
/>
```

## 📋 Redux Actions

### Import Actions
```javascript
import {
  updateTitle,
  setActivePage,
  updatePageSize,
  addPageBreak,
  removePageBreak,
  updateContinuousContent,
  insertPageAt,
  movePageTo,
  duplicatePage
} from '@prabhath-tharaka/html-editor';
```

### Common Actions

```javascript
// Update document title
dispatch(updateTitle('My Document'));

// Navigate to page (0-indexed)
dispatch(setActivePage(1)); // Go to page 2

// Change page size
dispatch(updatePageSize('Letter')); // 'A4', 'Letter', or 'Legal'

// Add page at end
dispatch(addPageBreak({ position: 'end' }));

// Insert page at specific position
dispatch(insertPageAt({ pageIndex: 2, content: '<p>Content</p>' }));

// Move page
dispatch(movePageTo({ fromIndex: 0, toIndex: 2 }));

// Duplicate page
dispatch(duplicatePage({ pageIndex: 0 }));

// Remove page
dispatch(removePageBreak({ pageIndex: 1 }));

// Update content
dispatch(updateContinuousContent('<p>New content</p>'));
```

## 🔍 Reading Document State

```javascript
import { useSelector } from 'react-redux';

function MyComponent() {
  const {
    title,              // Document title
    continuousContent,  // Full HTML content
    pageBoundaries,     // Array of page boundaries
    activePage,         // Current page (0-indexed)
    pageSize,           // 'A4', 'Letter', 'Legal'
    totalPages,         // Total number of pages
    createdAt,          // Creation timestamp
    updatedAt           // Last update timestamp
  } = useSelector(state => state.document);

  return <div>Page {activePage + 1} of {totalPages}</div>;
}
```

## 💾 Save & Load

### Save Document
```javascript
const document = useSelector(state => state.document);

const handleSave = async () => {
  const data = {
    title: document.title,
    content: document.continuousContent,
    pageSize: document.pageSize
  };
  
  // Save to localStorage
  localStorage.setItem('doc', JSON.stringify(data));
  
  // Or send to API
  await fetch('/api/documents', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};
```

### Load Document
```javascript
const dispatch = useDispatch();

const handleLoad = async () => {
  // Load from localStorage
  const saved = JSON.parse(localStorage.getItem('doc'));
  
  // Or fetch from API
  const response = await fetch('/api/documents/123');
  const saved = await response.json();
  
  // Apply to editor
  dispatch(updateTitle(saved.title));
  dispatch(updateContinuousContent(saved.content));
  dispatch(updatePageSize(saved.pageSize));
};
```

## 🎯 Common Use Cases

### 1. Minimal Editor (No UI)
```jsx
<ContentEditableEditor
  showToolbar={false}
  showSidebar={false}
  showPageManager={false}
/>
```

### 2. Read-Only Mode
```jsx
const document = useSelector(state => state.document);

<div 
  dangerouslySetInnerHTML={{ __html: document.continuousContent }}
  style={{ padding: '20px' }}
/>
```

### 3. Export to PDF
```javascript
function ExportPDF() {
  const handleExport = () => {
    window.print(); // Browser print dialog
  };
  
  return <button onClick={handleExport}>Export PDF</button>;
}
```

### 4. Auto-Save
```javascript
const document = useSelector(state => state.document);

useEffect(() => {
  const timer = setTimeout(() => {
    localStorage.setItem('autosave', JSON.stringify({
      title: document.title,
      content: document.continuousContent
    }));
  }, 2000); // Save 2s after last change
  
  return () => clearTimeout(timer);
}, [document.content, document.title]);
```

### 5. Word Count Display
```javascript
const document = useSelector(state => state.document);

const wordCount = document.continuousContent
  .replace(/<[^>]*>/g, ' ')
  .match(/\b\w+\b/g)?.length || 0;

return <div>{wordCount} words</div>;
```

### 6. Page Navigation Controls
```javascript
const dispatch = useDispatch();
const { activePage, totalPages } = useSelector(state => state.document);

<div>
  <button 
    onClick={() => dispatch(setActivePage(activePage - 1))}
    disabled={activePage === 0}
  >
    Previous
  </button>
  
  <span>Page {activePage + 1} of {totalPages}</span>
  
  <button 
    onClick={() => dispatch(setActivePage(activePage + 1))}
    disabled={activePage >= totalPages - 1}
  >
    Next
  </button>
</div>
```

## 🎨 Page Sizes

```javascript
import { PAGE_DIMENSIONS } from '@prabhath-tharaka/html-editor';

PAGE_DIMENSIONS.A4      // { width: 794, height: 1123 }
PAGE_DIMENSIONS.Letter  // { width: 816, height: 1056 }
PAGE_DIMENSIONS.Legal   // { width: 816, height: 1344 }
```

## 🐛 Common Issues

### Editor not rendering
```jsx
// ❌ Wrong - no height
<div>
  <ContentEditableEditor />
</div>

// ✅ Correct - with height
<div style={{ height: '100vh' }}>
  <ContentEditableEditor />
</div>
```

### Redux warnings
```javascript
// ✅ Add this to your store config
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['document/updateContinuousContent'],
      ignoredPaths: ['document.continuousContent']
    }
  })
```

### Styles missing
```javascript
// ✅ Import CSS in your App.js or index.js
import '@prabhath-tharaka/html-editor/dist/html-editor.css';
```

## 📚 Full Documentation

- **[API & Usage Guide](./API_AND_USAGE.md)** - Complete API reference
- **[PageManager API](./PAGEMANAGER_API.md)** - Page navigation component reference
- **[Architecture](./ARCHITECTURE.md)** - System architecture and design patterns
- **[Development Guide](./DEVELOPMENT.md)** - Contributing and development workflow
- **[Testing Guide](./TESTING.md)** - Test setup and best practices

### Recent Updates

#### PageManager Simplification (October 2025)
The PageManager component has been simplified for better reliability:
- **40% code reduction** - Easier to understand and maintain
- **Removed duplicate logic** - Navigation now handled by hooks
- **Better reliability** - Single source of truth for page operations
- **All tests passing** - 93 unit tests + 29 E2E tests

See [PageManager Simplification](./PAGEMANAGER_SIMPLIFICATION.md) for details.

## 🔗 Resources

- **NPM**: [@prabhath-tharaka/html-editor](https://www.npmjs.com/package/@prabhath-tharaka/html-editor)
- **GitHub**: [htmleditor repository](https://github.com/Prabhath-Tharaka/htmleditor)
- **Demo**: Run `npm run dev:demo` in the repo

---

**Happy Coding! 🚀**
