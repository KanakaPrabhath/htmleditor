# Contributing to HTML Editor

Thank you for your interest in contributing to the HTML Editor! We welcome contributions from the community and appreciate your help in making this project better.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/htmleditor.git
   cd htmleditor
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes** following the code style guidelines

6. **Run tests** to ensure everything works:
   ```bash
   npm test              # Unit tests
   npm run test:e2e      # End-to-end tests
   npm run lint          # Code linting
   ```

7. **Commit your changes** with descriptive messages:
   ```bash
   git commit -m "feat: add new formatting feature"
   ```

8. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request** on GitHub

## 🏗️ Project Structure

```
htmleditor/
├── packages/
│   ├── html-editor/          # Main library package
│   │   ├── src/              # Source code
│   │   │   ├── components/   # React components
│   │   │   ├── context/      # React context
│   │   │   ├── hooks/        # Custom hooks
│   │   │   ├── lib/          # Utilities and libraries
│   │   │   └── index.js      # Main entry point
│   │   ├── tests/            # Test files
│   │   └── package.json      # Package configuration
│   └── demo-app/             # Demo application
├── tests/                    # Global test files
├── specs/                    # Specification documents
└── wiki/                     # Documentation wiki
```

## 🧪 Testing

We use a comprehensive testing strategy:

### Unit Tests
```bash
npm test                      # Run all unit tests
npm test -- --watch           # Watch mode for development
npm test packages/html-editor # Test specific package
```

### End-to-End Tests
```bash
npm run test:e2e              # Run all E2E tests
npm run test:e2e -- --headed  # Run with browser UI
```

### Test Coverage
```bash
npm run test:coverage         # Generate coverage report
```

### Writing Tests

- Place test files next to the code they test (e.g., `Component.jsx` and `Component.test.jsx`)
- Use descriptive test names that explain the behavior
- Test both happy paths and error cases
- Mock external dependencies when appropriate

Example test structure:
```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HtmlEditor } from '@kanaka-prabhath/html-editor';

describe('HtmlEditor', () => {
  test('renders with default props', () => {
    render(<HtmlEditor />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('handles content changes', async () => {
    const user = userEvent.setup();
    render(<HtmlEditor />);
    
    const editor = screen.getByRole('textbox');
    await user.type(editor, 'Hello World');
    
    expect(editor).toHaveTextContent('Hello World');
  });
});
```

## 📝 Code Style

### ESLint Configuration
```bash
npm run lint          # Check code style
npm run lint:fix      # Automatically fix issues
```

### Code Style Guidelines
- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Use **arrow functions** for callbacks
- **Destructure** props in function parameters
- Use **functional components** with hooks
- **Avoid** default exports (use named exports)
- **Type** all function parameters and return values with JSDoc

### Example Code Style
```javascript
// Good
import React, { useCallback } from 'react';

/**
 * Custom component with proper typing
 * @param {Object} props - Component props
 * @param {string} props.content - Editor content
 * @param {Function} props.onChange - Change handler
 * @returns {JSX.Element} Rendered component
 */
export function CustomEditor({ content, onChange }) {
  const handleChange = useCallback((newContent) => {
    onChange(newContent);
  }, [onChange]);

  return (
    <div className="custom-editor">
      <HtmlEditor content={content} onChange={handleChange} />
    </div>
  );
}
```

### Commit Message Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test additions or fixes
- `chore:` - Build process or tooling changes

Example: `feat: add image upload support to editor`

## 🐛 Reporting Issues

When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Steps to reproduce** the problem
3. **Expected behavior**
4. **Actual behavior**
5. **Environment information**:
   - Browser and version
   - Operating system
   - Node.js version
   - React version
6. **Screenshots or screen recordings** if applicable
7. **Console errors** if any

### Issue Template
```
Title: [Bug] Formatting not working in Safari

Description:
When using the editor in Safari, formatting buttons don't apply styles.

Steps to Reproduce:
1. Open editor in Safari 15.4
2. Select some text
3. Click bold button
4. Observe no formatting applied

Expected: Text should become bold
Actual: No formatting change

Environment:
- Browser: Safari 15.4
- OS: macOS Monterey
- Node: 18.12.0
- React: 18.2.0

Additional Context:
Console shows no errors.
```

## 💡 Feature Requests

We welcome feature requests! Please:

1. **Check existing issues** to avoid duplicates
2. **Describe the use case** clearly
3. **Explain the value** it would provide
4. **Provide examples** of how it would work
5. **Consider implementation complexity**

### Feature Request Template
```
Title: [Feature] Add table support

Description:
Add support for creating and editing tables within the editor.

Use Case:
Users need to create structured data like price lists, schedules, etc.

Proposed Implementation:
- Add table insertion button to toolbar
- Support basic table operations (add/remove rows/columns)
- Table styling options

Value:
Enables more complex document creation without leaving the editor.

Priority: Medium
```

## 📄 Documentation

### Updating Documentation
- Update [`README.md`](packages/html-editor/README.md:1) for significant changes
- Add JSDoc comments for new functions and components
- Update the [wiki](wiki/00-Wiki-Index.md:1) for architectural changes
- Keep examples up to date with API changes

### JSDoc Examples
```javascript
/**
 * Formats text using browser execCommand
 * @param {string} command - Format command (bold, italic, etc.)
 * @param {string} [value] - Optional value for commands like fontSize
 * @returns {void}
 */
export function formatText(command, value) {
  document.execCommand(command, false, value);
}

/**
 * Custom hook for formatting operations
 * @returns {Object} Formatting utilities
 * @property {Function} formatText - Format text command
 * @property {Object} currentFormat - Current format state
 */
export function useFormatting() {
  // hook implementation
}
```

## 🛠️ Development Setup

### Local Development
```bash
# Install dependencies
npm install

# Build the library
npm run build

# Start demo app for testing
cd packages/demo-app
npm run dev

# Run tests during development
npm run test:watch
```

### Debugging
- Use browser developer tools for UI debugging
- Add `console.log` statements for logic debugging
- Use React Developer Tools for component inspection
- Set breakpoints in browser dev tools

### Performance Testing
```bash
# Build with profiling
npm run build:profile

# Run performance tests
npm run test:performance
```

## 🤝 Code Review Process

1. **Create Pull Request** with clear description
2. **Ensure tests pass** and coverage is maintained
3. **Address review comments** promptly
4. **Squash commits** if requested
5. **Wait for approval** from maintainers
6. **Merge after approval**

## 📧 Contact

- **GitHub Issues**: [Create an issue](https://github.com/Prabhath-Tharaka/htmleditor/issues)
- **Discussion Forum**: [GitHub Discussions](https://github.com/Prabhath-Tharaka/htmleditor/discussions)
- **Email**: prabhath.tharaka@example.com

## 🙏 Acknowledgments

Thank you for contributing to the HTML Editor project! Your contributions help make this tool better for everyone.

---

*This contributing guide was last updated: October 2025*