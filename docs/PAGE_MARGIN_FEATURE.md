# Page Margin Feature Implementation

## Summary
Added a comprehensive page margin control feature that allows users to change page margins similar to Microsoft Word. Users can select from preset margin options (Normal 1", Narrow 0.5", Moderate, Wide, etc.) which dynamically updates the page padding and content reflow calculations.

## Changes Made

### 1. Created Margin Utility Module
**File:** `packages/html-editor/src/lib/editor/margin-utils.js`

- Defined margin presets: NORMAL (1"), NARROW (0.5"), MODERATE (1"/0.75"), WIDE (1"/2"), OFFICE_2003 (1"/1.25")
- Conversion utilities: `inchesToPixels()`, `pixelsToInches()`
- Helper functions: `getMarginPixels()`, `getTotalVerticalMargins()`, `getTotalHorizontalMargins()`
- DPI constant: CSS_DPI = 96 (standard for web/CSS)
- Default preset: NARROW (0.5" all sides = 48px)

### 2. Updated DocumentContext
**File:** `packages/html-editor/src/context/DocumentContext.jsx`

- Added `pageMargins` state property (default: 'NARROW')
- Added `UPDATE_PAGE_MARGINS` action type
- Added `updatePageMargins(margins)` action creator
- Initialized pageMargins in `buildInitialState()`

### 3. Updated PageView Component
**File:** `packages/html-editor/src/components/editor/PageView.jsx`

- Added `pageMargins` prop (default: 'NARROW')
- Changed hardcoded padding to dynamic margin calculation using `getMarginPixels(pageMargins)`
- Updated PropTypes and defaultProps

### 4. Updated PageManager Component
**File:** `packages/html-editor/src/components/editor/PageManager.jsx`

- Added `pageMargins` prop
- Added `onPageMarginsChange` callback prop
- Added margin selector dropdown UI with all preset options
- Updated PropTypes and defaultProps
- Integrated margin controls between Page Size and Zoom controls

### 5. Updated HtmlEditor Component
**File:** `packages/html-editor/src/components/editor/HtmlEditor.jsx`

- Destructured `pageMargins` from documentState
- Added `onPageMarginsChange` prop for parent callbacks
- Created `handlePageMarginsChange()` handler
- Passed `pageMargins` to PageView component
- Passed `pageMargins` and handler to PageManager
- Updated useContinuousReflow hook to accept pageMargins parameter

### 6. Updated useContinuousReflow Hook
**File:** `packages/html-editor/src/hooks/useContinuousReflow.js`

- Added `pageMargins` parameter (default: 'NARROW')
- Added `latestPageMarginsRef` to track current margins
- Updated all reflow functions to use dynamic margins
- Passed pageMargins to `insertPageBreakAtBoundary()` and `checkAndReflow()`

### 7. Updated Utility Files

**File:** `packages/html-editor/src/lib/editor/page-boundary-utils.js`
- Imported margin utilities
- Updated `calculateMaxContentHeight()` to accept `pageMargins` parameter
- Changed calculation from hardcoded CONTENT_PADDING to dynamic `getTotalVerticalMargins(pageMargins)`

**File:** `packages/html-editor/src/lib/editor/content-reflow-utils.js`
- Updated `checkAndReflow()` to accept `pageMargins` parameter
- Passed pageMargins to `calculateMaxContentHeight()`

**File:** `packages/html-editor/src/lib/editor/page-break-utils.js`
- Updated `insertPageBreakAtBoundary()` to accept `pageMargins` parameter
- Passed pageMargins to `calculateMaxContentHeight()`

### 8. Added CSS Styling
**File:** `packages/html-editor/src/components/editor/MultiPageEditor.css`

- Added `.page-margins-controls` styles matching `.page-size-controls`
- Styled label, select dropdown, hover, and focus states
- Consistent design with existing controls

### 9. Created Unit Tests
**File:** `tests/unit/test-margin-utils.test.js`

- 23 comprehensive tests covering all utility functions
- Tests for conversion functions (inches ↔ pixels)
- Tests for margin preset retrieval and validation
- Tests for total margin calculations
- All tests passing ✅

## Usage

### In the Editor UI
1. Open the PageManager sidebar (right side of editor)
2. Find the "Margins:" dropdown below "Page Size:"
3. Select from available presets:
   - Normal (1")
   - Narrow (0.5")
   - Moderate (1" / 0.75")
   - Wide (1" / 2")
   - Office 2003 (1" / 1.25")
4. Page padding updates immediately
5. Content automatically reflows to respect new margins

### Programmatic Usage
```javascript
import { useDocumentActions } from '@kanaka-prabhath/html-editor';

const actions = useDocumentActions();
actions.updatePageMargins('NORMAL'); // Sets 1" margins on all sides
```

### Accessing Margin Values
```javascript
import { getMarginPixels, getTotalVerticalMargins } from '@kanaka-prabhath/html-editor';

const margins = getMarginPixels('NORMAL');
// Returns: { top: 96, bottom: 96, left: 96, right: 96 }

const verticalTotal = getTotalVerticalMargins('NORMAL');
// Returns: 192 (96 + 96)
```

## Technical Details

### DPI Conversion
- Uses CSS standard: 1 inch = 96 pixels
- All margin presets defined in inches, converted to pixels at runtime
- Example: 0.5" × 96 DPI = 48px

### Content Reflow Integration
- Automatic reflow engine accounts for margin changes
- Page height calculation: `pageHeight - getTotalVerticalMargins(pageMargins)`
- Zoom-aware: Margins scale with zoom level
- Page breaks inserted at correct positions based on available content area

### State Management
- Margin preset stored as string (e.g., 'NORMAL', 'NARROW')
- Converted to pixel values only when needed for rendering/calculations
- Persisted in DocumentContext state
- Updates trigger boundary recalculation and reflow

## Benefits

1. **User-Friendly:** Familiar preset names matching Microsoft Word
2. **Flexible:** Easy to add new presets in margin-utils.js
3. **Performant:** Margins calculated once per change, cached in refs
4. **Consistent:** Integrated with existing zoom and page size controls
5. **Type-Safe:** PropTypes validation for all components
6. **Tested:** Comprehensive unit test coverage

## Future Enhancements

Potential improvements for future versions:
- Custom margin input (allow users to enter specific values)
- Mirrored margins for two-sided printing (different left/right on odd/even pages)
- Save/load custom margin presets
- Margin preview visualization
- Import margin settings from Word documents

## Files Modified

### Created Files
1. `packages/html-editor/src/lib/editor/margin-utils.js` (new)
2. `tests/unit/test-margin-utils.test.js` (new)

### Modified Files
1. `packages/html-editor/src/context/DocumentContext.jsx`
2. `packages/html-editor/src/components/editor/PageView.jsx`
3. `packages/html-editor/src/components/editor/PageManager.jsx`
4. `packages/html-editor/src/components/editor/HtmlEditor.jsx`
5. `packages/html-editor/src/components/editor/MultiPageEditor.css`
6. `packages/html-editor/src/hooks/useContinuousReflow.js`
7. `packages/html-editor/src/lib/editor/page-boundary-utils.js`
8. `packages/html-editor/src/lib/editor/content-reflow-utils.js`
9. `packages/html-editor/src/lib/editor/page-break-utils.js`

## Testing

All unit tests passing:
- ✅ 23/23 tests in test-margin-utils.test.js
- ✅ Build successful with no errors
- ✅ Library exports work correctly
- ✅ Integration with existing features verified

## Compatibility

- Works with all page sizes (A4, Letter, Legal)
- Compatible with zoom levels (50%-200%)
- Integrates with automatic reflow system
- No breaking changes to existing API
