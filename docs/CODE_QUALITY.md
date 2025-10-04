# Code Quality & Best Practices

## Overview

This document outlines code quality standards, best practices, and conventions for the HTML Editor library.

## Code Quality Standards

### 1. **Consistent Naming Conventions**

#### Constants
```javascript
// ✅ GOOD: SCREAMING_SNAKE_CASE for constants
const DEFAULT_PAGE_SIZE = 'A4';
const EMPTY_PARAGRAPH = '<p><br></p>';
const PAGE_BREAK_SELECTOR = 'page-break, [data-page-break="true"]';

// ❌ BAD: Inconsistent casing
const defaultPageSize = 'A4';
const EmptyParagraph = '<p><br></p>';
```

#### Functions and Variables
```javascript
// ✅ GOOD: camelCase for functions and variables
const handlePageChange = () => {};
const currentPage = 0;
const isNavigating = false;

// ❌ BAD: snake_case (not JS convention)
const handle_page_change = () => {};
const current_page = 0;
```

#### Components
```javascript
// ✅ GOOD: PascalCase for React components
const ContentEditableEditor = () => {};
const PageManager = () => {};

// ❌ BAD: camelCase for components
const contentEditableEditor = () => {};
```

#### Event Handlers
```javascript
// ✅ GOOD: handle* prefix for event handlers
const handleClick = () => {};
const handleInput = () => {};
const handlePageSizeChange = () => {};

// ✅ GOOD: on* prefix for callback props
<Component onClick={handleClick} onInput={handleInput} />
```

---

### 2. **PropTypes Validation**

**Always define PropTypes for all components:**

```javascript
import PropTypes from 'prop-types';

const MyComponent = ({ title, count, onAction }) => {
  // Component implementation
};

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  onAction: PropTypes.func
};

MyComponent.defaultProps = {
  count: 0,
  onAction: undefined
};
```

**Common PropTypes patterns:**

```javascript
// Arrays
items: PropTypes.array

// Array of specific type
items: PropTypes.arrayOf(PropTypes.string)

// Array of objects with shape
pages: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string
  })
)

// Enum values
pageSize: PropTypes.oneOf(['A4', 'Letter', 'Legal'])

// Refs
editorRef: PropTypes.shape({
  current: PropTypes.instanceOf(Element)
})

// Any node (JSX)
children: PropTypes.node

// React element
component: PropTypes.element
```

---

### 3. **JSDoc Comments**

**All exported functions should have JSDoc:**

```javascript
/**
 * Calculate visual page boundaries based on page break elements
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.pageSize - Page size ('A4', 'Letter', 'Legal')
 * @returns {Array<Object>} Array of boundary objects with id, pageNumber, top, height
 * 
 * @example
 * const boundaries = calculatePageBoundaries({ pageSize: 'A4' });
 * // Returns: [{ id: 'page-0', pageNumber: 1, top: 0, height: 1123 }]
 */
const calculatePageBoundaries = (options = {}) => {
  // Implementation
};
```

**Component JSDoc:**

```javascript
/**
 * ContentEditableEditor - Main WYSIWYG HTML Editor Component
 * 
 * Provides a continuous editing surface with automatic page breaks
 * and rich text formatting capabilities.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.Element} props.pageManagerComponent - Optional custom PageManager
 * @param {Function} props.onChange - Callback when content changes (htmlContent)
 * @param {boolean} props.showSidebar - Whether to show sidebar (default: true)
 * 
 * @example
 * <ContentEditableEditor
 *   onChange={(html) => console.log(html)}
 *   showSidebar={true}
 * />
 */
```

---

### 4. **Error Handling**

**Always handle errors gracefully:**

```javascript
// ✅ GOOD: Try-catch with meaningful error messages
const handleOperation = () => {
  try {
    // Risky operation
    performDOMManipulation();
  } catch (error) {
    console.error('[ComponentName] Operation failed:', error);
    // Recover gracefully
    return fallbackValue;
  }
};

// ❌ BAD: Unhandled errors
const handleOperation = () => {
  performDOMManipulation(); // May throw!
};
```

**Validate inputs:**

```javascript
// ✅ GOOD: Input validation
const navigateToPage = (pageIndex) => {
  if (typeof pageIndex !== 'number' || pageIndex < 0) {
    console.warn('[navigateToPage] Invalid page index:', pageIndex);
    return;
  }
  
  if (pageIndex >= totalPages) {
    console.warn('[navigateToPage] Page index out of bounds');
    return;
  }
  
  // Safe to proceed
};
```

---

### 5. **Code Organization**

#### File Structure

```
component/
├── ComponentName.jsx       # Main component
├── ComponentName.test.jsx  # Tests
├── ComponentName.css       # Styles (if not using CSS-in-JS)
└── utils/
    ├── helpers.js          # Helper functions
    └── constants.js        # Constants
```

#### Import Order

