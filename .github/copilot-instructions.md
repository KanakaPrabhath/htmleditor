# HTML Editor - AI Coding Assistant Instructions

This is a React 19 + Vite 7 monorepo that provides a WYSIWYG continuous HTML editor with rich text formatting and automatic page breaks. The primary state management is Context-based (DocumentProvider), with a legacy Redux slice exported for backward compatibility.

## Important Guidelines

**Do not create or initialize documents automatically.** Only create documents when explicitly instructed by the user. Wait for clear direction before generating any document content or structure.

## Architecture Overview

### Core Design Pattern: Continuous content flow with automatic page breaks
- Document state: Central state object containing metadata and a single continuous content string with embedded `<page-break>` tags
- Editing surface: One continuous contenteditable div; explicit page breaks define page boundaries
- Page Boundary Engine: Calculates visual page boundaries from page break positions and page dimensions
- Content storage: HTML is stored as a continuous string in Context state (`continuousContent`) with embedded `<page-break>` tags

### Key Integration Points
- ContentEditable: Browser-native editing in a single continuous surface managed by `ContinuousPageView`
- Context API (primary): `packages/html-editor/src/context/DocumentContext.jsx` provides `DocumentProvider`, `useDocumentState`, and `useDocumentActions`
- Legacy Redux (optional): `packages/html-editor/src/store/slices/documentSlice.js` is still exported for backward compatibility
- Automatic Reflow: `useContinuousReflow` inserts `<page-break>` elements as content exceeds page height
- Page Management: Add, delete, navigate between pages; boundaries are computed from `<page-break>` tags

## Critical Development Patterns

### State Management Convention (Context)
```javascript
// Document state structure (Context)
{
  id: 'uuid',
  title: 'Document Title',
  createdAt: 'ISO',
  updatedAt: 'ISO',
  pages: [
    { id: 'uuid', index: 0, size: 'A4', content: '<p>HTML content</p>', images: [] },
    // ... more pages
  ],
  activePage: 0,
  pageSize: 'A4',
  // Continuous mode additions
  editorMode: 'continuous',
  continuousContent: '<p>Content with <page-break> tags</p>',
  pageBoundaries: [
    { id: 'page-0', pageNumber: 1, top: 0, height: 1123 },
    { id: 'page-1', pageNumber: 2, top: 1200, height: 1123 }
  ]
}

// Update via Context actions
const actions = useDocumentActions();
actions.updateContinuousContent(htmlContent);
actions.updatePageBoundaries(boundariesArray);
```

### ContentEditable Integration
- Flow:
  1. User types in `ContinuousPageView` (single contenteditable)
  2. `onInput` fires → `handleInput()` in `ContentEditableEditor`
  3. Extract `innerHTML` to preserve formatting
  4. Update Context: `actions.updateContinuousContent(html)`
  5. Debounced boundary calc (≈300ms) via `checkAndUpdateBoundaries()`
  6. Debounced reflow (≈500ms) via `triggerAutoReflow()` inserts `<page-break>` before overflow
  7. Update `activePage` based on scroll via `getCurrentPage()`
- Automatic reflow triggers when content exceeds computed max height (page height minus content padding)
- `ContinuousPageView` prevents deleting `<page-break>` with Backspace/Delete and handles Tab insertion

### Reflow Engine
- Trigger: Debounced ~500ms after input to prevent excessive work
- Algorithm: Sums child element heights until exceeding max height; inserts `<page-break>` before the overflow element, then updates boundaries
- Performance: Target 60fps during typing; reflow completes within ~500ms for large documents
- Edge cases: Handles unbreakable content (e.g., large images) by inserting breaks appropriately

### Testing Architecture
- Unit tests: hooks, reducers (legacy), content validation (Vitest)
- Integration tests: editor workflows, context actions, component interactions
- E2E tests: Playwright flows for core editing and page management
- Performance sanity: reflow and navigation responsiveness
- Test setup: `tests/setup.js` includes jest-dom and mocks `uuid`

## Development Workflows

### Local Development
```bash
npm run dev:demo      # Vite dev server for demo app on :5173
npm run build:lib     # Build the HTML editor library
npm run build:demo    # Build the demo application
npm run preview:demo  # Preview production build of demo app
npm test              # Vitest unit tests
npm run test:e2e      # Playwright E2E tests
npm run test:e2e:ui   # Playwright E2E tests with UI
npm run test:e2e:debug # Playwright E2E tests in debug mode
npm run lint          # ESLint linting
npm run publish:lib   # Build and publish the library (scoped package)
```

Requirements: Node >= 18, npm >= 9

### Performance Requirements
Real-time editing with automatic reflow must be smooth and responsive:
- Text insertion, formatting, and content updates should feel instant
- Reflow operations complete within 500ms for 500-page documents
- Maintain 60fps during content changes and page navigation
- No blocking operations during rapid typing or large content changes

### Component Structure
```
ContentEditableEditor (main orchestrator component)
├── EditorToolbar (formatting controls - bold, italic, fonts, lists, images, tables, links)
├── Sidebar (document outline, word count, collapsible)
├── PageManager (page navigation, add/delete pages, page size)
└── ContinuousPageView (continuous contenteditable surface)
    └── contenteditable div (single editing surface with page breaks)
  └── Page number overlays (visual indicators via PageManager + boundaries)
```

### Custom Hooks Architecture (Separation of Concerns)
The editor follows a custom hooks pattern for clean code organization:

