# HTML Editor

[![npm version](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor.svg)](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)

A React-based WYSIWYG HTML editor library with rich text formatting capabilities and automatic multi-page content reflow. Built with Vite, React 19, and Redux Toolkit.

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Architecture](#-architecture)
- [Performance](#-performance)
- [Development & Testing](#-development--testing)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- ✨ Real-time HTML editing with contentEditable
- 🖼️ Image insertion and local storage persistence
- 📄 Multi-page document support with automatic content reflow
- 🛠️ Rich text formatting:
  - Basic: Bold, Italic, Underline
  - Font Family: Arial, Times New Roman, Courier New, Georgia, Verdana
  - Font Size: 10pt - 32pt
  - Lists: Ordered, Unordered
- 🔄 Automatic page overflow handling
- 📑 Page management (add, delete, navigate)
- 📏 Multiple page sizes (A4, Letter, Legal)
- ⌨️ Keyboard shortcuts (Ctrl+B, Ctrl+I, Ctrl+U)
- ↩️ Undo/Redo functionality
- 📊 Document outline sidebar with word count
- 🎨 Dark toolbar theme
- ⚡ Real-time updates with 300ms debounced reflow
- ✨ Smooth animations with Framer Motion

## 🚀 Installation

```bash
npm install @prabhath-tharaka/html-editor
# or
yarn add @prabhath-tharaka/html-editor
```

### Peer Dependencies

```bash
npm install react react-dom react-redux @reduxjs/toolkit
```

## 📖 Usage

```jsx
import ContentEditableEditor from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function App() {
  return (
    <div className="app">
      <ContentEditableEditor />
    </div>
  );
}
```

The editor works in **continuous mode** by default - content flows seamlessly across pages just like Microsoft Word, with visual page boundary indicators.

## 🎮 Demo

Try the live demo: [https://prabhath-tharaka.github.io/htmleditor/](https://prabhath-tharaka.github.io/htmleditor/)

Or run locally:

```bash
npm run dev
# Open http://localhost:5173
```

## 🏗️ Architecture

### How It's Different from Traditional Multi-Page Editors

**Traditional Approach** (Old):
- Separate contenteditable div for each page
- Hard page breaks that prevent typing
- Content split across multiple DOM elements
- Complex cursor management during page transitions

**Continuous Approach** (Current):
- **Single contenteditable surface** for all content
- Visual page boundaries (non-interactive overlays)
- Content flows naturally without interruption
- Simpler state management and event handling
- Just like editing in MS Word!

### Component Hierarchy

```
ContentEditableEditor (main coordinator)
├── EditorToolbar (formatting controls)
├── Sidebar (document stats & outline)
├── ContinuousPageView (MS Word-like editing surface)
│   ├── Single contenteditable div (continuous content)
│   └── Page boundary indicators (visual only)
└── PageManager (page navigation & size controls)
```

### Custom Hooks

**`useFormatting`** - Text formatting operations
- Manages rich text formatting state (bold, italic, underline, etc.)
- Executes `document.execCommand` for formatting
- Tracks current format state for toolbar highlights
- Font family, font size, and text alignment

**`useContinuousReflow`** - Page boundary calculation
- Calculates where visual page lines should appear
- Based on total content height measurements
- Debounced recalculation on content changes (300ms)
- Returns current page number based on cursor position
- Smooth scrolling to specific pages

**Not used in continuous mode:**
- ~~`useCursorPosition`~~ - Not needed (no content splitting)
- ~~`useReflow`~~ - Replaced by `useContinuousReflow`

### Core Components

**`ContentEditableEditor`**
Main orchestrator component using continuous editing mode.
- Integrates `useFormatting` and `useContinuousReflow` hooks
- Single content state (`continuousContent`) instead of page array
- Handles input events and updates Redux state
- Manages page boundary recalculation
- Image upload with localStorage persistence

**`ContinuousPageView`**
MS Word-like continuous editing surface.
- Single contenteditable div for all content
- Visual page boundary overlays (non-interactive)
- Page break indicators with "Page X" labels
- Continuous scrolling without hard breaks
- Proper padding matching Word documents (60px/100px/72px)

**`EditorToolbar`**
Rich text formatting toolbar with dark theme.
- Text formatting: Bold, Italic, Underline, Strikethrough
- Font controls: Family selector, Size selector (10-32pt)
- Alignment: Left, Center, Right, Justify
- Lists: Ordered, Unordered, Checklist
- Insert: Links, Tables, Images
- Page size: A4, Letter, Legal selection
- Active button state highlighting

**`Sidebar`**
Collapsible document information panel.
- Real-time word count and page count
- Document outline with heading hierarchy
- Active page tracking
- Collapsible with smooth animation
- Dual-mode support (continuous & paged)

**`PageManager`**
Page navigation sidebar.
- Visual page list with active highlighting
- Click to navigate (smooth scroll to boundaries)
- Page size selection
- No add/delete buttons in continuous mode (auto-managed)

### Keyboard Shortcuts
- `Ctrl+B` - Toggle Bold
- `Ctrl+I` - Toggle Italic
- `Ctrl+U` - Toggle Underline

## ⚡ Performance

- **Real-time editing** with instant responsiveness
- **Debounced boundary calculation** (300ms) prevents lag during rapid typing
- **Single content string** reduces memory overhead vs multi-page arrays
- **Efficient DOM measurements** using `scrollHeight` calculations
- **Smooth scrolling** to page boundaries
- **No blocking operations** during content changes

## 🧪 Development & Testing

```bash
# Development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

Testing includes:
- Unit tests for hooks and utilities
- Integration tests for editor workflows
- E2E tests with Playwright
- Performance benchmarks

## 📚 Documentation

- **[Quick Start Guide](docs/QUICK_START.md)** - Get started quickly
- **[Implementation Details](docs/CONTINUOUS_MODE_IMPLEMENTATION.md)** - Full technical documentation
- **[Architecture Guide](.github/copilot-instructions.md)** - Code structure and patterns

## 🏗️ Technical Architecture

### State Management (Redux Toolkit)

**Continuous Mode State:**
- `continuousContent`: Single HTML string containing all content
- `pageBoundaries`: Array of visual boundary positions `[{ id, pageNumber, top, height }]`
- `editorMode`: 'continuous' (default) or 'paged'
- `pageSize`: Current page dimensions (A4/Letter/Legal)
- `activePage`: Currently active page based on cursor position

**Key Actions:**
- `updateContinuousContent(html)`: Update editor content
- `updatePageBoundaries(boundaries)`: Update visual page lines
- `updatePageSize(size)`: Change page dimensions
- `setActivePage(index)`: Update active page tracking

### Page Boundary Calculation

```javascript
// Algorithm
const contentHeight = pageHeight - padding.top - padding.bottom;
const totalHeight = editorElement.scrollHeight;
const pageCount = Math.ceil(totalHeight / contentHeight);

// Generate visual boundaries
boundaries = Array.from({ length: pageCount }, (_, i) => ({
  id: `page-${i}`,
  pageNumber: i + 1,
  top: i * (pageHeight + margin)
}));
```

**No Content Splitting** - Unlike traditional multi-page editors, content stays in one piece. Boundaries are purely visual guides.

### File Structure
```
src/
├── components/editor/       # React UI components
│   ├── ContentEditableEditor.jsx    # Main coordinator (continuous mode)
│   ├── ContinuousPageView.jsx       # MS Word-like editor surface
│   ├── EditablePageView.jsx         # [Legacy] Individual pages
│   ├── EditorToolbar.jsx            # Formatting toolbar
│   ├── PageManager.jsx              # Page navigation
│   ├── Sidebar.jsx                  # Stats & outline
│   └── MultiPageEditor.css          # Styles
├── hooks/                   # Custom React hooks
│   ├── index.js            # Centralized exports
│   ├── useFormatting.js    # Text formatting
│   ├── useContinuousReflow.js  # Boundary calculation (NEW)
│   ├── useCursorPosition.js    # [Not used in continuous mode]
│   └── useReflow.js            # [Not used in continuous mode]
├── store/                  # Redux state management
│   ├── store.js
│   └── slices/
│       └── documentSlice.js # Document state (continuous mode)
├── lib/editor/             # Business logic (legacy)
└── utils/                  # Utility functions
```

## 🆚 Continuous vs Paged Mode

| Feature | Continuous Mode (Current) | Paged Mode (Legacy) |
|---------|---------------------------|---------------------|
| Editing Surface | Single contenteditable | Multiple contenteditables |
| Content Storage | One HTML string | Array of page objects |
| Page Breaks | Visual overlays | Hard DOM boundaries |
| Typing Experience | Like MS Word | Stops at page end |
| Cursor Management | Simple (stays in place) | Complex (reflow splits) |
| Performance | Better (less state) | More overhead |
| Code Complexity | Simpler | More complex |

## 🎯 Key Benefits

✅ **Natural Editing** - Works exactly like Microsoft Word
✅ **Simpler State** - Single content string vs array of pages  
✅ **Better Performance** - Less DOM manipulation, faster updates
✅ **Easier Maintenance** - Cleaner code, fewer edge cases
✅ **User-Friendly** - No interruptions when typing crosses pages
✅ **Visual Clarity** - Page boundaries are guides, not barriers

## 🔮 Future Enhancements

- [ ] Mode toggle (switch between continuous and paged)
- [ ] Print preview with proper page breaks
- [ ] Page headers and footers
- [ ] Table row breaking at page boundaries
- [ ] Image placement at page boundaries
- [ ] Export to PDF with page boundaries
- [ ] Collaborative editing support

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/Prabhath-Tharaka/htmleditor.git
cd htmleditor
npm install
npm run dev
```

### Running Tests

```bash
npm test              # Unit tests
npm run test:e2e      # E2E tests
npm run test:e2e:ui   # E2E tests with UI
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
