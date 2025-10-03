# Quick Start Guide - Continuous Editor

## For Developers

### Running the Application
```bash
npm run dev          # Start dev server at http://localhost:5173
npm test             # Run unit tests
npm run build        # Production build
```

### Key Files to Understand

#### 1. Main Editor Component
**File**: `src/components/editor/ContentEditableEditor.jsx`
- Entry point for editor
- Integrates toolbar, sidebar, page manager
- Uses `useContinuousReflow` hook
- Single `ContinuousPageView` component

#### 2. Continuous Page View
**File**: `src/components/editor/ContinuousPageView.jsx`
- Single contenteditable surface
- Visual page boundaries overlay
- No hard page breaks

#### 3. Boundary Calculation Hook
**File**: `src/hooks/useContinuousReflow.js`
- Calculates where page lines should appear
- Based on content height measurements
- Debounced for performance

#### 4. Redux State
**File**: `src/store/slices/documentSlice.js`
- `continuousContent`: Single HTML string
- `pageBoundaries`: Array of boundary positions
- `editorMode`: 'continuous' or 'paged'

### Common Tasks

#### Add a New Formatting Button
```javascript
// In EditorToolbar.jsx
<button onClick={() => onFormatText('formatName')}>
  Icon
</button>

// In useFormatting.js
const formatText = (format) => {
  if (format === 'formatName') {
    document.execCommand('commandName', false, value);
  }
};
```

#### Modify Page Dimensions
```javascript
// In ContentEditableEditor.jsx or useContinuousReflow.js
const PAGE_DIMENSIONS = {
  A4: { width: 794, height: 1123 },    // Modify these
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
```

#### Change Content Padding
```javascript
// In ContinuousPageView.jsx
const padding = {
  top: 60,      // Modify these values
  bottom: 100,
  left: 72,
  right: 72
};
```

#### Adjust Boundary Calculation Timing
```javascript
// In useContinuousReflow.js
const delay = 300; // Change this value (milliseconds)
```

### Debugging Tips

#### View Current State
```javascript
// In browser console
const editor = document.querySelector('[data-testid="continuous-editor"]');
console.log({
  content: editor.innerHTML,
  height: editor.scrollHeight,
  isEditable: editor.contentEditable
});
```

#### Force Boundary Recalculation
```javascript
// In ContentEditableEditor.jsx, add:
useEffect(() => {
  updateBoundaries();
}, [/* trigger dependency */]);
```

#### Check Page Boundaries
```javascript
// In Redux DevTools or console
store.getState().document.pageBoundaries
```

### Architecture Overview

```
ContentEditableEditor (Main)
├── EditorToolbar (Formatting controls)
├── Sidebar (Stats, outline)
├── ContinuousPageView (Editor surface)
│   ├── contenteditable div (Single content)
│   └── Page boundary indicators (Visual only)
└── PageManager (Navigation)

Hooks:
├── useFormatting (Text formatting)
├── useContinuousReflow (Boundary calc)
└── [Not used: useCursorPosition, useReflow]
```

### Event Flow

```
User types
    ↓
onInput event
    ↓
handleInput(event)
    ↓
dispatch(updateContinuousContent(html))
    ↓
Redux state updated
    ↓
checkAndUpdateBoundaries() [debounced]
    ↓
calculatePageBoundaries()
    ↓
dispatch(updatePageBoundaries(boundaries))
    ↓
Component re-renders
```

### Performance Monitoring

#### Track Boundary Calculation Time
```javascript
// In useContinuousReflow.js
const calculatePageBoundaries = useCallback((options = {}) => {
  console.time('calculateBoundaries');
  // ... calculation logic ...
  console.timeEnd('calculateBoundaries');
}, []);
```

#### Monitor Content Size
```javascript
// Add to ContentEditableEditor.jsx
useEffect(() => {
  console.log({
    contentLength: continuousContent.length,
    pageCount: pageBoundaries.length,
    wordCount: wordCount
  });
}, [continuousContent, pageBoundaries, wordCount]);
```

