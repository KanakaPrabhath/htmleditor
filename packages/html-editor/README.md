# HTML Editor (Library)

[![npm version](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor.svg)](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React-based WYSIWYG continuous HTML editor with automatic page reflow and rich text formatting.

## Install

```bash
npm install @prabhath-tharaka/html-editor
npm install react react-dom react-redux @reduxjs/toolkit
```

## Usage

```jsx
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ContentEditableEditor, documentReducer } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

const store = configureStore({
  reducer: { document: documentReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['document/updatePageContent', 'document/updatePages'],
        ignoredPaths: ['document.pages']
      }
    })
});

export default function App() {
  return (
    <Provider store={store}>
      <ContentEditableEditor />
    </Provider>
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
- Components: ContentEditableEditor, EditorToolbar, Sidebar, ContinuousPageView, PageManager
- Hooks: useFormatting, useContinuousReflow
- Redux: documentReducer and all actions
- Utilities: saveImage, getImage, deleteImage, clearImages, getAllImageKeys
- Constants: PAGE_DIMENSIONS

## Docs
- Architecture: ../../docs/ARCHITECTURE.md
- API & Usage: ../../docs/API_AND_USAGE.md
- Page Management: ../../docs/PAGE_MANAGEMENT.md

## License

MIT
