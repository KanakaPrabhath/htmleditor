import { useRef } from 'react'
import { ContentEditableEditor, DocumentProvider } from '@prabhath-tharaka/html-editor'
import '@prabhath-tharaka/html-editor/styles'
import './App.css'

function App() {
  const editorRef = useRef(null);

  // Example: You can call editorRef.current.getHTMLContent() whenever you need the content
  // const htmlContent = editorRef.current.getHTMLContent();
  // const plainText = editorRef.current.getPlainText();

  return (
  
      <div id="app-wrapper">
        <div id="editor-container">
            <DocumentProvider>
              <ContentEditableEditor ref={editorRef} />
            </DocumentProvider>
        </div>
      </div>
  )
}

export default App