### Common Issues & Solutions

#### Issue: Page boundaries not showing
**Solution**: Check that `updateBoundaries()` is called after content is set
```javascript
setTimeout(() => updateBoundaries(), 100);
```

#### Issue: Content not appearing
**Solution**: Verify Redux state has `continuousContent` initialized
```javascript
// Check in documentSlice.js initialState
continuousContent: EMPTY_PARAGRAPH // '<p><br></p>'
```

#### Issue: Typing feels laggy
**Solution**: Increase debounce delay
```javascript
const delay = 500; // Increase from 300ms
```

#### Issue: Page count incorrect
**Solution**: Force recalculation after content change
```javascript
useEffect(() => {
  updateBoundaries({ delay: 0 });
}, [continuousContent]);
```

### Testing

#### Unit Test Example
```javascript
import { renderHook } from '@testing-library/react';
import { useContinuousReflow } from './useContinuousReflow';

test('calculates page boundaries correctly', () => {
  const editorRef = { current: { scrollHeight: 2000 } };
  const { result } = renderHook(() => 
    useContinuousReflow('A4', editorRef)
  );
  
  const boundaries = result.current.calculatePageBoundaries();
  expect(boundaries.length).toBeGreaterThan(0);
});
```

#### Integration Test
```javascript
// Test typing and boundary update
test('updates boundaries after typing', async () => {
  const { getByTestId } = render(<ContentEditableEditor />);
  const editor = getByTestId('continuous-editor');
  
  // Type content
  fireEvent.input(editor, { 
    target: { innerHTML: '<p>Test content</p>' } 
  });
  
  // Wait for debounce
  await waitFor(() => {
    // Check boundaries updated
  });
});
```

### Customization Examples

#### Add Page Background Color
```javascript
// In ContinuousPageView.jsx
<div
  ref={editorRef}
  contentEditable={true}
  style={{
    ...existingStyles,
    backgroundColor: '#fffef0' // Cream color
  }}
>
```

#### Add Line Numbers
```javascript
// Create new component LineNumbers.jsx
const LineNumbers = ({ lineCount }) => (
  <div className="line-numbers">
    {Array.from({ length: lineCount }, (_, i) => (
      <div key={i}>{i + 1}</div>
    ))}
  </div>
);
```

#### Custom Page Size
```javascript
// Add to PAGE_DIMENSIONS
const PAGE_DIMENSIONS = {
  // ... existing sizes ...
  Custom: { width: 1000, height: 1400 }
};

// Add to select options in PageManager
<option value="Custom">Custom</option>
```

## For Users

### Using the Editor

#### Typing
- Click anywhere in the white page area to start typing
- Text flows continuously across pages
- No need to manually create new pages

#### Formatting
- Select text and click toolbar buttons
- **B**: Bold
- **I**: Italic  
- **U**: Underline
- Font family and size dropdowns

#### Navigation
- Scroll normally to move between pages
- Click page numbers in right sidebar to jump to specific pages
- Active page shown in left sidebar statistics

#### Page Settings
- Change page size (A4, Letter, Legal) from toolbar or right sidebar
- Pages automatically reflow to new size

#### Viewing Stats
- Left sidebar shows:
  - Total page count
  - Word count
  - Current active page

### Keyboard Shortcuts
- **Ctrl+B**: Bold
- **Ctrl+I**: Italic
- **Ctrl+U**: Underline
- **Ctrl+Z**: Undo
- **Ctrl+Y**: Redo
- **Enter**: New paragraph
- **Shift+Enter**: Line break

## Need Help?

### Resources
- Full documentation: `docs/CONTINUOUS_MODE_IMPLEMENTATION.md`
- Code architecture: `.github/copilot-instructions.md`
- Issue tracker: GitHub Issues

### Support
For bugs or feature requests, create an issue with:
1. Description of the problem
2. Steps to reproduce
3. Expected vs actual behavior
4. Browser and OS version

---

**Last Updated**: October 3, 2025
