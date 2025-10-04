# Getting HTML Content from the Editor

The `ContentEditableEditor` component provides an imperative API to get and set content programmatically using React refs.

## Usage

### 1. Basic Setup with Ref

```jsx
import { useRef } from 'react';
import { ContentEditableEditor, DocumentProvider } from '@prabhath-tharaka/html-editor';

function MyApp() {
  const editorRef = useRef(null);

  const handleExport = () => {
    // Get the HTML content
    const html = editorRef.current.getHTMLContent();
    console.log('HTML:', html);
    
    // Get plain text (HTML stripped)
    const text = editorRef.current.getPlainText();
    console.log('Text:', text);
  };

  return (
    <DocumentProvider>
      <ContentEditableEditor ref={editorRef} />
      <button onClick={handleExport}>Export Content</button>
    </DocumentProvider>
  );
}
```

## Available Methods

### `getHTMLContent()`
Returns the complete HTML content from the editor including all formatting and page breaks.

```jsx
const htmlContent = editorRef.current.getHTMLContent();
// Returns: '<p>Hello <strong>World</strong></p><page-break></page-break><p>Page 2</p>'
```

**Use cases:**
- Saving to database
- Exporting to file
- Sending to API
- Real-time sync

### `getPlainText()`
Returns the plain text content with all HTML tags stripped.

```jsx
const plainText = editorRef.current.getPlainText();
// Returns: 'Hello World Page 2'
```

**Use cases:**
- Character/word count
- Search indexing
- Preview generation
- Validation

### `setContent(html)`
Sets the editor content programmatically.

```jsx
const sampleHTML = '<p>New content with <em>formatting</em></p>';
editorRef.current.setContent(sampleHTML);
```

**Use cases:**
- Loading saved documents
- Template insertion
- Undo/redo functionality
- Content restoration

## Common Patterns

### Auto-Save to Backend

```jsx
import { useRef, useEffect } from 'react';

function AutoSaveEditor() {
  const editorRef = useRef(null);
  const [lastSaved, setLastSaved] = useState(null);

  const saveContent = async () => {
    if (!editorRef.current) return;
    
    const content = editorRef.current.getHTMLContent();
    
    try {
      await fetch('/api/documents/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });
      setLastSaved(new Date());
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(saveContent, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ContentEditableEditor ref={editorRef} />
      <button onClick={saveContent}>Save Now</button>
      {lastSaved && <p>Last saved: {lastSaved.toLocaleTimeString()}</p>}
    </div>
  );
}
```

### Export to File

```jsx
function ExportEditor() {
  const editorRef = useRef(null);

  const downloadHTML = () => {
    const html = editorRef.current.getHTMLContent();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.html';
    a.click();
    
    URL.revokeObjectURL(url);
  };

  const downloadText = () => {
    const text = editorRef.current.getPlainText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.txt';
    a.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <ContentEditableEditor ref={editorRef} />
      <button onClick={downloadHTML}>Download HTML</button>
      <button onClick={downloadText}>Download Text</button>
    </div>
  );
}
```

### Load Saved Content

```jsx
import { useEffect, useRef } from 'react';

function LoadEditor({ documentId }) {
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocument = async () => {
      try {
        const response = await fetch(`/api/documents/${documentId}`);
        const data = await response.json();
        
        if (editorRef.current) {
          editorRef.current.setContent(data.content);
        }
      } catch (error) {
        console.error('Load failed:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDocument();
  }, [documentId]);

  if (loading) return <div>Loading...</div>;

  return <ContentEditableEditor ref={editorRef} />;
}
```

### Real-time Preview

```jsx
import { useState, useRef } from 'react';

function EditorWithPreview() {
  const editorRef = useRef(null);
  const [preview, setPreview] = useState('');

  const updatePreview = () => {
    if (editorRef.current) {
      const html = editorRef.current.getHTMLContent();
      setPreview(html);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <ContentEditableEditor 
          ref={editorRef}
          onChange={updatePreview} 
        />
      </div>
      <div style={{ flex: 1, border: '1px solid #ccc', padding: '20px' }}>
        <h3>Live Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
    </div>
  );
}
```

### Copy to Clipboard

```jsx
function CopyEditor() {
  const editorRef = useRef(null);

  const copyHTML = async () => {
    const html = editorRef.current.getHTMLContent();
    await navigator.clipboard.writeText(html);
    alert('HTML copied to clipboard!');
  };

  const copyText = async () => {
    const text = editorRef.current.getPlainText();
    await navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div>
      <ContentEditableEditor ref={editorRef} />
      <button onClick={copyHTML}>Copy HTML</button>
      <button onClick={copyText}>Copy Text</button>
    </div>
  );
}
```

## Content Format

The HTML content returned includes:

- **Rich text formatting** - `<strong>`, `<em>`, `<u>`, `<s>` tags
- **Paragraphs** - `<p>` tags
- **Lists** - `<ul>`, `<ol>`, `<li>` tags
- **Links** - `<a>` tags with href attributes
- **Images** - `<img>` tags with localStorage references
- **Tables** - `<table>`, `<tr>`, `<td>` tags
- **Page breaks** - `<page-break>` custom tags (marks page boundaries)
- **Text alignment** - `text-align` style attributes

Example output:
```html
<p>Hello <strong>World</strong>!</p>
<p style="text-align: center;">Centered text</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<page-break></page-break>
<p>Content on page 2</p>
```

## TypeScript Support

```typescript
import { useRef } from 'react';
import type { ContentEditableEditorRef } from '@prabhath-tharaka/html-editor';

function TypedEditor() {
  const editorRef = useRef<ContentEditableEditorRef>(null);

  const handleExport = () => {
    if (editorRef.current) {
      const html: string = editorRef.current.getHTMLContent();
      const text: string = editorRef.current.getPlainText();
    }
  };

  return <ContentEditableEditor ref={editorRef} />;
}
```

## Notes

- The editor must be fully mounted before calling ref methods
- Content includes `<page-break>` tags to mark page boundaries
- Images are stored as localStorage keys, not data URLs
- Plain text conversion removes all HTML tags and normalizes whitespace
- `setContent()` triggers automatic reflow and page boundary recalculation
