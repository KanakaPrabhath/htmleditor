import { useRef } from 'react'
import { HtmlEditor, DocumentProvider } from '@prabhath-tharaka/html-editor'
import '@prabhath-tharaka/html-editor/styles'
import './App.css'

function App() {
  const editorRef = useRef(null);

  // Example: You can call editorRef.current.getHTMLContent() whenever you need the content
  // const htmlContent = editorRef.current.getHTMLContent();
  // const plainText = editorRef.current.getPlainText();

  const handlePrintHTML = () => {
    if (editorRef.current) {
      const htmlContent = editorRef.current.getHTMLContent();
      console.log('HTML Content:', htmlContent);
    }
  };

  return (
  
      <div id="app-wrapper">
        <div id="editor-container">
            <DocumentProvider>
              <HtmlEditor ref={editorRef} />
            </DocumentProvider>
        </div>
         <button onClick={handlePrintHTML} style={{ padding: '5px 10px', fontSize: '12px', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
            Print HTML Content to Console
          </button>
      </div>
  )
}

export default App

