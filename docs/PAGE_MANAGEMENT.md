# Page Management Guide

This guide explains how external applications can manage pages in the HTML Editor library using Redux actions directly, without relying on the built-in PageManager component.

## Overview

The `ContentEditableEditor` component now supports a `showPageManager` prop that allows you to hide the built-in PageManager UI and manage pages programmatically using Redux actions from the `documentSlice`.

## Hiding the PageManager

To hide the built-in PageManager component:

```jsx
import { ContentEditableEditor } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function App() {
  return (
    <ContentEditableEditor showPageManager={false} />
  );
}
```

## Managing Pages with Redux Actions

When `showPageManager={false}`, you can manage pages using Redux actions from your own components or application logic.

### 1. Setup Redux Store

First, ensure your app's Redux store includes the document slice:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { documentSlice } from '@prabhath-tharaka/html-editor';

export const store = configureStore({
  reducer: {
    document: documentSlice.reducer
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

### 2. Import Actions

Import the Redux actions you need:

```javascript
import {
  addPageBreak,
  removePageBreak,
  setActivePage,
  updatePageSize,
  updateContinuousContent,
  updatePageBoundaries
} from '@prabhath-tharaka/html-editor';
```

### 3. Available Page Management Actions

#### Add a Page Break

Add a page break at the end of the document:

```javascript
import { useDispatch } from 'react-redux';
import { addPageBreak } from '@prabhath-tharaka/html-editor';

function MyCustomPageManager() {
  const dispatch = useDispatch();
  
  const handleAddPage = () => {
    dispatch(addPageBreak({ position: 'end' }));
  };
  
  return <button onClick={handleAddPage}>Add Page</button>;
}
```

Add a page break at a specific position:

```javascript
// Insert at character position 500
dispatch(addPageBreak({ position: 500 }));
```

#### Remove a Page Break

Remove a page break by page index:

```javascript
import { removePageBreak } from '@prabhath-tharaka/html-editor';

const handleDeletePage = (pageIndex) => {
  dispatch(removePageBreak({ pageIndex }));
};
```

#### Navigate to a Page

Set the active page:

```javascript
import { setActivePage } from '@prabhath-tharaka/html-editor';

const handleNavigate = (pageIndex) => {
  dispatch(setActivePage(pageIndex));
};
```

#### Change Page Size

Update the page size (A4, Letter, Legal):

```javascript
import { updatePageSize } from '@prabhath-tharaka/html-editor';

const handlePageSizeChange = (newSize) => {
  dispatch(updatePageSize(newSize));
};
```

### 4. Access Page Information

Use Redux selectors to access page information:

```javascript
import { useSelector } from 'react-redux';

function MyCustomPageManager() {
  const { 
    pageBoundaries, 
    activePage, 
    pageSize, 
    totalPages 
  } = useSelector((state) => state.document);
  
  return (
    <div>
      <p>Total Pages: {totalPages}</p>
      <p>Active Page: {activePage + 1}</p>
      <p>Page Size: {pageSize}</p>
      
      {pageBoundaries.map((boundary, index) => (
        <div key={boundary.id}>
          Page {index + 1}: {boundary.height}px
        </div>
      ))}
    </div>
  );
}
```

## Complete Example

Here's a complete example of a custom page manager component:

```jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addPageBreak, 
  removePageBreak, 
  setActivePage, 
  updatePageSize 
} from '@prabhath-tharaka/html-editor';

function CustomPageManager() {
  const dispatch = useDispatch();
  const { pageBoundaries, activePage, pageSize } = useSelector(
    (state) => state.document
  );
  
  const handleAddPage = () => {
    dispatch(addPageBreak({ position: 'end' }));
  };
  
  const handleDeletePage = (pageIndex) => {
    if (pageBoundaries.length <= 1) {
      alert('Cannot delete the only page');
      return;
    }
    dispatch(removePageBreak({ pageIndex }));
  };
  
  const handleNavigate = (pageIndex) => {
    dispatch(setActivePage(pageIndex));
  };
  
  const handlePageSizeChange = (e) => {
    dispatch(updatePageSize(e.target.value));
  };
  
  return (
    <div className="custom-page-manager">
      <div>
        <label>Page Size:</label>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
        </select>
      </div>
      
      <button onClick={handleAddPage}>Add Page</button>
      
      <div>
        {pageBoundaries.map((boundary, index) => (
          <div 
            key={boundary.id}
            className={activePage === index ? 'active' : ''}
          >
            <button onClick={() => handleNavigate(index)}>
              Page {index + 1}
            </button>
            {pageBoundaries.length > 1 && (
              <button onClick={() => handleDeletePage(index)}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomPageManager;
```

## Usage with ContentEditableEditor

```jsx
import { ContentEditableEditor } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';
import CustomPageManager from './CustomPageManager';

function App() {
  return (
    <div className="app">
      <CustomPageManager />
      <ContentEditableEditor showPageManager={false} />
    </div>
  );
}

export default App;
```

## Document State Structure

The document state in Redux has the following structure:

```javascript
{
  id: 'uuid',
  title: 'Document Title',
  pageSize: 'A4',
  activePage: 0,
  totalPages: 3,
  continuousContent: '<p>Content with <page-break> tags</p>',
  pageBoundaries: [
    { id: 'page-0', pageNumber: 1, top: 0, height: 1123 },
    { id: 'page-1', pageNumber: 2, top: 1200, height: 1123 },
    { id: 'page-2', pageNumber: 3, top: 2400, height: 1123 }
  ],
  createdAt: '2025-10-03T00:00:00.000Z',
  updatedAt: '2025-10-03T00:00:00.000Z'
}
```

## Additional Props

While managing pages externally, you can still use callback props for coordination:

```jsx
<ContentEditableEditor
  showPageManager={false}
  onNavigatePage={(pageIndex) => console.log('Navigated to page:', pageIndex)}
  onAddPage={() => console.log('Page added')}
  onDeletePage={(pageIndex) => console.log('Page deleted:', pageIndex)}
  onPageSizeChange={(size) => console.log('Page size changed:', size)}
/>
```

## Best Practices

1. **Always check page count before deleting**: Ensure at least one page remains
2. **Use debouncing**: When responding to user input that triggers page operations
3. **Validate page indices**: Ensure page indices are within valid range before navigation
4. **Handle async operations**: Redux actions are synchronous, but DOM updates may be async
5. **Monitor pageBoundaries**: This array updates automatically as content reflows

## Notes

- The continuous mode automatically manages page breaks based on content overflow
- Page boundaries are calculated based on page dimensions and content height
- When you add a page break manually, the content reflows automatically
- Deleting a page break merges the content with the previous page
