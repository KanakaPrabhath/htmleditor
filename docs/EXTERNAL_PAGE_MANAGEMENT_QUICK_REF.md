# Quick Reference - External Page Management

## 🚀 Quick Start

### Hide the Built-in PageManager

```jsx
<ContentEditableEditor showPageManager={false} />
```

## 📦 Redux Setup

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { documentReducer } from '@prabhath-tharaka/html-editor';

export const store = configureStore({
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
```

## 🔧 Common Actions

### Add Page
```javascript
import { addPageBreak } from '@prabhath-tharaka/html-editor';

dispatch(addPageBreak({ position: 'end' }));
```

### Delete Page
```javascript
import { removePageBreak } from '@prabhath-tharaka/html-editor';

dispatch(removePageBreak({ pageIndex: 1 }));
```

### Navigate to Page
```javascript
import { setActivePage } from '@prabhath-tharaka/html-editor';

dispatch(setActivePage(2));
```

### Change Page Size
```javascript
import { updatePageSize } from '@prabhath-tharaka/html-editor';

dispatch(updatePageSize('A4')); // 'A4' | 'Letter' | 'Legal'
```

## 📊 Access State

```javascript
import { useSelector } from 'react-redux';

const { 
  pageBoundaries,    // Array of page boundaries
  activePage,        // Current active page index
  pageSize,          // Current page size
  totalPages,        // Total number of pages
  continuousContent  // Full HTML content
} = useSelector(state => state.document);
```

## 🎯 Minimal Custom Page Manager

```jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPageBreak, setActivePage } from '@prabhath-tharaka/html-editor';

function MinimalPageManager() {
  const dispatch = useDispatch();
  const { pageBoundaries, activePage } = useSelector(state => state.document);
  
  return (
    <div>
      <button onClick={() => dispatch(addPageBreak({ position: 'end' }))}>
        + Add Page
      </button>
      
      {pageBoundaries.map((b, i) => (
        <button 
          key={b.id}
          onClick={() => dispatch(setActivePage(i))}
          style={{ 
            fontWeight: activePage === i ? 'bold' : 'normal' 
          }}
        >
          Page {i + 1}
        </button>
      ))}
    </div>
  );
}
```

## 🎨 All Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showPageManager` | boolean | `true` | Show/hide PageManager |
| `showToolbar` | boolean | `true` | Show/hide toolbar |
| `showSidebar` | boolean | `true` | Show/hide sidebar |
| `onNavigatePage` | function | - | Callback when navigating |
| `onAddPage` | function | - | Callback when adding page |
| `onDeletePage` | function | - | Callback when deleting page |
| `onPageSizeChange` | function | - | Callback when size changes |

## 📖 Full Documentation

- **[Complete Page Management Guide](PAGE_MANAGEMENT.md)**
- **[Working Examples](EXTERNAL_PAGE_MANAGEMENT_EXAMPLE.md)**
- **[Feature Summary](PAGE_MANAGER_CUSTOMIZATION_SUMMARY.md)**

## ⚡ Common Patterns

### Hide All UI, Keep Only Editor
```jsx
<ContentEditableEditor 
  showToolbar={false}
  showSidebar={false}
  showPageManager={false}
/>
```

### Custom Page Manager with Editor
```jsx
<div className="app">
  <CustomPageManager />
  <ContentEditableEditor showPageManager={false} />
</div>
```

### With Event Callbacks
```jsx
<ContentEditableEditor 
  showPageManager={false}
  onNavigatePage={(index) => console.log('Page:', index)}
  onAddPage={() => console.log('Page added')}
  onDeletePage={(index) => console.log('Deleted:', index)}
/>
```

## 🔍 Debug State

```javascript
// Log full document state
const documentState = useSelector(state => state.document);
console.log('Document State:', documentState);

// Watch for page boundary changes
useEffect(() => {
  console.log('Page boundaries updated:', pageBoundaries);
}, [pageBoundaries]);
```

## ⚠️ Important Notes

- ✅ Always keep at least 1 page
- ✅ Page indices are 0-based
- ✅ Redux actions update state synchronously
- ✅ DOM updates may be async (use setTimeout for measurements)
- ✅ `pageBoundaries` updates automatically on content reflow

## 🎓 Learn More

See **[EXTERNAL_PAGE_MANAGEMENT_EXAMPLE.md](EXTERNAL_PAGE_MANAGEMENT_EXAMPLE.md)** for complete working examples with styling.
