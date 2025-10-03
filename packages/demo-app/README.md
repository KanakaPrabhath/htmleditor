# HTML Editor Demo App

This is a demo application showcasing the `@prabhath-tharaka/html-editor` library with the latest features.

## ✨ Latest Features

- **Tab Key Support**: Press Tab to insert indentation (4 spaces) instead of losing focus
- **Fixed Font Sizing**: Font size dropdown now properly applies sizes to selected text
- **Default Formatting**: 12pt font size and 1.15 line height for better readability
- **Real-time Rich Text Editing**: Instant formatting and content updates
- **Multi-page Continuous Editing**: Like Microsoft Word - content flows seamlessly across pages

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 Usage Example

The demo shows a minimal integration of the HTML Editor:

```jsx
import { ContentEditableEditor } from '@prabhath-tharaka/html-editor'
import '@prabhath-tharaka/html-editor/styles'

function App() {
  return (
    <div id="editor-container">
      <ContentEditableEditor />
    </div>
  )
}
```

## 🔧 Redux Store Setup

The demo includes a properly configured Redux store:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { documentReducer } from '@prabhath-tharaka/html-editor';

const store = configureStore({
  reducer: {
    document: documentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['document/updateContent'],
        ignoredPaths: ['document.pages.content']
      }
    })
});
```

## 📚 Documentation

For complete documentation and API reference, see the main library:
- npm: https://www.npmjs.com/package/@prabhath-tharaka/html-editor
- GitHub: https://github.com/Prabhath-Tharaka/htmleditor

## 🎨 Customization

This demo uses the default styles. You can customize by:
1. Not importing the default styles
2. Creating your own CSS overrides
3. Using CSS custom properties

## 🔗 Links

- Library Package: [@prabhath-tharaka/html-editor](https://www.npmjs.com/package/@prabhath-tharaka/html-editor)
- Repository: [GitHub](https://github.com/Prabhath-Tharaka/htmleditor)
