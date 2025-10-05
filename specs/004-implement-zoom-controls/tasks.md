# Tasks: Implement Zoom Controls and Enhance Page Size Selection

**Input**: Design documents from `/specs/004-implement-zoom-controls/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `packages/html-editor/src/`
- Tests: `tests/unit/`, `tests/integration/`, `tests/e2e/`

## Phase 3.1: Setup
- [ ] T001 Define zoom constants and utilities in packages/html-editor/src/lib/editor/zoom-utils.js
- [ ] T002 Update page size constants with real dimensions in packages/html-editor/src/lib/editor/page-sizes.js

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T003 [P] Contract test for PageManager component props in tests/unit/test-page-manager-contract.js
- [ ] T004 [P] Contract test for DocumentContext zoom actions in tests/unit/test-document-context-contract.js
- [ ] T005 [P] Integration test zoom in button functionality in tests/integration/test-zoom-controls.js
- [ ] T006 [P] Integration test zoom out button functionality in tests/integration/test-zoom-controls.js
- [ ] T007 [P] Integration test zoom reset button functionality in tests/integration/test-zoom-controls.js
- [ ] T008 [P] Integration test keyboard shortcuts for zoom in tests/integration/test-zoom-keyboard.js
- [ ] T009 [P] Integration test page boundaries at different zoom levels in tests/integration/test-zoom-boundaries.js
- [ ] T010 [P] Integration test page size matching real dimensions in tests/integration/test-page-size-dimensions.js

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T011 Add zoom level to DocumentContext state in packages/html-editor/src/context/DocumentContext.jsx
- [ ] T012 Add zoom actions to DocumentContext in packages/html-editor/src/context/DocumentContext.jsx
- [ ] T013 Update useContinuousReflow hook for zoom-aware boundary calculations in packages/html-editor/src/hooks/useContinuousReflow.js
- [ ] T014 Update PageView for zoom scaling in packages/html-editor/src/components/editor/PageView.jsx
- [ ] T015 Update PageManager component with zoom controls in packages/html-editor/src/components/editor/PageManager.jsx
- [ ] T016 Add keyboard event handlers for zoom shortcuts in packages/html-editor/src/components/editor/HtmlEditor.jsx

## Phase 3.4: Integration
- [ ] T017 Connect zoom state to page boundary calculations
- [ ] T018 Ensure zoom works with page size changes
- [ ] T019 Performance optimization for zoom transitions

## Phase 3.5: Polish
- [ ] T020 [P] Unit tests for zoom utilities in tests/unit/test-zoom-utils.js
- [ ] T021 [P] Unit tests for updated hooks in tests/unit/test-useContinuousReflow.js
- [ ] T022 Update quickstart documentation
- [ ] T023 E2E tests for zoom functionality in tests/e2e/zoom-controls.spec.js
- [ ] T024 Performance validation for zoom operations

## Dependencies
- Setup (T001-T002) before tests (T003-T010)
- Tests (T003-T010) before implementation (T011-T016)
- Implementation (T011-T016) before integration (T017-T019)
- Integration before polish (T020-T024)
- T011 blocks T012 (same file)
- T013-T016 can be parallel [P] as different files

## Parallel Example
```
# Launch T003-T004 together:
Task: "Contract test for PageManager component props in tests/unit/test-page-manager-contract.js"
Task: "Contract test for DocumentContext zoom actions in tests/unit/test-document-context-contract.js"

# Launch T005-T010 together:
Task: "Integration test zoom in button functionality in tests/integration/test-zoom-controls.js"
Task: "Integration test zoom out button functionality in tests/integration/test-zoom-controls.js"
Task: "Integration test zoom reset button functionality in tests/integration/test-zoom-controls.js"
Task: "Integration test keyboard shortcuts for zoom in tests/integration/test-zoom-keyboard.js"
Task: "Integration test page boundaries at different zoom levels in tests/integration/test-zoom-boundaries.js"
Task: "Integration test page size matching real dimensions in tests/integration/test-page-size-dimensions.js"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
   - Each contract file → contract test task [P]
   - Each endpoint → implementation task
   
2. **From Data Model**:
   - Each entity → model creation task [P]
   - Relationships → service layer tasks
   
3. **From User Stories**:
   - Each story → integration test [P]
   - Quickstart scenarios → validation tasks

4. **Ordering**:
   - Setup → Tests → Models → Services → Endpoints → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding tests
- [ ] All entities have model tasks
- [ ] All tests come before implementation
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task</content>
<parameter name="filePath">C:\Users\Prabhath\Dev\htmleditor\specs\004-implement-zoom-controls\tasks.md