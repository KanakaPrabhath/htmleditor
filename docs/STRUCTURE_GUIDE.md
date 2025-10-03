# Project Structure - Visual Guide

## 🏗️ Before vs After

### BEFORE (Old Structure)
```
htmleditor/
├── src/                          # Mixed library and app code
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── store/
│   ├── App.jsx                   # Demo app
│   ├── main.jsx                  # Demo entry
│   └── index.js                  # Library entry
├── package.json                  # Mixed dependencies
└── vite.config.js                # Mixed config
```
**Problem:** Library and demo mixed together, can't publish cleanly to npm.

---

### AFTER (New Monorepo Structure)
```
htmleditor/
│
├── packages/
│   │
│   ├── html-editor/              🎁 LIBRARY PACKAGE (npm publishable)
│   │   ├── src/
│   │   │   ├── components/       # React components
│   │   │   ├── hooks/            # Custom hooks
│   │   │   ├── lib/              # Utilities
│   │   │   ├── store/            # Redux store
│   │   │   └── index.js          # 📤 Public API exports
│   │   │
│   │   ├── dist/                 # 📦 Build output (npm publishes this)
│   │   │   ├── htmleditor.es.js
│   │   │   ├── htmleditor.umd.cjs
│   │   │   └── style.css
│   │   │
│   │   ├── package.json          # Library dependencies
│   │   ├── vite.config.js        # Library build config
│   │   ├── .npmignore            # What NOT to publish
│   │   ├── README.md
│   │   └── LICENSE
│   │
│   └── demo-app/                 🎨 DEMO APPLICATION (private)
│       ├── src/
│       │   ├── App.jsx           # Demo app (uses library)
│       │   ├── main.jsx          # App entry point
│       │   ├── store.js          # Redux setup
│       │   └── [styles]
│       │
│       ├── public/
│       ├── index.html
│       ├── package.json          # Demo dependencies
│       └── vite.config.js        # App build config
│
├── package.json                  📋 ROOT WORKSPACE CONFIG
├── tests/                        🧪 Shared tests
├── docs/                         📚 Documentation
└── [config files]                ⚙️ ESLint, Playwright, Vitest
```

---

## 🔄 How It Works

### Workspace Linking
```
Root package.json (workspaces)
    │
    ├──> packages/html-editor/
    │    └── Builds library to dist/
    │
    └──> packages/demo-app/
         └── Imports from @prabhath-tharaka/html-editor
              (linked automatically by npm workspaces)
```

### Development Flow
```
1. Edit library code in packages/html-editor/src/
                    ↓
2. Build library: npm run build:lib
                    ↓
3. Outputs to packages/html-editor/dist/
                    ↓
4. Demo app automatically uses new build
                    ↓
5. Test in demo: npm run dev:demo
```

### Publishing Flow
```
1. Update version in packages/html-editor/package.json
                    ↓
2. Build: npm run build:lib
                    ↓
3. Publish: npm run publish:lib
                    ↓
4. npm registry receives:
   - dist/ folder (built files)
   - package.json
   - README.md
   - LICENSE
                    ↓
5. Users install: npm install @prabhath-tharaka/html-editor
```

---

## 📦 What Gets Published to npm

```
@prabhath-tharaka/html-editor/
├── dist/
│   ├── htmleditor.es.js      ✅ ES module (import/export)
│   ├── htmleditor.umd.cjs    ✅ UMD module (require)
│   ├── style.css             ✅ Bundled CSS
│   └── *.map                 ✅ Source maps
├── package.json              ✅ Package metadata
├── README.md                 ✅ Documentation
└── LICENSE                   ✅ MIT License

NOT INCLUDED:
├── src/                      ❌ Source code (only dist)
├── node_modules/             ❌ Dependencies
├── vite.config.js            ❌ Build config
└── tests/                    ❌ Test files
```

---

## 🎯 Import Paths

### In Demo App (`packages/demo-app/`)
```javascript
// Import library components
import ContentEditableEditor from '@prabhath-tharaka/html-editor'

// Import library styles
import '@prabhath-tharaka/html-editor/styles'

// Import library utilities
import { documentReducer, useFormatting } from '@prabhath-tharaka/html-editor'
```

### In User's Projects (After npm install)
```javascript
// Same imports work for end users!
import ContentEditableEditor from '@prabhath-tharaka/html-editor'
import '@prabhath-tharaka/html-editor/styles'
```

---

## 🚀 Command Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     ROOT COMMANDS                            │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  npm run build:lib                                           │
│      │                                                        │
│      └─> packages/html-editor/                              │
│          └─> vite build                                     │
│              └─> Creates dist/                              │
│                                                               │
│  npm run dev:demo                                            │
│      │                                                        │
│      └─> packages/demo-app/                                 │
│          └─> vite dev                                       │
│              └─> Serves on :5173                            │
│                  (uses library from ../html-editor/dist)    │
│                                                               │
│  npm run publish:lib                                         │
│      │                                                        │
│      ├─> npm run build:lib                                  │
│      └─> cd packages/html-editor                            │
│          └─> npm publish                                    │
│              └─> Publishes to npm registry                  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔑 Key Concepts

### 1. **Monorepo**
Single git repository containing multiple packages (library + demo)

### 2. **npm Workspaces**
npm automatically links packages together:
- Demo app can use `@prabhath-tharaka/html-editor` even before publishing
- No need for `npm link` manually

### 3. **Library Build**
Vite compiles source → optimized bundles for distribution

### 4. **Package Exports**
`packages/html-editor/src/index.js` controls what users can import

### 5. **.npmignore**
Controls what files npm publishes (only dist/, not src/)

---

## 📊 Dependency Graph

```
┌──────────────────────────────────────────────────┐
│              Root Workspace                       │
│  (Dev dependencies: vitest, playwright, eslint)   │
└─────────────┬───────────────┬────────────────────┘
              │               │
    ┌─────────▼─────────┐   ┌─▼────────────────────┐
    │  html-editor      │   │  demo-app            │
    │  (Library)        │◄──│  (Demo)              │
    │                   │   │                      │
    │  Dependencies:    │   │  Dependencies:       │
    │  - uuid           │   │  - html-editor (local)│
    │                   │   │  - react             │
    │  Peer Deps:       │   │  - react-redux       │
    │  - react          │   │  - @reduxjs/toolkit  │
    │  - react-redux    │   │                      │
    │  - @reduxjs/tk    │   └──────────────────────┘
    └───────────────────┘
```

---

## 🎓 Understanding the Separation

| Aspect | Library (html-editor) | Demo (demo-app) |
|--------|----------------------|-----------------|
| **Purpose** | Reusable editor component | Example usage |
| **Published** | ✅ Yes (to npm) | ❌ No (private) |
| **Dependencies** | Minimal (uuid only) | Includes library + React |
| **Build Output** | ES + UMD modules | Static website |
| **Used By** | Other projects | Development/testing |
| **Code** | Generic, configurable | Specific implementation |

---

This structure gives you:
- ✅ Clean separation of library vs demo
- ✅ Easy npm publishing
- ✅ Professional development workflow
- ✅ Better maintainability
- ✅ Scalable for future packages

**Ready to get started?** Follow `SETUP_INSTRUCTIONS.md`!
