# Architecture Overview

## System Architecture

The HTML editor follows a modular, component-based architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                        │
├─────────────────────────────────────────────────────────────┤
│  ContentEditableEditor ──────▶ DocumentProvider            │
│         │                          │                       │
│         │                          │                       │
│         ▼                          ▼                       │
│  Editor Components           Context Management            │
└─────────────────────────────────────────────────────────────┘
         │                          │
         │                          │
         ▼                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     Core Layer                              │
├─────────────────────────────────────────────────────────────┤
│  useFormatting Hook   ──────▶ useContinuousReflow Hook     │
│         │                          │                       │
│         │                          │                       │
│         ▼                          ▼                       │
│  Formatting Logic          Page Reflow Logic               │
└─────────────────────────────────────────────────────────────┘
         │                          │
         │                          │
         ▼                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    Utility Layer                            │
├─────────────────────────────────────────────────────────────┤
│  Storage Utilities   ──────▶ Logger Utilities               │
│         │                          │                       │
│         │                          │                       │
│         ▼                          ▼                       │
│  IndexedDB API              Console Logging                │
└─────────────────────────────────────────────────────────────┘
```

## Component Architecture

### ContentEditableEditor Component

The main editor component orchestrates all sub-components:

```javascript
// Simplified component structure
function ContentEditableEditor({
  pageManagerComponent,
  onNavigatePage,
  onAddPage,
  onDeletePage,
  onPageSizeChange,
  showSidebar,
  showToolbar,
  showPageManager,
  ref
}) {
  // State management through context
  const { state, actions } = useDocument();
  
  // Formatting capabilities
  const { currentFormat, formatText } = useFormatting();
  
  // Page reflow logic
  const { updateBoundaries, pageBoundaries } = useContinuousReflow();
  
  return (
    <div className="multi-page-editor">
      {showToolbar && (
        <EditorToolbar 
          currentFormat={currentFormat}
          onFormat={formatText}
        />
      )}
      
      <div className="editor-content">
        {showSidebar && <Sidebar />}
        
        <PageView
          content={state.continuousContent}
          pageBoundaries={pageBoundaries}
          onContentUpdate={actions.updateContinuousContent}
          onBoundariesUpdate={updateBoundaries}
        />
        
        {showPageManager && (
          pageManagerComponent || <PageManager />
        )}
      </div>
    </div>
  );
}
```

## State Management Architecture

### DocumentContext Structure

The context manages all document-related state:

```javascript
// Initial state structure
const initialState = {
  continuousContent: '',        // Raw HTML content
  pageBoundaries: [],           // Page boundary positions
  activePage: 0,                // Current active page
  pageSize: 'A4',               // Current page size
  pages: [],                    // Page metadata
  title: 'Untitled Document'    // Document title
};

// Action types
const ACTION_TYPES = {
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  SET_ACTIVE_PAGE: 'SET_ACTIVE_PAGE',
  UPDATE_PAGE_SIZE: 'UPDATE_PAGE_SIZE',
  ADD_PAGE: 'ADD_PAGE',
  DELETE_PAGE: 'DELETE_PAGE',
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_BOUNDARIES: 'UPDATE_BOUNDARIES'
};

