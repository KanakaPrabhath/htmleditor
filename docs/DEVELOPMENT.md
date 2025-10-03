## Development Guide

This monorepo contains the library (packages/html-editor) and a demo app (packages/demo-app).

### Prerequisites
- Node.js >= 18
- npm >= 9

### Install
```bash
npm install
```

### Common Scripts
```bash
# Build the library
npm run build:lib

# Run the demo app at http://localhost:5173
npm run dev:demo

# Build demo
npm run build:demo

# Preview demo build
npm run preview:demo

# Lint
npm run lint
```

### Testing
See docs/TESTING.md for details.

### Publishing
See docs/PUBLISHING.md for steps and checklist.

### Folder Structure
```
packages/
  html-editor/        # Library source and build
  demo-app/           # Demo application using the library
tests/                # Unit and E2E tests
docs/                 # Documentation
```
