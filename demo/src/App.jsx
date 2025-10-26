import { useRef } from 'react'
import { HtmlEditor, DocumentProvider } from '@kanaka-prabhath/html-editor'
import '@kanaka-prabhath/html-editor/styles';
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
      console.log('Current HTML Content:', htmlContent);
    }
  };

  const handlePrintSelectedHTML = () => {
    if (editorRef.current) {
      const selectedHtmlContent = editorRef.current.getSelectedHTMLContent();
      console.log('Selected HTML Content:', selectedHtmlContent);
    }
  };

  const handleResetDocument = () => {
    if (editorRef.current) {
      editorRef.current.setContent(sampleContent);
    }
  };

  const handleInsertSampleContent = () => {
    if (editorRef.current) {
      // Insert a smaller sample content at cursor position
      const insertContent = `
        <h3>Inserted Content</h3>
        <p>This content was inserted at the cursor position using the insertContent method.</p>
        <p>You can continue typing after this inserted content.</p>
      `.trim();
      editorRef.current.insertContent(insertContent);
    }
  };

  const handleSetPageSize = () => {
    if (editorRef.current) {
      // Cycle through available page sizes
      const sizes = ['A4', 'Letter', 'Legal'];
      const currentSize = 'A4'; // You could get this from state if needed
      const nextSize = sizes[(sizes.indexOf(currentSize) + 1) % sizes.length];
      editorRef.current.setPageSize(nextSize);
      console.log('Page size set to:', nextSize);
    }
  };

  const handleSetPageMargins = () => {
    if (editorRef.current) {
      // Cycle through available margin presets and custom margins
      const marginOptions = [
        'NORMAL', // preset
        'NARROW', // preset
        { top: 0.6, bottom: 0.6, left: 0.6, right: 0.6 }, // custom: 0.6" all sides
        { top: 0.5, bottom: 0.5, left: 1.0, right: 1.0 }, // custom: 0.5" top/bottom, 1.0" left/right
        { top: 1.0, bottom: 1.0, left: 0.5, right: 0.5 }  // custom: 1.0" top/bottom, 0.5" left/right
      ];
      
      // For demo purposes, we'll just set the custom 0.6" margins as requested
      const customMargins = { top: 0.6, bottom: 0.6, left: 0.6, right: 0.6 };
      editorRef.current.setPageMargins(customMargins);
      console.log('Page margins set to custom:', customMargins);
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
           <button onClick={handlePrintSelectedHTML} style={{ padding: '5px 10px', fontSize: '12px' }}>
             Selected HTML to Console
           </button>
           <button onClick={handleResetDocument} style={{ padding: '5px 10px', fontSize: '12px' }}>
             Load Sample Content
           </button>
           <button onClick={handleInsertSampleContent} style={{ padding: '5px 10px', fontSize: '12px' }}>
             Insert Sample Content
           </button>
           <button onClick={handleSetPageSize} style={{ padding: '5px 10px', fontSize: '12px' }}>
             Change Page Size
           </button>
           <button onClick={handleSetPageMargins} style={{ padding: '5px 10px', fontSize: '12px' }}>
             Set Custom Margins (0.6")
           </button>
         </div>
      </div>
  )
}

export default App

