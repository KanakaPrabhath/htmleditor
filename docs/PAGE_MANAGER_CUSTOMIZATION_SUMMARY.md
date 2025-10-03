# Page Manager Customization Feature - Summary

## Overview

Added support for external page management in the HTML Editor library, allowing parent applications to manage pages programmatically via Redux actions instead of using the built-in PageManager UI component.

## Changes Made

### 1. ContentEditableEditor Component Updates

**File**: `packages/html-editor/src/components/editor/ContentEditableEditor.jsx`

**New Prop**: `showPageManager` (boolean, default: `true`)

- When `true`: Renders the built-in PageManager component (default behavior)
- When `false`: Hides the PageManager, allowing external page management

**Updated JSDoc**:
```javascript
/**
 * @param {boolean} props.showPageManager - Whether to show the PageManager component (default: true)
 */
```

**Implementation**:
```jsx
{showPageManager && (
  <div className="page-manager-sidebar">
    {/* PageManager rendering logic */}
  </div>
)}
```

### 2. Documentation

Created comprehensive documentation for external page management:

#### **docs/PAGE_MANAGEMENT.md**
Complete API reference covering:
- How to hide the PageManager component
- Redux store setup
- Available Redux actions for page management
- State structure and selectors
- Complete working examples
- Best practices

#### **docs/EXTERNAL_PAGE_MANAGEMENT_EXAMPLE.md**
Practical examples including:
- Basic custom page manager component
- Advanced page manager with statistics
- Complete app integration
- Styling examples
- Usage patterns

#### **README.md Updates**
- Added `showPageManager` prop documentation
- Reference to page management guide
- Customization options section

### 3. Tests

**File**: `tests/unit/showPageManager.test.jsx`

Comprehensive test suite covering:
- ✅ Default behavior (PageManager visible)
- ✅ Explicit `showPageManager={true}`
- ✅ `showPageManager={false}` hides PageManager
- ✅ Editor remains functional when PageManager is hidden
- ✅ Combined with `showToolbar` and `showSidebar` props
- ✅ All UI components can be hidden independently

### 4. Exports

All Redux actions already exported from `packages/html-editor/src/index.js`:
- `addPageBreak` - Add page break
- `removePageBreak` - Remove page break
- `setActivePage` - Navigate to page
- `updatePageSize` - Change page dimensions
- `updateContinuousContent` - Update content
- `updatePageBoundaries` - Update page boundaries
- `documentReducer` - Document reducer for Redux store

## Usage Examples

### Basic Usage - Hide PageManager

```jsx
import { ContentEditableEditor } from '@prabhath-tharaka/html-editor';

function App() {
  return <ContentEditableEditor showPageManager={false} />;
}
```

### External Page Management

```jsx
import { useDispatch, useSelector } from 'react-redux';
import { 
  addPageBreak, 
  removePageBreak, 
  setActivePage 
} from '@prabhath-tharaka/html-editor';

function CustomPageManager() {
  const dispatch = useDispatch();
  const { pageBoundaries, activePage } = useSelector(
    (state) => state.document
  );
  
  return (
    <div>
      <button onClick={() => dispatch(addPageBreak({ position: 'end' }))}>
        Add Page
      </button>
      
      {pageBoundaries.map((boundary, index) => (
        <button 
          key={boundary.id}
          onClick={() => dispatch(setActivePage(index))}
          className={activePage === index ? 'active' : ''}
        >
          Page {index + 1}
        </button>
      ))}
    </div>
  );
}
```

## Benefits

✅ **Flexibility**: Apps can create custom page management UI  
✅ **Integration**: Works with existing Redux state management  
✅ **Customization**: Full control over page UI/UX  
✅ **Backward Compatible**: Default behavior unchanged  
✅ **Documented**: Comprehensive guides and examples  

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showPageManager` | boolean | `true` | Show/hide built-in PageManager |
| `showToolbar` | boolean | `true` | Show/hide formatting toolbar |
| `showSidebar` | boolean | `true` | Show/hide document sidebar |

### Redux Actions for Page Management

| Action | Payload | Description |
|--------|---------|-------------|
| `addPageBreak` | `{ position: 'end' \| number }` | Add page break |
| `removePageBreak` | `{ pageIndex: number }` | Remove page break |
| `setActivePage` | `number` | Navigate to page |
| `updatePageSize` | `'A4' \| 'Letter' \| 'Legal'` | Change page size |

### Redux State

```javascript
{
  pageBoundaries: [
    { id: 'page-0', pageNumber: 1, top: 0, height: 1123 },
    // ...
  ],
  activePage: 0,
  pageSize: 'A4',
  totalPages: 3,
  continuousContent: '<p>...</p>'
}
```

## Testing

Run the new test suite:
```bash
npm test -- showPageManager.test.jsx
```

All tests verify:
- Default PageManager visibility
- Conditional rendering based on prop
- Editor functionality preserved
- Independent control of UI components

## Migration Guide

For existing users, no changes required. The feature is opt-in:

**Before** (still works):
```jsx
<ContentEditableEditor />
```

**New capability**:
```jsx
<ContentEditableEditor showPageManager={false} />
```

## Documentation Files

1. **docs/PAGE_MANAGEMENT.md** - Complete API reference
2. **docs/EXTERNAL_PAGE_MANAGEMENT_EXAMPLE.md** - Working examples
3. **packages/html-editor/README.md** - Updated with new prop
4. **tests/unit/showPageManager.test.jsx** - Comprehensive tests

## Future Enhancements

Potential additions based on user feedback:
- [ ] Custom page manager component injection via prop
- [ ] Page management event hooks
- [ ] Programmatic page navigation utilities
- [ ] Page statistics helpers
- [ ] Drag-and-drop page reordering

## Conclusion

This feature enables external applications to have full control over page management while maintaining the simplicity of the default behavior. The implementation is:
- **Non-breaking**: Existing code works unchanged
- **Well-documented**: Multiple guides and examples
- **Tested**: Comprehensive test coverage
- **Flexible**: Works with any Redux-based page management approach

External apps can now integrate the editor with their own UI frameworks and design systems while leveraging the powerful Redux-based page management system.
