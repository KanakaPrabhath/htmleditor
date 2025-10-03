# HTML Editor Library - Integration Guide

## Overview

This library provides a React-based WYSIWYG continuous HTML editor with rich text formatting and automatic page break insertion. It's designed to be integrated into other React applications with full Redux state management support.

## Installation

### Option 1: From npm (when published)
```bash
npm install @htmleditor/react-editor
# or
yarn add @htmleditor/react-editor
```

### Option 2: Local Installation (for development)
```bash
# Build the library
cd path/to/htmleditor
npm run build:lib

# In your React project
npm install path/to/htmleditor
```

## Quick Start

### 1. Setup Redux Store

First, integrate the `documentReducer` into your Redux store:

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { documentReducer } from '@htmleditor/react-editor';

export const store = configureStore({
  reducer: {
    document: documentReducer,
    // ... your other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['document/updateContent'],
        ignoredPaths: ['document.pages.content']
      }
    })
});
```

### 2. Wrap Your App with Redux Provider

```javascript
// main.jsx or App.jsx
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      {/* Your app components */}
    </Provider>
  );
}
```

### 3. Import Styles

Import the editor styles in your main CSS or component:

```javascript
import '@htmleditor/react-editor/styles';
```

### 4. Use the Editor Component

```javascript
import { ContentEditableEditor } from '@htmleditor/react-editor';

function MyEditor() {
  return (
    <div>
      <ContentEditableEditor />
    </div>
  );
}
```

## Using with Custom Page Manager

The library allows you to use your own PageManager component from your parent application:

### Create Your Custom PageManager

```javascript
// YourCustomPageManager.jsx
import React from 'react';

const YourCustomPageManager = ({ 
  pages, 
  activePage, 
  pageSize,
  onNavigate, 
  onAddPage,
  onDeletePage,
  onPageSizeChange
}) => {
  return (
    <div className="your-custom-page-manager">
      <h3>Your Custom Page Controls</h3>
      
      {/* Page List */}
      <div>
        {pages.map((page, index) => (
          <button 
            key={page.id}
            onClick={() => onNavigate(index)}
            className={index === activePage ? 'active' : ''}
          >
            Page {index + 1}
          </button>
        ))}
      </div>

      {/* Add/Delete Controls */}
      <button onClick={onAddPage}>Add Page</button>
      
      {/* Page Size Selector */}
      <select 
        value={pageSize} 
        onChange={(e) => onPageSizeChange(e.target.value)}
      >
        <option value="A4">A4</option>
        <option value="Letter">Letter</option>
        <option value="Legal">Legal</option>
      </select>
    </div>
  );
};

export default YourCustomPageManager;
```

### Use Custom PageManager with Editor

```javascript
import { ContentEditableEditor } from '@htmleditor/react-editor';
import YourCustomPageManager from './YourCustomPageManager';

function MyEditor() {
  const handleNavigate = (pageIndex) => {
    console.log('Navigated to page:', pageIndex);
  };

  const handleAddPage = () => {
    console.log('Page added');
  };

  const handleDeletePage = (pageIndex) => {
    console.log('Page deleted:', pageIndex);
  };

  const handlePageSizeChange = (newSize) => {
    console.log('Page size changed:', newSize);
  };

  return (
    <ContentEditableEditor
      pageManagerComponent={<YourCustomPageManager />}
      onNavigatePage={handleNavigate}
      onAddPage={handleAddPage}
      onDeletePage={handleDeletePage}
      onPageSizeChange={handlePageSizeChange}
    />
  );
}
```

## Component Props

### ContentEditableEditor Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pageManagerComponent` | `React.ReactNode` | `null` | Custom PageManager component to render instead of default |
| `onNavigatePage` | `(pageIndex: number) => void` | `undefined` | Callback when user navigates to a page |
| `onAddPage` | `() => void` | `undefined` | Callback when user adds a new page |
| `onDeletePage` | `(pageIndex: number) => void` | `undefined` | Callback when user deletes a page |
| `onPageSizeChange` | `(newSize: string) => void` | `undefined` | Callback when page size changes |
| `showSidebar` | `boolean` | `true` | Whether to show the sidebar with document info |
| `showToolbar` | `boolean` | `true` | Whether to show the formatting toolbar |

### PageManager Interface

Your custom PageManager component will receive these props automatically:

