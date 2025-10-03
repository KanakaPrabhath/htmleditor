# HTML Editor - AI Coding Assistant Instructions

This is a **React-based WYSIWYG continuous HTML editor** with rich text formatting capabilities and automatic page break insertion. Built with Vite, React 19, and Redux Toolkit.

## Architecture Overview

### Core Design Pattern: Continuous Content Flow with Automatic Page Breaks
- **Document**: Central state object containing metadata and continuous content with embedded page breaks
- **Continuous ContentEditable Surface**: Single contenteditable div with automatic `<page-break>` tag insertion
- **Page Boundary Engine**: Calculates visual page boundaries based on page break positions and page dimensions
- **Content Storage**: HTML content stored as continuous string in Redux state with embedded page break tags

### Key Integration Points
- **ContentEditable**: Handles rich text editing with browser-native contenteditable on each page
- **Redux Toolkit**: Manages continuous document state with page boundaries and reflow logic (`src/store/slices/documentSlice.js`)
- **Automatic Reflow**: Content automatically flows with page breaks inserted when content exceeds page dimensions, with DOM-based height calculations
- **Page Management**: Add, delete, and navigate between pages with persistent content and automatic page break management

## Critical Development Patterns

### State Management Convention
```javascript
// Document state structure
{
  id: 'uuid',
  title: 'Document Title',
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

// Update continuous content
dispatch(updateContinuousContent(htmlContent));

// Update page boundaries
dispatch(updatePageBoundaries(boundariesArray));
```

### ContentEditable Integration
- Content changes flow: 
  1. User types in `ContinuousPageView` contenteditable div
  2. `onInput` event fires → `handlePageInput()` in `ContentEditableEditor`
  3. Content extracted using `innerHTML` with formatting preservation
  4. Redux state updated with new content
  5. DOM height check via `useContinuousReflow` hook
  6. If overflow detected → Reflow trigger with cursor save
  7. Content split and redistributed → Redux update
  8. DOM updated → Cursor restored by `useContinuousReflow` hook
- HTML content extracted using `innerHTML` with formatting preservation
- Automatic reflow triggered when page content exceeds maximum height (based on page dimensions minus padding)
- ContinuousPageView component handles individual page rendering and events

### Reflow Engine
- **Trigger**: Content input events with 300ms debouncing to prevent excessive reflows
- **Algorithm**: Inserts `<page-break>` tags when content exceeds page height, preserving formatting
- **Performance**: Maintains 60fps during reflow operations, completes within 500ms for large documents
- **Edge Cases**: Handles unbreakable content (large images) by creating new pages with appropriate spacing

### Testing Architecture
- **Unit Tests**: Document/page models, reflow algorithms, content validation
- **Integration Tests**: Editor workflows, Redux state management, component interactions
- **E2E Tests**: Playwright-based browser testing for complete user workflows
- **Performance Tests**: Reflow operations, large document handling, 60fps maintenance
- Use `createTestStore()` from `tests/setup.js` for Redux testing

## Development Workflows

### Local Development
```bash
npm run dev          # Vite dev server on :5173
npm test             # Vitest unit tests
npm run test:e2e     # Playwright E2E tests
npm run build        # Production build
npm run preview      # Preview production build
```

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
        └── Page Number overlays (visual page indicators)
