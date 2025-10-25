# Insert Row Above/Below - Debugging Guide

## Changes Made

### 1. **Improved Row Insertion Functions** (`table-resize-utils.js`)
- Added comprehensive error handling with console warnings
- Changed from `tableElement.insertBefore()` to `referenceRow.parentNode.insertBefore()`
  - More reliable for targeting the correct parent (tbody, thead, tfoot)
- Changed from `nextElementSibling` to `nextSibling` for better sibling detection
- Added validation checks with detailed error messages
- Both functions now return `null` on failure for better error detection

### 2. **Enhanced TableTooltipMenu Handlers** (`TableTooltipMenu.jsx`)
- Added comprehensive console logging to track execution flow
- Logs show:
  - When handlers are called
  - Current state (selectedRowIndex, tableElement, editorRef)
  - When rows are inserted
  - Content update status
  - Any failures with details

### 3. **Added Cell Selection Logging** (`HtmlEditor.jsx`)
- Logs when cell selection changes
- Logs the selected row index
- Helps verify that row selection is being tracked properly

## How to Test

1. **In the demo app:**
   - Create or paste a table
   - Select a row (drag across 2+ cells in the same row)
   - Look at the browser console for logs
   - Click the green "↑" (Insert Row Above) button
   - Check console for execution logs

2. **Expected Console Output:**

```
onCellSelectionChange: {mode: 'row', cells: Set(3), rowIndex: 0, ...}
Row selected with index: 0
handleInsertRowAbove called {selectedRowIndex: 0, tableElement: <table>, hasEditorRef: true}
Inserting row above index 0
Row inserted successfully, updating content
Updated content length: 1234
```

3. **If something fails, look for:**
- "No table element" - Table reference is lost
- "No row selected" - Row index not being tracked
- "Invalid row index" - Index out of bounds
- "No editor ref available" - Cannot update content

## Key Differences Between Above and Below

### Insert Row Above (rowIndex)
- Inserts a new row **before** the reference row at `rowIndex`
- The selected row stays at its position, new row is above it
- Example: Select row 2, click above → new row becomes row 2, old row 2 becomes row 3

### Insert Row Below (rowIndex)  
- Inserts a new row **after** the reference row at `rowIndex`
- The selected row stays at its position, new row is below it
- Example: Select row 2, click below → row 2 stays same, new row becomes row 3

## Validation Logic

Both functions validate:
1. Table exists and is valid (`isResizableTable`)
2. Row index is within valid range
3. Reference row can be accessed
4. Parent node exists for insertion
5. All DOM manipulations wrapped in try-catch

## Content Synchronization

After inserting a row:
1. New row is added to the DOM
2. Editor reference (`editorRef.current.innerHTML`) is read
3. Context state is updated via `actions.updateContinuousContent()`
4. Undo operation is recorded
5. Table resize overlay is repositioned

## Troubleshooting

If rows still aren't inserting:

1. **Check browser console** - Look for the logs to see where it fails
2. **Verify table structure** - Make sure you're selecting from a valid table
3. **Row selection** - Ensure you're dragging across 2+ cells in the same row
4. **Editor ref** - Check that editorRef is being passed to TableTooltipMenu

## Related Files
- `/lib/src/lib/editor/table-resize-utils.js` - Row insertion logic
- `/lib/src/components/editor/TableTooltipMenu.jsx` - Menu handlers  
- `/lib/src/components/editor/HtmlEditor.jsx` - Selection tracking
- `/lib/src/components/editor/TableCellSelection.jsx` - Cell selection logic