**`useFormatting()`** - Handles text formatting state and commands
- Manages formatting state (bold, italic, underline, strikethrough, alignment)
- Executes `document.execCommand` for rich text operations
- Tracks current format for toolbar button active states
- Font family and size control
- Located: `packages/html-editor/src/hooks/useFormatting.js`

**`useContinuousReflow()`** - Automatic content reflow engine for continuous mode
- DOM-based overflow detection by summing child `getBoundingClientRect().height`
- Inserts `<page-break>` elements when content exceeds page height
- Calculates page boundaries from `<page-break>` positions
- Helpers: navigation (`scrollToPage`, `getCurrentPage`, `positionCursorAtPage`), boundary updates, and `removePageAndContent`
- Located: `packages/html-editor/src/hooks/useContinuousReflow.js`

**Hook Integration Pattern:**
```javascript
const { currentFormat, formatText } = useFormatting();
const { 
  checkAndUpdateBoundaries, 
  getCurrentPage, 
  scrollToPage,
  positionCursorAtPage,
  triggerAutoReflow,
  removePageAndContent
} = useContinuousReflow(pageSize, editorRef);
```

## Project-Specific Conventions

### File Organization
- **Components**: `packages/html-editor/src/components/editor/` - React UI components
  - `ContentEditableEditor.jsx` - Main orchestrator with hooks integration
  - `ContinuousPageView.jsx` - Single continuous contenteditable surface with page breaks
  - `EditorToolbar.jsx` - Formatting toolbar with dark theme
  - `Sidebar.jsx` - Collapsible document info panel
  - `PageManager.jsx` - Page navigation and controls
  - `MultiPageEditor.css` - Shared editor styles
- **Hooks**: `packages/html-editor/src/hooks/` - Custom React hooks for separated concerns
  - `useContinuousReflow.js` - Automatic content reflow engine for continuous mode
  - `useFormatting.js` - Text formatting state and commands
  - `index.js` - Centralized hook exports
- **Storage**: `packages/html-editor/src/lib/storage/` - LocalStorage persistence for images
  - `local-storage.js` - Image storage utilities
- **Editor Logic**: `packages/html-editor/src/lib/editor/` - Business logic and models
  - `utils/` - Logger and utilities
- **Context (primary)**: `packages/html-editor/src/context/DocumentContext.jsx` - Document state and actions
- **Store (legacy)**: `packages/html-editor/src/store/` - Redux store slice for backward compatibility
  - `slices/documentSlice.js` - Legacy document state management (exported in `src/index.js`)
- **Tests**: `tests/{unit,integration,e2e,performance}/` - Comprehensive test coverage
- **Docs**: `docs/` - Architecture docs, test results, specifications

### Error Handling Patterns
- Document validation: title 1-100 chars, at least 1 page, max 500 pages
- Page validation: valid page sizes (A4/Letter/Legal), non-negative indices
- Image validation: PNG, JPEG, GIF, WEBP formats, max 5MB
- Reflow errors: Graceful handling of DOM measurement failures
- Runtime errors: Cannot delete last page, invalid page navigation

### Image Storage Convention
- Images saved to localStorage via `saveImage()` in `packages/html-editor/src/lib/storage/local-storage.js`
- Return localStorage key as image URL for contenteditable integration
- Handle uploads via `EditorToolbar` image button with validation

### Redux Middleware Configuration (legacy only)
```javascript
// If you use the legacy Redux slice, ignore non-serializable fields/actions
middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        'document/updatePageContent',
        'document/updatePages',
        'document/updateContinuousContent'
      ],
      ignoredPaths: ['document.pages', 'document.pages.content']
    }
  })
```

## Common Implementation Gotchas

### Custom Hooks Pattern
- Import hooks from `packages/html-editor/src/hooks/index.js` for consistency
- Hooks encapsulate concerns away from `ContentEditableEditor`
- `useContinuousReflow` exposes boundary calc, reflow, navigation, and removal utilities
- Manage hook dependencies carefully to avoid loops

### ContinuousPageView Component
- Receives dimensions, pageBoundaries, refs, and handlers from parent
- Parent manages refs and content through `innerHTML`
- Styling includes visual page dimensions and content padding
- Prevents deletion of `<page-break>` and inserts spaces for Tab

### HTML Serialization
- Use `innerHTML` to extract contenteditable content with formatting preservation
- Handle contenteditable quirks (extra <br> tags, whitespace normalization)
- Images embedded as localStorage references, not data URLs

### Page Reflow Logic
- Max content height = `pageDimensions.height - (paddingTop + paddingBottom)`; current padding totals ≈160px (top 60, bottom 100)
- Insert `<page-break>` when content exceeds page height; then recalc boundaries
- Use short timeouts (≈50–150ms) to allow DOM updates before measuring
- Re-run reflow if subsequent pages also overflow

### UUID Generation
- Use `uuid` for IDs
- Tests mock example (Vitest):
  `vi.mock('uuid', () => ({ v4: vi.fn(() => 'test-uuid-' + Math.random().toString(36).substr(2, 9)) }))`

### ContentEditable Event Handling
- Use `onInput` for content changes (fires on every keystroke)
- Debounce boundary checks (~300ms) and reflow (~500ms)
- Update `activePage` based on scroll position; smooth scroll during navigation
- Focus management: Editor focuses on mount and after navigations

When working on this codebase, prioritize real-time editing responsiveness and robust reflow. Automatic page break insertion relies on careful DOM measurement and state sync between the continuous editor surface and Context state.