```

### Custom Hooks Architecture (Separation of Concerns)
The editor follows a **custom hooks pattern** for clean code organization:

**`useFormatting()`** - Handles text formatting state and commands
- Manages formatting state (bold, italic, underline, strikethrough, alignment)
- Executes `document.execCommand` for rich text operations
- Tracks current format for toolbar button active states
- Font family and size control
- Located: `src/hooks/useFormatting.js`

**`useContinuousReflow()`** - Automatic content reflow engine for continuous mode
- DOM-based overflow detection using `scrollHeight` vs `maxHeight`
- Inserts `<page-break>` tags when content exceeds page height
- Calculates page boundaries based on page break positions
- Handles page navigation and cursor positioning
- Manages page addition/deletion in continuous content
- Located: `src/hooks/useContinuousReflow.js`

**Hook Integration Pattern:**
```javascript
const { currentFormat, formatText } = useFormatting();
const { 
  checkAndUpdateBoundaries, 
  getCurrentPage, 
  scrollToPage,
  triggerAutoReflow,
  removePageAndContent
} = useContinuousReflow(pageSize, editorRef);
```

## Project-Specific Conventions

### File Organization
- **Components**: `src/components/editor/` - React UI components
  - `ContentEditableEditor.jsx` - Main orchestrator with hooks integration
  - `ContinuousPageView.jsx` - Single continuous contenteditable surface with page breaks
  - `EditorToolbar.jsx` - Formatting toolbar with dark theme
  - `Sidebar.jsx` - Collapsible document info panel
  - `PageManager.jsx` - Page navigation and controls
  - `MultiPageEditor.css` - Shared editor styles
- **Hooks**: `src/hooks/` - Custom React hooks for separated concerns
  - `useContinuousReflow.js` - Automatic content reflow engine for continuous mode
  - `useFormatting.js` - Text formatting state and commands
  - `index.js` - Centralized hook exports
- **Storage**: `src/lib/storage/` - LocalStorage persistence for images
  - `local-storage.js` - Image storage utilities
- **Editor Logic**: `src/lib/editor/` - Business logic and models
  - `utils/` - Logger and utilities
- **Store**: `src/store/` - Redux store configuration and slices
  - `store.js` - Redux store with middleware configuration
  - `slices/documentSlice.js` - Document state management
- **Utils**: `src/utils/` - Utility functions (reset-editor.js)
- **Tests**: `tests/{unit,integration,e2e,performance}/` - Comprehensive test coverage
- **Docs**: `docs/` - Architecture docs, test results, specifications

### Error Handling Patterns
- Document validation: title 1-100 chars, at least 1 page, max 500 pages
- Page validation: valid page sizes (A4/Letter/Legal), non-negative indices
- Image validation: PNG, JPEG, GIF, WEBP formats, max 5MB
- Reflow errors: Graceful handling of DOM measurement failures
- Runtime errors: Cannot delete last page, invalid page navigation

### Image Storage Convention
- Images saved to localStorage via `saveImage()` in `src/lib/storage/local-storage.js`
- Return localStorage key as image URL for contenteditable integration
- Handle uploads in `ContentEditableEditor.handleImageUpload()` with validation

### Redux Middleware Configuration
```javascript
// Continuous mode state with non-serializable content - requires middleware
middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['document/updateContent'],
      ignoredPaths: ['document.pages.content']
    }
  })
```

## Common Implementation Gotchas

### Custom Hooks Pattern
- Always import hooks from `src/hooks/index.js` for consistency
- Hooks extract and encapsulate specific concerns from main component
- `useContinuousReflow` returns reflow status to coordinate cursor restoration
- Hook dependencies must be carefully managed to prevent infinite loops

### ContinuousPageView Component
- Receives page data, dimensions, and event handlers as props
- Uses `data-needs-init` attribute to prevent double initialization
- Page refs managed by parent ContentEditableEditor
- Styling includes both visual dimensions and content area padding
- Active page highlighting controlled by parent state

### HTML Serialization
- Use `innerHTML` to extract contenteditable content with formatting preservation
- Handle contenteditable quirks (extra <br> tags, whitespace normalization)
- Images embedded as localStorage references, not data URLs

### Page Reflow Logic
- Calculate max height: `pageDimensions.height - padding (144px)`
- Insert `<page-break>` tags when content exceeds page height
- Use `setTimeout` delays (300ms) to ensure DOM updates before measurements
- Handle recursive reflow when new pages also overflow

### UUID Generation
- Use `uuid` library for document and page ID generation
- Mock in tests: `vi.mock('uuid', () => ({ v4: vi.fn(() => 'test-uuid') }))`

### ContentEditable Event Handling
- Use `onInput` for content changes (fires on every keystroke)
- Debounce reflow checks (300ms) to prevent excessive calculations
- Focus management: Auto-focus active page after navigation

When working on this codebase, focus on maintaining real-time editing responsiveness and robust reflow behavior. The continuous content flow with automatic page break insertion requires careful DOM manipulation and state synchronization.