# Troubleshooting Guide

## Common Issues and Solutions

### Editor Not Rendering

**Problem**: Editor component doesn't appear or shows blank screen.

**Solutions**:
1. **Check React Version**: Ensure you're using React 18+ or 19+
   ```bash
   npm list react react-dom
   ```

2. **Verify Context Provider**: Wrap editor with DocumentProvider
   ```jsx
   // ❌ Missing DocumentProvider
   <ContentEditableEditor />
   
   // ✅ Correct usage
   <DocumentProvider>
     <ContentEditableEditor />
   </DocumentProvider>
   ```

3. **Check CSS Import**: Import default styles
   ```jsx
   import '@prabhath-tharaka/html-editor/styles';
   ```

### Formatting Not Working

**Problem**: Formatting buttons (bold, italic, etc.) don't work.

**Solutions**:
1. **Check Browser Support**: Some browsers may have limited execCommand support
   ```javascript
   // Test browser support
   console.log('execCommand supported:', typeof document.execCommand === 'function');
   ```

2. **Verify Editor Focus**: Ensure editor has focus before formatting
   ```javascript
   // Programmatically focus editor
   editorRef.current?.focus();
   ```

3. **Check ContentEditable**: Verify the contenteditable attribute is set
   ```javascript
   // Debug contenteditable state
   const element = document.querySelector('[contenteditable]');
   console.log('ContentEditable element:', element);
   ```

### Page Reflow Issues

**Problem**: Pages don't break correctly or content overflows.

**Solutions**:
1. **Check Page Size Configuration**: Verify page dimensions
   ```javascript
   // Debug page dimensions
   console.log('Current page size:', PAGE_DIMENSIONS['A4']);
   ```

2. **Content Height Issues**: Check for CSS affecting content height
   ```css
   /* Ensure content doesn't have fixed height */
   .continuous-content {
     height: auto !important;
     min-height: 100%;
   }
   ```

3. **Debounce Configuration**: Adjust reflow debounce time if needed
   ```javascript
   // Custom debounce configuration (advanced)
   const { updateBoundaries } = useContinuousReflow();
   // Manually trigger more frequently if needed
   ```

### Performance Problems

**Problem**: Editor becomes slow with large documents.

**Solutions**:
1. **Enable Virtualization**: For very large documents
   ```javascript
   // Implement custom virtualization
   const visiblePages = useMemo(() => {
     return getVisiblePages(pageBoundaries, scrollPosition);
   }, [pageBoundaries, scrollPosition]);
   ```

2. **Optimize Content**: Avoid very complex HTML structures
   ```javascript
   // Simplify content if possible
   const simplifiedContent = content.replace(/<[^>]*>/g, '');
   ```

3. **Memory Management**: Check for memory leaks
   ```javascript
   // Monitor memory usage
   console.log('Memory usage:', performance.memory);
   ```

### Image Storage Issues

**Problem**: Images or data not saving to IndexedDB.

**Solutions**:
1. **Check Browser Support**: Verify IndexedDB is available
   ```javascript
   // Test IndexedDB support
   if (!window.indexedDB) {
     console.error('IndexedDB not supported in this browser');
   } else {
     console.log('IndexedDB is available');
   }
   ```

2. **Verify Database Quota**: IndexedDB has much larger quota than localStorage
   ```javascript
   // Check storage quota (if supported)
   if (navigator.storage && navigator.storage.estimate) {
     navigator.storage.estimate().then(estimate => {
       console.log('Storage used:', estimate.usage, 'bytes');
       console.log('Storage quota:', estimate.quota, 'bytes');
       console.log('Percentage used:', (estimate.usage / estimate.quota * 100).toFixed(2) + '%');
     });
   }
   ```

3. **Image Size Validation**: Large images are validated at 5MB limit
   ```javascript
   // Image size is validated before saving
   // Adjust MAX_IMAGE_SIZE in index-db.js if needed
   if (file.size > 5 * 1024 * 1024) {
     throw new Error('Image exceeds maximum size of 5MB');
   }
   ```

4. **Clear Old Images**: Use clearImages() if database gets too large
   ```javascript
   import { clearImages } from '@prabhath-tharaka/html-editor';
   
   // Clear all stored images
   await clearImages();
   ```

## Debugging Techniques

### Console Debugging

Add debug statements to understand editor behavior:

```javascript
// Debug content changes
const handleContentChange = (htmlContent) => {
  console.log('Content changed:', {
    length: htmlContent.length,
    hasImages: htmlContent.includes('<img'),
    pageCount: Math.ceil(htmlContent.length / 1000) // approximate
  });
  onChange(htmlContent);
};
```

### Performance Monitoring

```javascript
// Monitor rendering performance
const startTime = performance.now();

// Your component rendering...

const endTime = performance.now();
console.log(`Render time: ${endTime - startTime}ms`);

// Monitor memory usage
if (performance.memory) {
  console.log('Memory usage:', {
    used: performance.memory.usedJSHeapSize,
    total: performance.memory.totalJSHeapSize,
    limit: performance.memory.jsHeapSizeLimit
  });
}
```

### Error Boundary Debugging

