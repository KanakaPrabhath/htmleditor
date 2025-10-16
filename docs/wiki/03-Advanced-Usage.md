# Advanced Usage

## Custom Page Manager

Create a custom page manager component for specialized page navigation:

```jsx
import React from 'react';
import { useDocumentActions, useDocumentState } from '@kanaka-prabhath/html-editor';

function CustomPageManager() {
  const { pages, activePage } = useDocumentState();
  const { setActivePage, addPage, deletePage } = useDocumentActions();

  return (
    <div className="custom-page-manager">
      <div className="page-controls">
        <button onClick={() => addPage()} title="Add Page">
          ➕
        </button>
        {pages.length > 1 && (
          <button 
            onClick={() => deletePage(activePage)} 
            title="Delete Current Page"
            disabled={activePage === 0}
          >
            🗑️
          </button>
        )}
      </div>
      
      <div className="page-navigation">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => setActivePage(index)}
            className={index === activePage ? 'active' : ''}
            title={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <DocumentProvider>
      <ContentEditableEditor pageManagerComponent={<CustomPageManager />} />
    </DocumentProvider>
  );
}
```

## Programmatic Content Control

### Loading Templates

```jsx
import React, { useRef } from 'react';

function TemplateLoader() {
  const editorRef = useRef(null);

  const templates = {
    blank: '<div class="page-content"></div>',
    letter: `
      <div class="letter-template">
        <h1>Business Letter</h1>
        <p>Date: ${new Date().toLocaleDateString()}</p>
        <p>Dear Recipient,</p>
        <p>Content goes here...</p>
        <p>Sincerely,</p>
        <p>Your Name</p>
      </div>
    `,
    report: `
      <div class="report-template">
        <h1>Report Title</h1>
        <h2>Table of Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>Findings</li>
          <li>Conclusion</li>
        </ul>
      </div>
    `
  };

  const loadTemplate = (templateName) => {
    if (editorRef.current && templates[templateName]) {
      editorRef.current.setContent(templates[templateName]);
    }
  };

  return (
    <div>
      <DocumentProvider>
        <ContentEditableEditor ref={editorRef} />
      </DocumentProvider>
      
      <div className="template-buttons">
        <button onClick={() => loadTemplate('blank')}>Blank</button>
        <button onClick={() => loadTemplate('letter')}>Letter</button>
        <button onClick={() => loadTemplate('report')}>Report</button>
      </div>
    </div>
  );
}
```

### Content Export and Import

```jsx
function DocumentExporter() {
  const editorRef = useRef(null);

  const exportDocument = () => {
    const htmlContent = editorRef.current.getHTMLContent();
    const plainText = editorRef.current.getPlainText();
    
    // Export as HTML file
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    const htmlUrl = URL.createObjectURL(htmlBlob);
    
    // Export as text file
    const textBlob = new Blob([plainText], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    
    // Create download links
    const htmlLink = document.createElement('a');
    htmlLink.href = htmlUrl;
    htmlLink.download = 'document.html';
    
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = 'document.txt';
    
    // Trigger downloads
    htmlLink.click();
    textLink.click();
    
    // Clean up
    URL.revokeObjectURL(htmlUrl);
    URL.revokeObjectURL(textUrl);
  };

  const importDocument = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        editorRef.current.setContent(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <DocumentProvider>
        <ContentEditableEditor ref={editorRef} />
      </DocumentProvider>
      
      <div className="export-controls">
        <button onClick={exportDocument}>Export Document</button>
        <input 
          type="file" 
          accept=".html,.txt,.text" 
          onChange={importDocument}
          style={{ display: 'none' }}
          id="import-file"
        />
        <label htmlFor="import-file">Import Document</label>
      </div>
    </div>
  );
}
```

## Custom Styling

### CSS Customization

```css
/* Custom editor styles */
.multi-page-editor.custom-theme {
  --editor-bg: #f8f9fa;
  --editor-border: #dee2e6;
  --toolbar-bg: #ffffff;
  --toolbar-border: #e9ecef;
  --page-bg: #ffffff;
  --page-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.custom-theme .editor-toolbar {
  background: var(--toolbar-bg);
  border-bottom: 1px solid var(--toolbar-border);
  padding: 8px 12px;
}

.custom-theme .continuous-content {
  background: var(--editor-bg);
  border: 1px solid var(--editor-border);
}

.custom-theme .page-content {
  background: var(--page-bg);
  box-shadow: var(--page-shadow);
  margin: 20px auto;
  padding: 40px;
}

/* Custom page break styling */
.custom-theme .page-break {
  border-top: 2px dashed #6c757d;
  margin: 20px 0;
  position: relative;
}

.custom-theme .page-break::after {
  content: "Page Break";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #6c757d;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}
```

### Theme Switching

