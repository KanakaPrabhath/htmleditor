# HTML Editor - Monorepo

This monorepo contains the HTML Editor library and its demo application.

## 📦 Packages

### `packages/html-editor`
The main library package published to npm as `@prabhath-tharaka/html-editor`.

### `packages/demo-app`
Demo application showcasing the HTML Editor library.

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Install all dependencies for all packages
npm install
```

## 📝 Development

### Build the Library
```bash
npm run build:lib
```

This builds the library in `packages/html-editor/dist/`.

### Run Demo App
```bash
npm run dev:demo
```

Opens the demo app at http://localhost:5173

### Build Demo App
```bash
npm run build:demo
```

### Preview Demo Build
```bash
npm run preview:demo
```

## 🧪 Testing

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# E2E tests with UI
npm run test:e2e:ui

# Debug E2E tests
npm run test:e2e:debug
```

## 📦 Publishing to NPM

### Preparation

1. **Update version** in `packages/html-editor/package.json`
   ```json
   {
     "version": "1.0.1"
   }
   ```

2. **Build the library**
   ```bash
   npm run build:lib
   ```

3. **Verify the build**
   - Check `packages/html-editor/dist/` contains:
     - `htmleditor.es.js` (ES module)
     - `htmleditor.umd.cjs` (UMD module)
     - `style.css` (Bundled CSS)
     - Source maps

### Publishing

#### Option 1: Using npm script (Recommended)
```bash
npm run publish:lib
```

#### Option 2: Manual publishing
```bash
# Navigate to library package
cd packages/html-editor

# Login to npm (first time only)
npm login

# Publish
npm publish --access public
```

### Post-Publishing

1. **Verify on npm**
   - Visit: https://www.npmjs.com/package/@prabhath-tharaka/html-editor
   - Check version number
   - Verify package contents

2. **Create Git tag**
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

3. **Update demo app** (if needed)
   ```bash
   cd packages/demo-app
   npm install @prabhath-tharaka/html-editor@latest
   ```

## 🏗️ Project Structure

```
htmleditor/
├── packages/
│   ├── html-editor/           # Library package
│   │   ├── src/
│   │   │   ├── components/    # React components
│   │   │   ├── hooks/         # Custom hooks
│   │   │   ├── lib/           # Utilities
│   │   │   ├── store/         # Redux store
│   │   │   └── index.js       # Main entry point
│   │   ├── dist/              # Build output (gitignored)
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── README.md
│   │   ├── LICENSE
│   │   └── .npmignore
│   │
│   └── demo-app/              # Demo application
│       ├── src/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── store.js
│       ├── public/
│       ├── index.html
│       ├── package.json
│       └── vite.config.js
│
├── tests/                     # Shared tests
├── docs/                      # Documentation
├── package-root.json          # Root package.json (workspace config)
├── vitest.config.js           # Vitest configuration
├── playwright.config.js       # Playwright configuration
└── README.md                  # This file
```

## 📋 NPM Publishing Checklist

Before publishing a new version:

- [ ] Update version in `packages/html-editor/package.json`
- [ ] Update CHANGELOG.md with new features/fixes
- [ ] Run tests: `npm test`
- [ ] Build library: `npm run build:lib`
- [ ] Check build output in `packages/html-editor/dist/`
- [ ] Verify .npmignore excludes source files
- [ ] Test demo app with new build: `npm run dev:demo`
- [ ] Update README.md if API changed
- [ ] Commit all changes
- [ ] Publish: `npm run publish:lib`
- [ ] Create git tag: `git tag v1.x.x`
- [ ] Push tag: `git push origin v1.x.x`

## 🔍 Troubleshooting

### Build Issues
```bash
# Clean and rebuild
rm -rf packages/html-editor/dist
npm run build:lib
```

### Dependency Issues
```bash
# Clean install
rm -rf node_modules packages/*/node_modules
npm install
```

### Demo App Not Finding Library
```bash
# Rebuild library and restart demo
npm run build:lib
npm run dev:demo
```

## 📄 License

MIT - see LICENSE file for details

## 🤝 Contributing

See CONTRIBUTING.md for development guidelines.
