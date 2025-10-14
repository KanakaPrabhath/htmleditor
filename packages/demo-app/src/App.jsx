import { useRef } from 'react'
import { HtmlEditor, DocumentProvider } from '@prabhath-tharaka/html-editor'
import '@prabhath-tharaka/html-editor/styles'
import './App.css'

function App() {
  const editorRef = useRef(null);

  // Sample HTML content for the editor
  const sampleContent = `
    <h1>Welcome to the HTML Editor</h1>
    <p>This is a <strong>WYSIWYG</strong> HTML editor with rich text formatting capabilities.</p>
    <h2>Features</h2>
    <ul>
      <li><em>Bold</em> and <u>underline</u> text formatting</li>
      <li>Multiple font sizes and families</li>
      <li>Automatic page breaks for continuous content</li>
      <li>Image insertion and resizing</li>
      <li>Page navigation and management</li>
    </ul>
    <h2>Getting Started</h2>
    <p>Use the toolbar above to format your text. You can:</p>
    <ol>
      <li>Select text and apply formatting</li>
      <li>Insert images using the image button</li>
      <li>Add new pages or navigate between existing ones</li>
      <li>Zoom in/out for better viewing</li>
    </ol>
    <p><br></p>
    <p>Start typing to see the editor in action!</p>
  `.trim();

  // Example: You can call editorRef.current.getHTMLContent() whenever you need the content
  // const htmlContent = editorRef.current.getHTMLContent();
  // const plainText = editorRef.current.getPlainText();

  const handlePrintHTML = () => {
    if (editorRef.current) {
      const htmlContent = editorRef.current.getHTMLContent();
      console.log('HTML Content:', htmlContent);
    }
  };

  const handleResetDocument = () => {
    if (editorRef.current) {
      editorRef.current.setContent(sampleContent);
    }
  };

  return (
      <div id="app-wrapper">
        <div id="editor-container">
            <DocumentProvider>
              <HtmlEditor ref={editorRef} />
            </DocumentProvider>
        </div>
         <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
           <button onClick={handlePrintHTML} style={{ padding: '5px 10px', fontSize: '12px' }}>
             HTML Content to Console
           </button>
           <button onClick={handleResetDocument} style={{ padding: '5px 10px', fontSize: '12px' }}>
             Load Sample Content
           </button>
         </div>
      </div>
  )
}

export default App

