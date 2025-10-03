# 🚀 Quick Reference - HTML Editor Monorepo

## 📁 Structure
```
htmleditor/
├── packages/
│   ├── html-editor/      # Library (npm publishable)
│   └── demo-app/         # Demo application
└── [docs & configs]
```

## ⚡ Quick Commands

### First Time Setup
```powershell
# 1. Replace package.json
Move-Item package-root.json package.json -Force

# 2. Install dependencies
npm install

# 3. Build library
npm run build:lib

# 4. Run demo
npm run dev:demo
```

### Daily Development
```powershell
# Work on library → rebuild → test in demo
npm run build:lib
npm run dev:demo
```

### Before Publishing
```powershell
# 1. Update version in packages/html-editor/package.json
# 2. Build
npm run build:lib
# 3. Publish
npm run publish:lib
```

## 🔑 Key Scripts

| Command | Description |
|---------|-------------|
| `npm run build:lib` | Build library for npm |
| `npm run dev:demo` | Run demo app (port 5173) |
| `npm run build:demo` | Build demo for production |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run publish:lib` | Build & publish to npm |

## 📦 Package Names

- **Library:** `@prabhath-tharaka/html-editor`
- **Demo:** `html-editor-demo` (private, not published)

## 📖 Documentation

| File | Purpose |
|------|---------|
| `MIGRATION_SUMMARY.md` | What changed & why |
| `SETUP_INSTRUCTIONS.md` | First-time setup |
| `PUBLISHING_GUIDE.md` | How to publish to npm |
| `README-MONOREPO.md` | Monorepo usage guide |

## 🔧 Troubleshooting

**Demo can't find library?**
```powershell
npm install
npm run build:lib
npm run dev:demo
```

**Need clean install?**
```powershell
Remove-Item -Recurse -Force node_modules, packages\*\node_modules
npm install
```

## ✅ Pre-Publish Checklist

- [ ] Version bumped
- [ ] Tests pass: `npm test`
- [ ] Library builds: `npm run build:lib`
- [ ] Demo works: `npm run dev:demo`
- [ ] CHANGELOG updated
- [ ] README current

## 🎯 Quick Links

- npm: https://www.npmjs.com/package/@prabhath-tharaka/html-editor
- GitHub: https://github.com/Prabhath-Tharaka/htmleditor
- Issues: https://github.com/Prabhath-Tharaka/htmleditor/issues

---

**Need more details?** See the full documentation files!
