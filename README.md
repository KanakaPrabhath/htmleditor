# HTML Editor

[![npm version](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor.svg)](https://badge.fury.io/js/%40prabhath-tharaka%2Fhtml-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF.svg)](https://vitejs.dev/)

A React-based WYSIWYG continuous HTML editor with rich text formatting and automatic page reflow. Built with Vite, React, and Redux Toolkit.

## Features

- Single continuous contenteditable surface with visual page boundaries
- Automatic page reflow (inserts <page-break> when overflowing)
- Rich text formatting, images, lists, alignment, fonts, sizes
- Page navigation and size selection (A4, Letter, Legal)
- Smooth, debounced boundary calculations for responsiveness

## Install

```bash
npm install @prabhath-tharaka/html-editor
npm install react react-dom react-redux @reduxjs/toolkit
```

## Quick Start

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

## Demo

- Local: npm run dev:demo (http://localhost:5173)

## Documentation

- Architecture: docs/ARCHITECTURE.md
- API & Usage: docs/API_AND_USAGE.md
- Development: docs/DEVELOPMENT.md
- Testing: docs/TESTING.md
- Publishing: docs/PUBLISHING.md
- Page Management (advanced): docs/PAGE_MANAGEMENT.md

## Contributing

Issues and PRs are welcome. See CONTRIBUTING.md.

## License

MIT — see LICENSE
