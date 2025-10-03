# Tasks: Multi-Page WYSIWYG HTML Editor

**Input**: Design documents from `/specs/001-we-are-going/`  
**Prerequisites**: plan.md, research.md, data-model.md, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → Extract: tech stack, libraries, structure
2. Load design documents:
   → data-model.md: Extract entities → model tasks
   → research.md: Extract decisions → setup tasks
   → quickstart.md: Extract verification steps → integration tests
3. Generate tasks by category:
   → Setup: project structure, dependencies, linting
   → Tests: integration tests, contract tests
   → Core: models, ProseMirror config, page management
   → Integration: UI components, Redux integration
   → Polish: unit tests, performance tests, docs
4. Apply task rules:
   → Different files = [P] for parallel
   → Same file = sequential
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All entities have models?
   → All user stories have tests?
   → All research decisions implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **File paths**: Shown in descriptions for clarity

## Phase 3.1: Setup
- [X] T001 Create project structure per implementation plan  
  → Create `src/components/editor/`, `src/lib/`, `src/store/`, `public/`, `tests/` directories
- [X] T002 Initialize Vite + React 19 project  
  → Install Vite, React 19, ProseMirror, Redux Toolkit
- [X] T003 [P] Configure linting and formatting tools  
  → Setup ESLint, Prettier with React 19 compatibility

## Phase 3.2: Tests First (TDD)
- [X] T004 [P] Integration test text editing flow  
  → tests/integration/editor_text.spec.js: Verify content flows across pages with automatic breaks
- [X] T005 [P] Integration test page management  
  → tests/integration/editor_pages.spec.js: Add/delete pages, change page size
- [X] T006 [P] Integration test image handling  
  → tests/integration/editor_images.spec.js: Insert, store, and persist images in local storage

## Phase 3.3: Core Implementation
- [X] T007 [P] Document model implementation  
  → src/lib/editor/page-management/document.js: Create model with validation rules
- [X] T008 [P] Page model implementation  
  → src/lib/editor/page-management/page.js: Implement page size validation
- [X] T009 [P] ContentBlock model implementation  
  → src/lib/editor/prose-mirror/content-block.js: Handle text/image content types
- [X] T010 [P] PageBreak model implementation  
  → src/lib/editor/page-management/page-break.js: Track manual/auto breaks
- [X] T011 Configure ProseMirror schema  
  → src/lib/editor/prose-mirror/schema.js: Implement document schema with page breaks
- [X] T012 Implement page reflow logic  
  → src/lib/editor/page-management/page-reflow.js: Handle content changes and reflow
- [X] T013 Create local storage service  
  → src/lib/storage/local-storage.js: Store/retrieve images as base64
- [X] T014 Setup Redux store  
  → src/store/store.js: Configure document and UI slices

## Phase 3.4: Integration
- [X] T015 Implement MultiPageEditor component  
  → src/components/editor/MultiPageEditor.jsx: Integrate ProseMirror with page management
- [X] T016 Connect page manager to editor  
  → src/components/editor/PageManager.jsx: Implement page navigation and controls
- [X] T017 Implement toolbar functionality  
  → src/components/editor/Toolbar.jsx: Add formatting controls (bold, italic, etc.)
- [X] T018 Implement page view rendering  
  → src/components/editor/PageView.jsx: Render pages with correct dimensions

## Phase 3.5: Polish
- [X] T019 [P] Unit tests for document model  
  → tests/unit/document.test.js: Validate model creation and state transitions
- [X] T020 [P] Unit tests for page management  
  → tests/unit/page-management.test.js: Test page reflow and break logic
- [X] T021 Performance tests for large documents  
  → tests/performance/editor_performance.spec.js: Verify <500ms response for 500 pages
- [X] T022 Update documentation with implementation details  
  → Update README.md and component docs with usage examples
- [X] T023 Run manual testing scenarios  
  → Verify page break issues, image persistence, and performance per quickstart.md (COMPLETED with Playwright E2E tests)

## Dependencies
- T004-T006 (integration tests) before T007-T014 (core implementation)
- T007-T010 (models) before T011-T014 (core implementation)
- T011-T014 (core) before T015-T018 (UI integration)
- T015-T018 (UI) before T021 (performance tests)

## Parallel Example
```
# Launch T004-T006 together:
Task: "Integration test text editing flow in tests/integration/editor_text.spec.js"
Task: "Integration test page management in tests/integration/editor_pages.spec.js"
Task: "Integration test image handling in tests/integration/editor_images.spec.js"

# Launch T007-T010 together:
Task: "Document model implementation in src/lib/editor/page-management/document.js"
Task: "Page model implementation in src/lib/editor/page-management/page.js"
Task: "ContentBlock model in src/lib/editor/prose-mirror/content-block.js"
Task: "PageBreak model in src/lib/editor/page-management/page-break.js"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify all tests fail before implementation
- Commit after each task completion
- Avoid: vague tasks, same file conflicts

## Task Generation Rules Applied
1. **From Data Model**:  
   - 4 model tasks for Document, Page, ContentBlock, PageBreak
2. **From User Stories**:  
   - 3 integration tests from quickstart verification steps
3. **From Research Decisions**:  
   - ProseMirror configuration, page management, local storage implementation
4. **Ordering**:  
   - Setup → Tests → Models → Core → UI → Polish
   - Model tasks in parallel, core tasks sequential

## Validation Checklist
- [x] All entities have model tasks
- [x] All user stories have integration tests
- [x] All research decisions implemented
- [x] Tests come before implementation
- [x] Parallel tasks modify different files
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task