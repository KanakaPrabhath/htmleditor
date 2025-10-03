## Publishing the Library to npm

Package: packages/html-editor (name: @prabhath-tharaka/html-editor)

### Checklist
- Update version in packages/html-editor/package.json
- Run unit and E2E tests
- Build the library
- Verify dist/ contains ES, UMD bundles and CSS

### Steps
```bash
npm run build:lib
cd packages/html-editor
npm publish --access public
```

Optional:
```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```