```javascript
// 1. React and third-party libraries
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// 2. Internal hooks and context
import { useDocumentState, useDocumentActions } from '../../context/DocumentContext';
import { useFormatting, useContinuousReflow } from '../../hooks';

// 3. Components
import Sidebar from './Sidebar';
import EditorToolbar from './EditorToolbar';

// 4. Utilities and constants
import { logger } from '../../lib/utils/logger';
import { PAGE_DIMENSIONS } from './constants';

// 5. Styles
import './ComponentName.css';
```

---

### 6. **React Best Practices**

#### useCallback and useMemo

```javascript
// ✅ GOOD: useCallback for functions passed as props
const handleClick = useCallback(() => {
  doSomething(dependency);
}, [dependency]);

// ✅ GOOD: useMemo for expensive computations
const processedData = useMemo(() => {
  return expensiveOperation(data);
}, [data]);

// ❌ BAD: Inline functions in JSX (creates new function every render)
<button onClick={() => doSomething()} />

// ✅ GOOD: Use callback
<button onClick={handleClick} />
```

#### Early Returns

```javascript
// ✅ GOOD: Early returns for clarity
const MyComponent = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }
  
  if (data.error) {
    return <ErrorMessage error={data.error} />;
  }
  
  // Main render logic
  return <div>{data.content}</div>;
};

// ❌ BAD: Nested conditionals
const MyComponent = ({ data }) => {
  return (
    <div>
      {data ? (
        data.error ? (
          <ErrorMessage error={data.error} />
        ) : (
          <div>{data.content}</div>
        )
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
```

#### Avoid Prop Drilling

```javascript
// ✅ GOOD: Use Context for deeply nested values
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <DeepComponent />
    </ThemeContext.Provider>
  );
}

function DeepComponent() {
  const theme = useContext(ThemeContext);
  // Use theme
}

// ❌ BAD: Pass props through many levels
<Level1 theme={theme}>
  <Level2 theme={theme}>
    <Level3 theme={theme}>
      <Level4 theme={theme} />
    </Level3>
  </Level2>
</Level1>
```

---

### 7. **Performance Patterns**

#### Ref vs State

```javascript
// ✅ GOOD: Use refs for values that don't need to trigger re-renders
const latestValueRef = useRef(value);
useEffect(() => {
  latestValueRef.current = value;
}, [value]);

// ❌ BAD: State for transient values
const [isLoading, setIsLoading] = useState(false); // Causes re-render
```

#### Conditional Rendering

```javascript
// ✅ GOOD: Short-circuit evaluation for simple conditions
{showSidebar && <Sidebar />}

// ✅ GOOD: Ternary for if-else
{isLoading ? <Spinner /> : <Content />}

// ❌ BAD: Function call in JSX
{renderSidebar(showSidebar)}
```

---

### 8. **Testing Standards**

#### Test File Structure

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  // Setup
  const defaultProps = {
    title: 'Test',
    onAction: vi.fn()
  };

  // Helper
  const setup = (props = {}) => {
    return render(<MyComponent {...defaultProps} {...props} />);
  };

  describe('Rendering', () => {
    it('should render title', () => {
      setup();
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should call onAction when clicked', () => {
      const onAction = vi.fn();
      setup({ onAction });
      
      fireEvent.click(screen.getByRole('button'));
      expect(onAction).toHaveBeenCalled();
    });
  });
});
```

---

### 9. **Accessibility**

**Always include ARIA attributes:**

```javascript
// ✅ GOOD: Proper accessibility
<button
  type="button"
  aria-label="Add new page"
  aria-pressed={isActive}
  onClick={handleClick}
>
  <PlusIcon />
</button>

// ❌ BAD: Missing accessibility
<div onClick={handleClick}>
  <PlusIcon />
</div>
```

**Semantic HTML:**

```javascript
// ✅ GOOD: Semantic elements
<nav aria-label="Page navigation">
  <button>Previous</button>
  <button>Next</button>
</nav>

// ❌ BAD: Divs for everything
<div className="navigation">
  <div onClick={prev}>Previous</div>
  <div onClick={next}>Next</div>
</div>
```

---

### 10. **Git Commit Messages**

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `perf`: Performance improvement
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `test`: Test updates
- `chore`: Build/tooling changes

**Examples:**

```
feat(editor): add automatic page break insertion

Implement reflow engine that monitors content height and automatically
inserts page breaks when content exceeds page dimensions.

Closes #123
```

```
fix(reflow): prevent concurrent reflow operations

Add performance guard to prevent multiple reflow operations from
running simultaneously, which could cause DOM measurement issues.
```

```
perf(context): optimize reducer with early exit patterns

Add early exit checks in reducer actions to prevent unnecessary
state updates when values haven't changed.
```

---

## Code Review Checklist

Before submitting a PR, ensure:

- [ ] Code follows naming conventions
- [ ] All components have PropTypes
- [ ] All exported functions have JSDoc
- [ ] Error handling is in place
- [ ] No console.log statements (use logger)
- [ ] Tests are written and passing
- [ ] No linting errors
- [ ] Accessibility attributes are present
- [ ] Performance considerations addressed
- [ ] Documentation is updated

---

## Resources

- [React Best Practices](https://react.dev/learn)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Maintained by:** Development Team  
**Last Updated:** October 4, 2025
