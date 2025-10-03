
# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Develop a multi-page WYSIWYG HTML editor component that supports text editing across multiple A4-sized pages with automatic page breaks. The implementation will use Vite with React 19 for the frontend framework, ProseMirror for the rich text editing capabilities, and Redux Toolkit for state management. The editor will provide a simple toolbar interface and store images in browser local storage rather than a backend.

## Technical Context
**Language/Version**: JavaScript with React 19
**Primary Dependencies**: Vite, ProseMirror, Redux Toolkit
**Storage**: Browser local storage (for images)
**Testing**: Jest, React Testing Library
**Target Platform**: Web browser (Chrome, Firefox, Safari, Edge)
**Project Type**: Web application
**Performance Goals**: Handle documents with up to 500 pages with <500ms response time for navigation
**Constraints**: Simple UI, images stored locally in browser (no backend storage), no user session management
**Scale/Scope**: Multi-page HTML editor supporting up to 500 pages with A4, Letter, and Legal page sizes

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] I. Library-First: Editor functionality is modularized into standalone libraries (prose-mirror, page-management, storage)
- [x] II. Component Integration: Editor provides edited content in standard HTML format with clear interface contracts
- [x] III. Test-First: Implementation will follow TDD with Jest and React Testing Library
- [x] IV. Integration Testing: Contract tests will be created for editor APIs and page management
- [x] V. Observability: Console logging will be implemented for debugging
- [x] VI. Versioning: Semantic versioning will be used for the editor component
- [x] VII. Simplicity: UI is intentionally kept simple with minimal features for the first iteration

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->
```
# Web application structure (Vite + React)
src/
├── components/
│   ├── editor/
│   │   ├── MultiPageEditor.jsx
│   │   ├── Toolbar.jsx
│   │   ├── PageManager.jsx
│   │   └── PageView.jsx
│   └── common/
├── lib/
│   ├── editor/
│   │   ├── prose-mirror/
│   │   │   ├── editor-config.js
│   │   │   ├── schema.js
│   │   │   └── plugins.js
│   │   └── page-management/
│   │       ├── page-breaks.js
│   │       └── page-reflow.js
│   └── storage/
│       └── local-storage.js
├── store/
│   ├── slices/
│   │   ├── documentSlice.js
│   │   └── uiSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css

public/
├── index.html
└── assets/

tests/
├── unit/
│   ├── editor/
│   └── store/
├── integration/
│   └── editor/
└── e2e/
    └── editor.spec.js
```

**Structure Decision**: Selected web application structure with Vite + React. The editor functionality is organized into components (UI), lib (core logic), and store (state management). This structure supports the component-based architecture required by our constitution and allows for clear separation of concerns while maintaining simplicity for the initial feature implementation.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/powershell/update-agent-context.ps1 -AgentType roo`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - Add tech stack: Vite, React 19, ProseMirror, Redux Toolkit
   - Remove TypeScript references
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → contract test task [P]
- Each entity → model creation task [P] 
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:
- TDD order: Tests before implementation 
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v1.1.0 - See `.specify/memory/constitution.md`*
