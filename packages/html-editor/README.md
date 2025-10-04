# HTML Editor (Library)

[![npm version](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor.svg)](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React-based WYSIWYG continuous HTML editor with automatic page reflow and rich text formatting.

## Install

```bash
npm install @prabhath-tharaka/html-editor
npm install react react-dom
```

## Usage

```jsx
import { ContentEditableEditor, DocumentProvider } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

export default function App() {
  return (
    <DocumentProvider>
      <ContentEditableEditor />
    </DocumentProvider>
  );
}
```

## Props

ContentEditableEditor:
- pageManagerComponent?: ReactNode
- onNavigatePage?(pageIndex: number): void
- onAddPage?(): void
- onDeletePage?(pageIndex: number): void
- onPageSizeChange?(size: 'A4'|'Letter'|'Legal'): void
- showSidebar?: boolean (default true)
- showToolbar?: boolean (default true)
- showPageManager?: boolean (default true)

## Exports
- Context: DocumentProvider, useDocument, useDocumentState, useDocumentActions
- Components: ContentEditableEditor, EditorToolbar, Sidebar, ContinuousPageView, PageManager, ErrorBoundary
- Hooks: useFormatting, useContinuousReflow
- Utilities: saveImage, getImage, deleteImage, clearImages, getAllImageKeys, logger
- Constants: PAGE_DIMENSIONS

## Docs
- Architecture: ../../docs/ARCHITECTURE.md
- API & Usage: ../../docs/API_AND_USAGE.md
- Page Management: ../../docs/PAGE_MANAGEMENT.md

## License

MIT
