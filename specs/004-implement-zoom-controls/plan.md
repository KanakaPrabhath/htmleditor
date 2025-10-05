
# Implementation Plan: Implement Zoom Controls and Enhance Page Size Selection

**Branch**: `004-implement-zoom-controls` | **Date**: October 5, 2025 | **Spec**: [link]
**Input**: Feature specification from `/specs/004-implement-zoom-controls/spec.md`

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
Implement zoom controls in the page manager with buttons and keyboard shortcuts, allowing zoom levels from 50% to 200% in 25% increments. Ensure zoom scaling affects the continuous page view, maintains page boundaries and reflow, and that page sizes match real-world dimensions at 100% zoom. Follow TDD approach with React hooks and component updates.

## Technical Context
**Language/Version**: JavaScript (ES2022), React 19  
**Primary Dependencies**: React, Vite, CSS  
**Storage**: LocalStorage (for images), Context API (for state)  
**Testing**: Vitest (unit), Playwright (E2E)  
**Target Platform**: Web browsers  
**Project Type**: Web application (React library + demo app)  
**Performance Goals**: 60fps during editing, reflow within 500ms for large documents  
**Constraints**: Real-time editing responsiveness, smooth zoom transitions  
**Scale/Scope**: Documents up to 500 pages, zoom levels 50%-200%

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Library-First**: Feature extends existing html-editor library with zoom functionality, maintaining self-containment.
- **II. Component Integration**: Zoom controls integrate via Context API, providing standard HTML content.
- **III. Test-First**: All implementation will follow TDD - tests written before code.
- **IV. Integration Testing**: Editor workflows with zoom will have integration tests.
- **V. Observability**: Use existing logger for zoom operations.
- **VI. Versioning**: Follow MAJOR.MINOR.BUILD for library updates.
- **VII. Simplicity**: Minimal zoom implementation without unnecessary complexity.

No violations detected.

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
```
packages/html-editor/src/
├── components/
│   ├── editor/
│   │   ├── PageManager.jsx  # Update for zoom controls
│   │   ├── ContinuousPageView.jsx  # Update for zoom scaling
│   │   └── EditorToolbar.jsx  # If needed
├── hooks/
│   ├── useContinuousReflow.js  # Update for zoom in boundary calc
│   └── useFormatting.js
├── context/
│   └── DocumentContext.jsx  # Add zoom state
└── lib/
    └── storage/
        └── local-storage.js

tests/
├── unit/
│   ├── hooks/
│   └── components/
├── integration/
└── e2e/
```

**Structure Decision**: Web application structure with React library in packages/html-editor/src/, following existing monorepo layout.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
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
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load tasks-template.md as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → contract test task [P]
- Each entity → model update task [P] 
- Each user story → integration test task
- Implementation tasks: update components, hooks, context for zoom functionality

**Ordering Strategy**:
- TDD order: Tests before implementation 
- Dependency order: Context state before hooks before components
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 15-20 numbered, ordered tasks in tasks.md

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
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [x] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v1.1.0 - See `/memory/constitution.md`*
