# Publishing Guide - @prabhath-tharaka/html-editor

Complete guide for publishing the HTML Editor library to npm.

## 📋 Pre-Publishing Checklist

### 1. Code Quality
- [ ] All tests pass: `npm test`
- [ ] E2E tests pass: `npm run test:e2e`
- [ ] No linting errors: `npm run lint`
- [ ] Code reviewed and approved

### 2. Version & Documentation
- [ ] Version bumped in `packages/html-editor/package.json`
- [ ] CHANGELOG.md updated with changes
- [ ] README.md reflects any API changes
- [ ] TypeScript types generated (if applicable)

### 3. Build Verification
- [ ] Library builds successfully: `npm run build:lib`
- [ ] Build output verified in `packages/html-editor/dist/`:
  - ✅ `htmleditor.es.js` (ES module)
  - ✅ `htmleditor.umd.cjs` (UMD module)  
  - ✅ `style.css` (CSS bundle)
  - ✅ Source maps (.map files)
- [ ] Demo app works with new build: `npm run dev:demo`

### 4. Package Configuration
- [ ] `package.json` fields correct:
  - `name`: `@prabhath-tharaka/html-editor`
  - `version`: Updated (semantic versioning)
  - `main`, `module`, `exports` point to dist files
  - `files` array includes only necessary files
  - `peerDependencies` specified correctly
- [ ] `.npmignore` excludes source files and dev configs
- [ ] `LICENSE` file present
- [ ] `README.md` present and up-to-date

## 🚀 Publishing Steps

### Step 1: Clean Build

```bash
# Navigate to root
cd c:\Users\Prabhath\Dev\htmleditor

# Clean previous build
Remove-Item -Recurse -Force packages\html-editor\dist -ErrorAction SilentlyContinue

# Build library
npm run build:lib
```

### Step 2: Verify Build Output

```bash
# Check dist folder contents
Get-ChildItem packages\html-editor\dist

# Verify package contents (what will be published)
cd packages\html-editor
npm pack --dry-run
```

Expected output should include:
- dist/htmleditor.es.js
- dist/htmleditor.umd.cjs
- dist/style.css
- dist/*.map files
- package.json
- README.md
- LICENSE

### Step 3: Test Local Installation

```bash
# In demo-app, install from local build
cd packages\demo-app
npm install ../html-editor

# Test demo app
npm run dev
```

### Step 4: Login to npm

```bash
# First time only - login to npm
npm login

# Verify login
npm whoami
```

### Step 5: Publish

#### Option A: Using npm script (Recommended)
```bash
# From root directory
npm run publish:lib
```

#### Option B: Manual publish
```bash
# Navigate to library package
cd packages\html-editor

# Publish to npm
npm publish --access public
```

### Step 6: Verify Publication

1. **Check npm registry**
   - Visit: https://www.npmjs.com/package/@prabhath-tharaka/html-editor
   - Verify version number
   - Check "Files" tab to see published contents
   - Review package details

2. **Test installation in new project**
   ```bash
   # Create test directory
   mkdir test-install
   cd test-install
   npm init -y
   npm install @prabhath-tharaka/html-editor
   
   # Verify installation
   Get-ChildItem node_modules\@prabhath-tharaka\html-editor\dist
   ```

### Step 7: Tag Release in Git

```bash
# Create version tag
git tag v1.0.0

# Push tag to GitHub
git push origin v1.0.0

# Optional: Create GitHub release
# Visit: https://github.com/Prabhath-Tharaka/htmleditor/releases/new
```

## 📦 Package Contents Verification

The published package should contain:

```
@prabhath-tharaka/html-editor/
├── dist/
│   ├── htmleditor.es.js       # ES module bundle
│   ├── htmleditor.umd.cjs     # UMD module bundle
│   ├── style.css              # CSS bundle
│   └── *.map                  # Source maps
├── package.json               # Package metadata
├── README.md                  # Documentation
└── LICENSE                    # MIT License
```

**Should NOT contain:**
- ❌ `src/` directory
- ❌ `node_modules/`
- ❌ `.git/`
- ❌ Test files
- ❌ Config files (vite.config.js, etc.)

## 🔢 Versioning Guide

Follow [Semantic Versioning](https://semver.org/):

- **Major (1.0.0 → 2.0.0)**: Breaking changes
  - API changes that break existing code
  - Removed features
  - Changed behavior

- **Minor (1.0.0 → 1.1.0)**: New features
  - New components or hooks
  - New optional props
  - Enhanced functionality (backward compatible)

- **Patch (1.0.0 → 1.0.1)**: Bug fixes
  - Bug fixes
  - Performance improvements
  - Documentation updates

## 🔧 Troubleshooting

### Problem: "You do not have permission to publish"
**Solution:** 
```bash
npm login
npm publish --access public
```

### Problem: "Version already exists"
**Solution:** Bump version in package.json
```json
{
  "version": "1.0.1"  // Increment version
}
```

### Problem: Build files missing
**Solution:** Rebuild library
```bash
npm run build:lib
```

### Problem: Unexpected files in package
**Solution:** Check .npmignore and use dry-run
```bash
npm pack --dry-run
```

### Problem: Demo app can't find library
**Solution:** Ensure workspace linking works
```bash
# From root
npm install

# Rebuild library
npm run build:lib

# Restart demo
npm run dev:demo
```

## 📊 Post-Publishing Tasks

1. **Update demo app** (if needed)
   ```bash
   cd packages/demo-app
   npm install @prabhath-tharaka/html-editor@latest
   ```

2. **Announce release**
   - Update GitHub README
   - Create GitHub release notes
   - Post on social media (if applicable)

3. **Monitor**
   - Check npm download stats
   - Watch for issues/bug reports
   - Review user feedback

## 🔐 npm Access Tokens (CI/CD)

For automated publishing in CI/CD pipelines:

1. **Create token on npm**
   - Visit: https://www.npmjs.com/settings/[username]/tokens
   - Create "Automation" token

2. **Add to GitHub Secrets**
   - GitHub repo → Settings → Secrets
   - Add `NPM_TOKEN`

3. **Use in workflow**
   ```yaml
   - name: Publish to npm
     run: |
       echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > ~/.npmrc
       npm publish --access public
   ```

## 📝 Changelog Template

Keep CHANGELOG.md updated with each release:

```markdown
## [1.0.1] - 2025-10-03

### Added
- New feature X
- Component Y enhancement

### Fixed
- Bug in reflow calculation
- Cursor positioning issue

### Changed
- Improved performance of hook Z

### Deprecated
- Old API method (use newMethod instead)
```

## 🎯 Release Flow Summary

```
1. Code changes → 2. Test → 3. Version bump → 4. Build → 
5. Verify → 6. Publish → 7. Git tag → 8. GitHub release
```

---

**Ready to publish?** Follow the checklist and steps above carefully!

For questions or issues, refer to:
- npm docs: https://docs.npmjs.com/
- Semantic Versioning: https://semver.org/
- npm pack docs: https://docs.npmjs.com/cli/v8/commands/npm-pack
