# External Page Management Example

This example demonstrates how to use the HTML Editor library with custom page management using Redux actions.

## Complete Working Example

### 1. Setup Redux Store

**`src/store.js`**
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

### 2. Create Custom Page Manager

**`src/components/CustomPageManager.jsx`**
```jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addPageBreak, 
  removePageBreak, 
  setActivePage, 
  updatePageSize 
} from '@prabhath-tharaka/html-editor';
import './CustomPageManager.css';

function CustomPageManager() {
  const dispatch = useDispatch();
  const { pageBoundaries, activePage, pageSize, totalPages } = useSelector(
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
      <div className="page-manager-header">
        <h3>Document Pages</h3>
        <span className="page-count">{totalPages} pages</span>
      </div>
      
      <div className="page-size-control">
        <label htmlFor="page-size">Page Size:</label>
        <select 
          id="page-size"
          value={pageSize} 
          onChange={handlePageSizeChange}
        >
          <option value="A4">A4 (210 × 297 mm)</option>
          <option value="Letter">Letter (8.5 × 11 in)</option>
          <option value="Legal">Legal (8.5 × 14 in)</option>
        </select>
      </div>
      
      <div className="page-actions">
        <button 
          className="btn btn-primary"
          onClick={handleAddPage}
          title="Add new page"
        >
          ➕ Add Page
        </button>
      </div>
      
      <div className="page-list">
        {pageBoundaries.map((boundary, index) => (
          <div 
            key={boundary.id}
            className={`page-item ${activePage === index ? 'active' : ''}`}
          >
            <button 
              className="page-button"
              onClick={() => handleNavigate(index)}
            >
              <span className="page-number">Page {index + 1}</span>
              <span className="page-height">{boundary.height}px</span>
            </button>
            
            {pageBoundaries.length > 1 && (
              <button 
                className="btn-delete"
                onClick={() => handleDeletePage(index)}
                title="Delete page"
              >
                🗑️
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

### 3. Style the Custom Page Manager

**`src/components/CustomPageManager.css`**
```css
.custom-page-manager {
  width: 250px;
  background: #f5f5f5;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.page-manager-header {
  padding: 16px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-manager-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.page-count {
  font-size: 12px;
  color: #666;
  background: #e0e0e0;
  padding: 4px 8px;
  border-radius: 12px;
}

.page-size-control {
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
}

.page-size-control label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}

.page-size-control select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  font-size: 14px;
}

.page-actions {
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
}

.btn {
  width: 100%;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.page-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.page-item {
  margin-bottom: 8px;
  display: flex;
  gap: 8px;
  align-items: stretch;
}

.page-item.active .page-button {
  background: #007bff;
  color: white;
  border-color: #0056b3;
}

.page-button {
  flex: 1;
  padding: 12px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.page-button:hover {
  border-color: #007bff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-number {
  font-weight: 600;
  font-size: 14px;
}

.page-height {
  font-size: 11px;
  color: #666;
}

.page-item.active .page-height {
  color: rgba(255, 255, 255, 0.8);
}

.btn-delete {
  width: 36px;
  height: auto;
  padding: 0;
  background: #dc3545;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
}

.btn-delete:hover {
  background: #c82333;
  transform: scale(1.05);
}
```

### 4. Main App Component

**`src/App.jsx`**
```jsx
import React from 'react';
import { Provider } from 'react-redux';
import { ContentEditableEditor } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';
import { store } from './store';
import CustomPageManager from './components/CustomPageManager';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>My Custom Document Editor</h1>
          <p>Using external page management with Redux</p>
        </header>
        
        <div className="editor-layout">
          <CustomPageManager />
          <ContentEditableEditor showPageManager={false} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
```

### 5. App Styles

**`src/App.css`**
```css
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
}

.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
}

