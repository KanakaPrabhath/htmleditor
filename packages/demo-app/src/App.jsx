import { useState } from 'react'
import { ContentEditableEditor } from '@prabhath-tharaka/html-editor'
import '@prabhath-tharaka/html-editor/styles'
import './App.css'

function App() {
  return (
    <div id="app-wrapper">
      <div id="editor-container">
        <ContentEditableEditor />
      </div>
    </div>
  )
}

export default App
