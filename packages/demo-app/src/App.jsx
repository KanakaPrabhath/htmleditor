import { useState } from 'react'
import { ContentEditableEditor, DocumentProvider } from '@prabhath-tharaka/html-editor'
import '@prabhath-tharaka/html-editor/styles'
import './App.css'

function App() {
  return (
    <DocumentProvider>
      <div id="app-wrapper">
        <div id="editor-container">
          <ContentEditableEditor />
        </div>
      </div>
    </DocumentProvider>
  )
}

export default App
