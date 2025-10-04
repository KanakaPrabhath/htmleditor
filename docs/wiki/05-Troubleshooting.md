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

### Local Storage Issues

**Problem**: Images or data not saving to localStorage.

**Solutions**:
1. **Check Storage Quota**: localStorage has limited space (~5MB)
   ```javascript
   // Check storage usage
   const used = JSON.stringify(localStorage).length;
   const quota = 5 * 1024 * 1024; // 5MB
   console.log('Storage used:', used, 'bytes');
   ```

2. **Verify Browser Support**: Some environments restrict localStorage
   ```javascript
   // Test localStorage support
   try {
     localStorage.setItem('test', 'test');
     localStorage.removeItem('test');
     console.log('localStorage supported');
   } catch (e) {
     console.log('localStorage not supported:', e);
   }
   ```

3. **Image Size Validation**: Large images may exceed limits
   ```javascript
   // Check image size before saving
   if (dataUrl.length > 1 * 1024 * 1024) { // 1MB
     throw new Error('Image too large for localStorage');
   }
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

**Cause**: localStorage quota exceeded.

**Solution**:
```javascript
// Implement storage cleanup
function cleanupStorage() {
  const keys = Object.keys(localStorage);
  const imageKeys = keys.filter(key => key.startsWith('image_'));
  
  // Remove oldest images first
  imageKeys.sort((a, b) => {
    const metaA = JSON.parse(localStorage.getItem('image_metadata') || '{}')[a];
    const metaB = JSON.parse(localStorage.getItem('image_metadata') || '{}')[b];
    return (metaA?.timestamp || 0) - (metaB?.timestamp || 0);
  });
  
  // Remove excess images
  while (imageKeys.length > MAX_IMAGES) {
    const key = imageKeys.shift();
    localStorage.removeItem(key);
  }
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