| Prop | Type | Description |
|------|------|-------------|
| `pages` | `Array<{id: string, index: number, size: string}>` | Array of page objects |
| `activePage` | `number` | Index of currently active page |
| `pageSize` | `string` | Current page size ('A4', 'Letter', or 'Legal') |
| `onNavigate` | `(pageIndex: number) => void` | Function to navigate to a page |
| `onAddPage` | `() => void` | Function to add a new page |
| `onDeletePage` | `(pageIndex: number) => void` | Function to delete a page |
| `onPageSizeChange` | `(newSize: string) => void` | Function to change page size |

## Advanced Usage

### Using Individual Components

You can use individual components separately:

```javascript
import { 
  EditorToolbar, 
  Sidebar, 
  ContinuousPageView,
  useFormatting,
  useContinuousReflow
} from '@htmleditor/react-editor';

function CustomEditor() {
  const { currentFormat, formatText } = useFormatting();
  
  return (
    <div>
      <EditorToolbar
        currentFormat={currentFormat}
        pageSize="A4"
        onFormatText={formatText}
        onPageSizeChange={(size) => console.log(size)}
      />
      {/* Your custom editor implementation */}
    </div>
  );
}
```

### Accessing Redux State

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { 
  updateContinuousContent, 
  setActivePage 
} from '@htmleditor/react-editor';

function MyComponent() {
  const dispatch = useDispatch();
  const documentState = useSelector((state) => state.document);
  
  const handleContentChange = (newContent) => {
    dispatch(updateContinuousContent(newContent));
  };
  
  return (
    <div>
      <p>Pages: {documentState.pageBoundaries.length}</p>
      <p>Active: {documentState.activePage + 1}</p>
    </div>
  );
}
```

### Using Custom Hooks

```javascript
import { useFormatting, useContinuousReflow } from '@htmleditor/react-editor';

function MyEditor() {
  const editorRef = useRef(null);
  
  // Formatting hook
  const { currentFormat, formatText } = useFormatting();
  
  // Reflow hook for automatic page breaks
  const { 
    checkAndUpdateBoundaries, 
    getCurrentPage,
    scrollToPage
  } = useContinuousReflow('A4', editorRef);
  
  // Use the hooks in your implementation
}
```

## Constants and Utilities

### Page Dimensions

```javascript
import { PAGE_DIMENSIONS } from '@htmleditor/react-editor';

console.log(PAGE_DIMENSIONS.A4);     // { width: 794, height: 1123 }
console.log(PAGE_DIMENSIONS.Letter); // { width: 816, height: 1056 }
console.log(PAGE_DIMENSIONS.Legal);  // { width: 816, height: 1344 }
```

### Image Storage

```javascript
import { saveImage, getImage, deleteImage } from '@htmleditor/react-editor';

// Save image to localStorage
const imageKey = await saveImage(file);

// Retrieve image
const imageUrl = getImage(imageKey);

// Delete image
deleteImage(imageKey);
```

## Complete Example

```javascript
// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { 
  ContentEditableEditor, 
  documentReducer 
} from '@htmleditor/react-editor';
import '@htmleditor/react-editor/styles';
import YourCustomPageManager from './YourCustomPageManager';

// Setup store
const store = configureStore({
  reducer: {
    document: documentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['document/updateContent'],
        ignoredPaths: ['document.pages.content']
      }
    })
});

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>My Document Editor</h1>
        <ContentEditableEditor
          pageManagerComponent={<YourCustomPageManager />}
          onNavigatePage={(page) => console.log('Navigate:', page)}
          onAddPage={() => console.log('Page added')}
          onDeletePage={(page) => console.log('Delete:', page)}
        />
      </div>
    </Provider>
  );
}

export default App;
```

## TypeScript Support

Type definitions will be generated automatically during the build process (planned for future releases).

## Styling

The library exports its styles separately. You can:

1. Import the default styles: `import '@htmleditor/react-editor/styles'`
2. Override CSS variables in your own stylesheet
3. Provide your own custom styles by not importing the default stylesheet

## Performance Considerations

- The editor is optimized for documents up to 500 pages
- Reflow operations complete within 500ms for large documents
- Maintains 60fps during typing and content changes
- Uses debouncing (300ms) for reflow checks

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ required
- ContentEditable API required

## License

MIT

## Support

For issues, questions, or contributions, please visit the repository.
