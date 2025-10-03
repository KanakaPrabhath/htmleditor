# HTML Editor Monorepo - Setup Instructions (Reference)

**Note:** This monorepo is already configured. These instructions are for reference or for setting up from scratch.

## 🚀 Initial Setup (For New Projects)

This guide will help you set up the restructured monorepo for the first time.

### Step 1: Backup Current Setup (Optional but Recommended)

```powershell
# Create a backup of current node_modules and package-lock
Copy-Item package-lock.json package-lock.json.backup -ErrorAction SilentlyContinue
```

### Step 2: Verify Root package.json

The root `package.json` should already contain the monorepo workspace configuration with:

```json
{
  "name": "htmleditor-monorepo",
  "workspaces": ["packages/*"],
  "scripts": {
    "build:lib": "npm run build --workspace=packages/html-editor",
    "dev:demo": "npm run dev --workspace=packages/demo-app",
    // ... other scripts
  }
}
```

### Step 3: Clean and Install Dependencies

```powershell
# Remove old dependencies
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Install all workspace dependencies
npm install
```

This will:
- Install shared dev dependencies at root
- Install library dependencies in `packages/html-editor`
- Install demo app dependencies in `packages/demo-app`
- Link the library to the demo app automatically

### Step 4: Build the Library

```powershell
npm run build:lib
```

This creates the `dist` folder in `packages/html-editor/`.

### Step 5: Test the Demo App

```powershell
npm run dev:demo
```

Open http://localhost:5173 to verify everything works.

## 🧪 Verify Setup

Run these commands to ensure everything is working:

```powershell
# 1. Check workspace structure
npm list --workspaces

# 2. Run tests
npm test

# 3. Build library
npm run build:lib

# 4. Check library build output
Get-ChildItem packages\html-editor\dist

# 5. Run demo app
npm run dev:demo
```

## 📁 Current Project Structure

The monorepo structure is already in place:

```
htmleditor/
├── packages/
│   ├── html-editor/           # Library (publishable to npm)
│   │   ├── src/               # Moved from root src/
│   │   ├── dist/              # Build output
│   │   ├── package.json       # Library-specific config
│   │   └── vite.config.js     # Library build config
│   │
│   └── demo-app/              # Demo application
│       ├── src/               # App-specific files
│       ├── package.json       # Demo-specific config
│       └── vite.config.js     # App build config
│
├── package.json               # Root workspace config
├── tests/                     # Shared tests
└── docs/                      # Documentation
```

## 🔧 Common Commands

```powershell
# Library Development
npm run build:lib              # Build library
npm run lint --workspace=packages/html-editor

# Demo App Development
npm run dev:demo               # Run demo in dev mode
npm run build:demo             # Build demo for production
npm run preview:demo           # Preview demo build

# Testing
npm test                       # Unit tests
npm run test:e2e              # E2E tests

# Publishing
npm run publish:lib           # Build and publish library to npm
```

## 🎯 Development Workflow

1. **Verify everything works**
   - Build library: `npm run build:lib`
   - Run demo: `npm run dev:demo`
   - Run tests: `npm test`

2. **Before publishing to npm**
   - Read `PUBLISHING_GUIDE.md`
   - Update version in `packages/html-editor/package.json`
   - Build and verify: `npm run build:lib`

## ❗ Troubleshooting

### Issue: Demo app can't find the library
**Solution:**
```powershell
# Reinstall workspace
npm install

# Rebuild library
npm run build:lib

# Restart demo
npm run dev:demo
```

### Issue: Dependencies not linking
**Solution:**
```powershell
# Clean everything
Remove-Item -Recurse -Force node_modules, packages\*\node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### Issue: Build fails
**Solution:**
```powershell
# Check you're in the root directory
Get-Location  # Should be htmleditor root

# Verify workspace setup
npm list --workspaces

# Clean and rebuild
Remove-Item -Recurse -Force packages\html-editor\dist
npm run build:lib
```

## 📚 Documentation

- **Monorepo Guide:** `README-MONOREPO.md`
- **Publishing Guide:** `PUBLISHING_GUIDE.md`
- **Library README:** `packages/html-editor/README.md`
- **Demo README:** `packages/demo-app/README.md`

---

**Questions?** Check the documentation files or the troubleshooting section above.
