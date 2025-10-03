## API and Usage

This library is published as @prabhath-tharaka/html-editor and exports a main editor component, supporting UI components, hooks, Redux reducer/actions, and utilities.

### Install
```bash
npm install @prabhath-tharaka/html-editor
# peer deps
npm install react react-dom react-redux @reduxjs/toolkit
```

### Quick Start
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

### Main Component: ContentEditableEditor
Props:
- pageManagerComponent?: ReactNode — Custom PageManager UI to render instead of the default
- onNavigatePage?(pageIndex: number): void
- onAddPage?(): void
- onDeletePage?(pageIndex: number): void
- onPageSizeChange?(newSize: 'A4'|'Letter'|'Legal'): void
- showSidebar?: boolean (default true)
- showToolbar?: boolean (default true)
- showPageManager?: boolean (default true)

Notes:
- Works in continuous mode by default — content flows across pages, which are visual overlays. Page breaks can be inserted automatically or manually.

### Exported Components
- ContentEditableEditor
- EditorToolbar
- Sidebar
- ContinuousPageView
- PageManager

### Hooks
- useFormatting(): { currentFormat, formatText(command: string, value?: any) }
- useContinuousReflow(pageSize, editorRef): {
  calculatePageBoundaries, checkAndUpdateBoundaries, updateBoundaries,
  getCurrentPage, scrollToPage, positionCursorAtPage,
  checkAndReflow, triggerAutoReflow, removePageAndContent
}

### Redux
Reducer: documentReducer

Actions:
- initializeDocument(payload)
- updateTitle(title)
- updatePageContent({ pageIndex, content })
- updatePages(pages|{pages, pageBreaks})
- addPage(index?)
- deletePage(index)
- setActivePage(index)
- updatePageSize(size)
- resetDocument()
- updateContinuousContent(html)
- updatePageBoundaries(boundaries)
- addPageBreak({ position: 'end' | number })
- removePageBreak({ pageIndex })
- setEditorMode('continuous'|'paged')

### Constants
- PAGE_DIMENSIONS: { A4: {width, height}, Letter: {...}, Legal: {...} }

### Utilities
- saveImage(file): Promise<key>
- getImage(key): string | null
- deleteImage(key): void
- clearImages(): void
- getAllImageKeys(): string[]

### Custom Page Manager
Use your own PageManager by passing pageManagerComponent or by hiding the default UI and dispatching actions directly.

```jsx
<ContentEditableEditor showPageManager={false} />
```

See also: docs/PAGE_MANAGEMENT.md for an extended example.
