# HTML Editor - Testing Quick Reference

## Quick Commands

### Run All Unit Tests
```bash
npm test
```

### Run Unit Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Unit Tests with Coverage
```bash
npm test -- --coverage
```

### Run Specific Test File
```bash
npm test -- tests/unit/libraryExports.test.js
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Run E2E Tests with UI
```bash
npm run test:e2e:ui
```

### Run E2E Tests in Debug Mode
```bash
npm run test:e2e:debug
```

### Run All Tests (Unit + E2E)
```bash
npm test && npm run test:e2e
```

## Test File Overview

### Unit Tests (`tests/unit/`)
- `libraryExports.test.js` (33 tests) - Validates all library exports
- `documentSlice.test.js` (35 tests) - Tests Redux store
- `useFormatting.test.js` (16 tests) - Tests formatting hook
- `showPageManager.test.jsx` (7 tests) - Tests PageManager visibility

### E2E Tests (`tests/e2e/`)
- `core-text-editing.spec.js` - Basic editing workflows
- `page-content-management.spec.js` - Content flow and reflow
- `ui-specifications.spec.js` - UI/UX requirements

## Current Status

✅ **91/91 unit tests passing**  
✅ **All library exports validated**  
✅ **E2E tests functional**

## Coverage

Run with coverage:
```bash
npm test -- --coverage
```

View HTML report:
```bash
open coverage/index.html  # Mac/Linux
start coverage/index.html # Windows
```

## Test Development

### Creating New Tests

1. Create test file in `tests/unit/`:
```javascript
import { describe, it, expect } from 'vitest';
import { YourComponent } from '@prabhath-tharaka/html-editor';

describe('YourComponent', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
```

2. Run tests:
```bash
npm test
```

### Debugging Tests

Use `--run` to disable watch mode:
```bash
npm test -- --run
```

Filter by test name:
```bash
npm test -- -t "test name pattern"
```

## CI/CD Integration

Add to your GitHub Actions workflow:
```yaml
- name: Run Tests
  run: |
    npm test -- --run
    npm run test:e2e
```

## Troubleshooting

### Tests Not Running
- Check Node version: `node --version` (requires >= 18)
- Install dependencies: `npm install`
- Clear cache: `npm test -- --clearCache`

### E2E Tests Failing
- Ensure dev server is NOT running
- Playwright will start its own server
- Check port 5173 is available

### Coverage Not Generating
- Run with `--coverage` flag
- Check `vitest.config.js` coverage settings
- Ensure `packages/html-editor/src/**` files exist

## Links

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Playwright](https://playwright.dev/)
