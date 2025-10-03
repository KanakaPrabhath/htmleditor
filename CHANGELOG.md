# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-10-04

### 🚀 Major Features

#### **Continuous Content Flow with Automatic Page Breaks**
- Implemented continuous contenteditable surface with automatic `<page-break>` tag insertion
- Added `useContinuousReflow` hook for DOM-based overflow detection and content redistribution
- Real-time page boundary calculations with 300ms debouncing for smooth performance
- Maintains 60fps during reflow operations with cursor position preservation

#### **Enhanced Text Formatting System**
- Added `useFormatting` hook for rich text operations (bold, italic, underline, strikethrough)
- Improved font family and size controls with better UI integration
- Enhanced alignment options and text formatting toolbar
- Default font size updated to 12px for better readability

#### **Demo Application**
- Complete demo app implementation showcasing all editor features
- Interactive page manager with navigation controls
- Live preview of continuous content flow and page breaks
- Available via `npm run dev:demo` (http://localhost:5173)

### 🧪 Testing & Quality

#### **Complete Test Suite Overhaul**
- **54 E2E tests** covering core functionality, page management, and UI specifications
- Added Jest DOM matchers for improved testing assertions
- Comprehensive test coverage for continuous reflow, formatting, and content management
- Playwright-based browser testing with UI and debug modes

#### **Performance Testing**
- Reflow operations complete within 500ms for large documents
- 60fps maintenance during content changes and page navigation
- DOM measurement optimizations for responsive editing experience

### 📚 Documentation & Architecture

#### **Monorepo Structure**
- Converted to monorepo with separate `html-editor` library and `demo-app` packages
- Updated package name to `@prabhath-tharaka/html-editor`
- Improved workspace configuration and build scripts

#### **Documentation Updates**
- Comprehensive architecture documentation (docs/ARCHITECTURE.md)
- API and usage guides (docs/API_AND_USAGE.md)
- Development workflow documentation (docs/DEVELOPMENT.md)
- Testing guidelines and performance requirements

### 🔧 Technical Improvements

#### **Build & Distribution**
- Vite-based build system with ES modules and UMD bundles
- TypeScript definitions included
- Optimized bundle sizes (62.4kB ES module, 43.8kB UMD)
- Public npm publishing with proper access controls

#### **Dependencies**
- Updated to React 18/19 compatibility
- Redux Toolkit 2.0 integration
- Lucide React icons for modern UI
- UUID library for unique identifiers

### 🐛 Bug Fixes
- Removed `dist` from .gitignore to include build artifacts
- Fixed package name references and repository URLs
- Improved contenteditable event handling and DOM manipulation

### 📦 Installation

```bash
npm install @prabhath-tharaka/html-editor
npm install react react-dom react-redux @reduxjs/toolkit
```

### 🔗 Links
- **NPM**: https://www.npmjs.com/package/@prabhath-tharaka/html-editor
- **GitHub**: https://github.com/Prabhath-Tharaka/htmleditor
- **Demo**: Run `npm run dev:demo` locally

## [1.0.0] - 2025-10-04

### 🎉 Initial Release
- Basic HTML editor functionality
- Initial project setup and structure
- Core contenteditable implementation
- Basic Redux state management</content>
<parameter name="filePath">c:\Users\Prabhath\Dev\htmleditor\CHANGELOG.md