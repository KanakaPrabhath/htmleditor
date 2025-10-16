# HTML Editor Wiki

Welcome to the official wiki for `@kanaka-prabhath/html-editor` - a React-based WYSIWYG HTML editor with automatic page reflow and rich text formatting.

## 📚 Documentation Index

### Getting Started
- **[01-Getting-Started.md](01-Getting-Started.md)** - Installation, basic usage, and project overview
- Quick setup guides and minimal examples
- Project structure and key features

### API Reference
- **[02-API-Reference.md](02-API-Reference.md)** - Complete API documentation
- Component props and methods
- Hook interfaces and usage
- Utility functions and constants

### Advanced Usage
- **[03-Advanced-Usage.md](03-Advanced-Usage.md)** - Advanced patterns and customizations
- Custom page managers and components
- Programmatic content control
- Styling and theming
- Integration with state management

### Architecture
- **[04-Architecture.md](04-Architecture.md)** - System architecture and design patterns
- Component architecture and data flow
- State management design
- Performance optimization strategies

### Troubleshooting
- **[05-Troubleshooting.md](05-Troubleshooting.md)** - Common issues and solutions
- Debugging techniques and tools
- Browser compatibility guide
- Performance optimization tips

## 🚀 Quick Links

### Installation
```bash
npm install @kanaka-prabhath/html-editor
npm install react react-dom
```

### Basic Usage
```jsx
import { HtmlEditor, DocumentProvider } from '@kanaka-prabhath/html-editor';
import '@kanaka-prabhath/html-editor/styles';

function App() {
  return (
    <DocumentProvider>
      <HtmlEditor />
    </DocumentProvider>
  );
}
```

## 🎯 Key Features

- **WYSIWYG HTML Editing**: Rich text editing with real-time preview
- **Automatic Page Reflow**: Content automatically flows across pages
- **Multi-Page Management**: Navigate, add, and delete pages
- **Rich Text Formatting**: Bold, italic, underline, alignment, fonts, colors
- **Customizable UI**: Show/hide components, custom styling
- **Performance Optimized**: Debounced operations, efficient algorithms
- **TypeScript Ready**: Full type definitions included

## 📖 Documentation Structure

This wiki is organized to help you find information quickly:

1. **Getting Started** - For new users and quick setup
2. **API Reference** - For developers needing detailed API information  
3. **Advanced Usage** - For complex implementations and customizations
4. **Architecture** - For understanding internal workings and contributing
5. **Troubleshooting** - For solving common problems and debugging

## 🔧 Development Resources

### GitHub Repository
- [Main Repository](https://github.com/Prabhath-Tharaka/htmleditor)
- [Issue Tracker](https://github.com/Prabhath-Tharaka/htmleditor/issues)
- [Pull Requests](https://github.com/Prabhath-Tharaka/htmleditor/pulls)

### npm Package
- [Package Page](https://www.npmjs.com/package/@kanaka-prabhath/html-editor)
- [Version History](https://www.npmjs.com/package/@kanaka-prabhath/html-editor?activeTab=versions)

### Demo Application
- [Live Demo](https://prabhath-tharaka.github.io/htmleditor) (if deployed)
- [Demo Source Code](./packages/demo-app/)

## 🆕 Changelog

### v1.1.0
- Added automatic page reflow functionality
- Improved performance with debounced operations
- Enhanced page management features
- Added comprehensive test coverage
- Improved documentation

### v1.0.0
- Initial release with basic WYSIWYG editing
- Rich text formatting support
- Multi-page document management
- Customizable UI components

## 🤝 Contributing

We welcome contributions! Please see:

- [Contributing Guidelines](../CONTRIBUTING.md)
- [Code of Conduct](https://github.com/Prabhath-Tharaka/htmleditor/blob/main/CODE_OF_CONDUCT.md)
- [Development Setup](../DEVELOPMENT.md)

## 📝 License

MIT License - see [LICENSE](../LICENSE) file for details.

## ❓ Getting Help

- **GitHub Issues**: [Create an issue](https://github.com/Prabhath-Tharaka/htmleditor/issues)
- **Stack Overflow**: Use tag `html-editor`
- **Email**: prabhath.tharaka@example.com

## 🔗 Related Projects

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Playwright](https://playwright.dev/) - End-to-end testing framework
- [Lucide React](https://lucide.dev/) - Icon library

---

*This wiki is maintained by the HTML Editor development team. Last updated: October 2025*