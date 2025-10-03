# Example: Using HTML Editor Library in Another React App

This example demonstrates how to integrate the `@htmleditor/react-editor` library into your React application with a **custom PageManager** component.

## Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   └── CustomPageManager.jsx    # Your custom page manager
│   ├── store/
│   │   └── store.js                  # Redux store configuration
│   ├── App.jsx                       # Main app component
│   └── main.jsx                      # Entry point
├── package.json
└── ...
```

## Step 1: Install Dependencies

```bash
npm install react react-dom react-redux @reduxjs/toolkit
npm install path/to/htmleditor  # Or from npm when published
```

## Step 2: Setup Redux Store

**`src/store/store.js`**

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { documentReducer } from '@htmleditor/react-editor';

export const store = configureStore({
  reducer: {
    document: documentReducer,
    // Add your other reducers here
    // user: userReducer,
    // settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths because HTML content is non-serializable
        ignoredActions: ['document/updateContent'],
        ignoredPaths: ['document.pages.content', 'document.continuousContent']
      }
    })
});
```

## Step 3: Create Custom PageManager

**`src/components/CustomPageManager.jsx`**

```javascript
import React from 'react';
import './CustomPageManager.css';

/**
 * Your Custom PageManager Component
 * This will receive props automatically from ContentEditableEditor
 */
const CustomPageManager = ({ 
  pages,           // Array of page objects
  activePage,      // Currently active page index
  pageSize,        // Current page size (A4, Letter, Legal)
  onNavigate,      // Function to navigate to a page
  onAddPage,       // Function to add a new page
  onDeletePage,    // Function to delete a page
  onPageSizeChange // Function to change page size
}) => {
  return (
    <div className="custom-page-manager">
      <div className="page-manager-header">
        <h3>Document Pages</h3>
        <span className="page-count">{pages.length} pages</span>
      </div>

      {/* Page Size Selector */}
      <div className="page-size-section">
        <label htmlFor="custom-page-size">Page Size:</label>
        <select
          id="custom-page-size"
          value={pageSize}
          onChange={(e) => onPageSizeChange(e.target.value)}
          className="page-size-select"
        >
          <option value="A4">A4 (210 × 297 mm)</option>
          <option value="Letter">Letter (8.5 × 11 in)</option>
          <option value="Legal">Legal (8.5 × 14 in)</option>
        </select>
      </div>

      {/* Page List */}
      <div className="page-list">
        {pages.map((page, index) => (
          <div
            key={page.id}
            className={`page-item ${index === activePage ? 'active' : ''}`}
          >
            <button
              onClick={() => onNavigate(index)}
              className="page-nav-button"
              aria-label={`Navigate to page ${index + 1}`}
            >
              <span className="page-number">Page {index + 1}</span>
              {index === activePage && (
                <span className="active-indicator">●</span>
              )}
            </button>
            
            {pages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm(`Delete page ${index + 1}?`)) {
                    onDeletePage(index);
                  }
                }}
                className="delete-button"
                aria-label={`Delete page ${index + 1}`}
                title="Delete this page"
              >
                🗑️
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Page Button */}
      <button
        onClick={onAddPage}
        className="add-page-button"
        aria-label="Add new page"
      >
        + Add New Page
      </button>

      {/* Quick Stats */}
      <div className="page-stats">
        <div className="stat">
          <span className="stat-label">Total Pages:</span>
          <span className="stat-value">{pages.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Current:</span>
          <span className="stat-value">{activePage + 1}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomPageManager;
```

**`src/components/CustomPageManager.css`**

```css
.custom-page-manager {
  width: 250px;
  background: #1e1e1e;
  color: #e0e0e0;
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  border-left: 1px solid #333;
}

.page-manager-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #333;
}

.page-manager-header h3 {
  margin: 0;
  font-size: 16px;
  color: #fff;
}

.page-count {
  font-size: 12px;
  color: #888;
}

.page-size-section {
  margin-bottom: 16px;
}

.page-size-section label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  color: #aaa;
}

.page-size-select {
  width: 100%;
  padding: 8px;
  background: #2a2a2a;
  color: #e0e0e0;
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 13px;
}

.page-list {
  margin-bottom: 16px;
  max-height: 400px;
  overflow-y: auto;
}

.page-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.page-nav-button {
  flex: 1;
  padding: 10px 12px;
  background: #2a2a2a;
  color: #e0e0e0;
  border: 1px solid #444;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
}

.page-nav-button:hover {
  background: #333;
  border-color: #555;
}

.page-item.active .page-nav-button {
  background: #0066cc;
  border-color: #0066cc;
  color: #fff;
}

.active-indicator {
  color: #4CAF50;
  font-size: 12px;
}

.delete-button {
  padding: 6px 10px;
  background: #d32f2f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.delete-button:hover {
  background: #f44336;
}

.add-page-button {
  width: 100%;
  padding: 10px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
}

.add-page-button:hover {
  background: #45a049;
}

.page-stats {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #333;
}

.stat {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
}

.stat-label {
  color: #888;
}

.stat-value {
  color: #fff;
  font-weight: 500;
}
```

