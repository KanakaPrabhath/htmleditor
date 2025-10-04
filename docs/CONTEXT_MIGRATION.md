# Context-Based Architecture Migration Guide

## Overview

The HTML Editor has been refactored from Redux to React Context API + useReducer for better developer experience and easier integration. This provides:

- **Simpler Architecture**: No Redux boilerplate, more React-idiomatic
- **Standalone Components**: PageManager and other components work independently
- **Better External Integration**: Easy to use components in any React app
- **Backward Compatible**: Redux exports still available (deprecated)

## Quick Start (New Apps)

### Full Editor with Built-in State Management

```jsx
import { DocumentProvider, ContentEditableEditor } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function App() {
  return (
    <DocumentProvider>
      <ContentEditableEditor />
    </DocumentProvider>
  );
}
```

### With Custom PageManager from External App

```jsx
import { DocumentProvider, ContentEditableEditor, PageManager } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function App() {
  return (
    <DocumentProvider>
      <ContentEditableEditor pageManagerComponent={<CustomPageManager />} />
    </DocumentProvider>
  );
}
```

### Completely Standalone PageManager (No Editor)

Use PageManager in your own app with your own state management:

```jsx
import { PageManager } from '@prabhath-tharaka/html-editor';
import { useState } from 'react';

function MyApp() {
  const [pages, setPages] = useState([
    { id: 'page-0', pageNumber: 1, top: 0, height: 1123 }
  ]);
  const [activePage, setActivePage] = useState(0);
  const [pageSize, setPageSize] = useState('A4');

  const handleNavigate = (pageIndex) => {
    setActivePage(pageIndex);
    // Your custom navigation logic
  };

  const handleAddPage = () => {
    const newPage = {
      id: `page-${pages.length}`,
      pageNumber: pages.length + 1,
      top: pages[pages.length - 1].top + 1123,
      height: 1123
    };
    setPages([...pages, newPage]);
  };

  const handleDeletePage = (pageIndex) => {
    if (pages.length > 1) {
      setPages(pages.filter((_, idx) => idx !== pageIndex));
    }
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    // Update page dimensions based on newSize
  };

  return (
    <PageManager
      pageBoundaries={pages}
      activePage={activePage}
      pageSize={pageSize}
      onNavigate={handleNavigate}
      onAddPage={handleAddPage}
      onDeletePage={handleDeletePage}
      onPageSizeChange={handlePageSizeChange}
    />
  );
}
```

## API Reference

### DocumentProvider

Provides document state to all child components via Context API.

**Props:**
- `initialState` (optional): Initial document state
  - `title`: string
  - `pageSize`: 'A4' | 'Letter' | 'Legal'
  - `continuousContent`: HTML string
  - `editorMode`: 'continuous' | 'paged'

**Example:**
```jsx
<DocumentProvider initialState={{ title: 'My Document', pageSize: 'Letter' }}>
  <ContentEditableEditor />
</DocumentProvider>
```

### useDocument()

Access the full document context (state + actions).

```jsx
const { state, actions } = useDocument();
```

### useDocumentState()

Access only the document state.

```jsx
const { pageSize, continuousContent, pageBoundaries, activePage } = useDocumentState();
```

### useDocumentActions()

Access only the document actions.

```jsx
const actions = useDocumentActions();

// Available actions:
actions.updateTitle(title);
actions.updateContinuousContent(html);
actions.updatePageBoundaries(boundaries);
actions.setActivePage(pageIndex);
actions.updatePageSize(size);
actions.addPageBreak({ position: 'end' });
actions.removePageBreak({ pageIndex: 0 });
// ... and more
```

### PageManager Component (Standalone)

Completely independent component with no dependencies on state management.

**Props:**
- `pageBoundaries`: Array - `[{id, pageNumber, top, height}, ...]`
- `activePage`: number - Current active page index (0-based)
- `pageSize`: string - 'A4', 'Letter', or 'Legal'
- `onNavigate`: (pageIndex) => void
- `onAddPage`: () => void
- `onDeletePage`: (pageIndex) => void
- `onPageSizeChange`: (newSize) => void

**All props are optional** with sensible defaults:
- `pageBoundaries`: `[{ id: 'page-0', pageNumber: 1 }]`
- `activePage`: `0`
- `pageSize`: `'A4'`

### PageManagerConnected Component

Context-connected wrapper for PageManager. Use this if you're using DocumentProvider.

**Props:**
- `onNavigate`: (pageIndex) => void
- `onAddPage`: () => void
- `onDeletePage`: (pageIndex) => void
- `onPageSizeChange`: (newSize) => void

Automatically gets `pageBoundaries`, `activePage`, and `pageSize` from DocumentContext.

