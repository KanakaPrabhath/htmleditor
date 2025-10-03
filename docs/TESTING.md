## Testing

This project uses Vitest for unit tests and Playwright for E2E tests.

### Commands
```bash
# Unit tests
npm test

# Specific file
npm test -- tests/unit/libraryExports.test.js

# Coverage
npm test -- --coverage

# E2E tests
npm run test:e2e

# E2E with UI
npm run test:e2e:ui

# E2E debug
npm run test:e2e:debug
```

### What’s Covered
- Unit: hooks, Redux slice, public exports
- Integration: editor workflows
- E2E: typing, formatting, reflow, UI behaviors

### Tips
- Ensure no dev server is running before E2E
- Node >= 18 is required
- If tests are flaky, increase debounce delays for reflow in local runs