```javascript
// Enhanced error boundary with debugging
class DebugErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Editor Error:', error);
    console.error('Error Info:', errorInfo);
    
    // Log component state at time of error
    console.log('Component state:', this.state);
    
    // Send to error tracking service
    if (window.trackError) {
      window.trackError(error, errorInfo);
    }
  }
  
  render() {
    // ... rest of error boundary
  }
}
```

## Browser Compatibility

### Supported Browsers

- **Chrome**: 88+ (full support)
- **Firefox**: 85+ (full support) 
- **Safari**: 14+ (full support)
- **Edge**: 88+ (full support)

### Known Browser Issues

**Safari Mobile**: 
- Limited execCommand support
- Touch events may need polyfills

**Firefox**:
- localStorage quotas may be stricter
- CSS rendering differences

**Internet Explorer**:
- Not supported (use modern browsers)

### Polyfills and Fallbacks

For older browser support:

```javascript
// execCommand polyfill (basic)
if (typeof document.execCommand !== 'function') {
  document.execCommand = function(command, showUI, value) {
    // Basic polyfill implementation
    console.warn('execCommand not supported, using polyfill');
    // Implement basic formatting logic
  };
}

// localStorage polyfill
if (typeof localStorage === 'undefined') {
  const storage = {};
  window.localStorage = {
    setItem: (key, value) => storage[key] = value,
    getItem: (key) => storage[key],
    removeItem: (key) => delete storage[key],
    clear: () => storage = {}
  };
}
```

## Common Error Messages

### "Cannot read property 'execCommand' of undefined"

**Cause**: Document not ready or browser doesn't support execCommand.

**Solution**:
```javascript
// Check document readiness
if (typeof document !== 'undefined' && document.execCommand) {
  document.execCommand('bold', false, null);
} else {
  console.warn('execCommand not available');
}
```

### "QuotaExceededError"

**Cause**: IndexedDB quota exceeded or database access issues.

**Solution**:
```javascript
import { clearImages, getAllImageKeys } from '@prabhath-tharaka/html-editor';

// Check current storage usage
async function checkStorageUsage() {
  if (navigator.storage && navigator.storage.estimate) {
    const estimate = await navigator.storage.estimate();
    const percentUsed = (estimate.usage / estimate.quota * 100).toFixed(2);
    console.log(`Storage: ${percentUsed}% used (${estimate.usage} / ${estimate.quota} bytes)`);
    
    if (percentUsed > 80) {
      console.warn('Storage is running low, consider cleaning up images');
    }
  }
  
  // Get count of stored images
  const imageKeys = await getAllImageKeys();
  console.log(`Total images stored: ${imageKeys.length}`);
}

// Clear all images if needed
async function cleanupImages() {
  await clearImages();
  console.log('All images cleared from IndexedDB');
}
```

### "Invalid page index" 

**Cause**: Trying to access non-existent page.

**Solution**:
```javascript
// Validate page index before navigation
function navigateToPage(index) {
  if (index >= 0 && index < pageBoundaries.length) {
    setActivePage(index);
  } else {
    console.warn('Invalid page index:', index);
  }
}
```

## Performance Optimization Tips

### 1. Debounce Expensive Operations

```javascript
import { useDebouncedCallback } from 'use-debounce';

const debouncedUpdate = useDebouncedCallback((content) => {
  updateContinuousContent(content);
}, 300); // 300ms debounce

// Usage
<ContentEditableEditor onChange={debouncedUpdate} />
```

### 2. Use React.memo for Expensive Components

```javascript
const ExpensiveComponent = React.memo(({ content, pageBoundaries }) => {
  // Component logic
  return <div>{/* rendered content */}</div>;
}, (prevProps, nextProps) => {
  // Custom comparison to prevent unnecessary re-renders
  return prevProps.content === nextProps.content && 
         prevProps.pageBoundaries === nextProps.pageBoundaries;
});
```

### 3. Implement Virtualization

```javascript
function VirtualizedPageView({ pages, visibleRange }) {
  return (
    <div>
      {pages.slice(visibleRange.start, visibleRange.end).map((page, index) => (
        <Page key={page.id} content={page.content} />
      ))}
    </div>
  );
}
```

### 4. Optimize Images

```javascript
// Compress images before storage
function compressImage(dataUrl, quality = 0.8) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.src = dataUrl;
  });
}
```

## Getting Help

### Community Resources

- **GitHub Issues**: Check existing issues or create new ones
- **Stack Overflow**: Use tag `html-editor`
- **Discord Community**: Join our developer community

### Reporting Bugs

When reporting bugs, include:

1. **Browser and Version**
2. **React Version**
3. **Error Message and Stack Trace**
4. **Steps to Reproduce**
5. **Expected vs Actual Behavior**

### Example Bug Report

```
Title: Formatting not working in Safari Mobile

Environment:
- Browser: Safari Mobile 15.4
- React: 18.2.0
- Editor: @prabhath-tharaka/html-editor@1.1.0

Steps to Reproduce:
1. Open editor in Safari Mobile
2. Select text
3. Click bold button

Expected: Text becomes bold
Actual: No formatting applied

Console Errors: None
```

This troubleshooting guide should help you resolve most common issues with the HTML editor. For persistent problems, please check the GitHub issues or create a new one with detailed information.