.app-header p {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

.editor-layout {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* Override editor container to fit in our layout */
.editor-layout .multi-page-editor {
  flex: 1;
  display: flex;
  flex-direction: column;
}
```

## Advanced Example: Page Management with Statistics

**`src/components/AdvancedPageManager.jsx`**
```jsx
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addPageBreak, 
  removePageBreak, 
  setActivePage, 
  updatePageSize 
} from '@prabhath-tharaka/html-editor';

function AdvancedPageManager() {
  const dispatch = useDispatch();
  const { 
    pageBoundaries, 
    activePage, 
    pageSize, 
    totalPages,
    continuousContent 
  } = useSelector((state) => state.document);
  
  // Calculate statistics for each page
  const pageStats = useMemo(() => {
    if (!continuousContent) return [];
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = continuousContent;
    
    const pageBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
    const stats = [];
    
    let currentNode = tempDiv.firstChild;
    let pageContent = '';
    let pageIndex = 0;
    
    while (currentNode) {
      if (currentNode.nodeName === 'PAGE-BREAK' || 
          currentNode.getAttribute?.('data-page-break') === 'true') {
        // Calculate stats for current page
        const text = pageContent.replace(/<[^>]*>/g, ' ');
        const words = (text.match(/\b\w+\b/g) || []).length;
        const chars = text.length;
        
        stats.push({ pageIndex, words, chars });
        
        pageContent = '';
        pageIndex++;
      } else {
        pageContent += currentNode.textContent || currentNode.outerHTML || '';
      }
      
      currentNode = currentNode.nextSibling;
    }
    
    // Last page
    if (pageContent) {
      const text = pageContent.replace(/<[^>]*>/g, ' ');
      const words = (text.match(/\b\w+\b/g) || []).length;
      const chars = text.length;
      stats.push({ pageIndex, words, chars });
    }
    
    return stats;
  }, [continuousContent]);
  
  const handleAddPage = () => {
    dispatch(addPageBreak({ position: 'end' }));
  };
  
  const handleDeletePage = (pageIndex) => {
    if (pageBoundaries.length <= 1) {
      alert('Cannot delete the only page');
      return;
    }
    
    if (confirm(`Delete page ${pageIndex + 1}? This will merge its content with the previous page.`)) {
      dispatch(removePageBreak({ pageIndex }));
    }
  };
  
  const handleNavigate = (pageIndex) => {
    dispatch(setActivePage(pageIndex));
  };
  
  const handlePageSizeChange = (e) => {
    dispatch(updatePageSize(e.target.value));
  };
  
  return (
    <div className="advanced-page-manager">
      <div className="header">
        <h3>Pages ({totalPages})</h3>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
        </select>
      </div>
      
      <button onClick={handleAddPage} className="add-page-btn">
        ➕ Add Page
      </button>
      
      <div className="page-list">
        {pageBoundaries.map((boundary, index) => {
          const stats = pageStats[index] || { words: 0, chars: 0 };
          
          return (
            <div 
              key={boundary.id}
              className={`page-card ${activePage === index ? 'active' : ''}`}
            >
              <div className="page-header" onClick={() => handleNavigate(index)}>
                <span className="page-num">Page {index + 1}</span>
                {pageBoundaries.length > 1 && (
                  <button 
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletePage(index);
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>
              
              <div className="page-stats">
                <div className="stat">
                  <span className="label">Words:</span>
                  <span className="value">{stats.words}</span>
                </div>
                <div className="stat">
                  <span className="label">Characters:</span>
                  <span className="value">{stats.chars}</span>
                </div>
                <div className="stat">
                  <span className="label">Height:</span>
                  <span className="value">{boundary.height}px</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdvancedPageManager;
```

## Usage Notes

1. **Redux Store Setup**: Make sure to configure the Redux store with the document reducer and appropriate middleware for serialization.

2. **Available Actions**:
   - `addPageBreak({ position })` - Add page break at 'end' or specific position
   - `removePageBreak({ pageIndex })` - Remove page break at index
   - `setActivePage(index)` - Navigate to page
   - `updatePageSize(size)` - Change page size (A4/Letter/Legal)
   - `updateContinuousContent(html)` - Update content directly

3. **State Access**: Use `useSelector` to access document state:
   ```javascript
   const { 
     pageBoundaries,    // Array of page boundary objects
     activePage,        // Current active page index
     pageSize,          // Current page size
     totalPages,        // Total number of pages
     continuousContent  // Full HTML content
   } = useSelector(state => state.document);
   ```

4. **Event Callbacks**: The editor still fires callback props even with `showPageManager={false}`:
   ```jsx
   <ContentEditableEditor
     showPageManager={false}
     onNavigatePage={(index) => console.log('Navigated to', index)}
     onAddPage={() => console.log('Page added')}
     onDeletePage={(index) => console.log('Deleted page', index)}
   />
   ```

## Benefits of External Page Management

✅ **Full Control** - Customize UI/UX to match your app  
✅ **Additional Features** - Add statistics, previews, custom actions  
✅ **Integration** - Connect with your app's existing state management  
✅ **Flexibility** - Show page manager anywhere in your layout  
✅ **Branding** - Style to match your design system  

## See Also

- [Page Management Guide](../docs/PAGE_MANAGEMENT.md) - Complete API reference
- [Redux Integration](../docs/LIBRARY_USAGE.md) - Redux store setup
- [Component API](../README.md) - All available props
