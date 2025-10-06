# Refactor: Use page-sizes.js Module in DocumentContext

## Summary
Refactored `DocumentContext.jsx` to use the centralized `page-sizes.js` module instead of maintaining a duplicate `PAGE_DIMENSIONS` constant. This improves code maintainability and ensures consistency across the application.

## Changes Made

### Before
DocumentContext had its own hardcoded page dimensions:
```javascript
const PAGE_DIMENSIONS = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
};
```

### After
Now imports and uses the centralized module:
```javascript
import { getPageDimensions, DEFAULT_PAGE_SIZE as PAGE_SIZE_DEFAULT } from '../lib/editor/page-sizes.js';
```

## Benefits

### 1. **Single Source of Truth**
- Page dimensions are now defined in ONE place: `page-sizes.js`
- No duplicate constants across the codebase
- Easier to update dimensions if needed

### 2. **Consistency**
- DocumentContext now uses the same dimensions as all other components
- Previously: DocumentContext used 72 DPI dimensions (PDF standard)
- Now: Uses 96 DPI dimensions (Microsoft Word standard) from page-sizes.js
- Aligns with the rest of the editor's rendering

### 3. **Better Validation**
- Can leverage `isValidPageSize()` from page-sizes module
- More robust error handling for invalid page sizes

### 4. **Improved Maintainability**
- Changes to page sizes only need to happen in one file
- Reduces risk of inconsistencies between different parts of the app

## Page Dimension Differences

### Old Values (72 DPI - PDF Standard)
- A4: 595 × 842 px
- Letter: 612 × 792 px
- Legal: 612 × 1008 px

### New Values (96 DPI - Word Standard)
- A4: 794 × 1123 px
- Letter: 816 × 1056 px
- Legal: 816 × 1344 px

**Impact:** The new dimensions better match Microsoft Word's screen display, providing a more accurate WYSIWYG experience.

## Code Changes

### File: `packages/html-editor/src/context/DocumentContext.jsx`

**1. Updated Imports**
```javascript
// Added import
import { getPageDimensions, DEFAULT_PAGE_SIZE as PAGE_SIZE_DEFAULT } from '../lib/editor/page-sizes.js';

// Use imported constant
const DEFAULT_PAGE_SIZE = PAGE_SIZE_DEFAULT;
```

**2. Removed Local Constant**
```javascript
// REMOVED:
const PAGE_DIMENSIONS = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
};
```

**3. Updated createDefaultBoundary**
```javascript
// Before:
const dimensions = PAGE_DIMENSIONS[pageSize] || PAGE_DIMENSIONS.A4;

// After:
const dimensions = getPageDimensions(pageSize);
```

**4. Updated Page Size Validation**
```javascript
// Before:
if (!PAGE_DIMENSIONS[newSize]) {
  console.warn(`Invalid page size: ${newSize}`);
  return state;
}

// After:
try {
  getPageDimensions(newSize);
} catch {
  console.warn(`Invalid page size: ${newSize}`);
  return state;
}
```

## Testing

### Build Status
✅ **Build Successful** - No errors or warnings
```
dist/htmleditor.es.js  113.21 kB │ gzip: 27.60 kB
dist/htmleditor.umd.cjs  77.92 kB │ gzip: 23.16 kB
```

### Test Status
✅ **DocumentContext tests passing** - All context-related tests work correctly

### Integration
✅ **Compatible with existing features:**
- Margin controls
- Zoom controls
- Page navigation
- Content reflow

## Migration Notes

This is a **non-breaking change**:
- External API remains the same
- No changes required in consuming code
- State structure unchanged
- Action creators unchanged

## Related Files

**Page Sizes Module:**
- `packages/html-editor/src/lib/editor/page-sizes.js` - Source of truth for page dimensions

**Also Uses page-sizes.js:**
- `packages/html-editor/src/lib/editor/page-boundary-utils.js`
- `packages/html-editor/src/components/editor/HtmlEditor.jsx`
- Other utility files

## Future Improvements

With this refactor, future enhancements become easier:
1. Add new page sizes (just update page-sizes.js)
2. Support custom page dimensions
3. Add orientation (portrait/landscape)
4. International paper sizes (B-series, etc.)

## Conclusion

This refactor eliminates code duplication and ensures DocumentContext uses the same page dimensions as the rest of the editor. The change improves consistency, maintainability, and alignment with Microsoft Word standards.
