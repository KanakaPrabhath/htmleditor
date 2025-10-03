<!--
Sync Impact Report
Version change: 1.1.0 → 1.1.0
Modified principles: None
Added sections: None
Removed sections: None
Templates requiring updates:
  ✅ .specify/templates/plan-template.md - Verified alignment
  ✅ .specify/templates/spec-template.md - Verified alignment
  ✅ .specify/templates/tasks-template.md - Verified alignment
Follow-up TODOs: None
-->

# HTML Editor Constitution

## Core Principles

### I. Library-First
<!-- Example: I. Library-First -->
Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### II. Component Integration
Editor components must provide edited content in standard HTML format; APIs must be compatible with common JavaScript frameworks; Clear interface contracts required for integration with parent applications
<!-- Principle updated to reflect component-based architecture instead of CLI -->

### III. Test-First (NON-NEGOTIABLE)
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### IV. Integration Testing
<!-- Example: IV. Integration Testing -->
Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
Text I/O ensures debuggability; Structured logging required; MAJOR.MINOR.BUILD versioning format; Start simple, YAGNI principles
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## Additional Constraints
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

Technology stack requirements, compliance standards, deployment policies, and security requirements
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## Development Workflow
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

Code review requirements, testing gates, deployment approval process, and CI/CD pipeline standards
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

All PRs/reviews must verify compliance; Complexity must be justified; Use .specify/guidance.md for runtime development guidance
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use .specify/guidance.md for runtime development guidance -->

**Version**: 1.1.0 | **Ratified**: 2025-09-30 | **Last Amended**: 2025-10-01