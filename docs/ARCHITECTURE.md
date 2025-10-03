## HTML Editor Architecture

This project is a React-based WYSIWYG continuous HTML editor with automatic page boundaries and reflow, built as a monorepo with a reusable library and a demo app.

### Core Design
- Single continuous contenteditable surface with visual page boundaries
- Automatic reflow inserts <page-break> tags when content exceeds page height
- Content stored as a single HTML string in Redux: continuousContent
- Page boundaries stored as [{ id, pageNumber, top, height }]

### State Model (Redux Toolkit)
```js
{
  id: 'uuid',
  title: 'Untitled Document',
  pageSize: 'A4',
  activePage: 0,
  editorMode: 'continuous',
  continuousContent: '<p><br></p>',
  pageBoundaries: [
    { id: 'page-0', pageNumber: 1, top: 0, height: 1123 }
  ]
}
```

### Key Pieces
- Components
  - ContentEditableEditor: Orchestrates editing, toolbar, sidebar, and optional PageManager
  - ContinuousPageView: The single contenteditable surface with visual page overlays
  - EditorToolbar, Sidebar, PageManager: Optional UI pieces
- Hooks
  - useFormatting: Text formatting state and document.execCommand helpers
  - useContinuousReflow: Detect overflow, insert <page-break>, and compute boundaries

### Reflow and Boundaries
- Overflow check: compare accumulated child heights against max content height
- Insert <page-break data-page-break="true" data-page-number="N" /> before overflow element
- Recompute boundaries by reading page-break element positions relative to the editor
- Debounced to stay responsive (300–500ms)

### Performance Targets
- Editing should feel instant
- Reflow completes within ~500ms for large documents
- Maintain 60fps during typing and navigation

### Error and Edge Handling
- Never delete the last page
- Handle large/unbreakable content by pushing to the next page with appropriate spacing
- Gracefully handle DOM measurement failures (fallback to a single page)
