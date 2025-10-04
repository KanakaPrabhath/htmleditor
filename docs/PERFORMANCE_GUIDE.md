# Performance Guide

## Performance Optimizations Implemented

This document outlines all performance optimizations applied to the HTML Editor library.

## Table of Contents

1. [React Performance Optimizations](#react-performance-optimizations)
2. [DOM Manipulation Optimizations](#dom-manipulation-optimizations)
3. [Memory Management](#memory-management)
4. [Debouncing and Throttling](#debouncing-and-throttling)
5. [Best Practices for Users](#best-practices-for-users)
6. [Performance Metrics](#performance-metrics)

---

## React Performance Optimizations

### Component Memoization

- **PageManager**: Wrapped with `React.memo()` to prevent unnecessary re-renders
- **Callback Stability**: All event handlers use `useCallback` with proper dependencies
- **Value Memoization**: `useMemo` for expensive calculations (dimensions, word count, page boundaries)

### State Management

- **Early Exit Patterns**: Reducers check if state actually changed before returning new state
- **Shallow Comparisons**: Boundary updates compare array length and first/last items
- **Minimal State Updates**: Only update state when values actually change

### Effect Optimization

```javascript
// ✅ GOOD: Combined effects with proper cleanup
useEffect(() => {
  if (!editorRef.current) return;
  
  if (!contentSetRef.current) {
    // Initial setup
    editorRef.current.innerHTML = continuousContent;
    contentSetRef.current = true;
    // ... setup code
  } else {
    // Sync updates
    // ... sync code
  }
}, [continuousContent, updateBoundaries]);

// ❌ BAD: Multiple effects doing similar work
useEffect(() => { /* setup */ }, []);
useEffect(() => { /* sync */ }, [content]);
useEffect(() => { /* boundaries */ }, []);
```

---

## DOM Manipulation Optimizations

### Efficient Measurements

```javascript
// ✅ GOOD: Batch measurements, cache rects
const editorRect = editor.getBoundingClientRect();
const editorScrollTop = editor.scrollTop;

pageBreakElements.forEach((breakEl, index) => {
  const rect = breakEl.getBoundingClientRect();
  const relativeTop = rect.top - editorRect.top + editorScrollTop;
  // ... use relativeTop
});

// ❌ BAD: Repeated measurements
pageBreakElements.forEach((breakEl) => {
  const editorRect = editor.getBoundingClientRect(); // Recalculated every iteration!
  // ...
});
```

### Selector Caching

```javascript
// Constants for selectors
const PAGE_BREAK_SELECTOR = 'page-break, [data-page-break="true"]';

// Use cached selector
const pageBreaks = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
```

### Reflow Prevention

- **Single Page Processing**: Process one page at a time during reflow to prevent complexity
- **Performance Guards**: `isReflowingRef` prevents concurrent reflow operations
- **DOM Update Delays**: Small delays (50ms) allow DOM to settle before measurements

---

## Memory Management

### Ref Usage

```javascript
// ✅ GOOD: Refs for values that shouldn't trigger re-renders
const isNavigatingRef = useRef(false);
const scrollTimeoutRef = useRef(null);
const latestPageSizeRef = useRef(pageSize);

// ❌ BAD: State for transient flags
const [isNavigating, setIsNavigating] = useState(false); // Causes re-render!
```

### Cleanup Patterns

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    // ... work
  }, delay);
  
  // ✅ GOOD: Always cleanup timers
  return () => clearTimeout(timer);
}, [dependencies]);

// Cleanup on unmount
useEffect(() => {
  return () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
  };
}, []);
```

---

## Debouncing and Throttling

### Configured Delays

```javascript
// Performance constants
const INITIAL_BOUNDARY_DELAY = 50;
const BOUNDARY_UPDATE_DELAY = 50;
const DEFAULT_BOUNDARY_DELAY = 300;
const DEFAULT_REFLOW_DELAY = 500;
const SCROLL_DEBOUNCE = 100;
const NAVIGATION_LOCK_TIMEOUT = 500;
```

### Debounce Pattern

```javascript
const checkAndUpdateBoundaries = useCallback((options = {}) => {
  // Clear existing timeout
  if (boundaryTimeoutRef.current) {
    clearTimeout(boundaryTimeoutRef.current);
  }

  const delay = options.delay ?? DEFAULT_BOUNDARY_DELAY;

  // Set new timeout
  boundaryTimeoutRef.current = setTimeout(() => {
    boundaryTimeoutRef.current = null;
    updateBoundaries(options);
  }, delay);
}, [updateBoundaries]);
```

### Performance Targets

| Operation | Target Time | Debounce Delay |
|-----------|-------------|----------------|
| Boundary Calculation | < 100ms | 300ms |
| Reflow Operation | < 500ms | 500ms |
| Scroll Update | < 50ms | 100ms |
| Initial Setup | < 200ms | 50ms |

---

## Best Practices for Users

### Initialization

```javascript
// ✅ GOOD: Wrap in DocumentProvider
import { DocumentProvider, ContentEditableEditor, ErrorBoundary } from '@your-org/html-editor';

function App() {
  return (
    <ErrorBoundary>
      <DocumentProvider>
        <ContentEditableEditor />
      </DocumentProvider>
    </ErrorBoundary>
  );
}
```

### Large Documents

For documents > 100 pages:

1. **Enable Progressive Loading**: Load content in chunks
2. **Virtualization**: Consider virtual scrolling for page list
3. **Lazy Boundaries**: Calculate boundaries on-demand
4. **Debounce Aggressively**: Increase delay values for slower devices

```javascript
// Example: Increase delays for large documents
<ContentEditableEditor
  onChange={debounce(handleChange, 1000)} // Increase from default 500ms
/>
```

### Event Handlers

```javascript
// ✅ GOOD: Debounce expensive operations
const handleChange = useCallback(
  debounce((content) => {
    // Expensive operation
    saveToServer(content);
  }, 1000),
  []
);

// ❌ BAD: Direct expensive operations
const handleChange = (content) => {
  saveToServer(content); // Called on every keystroke!
};
```

---

## Performance Metrics

### Measurement Example

```javascript
import { logger } from '@your-org/html-editor';

const startTime = performance.now();

// ... operation

logger.perf('Boundary Calculation', startTime);
// Output: [PERF] Boundary Calculation: 42.35ms
```

### Key Performance Indicators

Monitor these metrics in your application:

- **Time to First Paint**: < 200ms
- **Input Latency**: < 50ms (time from keystroke to DOM update)
- **Reflow Time**: < 500ms for 500-page documents
- **Boundary Calculation**: < 100ms
- **Page Navigation**: < 300ms (smooth scroll + cursor position)
- **Memory Usage**: < 100MB for 500-page documents

### Performance Testing

```javascript
// Example performance test
describe('Performance', () => {
  it('should calculate boundaries in < 100ms', () => {
    const start = performance.now();
    
    const boundaries = calculatePageBoundaries();
    
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(100);
  });
});
```

---

## Advanced Optimizations

### Code Splitting

```javascript
// Lazy load heavy components
const PageManager = React.lazy(() => import('./PageManager'));

<Suspense fallback={<div>Loading...</div>}>
  <PageManager />
</Suspense>
```

### Web Workers (Future)

Consider offloading heavy computations to Web Workers:

- Content parsing
- Boundary calculations
- Search/replace operations

### Virtual Scrolling (Future)

For extremely large documents (1000+ pages):

```javascript
import { FixedSizeList } from 'react-window';

// Render only visible pages
<FixedSizeList
  height={600}
  itemCount={pages.length}
  itemSize={1123} // A4 height
>
  {PageRow}
</FixedSizeList>
```

---

## Troubleshooting Performance Issues

### Symptom: Slow Typing

**Causes:**
- Reflow triggering too frequently
- Heavy onChange callbacks
- Excessive re-renders

**Solutions:**
```javascript
// Increase reflow delay
triggerAutoReflow(1000); // Default is 500ms

// Debounce onChange
onChange={debounce(handleChange, 500)}
```

### Symptom: Slow Page Navigation

**Causes:**
- Large document with many boundaries
- Heavy scroll calculations

**Solutions:**
```javascript
// Reduce scroll debounce for faster response
const SCROLL_DEBOUNCE = 50; // Default is 100ms
```

### Symptom: Memory Leaks

**Causes:**
- Timers not cleaned up
- Event listeners not removed
- Large state objects retained

**Solutions:**
```javascript
// Always cleanup in useEffect
useEffect(() => {
  const timer = setTimeout(/* ... */);
  return () => clearTimeout(timer);
}, []);
```

---

## Performance Checklist

Before deploying to production:

- [ ] All event handlers use `useCallback`
- [ ] Expensive computations use `useMemo`
- [ ] Heavy components use `React.memo()`
- [ ] All timers have cleanup functions
- [ ] State updates have early exit conditions
- [ ] DOM measurements are batched
- [ ] Selectors are cached in constants
- [ ] Debounce delays are appropriate for use case
- [ ] Error boundaries wrap components
- [ ] PropTypes validate all props (development)
- [ ] Performance metrics are logged (development)

---

## Resources

- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Web Performance Best Practices](https://web.dev/vitals/)
- [JavaScript Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

**Last Updated:** October 4, 2025  
**Version:** 1.1.0