### ContentEditableEditor Component

Main editor component. **Must be wrapped in DocumentProvider.**

**Props:**
- `pageManagerComponent`: ReactElement - Custom PageManager component
- `onNavigatePage`: (pageIndex) => void - Callback when navigating
- `onAddPage`: () => void - Callback when adding page
- `onDeletePage`: (pageIndex) => void - Callback when deleting page
- `onPageSizeChange`: (newSize) => void - Callback when page size changes
- `showSidebar`: boolean - Default: `true`
- `showToolbar`: boolean - Default: `true`
- `showPageManager`: boolean - Default: `true`

## Migration from Redux (Existing Apps)

### Step 1: Replace Redux Provider with DocumentProvider

**Before:**
```jsx
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { documentReducer } from '@prabhath-tharaka/html-editor';

const store = configureStore({
  reducer: { document: documentReducer }
});

<Provider store={store}>
  <ContentEditableEditor />
</Provider>
```

**After:**
```jsx
import { DocumentProvider } from '@prabhath-tharaka/html-editor';

<DocumentProvider>
  <ContentEditableEditor />
</DocumentProvider>
```

### Step 2: Replace Redux Hooks with Context Hooks

**Before:**
```jsx
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '@prabhath-tharaka/html-editor';

const MyComponent = () => {
  const activePage = useSelector(state => state.document.activePage);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(setActivePage(2));
  };
};
```

**After:**
```jsx
import { useDocumentState, useDocumentActions } from '@prabhath-tharaka/html-editor';

const MyComponent = () => {
  const { activePage } = useDocumentState();
  const actions = useDocumentActions();
  
  const handleClick = () => {
    actions.setActivePage(2);
  };
};
```

### Step 3: Remove Redux Dependencies

Update `package.json`:
```json
{
  "dependencies": {
    // Remove these:
    // "react-redux": "^x.x.x",
    // "@reduxjs/toolkit": "^x.x.x"
  }
}
```

Run: `npm install`

## Advanced Usage

### Custom Document State Management

If you want complete control over state:

```jsx
import { PageManager, useContinuousReflow } from '@prabhath-tharaka/html-editor';
import { useState, useReducer } from 'react';

function MyApp() {
  // Your own state management
  const [state, dispatch] = useReducer(myReducer, initialState);
  
  // Use editor hooks with your state
  const editorRef = useRef(null);
  const { updateBoundaries } = useContinuousReflow(state.pageSize, editorRef);
  
  return (
    <>
      <div ref={editorRef} contentEditable onInput={handleInput}>
        {state.content}
      </div>
      
      <PageManager
        pageBoundaries={state.boundaries}
        activePage={state.activePage}
        pageSize={state.pageSize}
        onNavigate={(idx) => dispatch({ type: 'SET_PAGE', payload: idx })}
        onAddPage={() => dispatch({ type: 'ADD_PAGE' })}
        onDeletePage={(idx) => dispatch({ type: 'DELETE_PAGE', payload: idx })}
        onPageSizeChange={(size) => dispatch({ type: 'SET_SIZE', payload: size })}
      />
    </>
  );
}
```

### Programmatic Document Control

```jsx
import { DocumentProvider, useDocumentActions } from '@prabhath-tharaka/html-editor';

function DocumentControls() {
  const actions = useDocumentActions();
  
  const createNewDocument = () => {
    actions.resetDocument();
    actions.updateTitle('New Document');
  };
  
  const addPageBreak = () => {
    actions.addPageBreak({ position: 'end' });
  };
  
  const changeToLetter = () => {
    actions.updatePageSize('Letter');
  };
  
  return (
    <div>
      <button onClick={createNewDocument}>New Document</button>
      <button onClick={addPageBreak}>Add Page Break</button>
      <button onClick={changeToLetter}>Letter Size</button>
    </div>
  );
}

function App() {
  return (
    <DocumentProvider>
      <DocumentControls />
      <ContentEditableEditor />
    </DocumentProvider>
  );
}
```

## Benefits of New Architecture

1. **Simpler Integration**: No Redux setup required
2. **Better Performance**: Context updates only affected components
3. **Standalone Components**: Use PageManager anywhere without full editor
4. **Type Safety**: Easier to add TypeScript support
5. **Smaller Bundle**: No Redux dependency (~10KB saved)
6. **More Flexible**: Mix and match components with your state management

## Deprecation Notice

Redux exports are still available but deprecated:
- `documentReducer`
- Action creators from `documentSlice`

These will be removed in v2.0. Please migrate to Context API.

## Support

For migration issues, please open an issue on GitHub with the "migration" label.
