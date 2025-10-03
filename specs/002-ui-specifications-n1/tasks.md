# Tasks: UI Specifications for Document Editor

Input: Design documents from `specs/002-ui-specifications-n1/` (plan.md, spec.md)
Prerequisites: plan.md (required). No data-model.md, contracts/, research.md, or quickstart.md were found.

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → Extract: tech stack, structure (single-project), performance and WCAG constraints
2. Load optional design documents
   → spec.md: Use Functional Requirements and User Scenarios
   → No data-model.md, contracts/, research.md, quickstart.md present
3. Generate tasks by category
   → Setup: dependencies, theming
   → Tests: integration tests from user stories and FRs
   → Core: schema updates, editor plugins, UI components
   → Integration: logging utility, wiring
   → Polish: unit tests, performance, docs
4. Apply task rules
   → Different files = [P] parallel-capable
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Note dependencies and provide parallel execution examples
```

Path conventions: single project (src/, tests/) at repository root

---

## Phase 3.1: Setup

- [x] T001 Update dependencies in `package.json` for UI + editor features required by spec
      Add: `framer-motion`, `prosemirror-schema-list`, `prosemirror-tables`, `prosemirror-dropcursor`, `prosemirror-gapcursor`.
      Notes: keep existing ProseMirror packages; pin minor versions consistent with current major.

- [x] T002 [P] Apply dark toolbar theme and variables in `src/components/editor/MultiPageEditor.css`
      Implement FR-013 colors (Primary: #2D3748, Text: #FFFFFF), ensure WCAG AA.

---

## Phase 3.2: Tests First (TDD) — MUST FAIL BEFORE 3.3

Create one integration test per user story plus key FRs. Place new tests under `tests/integration/` unless otherwise noted.

- [x] T003 [P] Create test `tests/integration/ui_toolbar_bold.spec.jsx`
      Given selection, When clicking Bold, Then text renders bold (FR-002, Scenario 1).

- [x] T004 [P] Create test `tests/integration/ui_sidebar_outline.spec.jsx`
      Given headings exist, When opening sidebar, Then outline shows nested levels (Scenario 2).

- [x] T005 [P] Create test `tests/integration/ui_infinite_scroll.spec.jsx`
      Given long content, When scrolling, Then additional pages render smoothly without jank (Scenario 3, FR-008).

- [x] T006 [P] Create test `tests/integration/ui_keyboard_shortcuts.spec.jsx`
      Ctrl+B toggles bold without toolbar interaction (Scenario 4, FR-010). Also cover Ctrl+I, Ctrl+U.

- [x] T007 [P] Create test `tests/integration/ui_toolbar_layout.spec.jsx`
      Toolbar is positioned at top with dark theme and accessible contrast (FR-013, FR-001 shell visible).

- [x] T008 [P] Create test `tests/integration/ui_lists_link_table.spec.jsx`
      Verify toolbar buttons exist for: ordered list, unordered list, checklist, link insert, table insert (FR-004, FR-005). Actions should add corresponding nodes/marks in document model.

- [x] T009 [P] Create performance/animation test `tests/performance/ui_animations.spec.jsx`
      Validate toolbar hover/focus animation duration ~200ms, ease-in-out, sequential (no interruption) (FR-012).

---

## Phase 3.3: Core Implementation (only after tests exist and fail)

Schema updates (single file: `src/lib/editor/prose-mirror/schema.js`) — sequential tasks:

- [x] T010 Add strikethrough mark (strike) to schema (FR-002).
- [x] T011 Add link mark (href/title) with parseDOM/toDOM for <a> (FR-005).
- [x] T012 Add list nodes: ordered_list, bullet_list, list_item using prosemirror-schema-list (FR-004).
- [x] T013 Add checklist/task list nodes (task_list, task_item with checked attr) (FR-004 checklist).
- [x] T014 Integrate table nodes via prosemirror-tables schema and attributes (FR-005).

Editor plugins and commands:

- [x] T015 Update `src/components/editor/MultiPageEditor.jsx`
      • Add ProseMirror plugins: keymap (bold/italic/underline), history (undo/redo), dropcursor, gapcursor, table plugins.
      • Wire commands to handle: undo/redo, list toggles, link insert, table insert.
      • Ensure Ctrl+B/Ctrl+I/Ctrl+U shortcuts (FR-010) are active.

Toolbar UI (same file updates must be sequential):

- [x] T016 Update `src/components/editor/Toolbar.jsx` — add font family and font size dropdowns (FR-001).
- [x] T017 Update `src/components/editor/Toolbar.jsx` — add buttons for text alignment (left, center, right, justify), strikethrough, ordered/unordered/checklist, insert link, insert table, undo/redo (FR-002–FR-006).

Sidebar and outline:

- [x] T018 Create `src/lib/editor/outline/outline.js`
      Export `getDocumentOutline(pmDoc)` to derive heading structure (h1–h6) for sidebar.

- [x] T019 Create `src/components/editor/Sidebar.jsx`
      Show word count and document outline; add ARIA roles and keyboard nav. Collapsible.

- [x] T020 Update `src/components/editor/MultiPageEditor.jsx` to integrate `Sidebar`
      Place left of editor viewport; pass outline data and collapse state.

Animations and theming:

- [x] T021 Add Framer Motion animations to toolbar buttons in `src/components/editor/Toolbar.jsx`
      200ms, ease-in-out, ensure sequential completion (no interruption) (FR-012).

Infinite vertical scroll and smoothness:

- [x] T022 Optimize page rendering for long docs in `src/components/editor/MultiPageEditor.jsx`
      Implement simple windowing/virtualization for `pages-container` or use IntersectionObserver throttling to keep scrolling smooth (FR-008).

- [x] T023 Update `src/components/editor/MultiPageEditor.css` to implement document workspace styling per FR-007: centered, white, paper-like area with subtle shadow and proper margins

- [x] T024 Update `src/components/editor/MultiPageEditor.css` to enforce A4 page dimensions (794px × 1123px) per FR-009 requirements

Color scheme and layout completion:

- [x] T025 Finalize dark theme and toolbar placement in `src/components/editor/MultiPageEditor.css`
      Ensure contrast AA, spacing, and sticky top alignment (FR-013).

---

## Phase 3.6: UI Enhancements (October 2, 2025)

Additional improvements to meet specifications and improve user experience:

- [x] T029 Refactor editor layout in `src/components/editor/MultiPageEditor.css`
      • Transform .editor-content into centered paper-like workspace (794px × 1123px)
      • Apply FR-007 shadow effect (box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08))
      • Add proper margins (60px 72px padding) and background (#f5f5f5)
      • Fix .editor-viewport scrolling behavior for infinite scroll
      • Make .pages-container visible for page visualization
      Status: COMPLETED - Proper centered document workspace with paper-like appearance

- [x] T030 Enhance toolbar styling with visual button groups in `src/components/editor/MultiPageEditor.css`
      • Add .toolbar-group class with separators (border-right)
      • Improve button spacing and hover effects (transform, box-shadow)
      • Add disabled state styling (opacity: 0.5)
      • Add focus-visible outlines for accessibility
      • Style .file-upload and .page-controls properly
      Status: COMPLETED - Professional toolbar with proper grouping and interactions

- [x] T031 Implement responsive sidebar behavior in `src/components/editor/Sidebar.css`
      • Auto-collapse to 24px width below 1024px viewport (FR-011)
      • Hide sidebar-header h2 and sidebar-content in collapsed state
      • Adjust sidebar-toggle orientation for narrow view
      Status: COMPLETED - Sidebar now properly responsive per FR-011

- [x] T032 Add Framer Motion animations to all toolbar buttons in `src/components/editor/Toolbar.jsx`
      • Apply whileHover={{ scale: 1.05 }} and whileTap={{ scale: 0.95 }}
      • Set transition={{ duration: 0.2, ease: 'easeInOut' }} (FR-012)
      • Cover all button groups: formatting, alignment, lists, insert, undo/redo
      Status: COMPLETED - All toolbar buttons now have smooth 200ms animations

- [x] T033 Style PageManager component in `src/components/editor/MultiPageEditor.css`
      • Add complete styling for .page-manager, .page-list, .page-button
      • Implement active state highlighting for current page
      • Style .add-page-button and .delete-page-button
      • Add responsive behavior for mobile (slide-in drawer pattern)
      Status: COMPLETED - PageManager now visually integrated and functional

- [x] T034 Implement IntersectionObserver for infinite scroll in `src/components/editor/MultiPageEditor.jsx`
      • Add visiblePages state tracking with IntersectionObserver
      • Use 200px rootMargin for preloading pages before viewport
      • Optimize for FR-008 (60fps scroll with 100+ pages)
      Status: COMPLETED - Infinite scroll optimization implemented

---

## Phase 3.4: Integration

- [x] T024 Create `src/lib/editor/utils/logger.js` and replace console.* calls
      Provide info/warn/error methods; noop in production; integrate in editor components.

- [x] T025 Wire logger in `MultiPageEditor.jsx` and `Toolbar.jsx`
      Replace error paths (e.g., image validation) with logger usage.

---

## Phase 3.5: Polish

- [x] T026 [P] Unit tests for outline util in `tests/unit/outline.test.js`
- [x] T027 [P] Update performance tests if needed for scroll/windowing in `tests/performance/editor_performance.spec.jsx`
- [x] T028 [P] Update docs: `README.md` and feature docs with new controls and shortcuts

---

## Dependencies

- Setup before everything: T001 → T002
- Tests before implementation: T003–T009 before T010+
- Schema (`schema.js`) tasks T010–T014 are sequential and must complete before editor/toolbar features depending on them (T015–T017, T021)
- Toolbar tasks T016 → T017 (same file)
- Outline util T018 precedes Sidebar and integration T019–T020
- Animations T021 requires toolbar controls present (after T017)
- Virtualization T022 after base rendering is stable (can follow T015)
- Theming T023 follows T002 (final polish of styles)
- Logger T024 before T025
- Polish tasks T026–T028 after core and integration complete

---

## Parallel Execution Examples

The following groups can run in parallel ([P] tasks only), as they touch different files and have no dependencies among themselves:

Group A — Tests First:
```
Task: "Create test tests/integration/ui_toolbar_bold.spec.jsx"        # T003
Task: "Create test tests/integration/ui_sidebar_outline.spec.jsx"     # T004
Task: "Create test tests/integration/ui_infinite_scroll.spec.jsx"     # T005
Task: "Create test tests/integration/ui_keyboard_shortcuts.spec.jsx"  # T006
Task: "Create test tests/integration/ui_toolbar_layout.spec.jsx"      # T007
Task: "Create test tests/integration/ui_lists_link_table.spec.jsx"    # T008
Task: "Create test tests/performance/ui_animations.spec.jsx"          # T009
```

Group B — Polish (post-core):
```
Task: "Unit tests for outline util in tests/unit/outline.test.js"     # T026
Task: "Update performance tests for scroll/windowing"                 # T027
Task: "Update docs with new controls and shortcuts"                   # T028
```

Note: Do not run tasks that modify the same file in parallel (e.g., T016 and T017 both edit `Toolbar.jsx`).

---

## Validation Checklist

- [x] Tests created before implementation and initially failing (T003–T009)
- [x] Schema extended for FR-002, FR-004, FR-005 (T010–T014)
- [x] Keyboard shortcuts and undo/redo implemented (T015)
- [x] Toolbar meets FR-001–FR-006 and FR-013 (T016–T017, T021, T023, T030, T032)
- [x] Sidebar outline and word count implemented with responsive collapse (T018–T020, T031, FR-011)
- [x] Infinite scroll remains smooth on long documents (T022, T034, FR-008)
- [x] Animations 200ms, ease-in-out, sequential (T021, T032, FR-012)
- [x] Logger in place (T024–T025)
- [x] Unit/performance tests updated (T026–T027) and docs refreshed (T028)
- [x] Document workspace styled per FR-007 and FR-009 (T029)
- [x] PageManager integrated and styled (T033)

---

## Summary of UI Improvements (October 2, 2025)

### Key Changes Made:

1. **Document Workspace (FR-007, FR-009)**
   - Transformed editor into centered, paper-like workspace (794px × 1123px)
   - Applied subtle shadow (box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08))
   - Proper margins and padding for realistic document appearance
   - Background color (#f5f5f5) for contrast with white paper

2. **Toolbar Enhancements (FR-012, FR-013)**
   - Added visual button groups with separators
   - Applied Framer Motion animations to ALL buttons (200ms, ease-in-out)
   - Improved hover effects with transform and shadow
   - Enhanced accessibility with focus-visible outlines
   - Better disabled state styling

3. **Responsive Sidebar (FR-011)**
   - Auto-collapses to 24px width below 1024px viewport
   - Hides content in collapsed state while maintaining toggle button
   - Smooth transitions for better UX

4. **PageManager Integration**
   - Comprehensive styling for page navigation
   - Active page highlighting
   - Add/delete page controls properly styled
   - Responsive behavior for mobile viewports

5. **Infinite Scroll Optimization (FR-008)**
   - Implemented IntersectionObserver for page virtualization
   - 200px preload margin for smooth scrolling
   - GPU acceleration enabled for 60fps performance
   - Optimized for documents with 100+ pages

### Compliance Status:
- ✅ FR-007: Document workspace with subtle shadow - COMPLETE
- ✅ FR-008: Infinite vertical scroll with 60fps - COMPLETE  
- ✅ FR-009: A4 page dimensions (794px × 1123px) - COMPLETE
- ✅ FR-011: Responsive sidebar collapse at 1024px - COMPLETE
- ✅ FR-012: 200ms animations on all toolbar buttons - COMPLETE
- ✅ FR-013: Dark toolbar theme with AA contrast - COMPLETE

### Files Modified:
- `src/components/editor/MultiPageEditor.css` (major refactoring)
- `src/components/editor/MultiPageEditor.jsx` (IntersectionObserver added)
- `src/components/editor/Toolbar.jsx` (Framer Motion on all buttons)
- `src/components/editor/Sidebar.css` (responsive behavior)

---

Feature directory: `C:\Users\Prabhath\Dev\htmleditor\specs\002-ui-specifications-n1`
Context for task generation: UI Specifications for Document Editor