## Step 4: Main App Component

**`src/App.jsx`**

```javascript
import React, { useState } from 'react';
import { ContentEditableEditor } from '@htmleditor/react-editor';
import '@htmleditor/react-editor/styles';  // Import library styles
import CustomPageManager from './components/CustomPageManager';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Handle page navigation
  const handlePageNavigate = (pageIndex) => {
    console.log('Navigating to page:', pageIndex + 1);
    setCurrentPage(pageIndex);
    // You can add additional logic here (analytics, autosave, etc.)
  };

  // Handle page addition
  const handlePageAdd = () => {
    console.log('New page added');
    // You can trigger notifications, analytics, etc.
  };

  // Handle page deletion
  const handlePageDelete = (pageIndex) => {
    console.log('Page deleted:', pageIndex + 1);
    // You can add undo functionality, confirmations, etc.
  };

  // Handle page size change
  const handlePageSizeChange = (newSize) => {
    console.log('Page size changed to:', newSize);
    // You can save preferences, trigger reformat, etc.
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Document Editor</h1>
        <div className="app-info">
          <span>Current Page: {currentPage + 1}</span>
        </div>
      </header>

      <main className="app-main">
        <ContentEditableEditor
          pageManagerComponent={<CustomPageManager />}
          onNavigatePage={handlePageNavigate}
          onAddPage={handlePageAdd}
          onDeletePage={handlePageDelete}
          onPageSizeChange={handlePageSizeChange}
          showSidebar={true}
          showToolbar={true}
        />
      </main>
    </div>
  );
}

export default App;
```

**`src/App.css`**

```css
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
  color: #e0e0e0;
}

.app-header {
  padding: 16px 24px;
  background: #252525;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header h1 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}

.app-info {
  font-size: 14px;
  color: #888;
}

.app-main {
  flex: 1;
  overflow: hidden;
}
```

## Step 5: Entry Point

**`src/main.jsx`**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Step 6: Run Your App

```bash
npm run dev
```

## Features You Get

✅ **Full WYSIWYG HTML editing** with rich text formatting  
✅ **Automatic page breaks** when content overflows  
✅ **Your custom PageManager** fully integrated  
✅ **Redux state management** for document content  
✅ **Continuous scrolling** with page boundaries  
✅ **Custom hooks** for formatting and reflow  
✅ **Image upload** support with localStorage  
✅ **Multiple page sizes** (A4, Letter, Legal)  

## Advanced: Using Without Custom PageManager

If you don't provide a `pageManagerComponent` prop, the editor will use its default built-in PageManager:

```javascript
<ContentEditableEditor
  showSidebar={true}
  showToolbar={true}
  // pageManagerComponent not provided - will use default PageManager
/>
```

The default PageManager includes:
- Page size selector (A4, Letter, Legal)
- Page list with navigation buttons
- Add new page button
- Delete page buttons (when multiple pages exist)

## Advanced: Accessing Redux State

Access document state directly in any component:

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { updateContinuousContent } from '@htmleditor/react-editor';

function MyComponent() {
  const dispatch = useDispatch();
  const documentState = useSelector((state) => state.document);
  
  const { continuousContent, pageBoundaries, activePage, pageSize } = documentState;
  
  console.log('Total pages:', pageBoundaries.length);
  console.log('Current page:', activePage + 1);
  
  return (
    <div>
      <p>Document has {pageBoundaries.length} pages</p>
      <button onClick={() => dispatch(updateContinuousContent('<p>New content</p>'))}>
        Reset Content
      </button>
    </div>
  );
}
```

## Troubleshooting

### Issue: Styles not loading
**Solution:** Make sure you import the styles:
```javascript
import '@htmleditor/react-editor/styles';
```

### Issue: Redux warnings about serialization
**Solution:** Configure middleware correctly (see store.js example above)

### Issue: Library not found
**Solution:** Make sure you've built the library and installed it correctly:
```bash
cd path/to/htmleditor
npm run build:lib
cd path/to/your-app
npm install path/to/htmleditor
```

## Next Steps

- Customize the toolbar by using `EditorToolbar` component separately
- Add autosave functionality using Redux state
- Implement export to PDF using the page boundaries
- Add collaboration features using the Redux state
- Create custom formatting buttons using `useFormatting` hook

Happy coding! 🎉