// Reducer logic
function documentReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_CONTENT:
      return { ...state, continuousContent: action.content };
    case ACTION_TYPES.SET_ACTIVE_PAGE:
      return { ...state, activePage: action.pageIndex };
    case ACTION_TYPES.UPDATE_PAGE_SIZE:
      return { ...state, pageSize: action.size };
    case ACTION_TYPES.ADD_PAGE:
      return addPageToState(state);
    case ACTION_TYPES.DELETE_PAGE:
      return deletePageFromState(state, action.pageIndex);
    case ACTION_TYPES.UPDATE_TITLE:
      return { ...state, title: action.title };
    case ACTION_TYPES.UPDATE_BOUNDARIES:
      return { ...state, pageBoundaries: action.boundaries };
    default:
      return state;
  }
}
```

## Hook Architecture

### useFormatting Hook

Manages text formatting through browser execCommand API:

```javascript
function useFormatting() {
  const [currentFormat, setCurrentFormat] = useState(initialFormatState);
  
  const formatText = useCallback((command, value) => {
    // Execute browser formatting command
    document.execCommand(command, false, value);
    
    // Update internal format state
    updateFormatState(command, value);
  }, []);

  const updateFormatState = (command, value) => {
    switch (command) {
      case 'bold':
        setCurrentFormat(prev => ({ ...prev, bold: !prev.bold }));
        break;
      case 'italic':
        setCurrentFormat(prev => ({ ...prev, italic: !prev.italic }));
        break;
      case 'fontSize':
        setCurrentFormat(prev => ({ ...prev, fontSize: value }));
        break;
      // ... other format commands
    }
  };

  return { currentFormat, formatText, resetFormat };
}
```

### useContinuousReflow Hook

Handles automatic page reflow logic:

```javascript
function useContinuousReflow(pageSize, editorRef) {
  const [pageBoundaries, setPageBoundaries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  
  const updateBoundaries = useDebouncedCallback(() => {
    if (!editorRef.current) return;
    
    const contentElement = editorRef.current.getContentElement();
    const boundaries = calculatePageBoundaries(contentElement, pageSize);
    
    setPageBoundaries(boundaries);
    updatePageContentBasedOnBoundaries(boundaries);
  }, 300); // Debounce for performance

  const calculatePageBoundaries = (element, pageSize) => {
    const pageHeight = PAGE_DIMENSIONS[pageSize].height;
    const boundaries = [];
    let currentPosition = 0;
    let pageIndex = 0;
    
    while (currentPosition < element.scrollHeight) {
      const boundary = {
        pageIndex,
        start: currentPosition,
        end: Math.min(currentPosition + pageHeight, element.scrollHeight),
        height: pageHeight
      };
      boundaries.push(boundary);
      currentPosition += pageHeight;
      pageIndex++;
    }
    
    return boundaries;
  };

  return { updateBoundaries, pageBoundaries, currentPage };
}
```

## Data Flow Architecture

### Content Update Flow

```
1. User types in editor
   ↓
2. ContentEditable element updates
   ↓
3. onChange event triggers
   ↓
4. DocumentContext updates continuousContent
   ↓
5. useContinuousReflow detects content change
   ↓
6. Page boundaries recalculated (debounced)
   ↓
7. Page boundaries updated in context
   ↓
8. UI re-renders with new page structure
```

### Formatting Flow

```
1. User clicks format button
   ↓
2. Toolbar calls formatText hook
   ↓
3. execCommand executes browser formatting
   ↓
4. Format state updated internally
   ↓
5. UI reflects format changes
```

### Page Navigation Flow

```
1. User clicks page navigation
   ↓
2. PageManager calls setActivePage action
   ↓
3. Context updates activePage state
   ↓
4. useContinuousReflow scrolls to page
   ↓
5. UI updates active page highlight
```

## Performance Architecture

### Debouncing Strategy

Critical operations are debounced to prevent performance issues:

- **Boundary calculations**: Debounced 300ms
- **Auto-save operations**: Configurable debounce
- **Content analysis**: Debounced based on operation complexity

### Memory Management

```javascript
// Cleanup functions for hooks
useEffect(() => {
  return () => {
    // Cleanup event listeners
    // Clear timeouts
    // Release references
  };
}, []);

// Efficient re-rendering with useCallback and useMemo
const formattedContent = useMemo(() => {
  return processContent(state.continuousContent);
}, [state.continuousContent]);

const handleFormat = useCallback((command) => {
  formatText(command);
}, [formatText]);
```

### Virtualization Strategy

For large documents, the editor implements:

```javascript
// Only render visible pages
const visiblePages = useMemo(() => {
  return pageBoundaries.filter(boundary => 
    isPageVisible(boundary, scrollPosition, viewportHeight)
  );
}, [pageBoundaries, scrollPosition, viewportHeight]);

// Lazy load page content
function renderPageContent(pageIndex) {
  if (!isPageVisible(pageIndex)) {
    return <div className="page-placeholder" />;
  }
  
  return <PageContent content={getPageContent(pageIndex)} />;
}
```

## Storage Architecture

### IndexedDB Integration

```javascript
// Image storage utilities using IndexedDB
async function saveImage(file) {
  try {
    // Validate image size
    if (file.size > MAX_IMAGE_SIZE) {
      throw new Error('Image too large');
    }
    
    const db = await openDatabase();
    const key = `editor-image-${generateUUID()}`;
    const dataUrl = await readFileAsDataURL(file);
    
    const transaction = db.transaction(['images'], 'readwrite');
    const objectStore = transaction.objectStore('images');
    
    const imageData = {
      key,
      dataUrl,
      size: file.size,
      type: file.type,
      timestamp: Date.now()
    };
    
    await objectStore.add(imageData);
    return key;
    
  } catch (error) {
    logger.error('Failed to save image:', error);
    throw error;
  }
}

// Image retrieval with caching
async function getImage(key) {
  const cached = imageCache.get(key);
  if (cached) return cached;
  
  const db = await openDatabase();
  const transaction = db.transaction(['images'], 'readonly');
  const objectStore = transaction.objectStore('images');
  const result = await objectStore.get(key);
  
  if (result) {
    imageCache.set(key, result.dataUrl);
    return result.dataUrl;
  }
  
  return null;
}
```

## Error Handling Architecture

### Error Boundary Implementation

```javascript
class EditorErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    logger.error('Editor Error:', error, errorInfo);
    // Report to error tracking service
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="editor-error">
          <h3>Something went wrong</h3>
          <p>{this.state.error.message}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

### Graceful Degradation

```javascript
// Feature detection
function supportsExecCommand() {
  return typeof document.execCommand === 'function';
}

function supportsIndexedDB() {
  try {
    return typeof indexedDB !== 'undefined';
  } catch (e) {
    return false;
  }
}

// Fallback implementations
async function getImageFallback(key) {
  if (!supportsIndexedDB()) {
    console.warn('IndexedDB not supported, images will not persist');
    return null;
  }
  
  // Continue with normal implementation
  return await getImage(key);
}
```

## Testing Architecture

### Test Strategy

```javascript
// Unit tests for individual components
describe('ContentEditableEditor', () => {
  test('renders without crashing', () => { /* ... */ });
  test('handles content updates', () => { /* ... */ });
});

// Hook tests
describe('useFormatting', () => {
  test('toggles bold formatting', () => { /* ... */ });
  test('handles font size changes', () => { /* ... */ });
});

// E2E tests with Playwright
test('should allow text editing', async ({ page }) => {
  await page.goto('/');
  await page.click('.editor-content');
  await page.keyboard.type('Hello World');
  await expect(page.locator('.editor-content')).toContainText('Hello World');
});

// Performance tests
test('handles large documents', async () => {
  const largeContent = generateLargeContent(10000); // 10k characters
  renderEditorWithContent(largeContent);
  
  // Measure rendering time and memory usage
  expect(performance.memory.usedJSHeapSize).toBeLessThan(MAX_MEMORY);
});
```

This architecture ensures the editor is maintainable, performant, and extensible while providing a robust editing experience.