```jsx
import React, { useState } from 'react';

function ThemedEditor() {
  const [theme, setTheme] = useState('light');

  const themes = {
    light: {
      '--editor-bg': '#f8f9fa',
      '--editor-border': '#dee2e6',
      '--toolbar-bg': '#ffffff',
      '--page-bg': '#ffffff',
      '--text-color': '#212529'
    },
    dark: {
      '--editor-bg': '#2d3748',
      '--editor-border': '#4a5568',
      '--toolbar-bg': '#1a202c',
      '--page-bg': '#2d3748',
      '--text-color': '#e2e8f0'
    },
    sepia: {
      '--editor-bg': '#f5f0e6',
      '--editor-border': '#d6c7b4',
      '--toolbar-bg': '#f0e6d6',
      '--page-bg': '#f8f4e6',
      '--text-color': '#5c4b3a'
    }
  };

  const applyTheme = (themeName) => {
    const themeVars = themes[themeName];
    Object.entries(themeVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
    setTheme(themeName);
  };

  return (
    <div>
      <div className="theme-selector">
        <button onClick={() => applyTheme('light')}>Light</button>
        <button onClick={() => applyTheme('dark')}>Dark</button>
        <button onClick={() => applyTheme('sepia')}>Sepia</button>
      </div>
      
      <DocumentProvider>
        <ContentEditableEditor />
      </DocumentProvider>
    </div>
  );
}
```

## Integration with State Management

### Redux Integration

```jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveDocument, loadDocument } from './documentSlice';

function ReduxIntegratedEditor() {
  const dispatch = useDispatch();
  const documentContent = useSelector(state => state.document.content);
  const editorRef = useRef(null);

  useEffect(() => {
    if (documentContent && editorRef.current) {
      editorRef.current.setContent(documentContent);
    }
  }, [documentContent]);

  const handleSave = () => {
    const content = editorRef.current.getHTMLContent();
    dispatch(saveDocument(content));
  };

  const handleAutoSave = useDebouncedCallback(() => {
    const content = editorRef.current.getHTMLContent();
    dispatch(saveDocument(content));
  }, 2000); // Auto-save every 2 seconds

  return (
    <DocumentProvider>
      <ContentEditableEditor 
        ref={editorRef}
        onChange={handleAutoSave}
      />
      <button onClick={handleSave}>Manual Save</button>
    </DocumentProvider>
  );
}
```

### Form Integration

```jsx
function FormIntegratedEditor({ value, onChange, ...props }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (value && editorRef.current) {
      editorRef.current.setContent(value);
    }
  }, [value]);

  const handleContentChange = useCallback((htmlContent) => {
    onChange(htmlContent);
  }, [onChange]);

  return (
    <DocumentProvider>
      <ContentEditableEditor
        ref={editorRef}
        onChange={handleContentChange}
        {...props}
      />
    </DocumentProvider>
  );
}

// Usage in form
function DocumentForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Document Title"
      />
      
      <FormIntegratedEditor
        value={formData.content}
        onChange={(content) => setFormData({ ...formData, content })}
        showSidebar={false}
        showPageManager={false}
      />
      
      <button type="submit">Save Document</button>
    </form>
  );
}
```

## Performance Optimization

### Debounced Operations

```jsx
import { useDebouncedCallback } from 'use-debounce';

function OptimizedEditor() {
  const editorRef = useRef(null);
  const [content, setContent] = useState('');

  const debouncedSave = useDebouncedCallback((htmlContent) => {
    // Save to database or perform expensive operation
    console.log('Saving content:', htmlContent);
    setContent(htmlContent);
  }, 1000); // 1 second debounce

  return (
    <DocumentProvider>
      <ContentEditableEditor
        ref={editorRef}
        onChange={debouncedSave}
      />
    </DocumentProvider>
  );
}
```

### Lazy Loading

```jsx
import React, { lazy, Suspense } from 'react';

const LazyContentEditableEditor = lazy(() => 
  import('@kanaka-prabhath/html-editor').then(module => ({
    default: module.ContentEditableEditor
  }))
);

const LazyDocumentProvider = lazy(() => 
  import('@kanaka-prabhath/html-editor').then(module => ({
    default: module.DocumentProvider
  }))
);

function LazyLoadedEditor() {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <LazyDocumentProvider>
        <LazyContentEditableEditor />
      </LazyDocumentProvider>
    </Suspense>
  );
}
```

## Custom Event Handlers

```jsx
function EventHandledEditor() {
  const handleEditorEvents = useCallback((event) => {
    switch (event.type) {
      case 'focus':
        console.log('Editor focused');
        break;
      case 'blur':
        console.log('Editor blurred');
        break;
      case 'paste':
        console.log('Content pasted');
        break;
      case 'keydown':
        if (event.ctrlKey && event.key === 's') {
          event.preventDefault();
          console.log('Save shortcut pressed');
        }
        break;
    }
  }, []);

  return (
    <DocumentProvider>
      <ContentEditableEditor
        onFocus={() => handleEditorEvents({ type: 'focus' })}
        onBlur={() => handleEditorEvents({ type: 'blur' })}
        onPaste={() => handleEditorEvents({ type: 'paste' })}
        onKeyDown={(e) => handleEditorEvents({ type: 'keydown', ...e })}
      />
    </DocumentProvider>
  );
}