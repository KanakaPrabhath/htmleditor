import React from 'react';
import { saveImage } from '../../lib/storage/local-storage';
import { logger } from '../../lib/editor/utils/logger';

/**
 * EditorToolbar - Formatting toolbar for the multi-page editor
 * Provides text formatting, alignment, lists, links, tables, and image insertion
 */
const EditorToolbar = ({ 
  currentFormat, 
  pageSize, 
  onFormatText, 
  onPageSizeChange,
  onAddPageBreak
}) => {
  /**
   * Handle image upload
   */
  const handleImageUpload = async (file) => {
    try {
      const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Invalid image format. Supported: PNG, JPEG, GIF, WEBP');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Image exceeds maximum size of 5MB');
        return;
      }

      const key = await saveImage(file);
      const imageUrl = localStorage.getItem(key);
      
      if (imageUrl) {
        document.execCommand('insertImage', false, imageUrl);
        logger.info('Image inserted', { key });
      }
    } catch (error) {
      logger.error('Error uploading image', error);
    }
  };

  return (
    <div className="editor-toolbar">
      <button 
        onClick={() => onFormatText('bold')} 
        className={currentFormat.bold ? 'active' : ''} 
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button 
        onClick={() => onFormatText('italic')} 
        className={currentFormat.italic ? 'active' : ''} 
        title="Italic"
      >
        <em>I</em>
      </button>
      <button 
        onClick={() => onFormatText('underline')} 
        className={currentFormat.underline ? 'active' : ''} 
        title="Underline"
      >
        <u>U</u>
      </button>
      <button 
        onClick={() => onFormatText('strikethrough')} 
        className={currentFormat.strikethrough ? 'active' : ''} 
        title="Strikethrough"
      >
        <s>S</s>
      </button>
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => onFormatText('justifyLeft')} 
        className={currentFormat.alignLeft ? 'active' : ''} 
        title="Align Left"
      >
        ⬅️
      </button>
      <button 
        onClick={() => onFormatText('justifyCenter')} 
        className={currentFormat.alignCenter ? 'active' : ''} 
        title="Align Center"
      >
        ⬌
      </button>
      <button 
        onClick={() => onFormatText('justifyRight')} 
        className={currentFormat.alignRight ? 'active' : ''} 
        title="Align Right"
      >
        ➡️ 
      </button>
      <button 
        onClick={() => onFormatText('justifyFull')} 
        className={currentFormat.alignJustify ? 'active' : ''} 
        title="Justify"
      >
        ⬌
      </button>
      
      <div className="toolbar-separator" />
      
      <select 
        onChange={(e) => onFormatText('fontName', e.target.value)}
        defaultValue="Arial"
        title="Font Family"
      >
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Verdana">Verdana</option>
      </select>
      
      <select 
        onChange={(e) => onFormatText('fontSize', e.target.value)}
        defaultValue="16px"
        title="Font Size"
      >
        <option value="10px">10</option>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="24px">24</option>
        <option value="32px">32</option>
      </select>
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => onFormatText('insertUnorderedList')} 
        title="Bullet List"
      >
        • List
      </button>
      <button 
        onClick={() => onFormatText('insertOrderedList')} 
        title="Numbered List"
      >
        1. List
      </button>
      <button 
        onClick={() => onFormatText('insertCheckList')} 
        title="Checklist"
      >
        ☑️ List
      </button>
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => {
          const url = prompt('Enter URL:');
          if (url) onFormatText('createLink', url);
        }} 
        title="Insert Link"
      >
        🔗 Link
      </button>
      <button 
        onClick={() => onFormatText('insertHTML', '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>')} 
        title="Insert Table"
      >
        📊 Table
      </button>
      
      {onAddPageBreak && (
        <button 
          onClick={onAddPageBreak} 
          title="Insert Page Break"
        >
          📄 Page Break
        </button>
      )}
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => onFormatText('undo')} 
        title="Undo"
      >
        ↶ Undo
      </button>
      <button 
        onClick={() => onFormatText('redo')} 
        title="Redo"
      >
        ↷ Redo
      </button>
      
      <div className="toolbar-separator" />
      
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => e.target.files[0] && handleImageUpload(e.target.files[0])}
        style={{ display: 'none' }}
        id="image-upload"
      />
      <button 
        onClick={() => document.getElementById('image-upload').click()} 
        title="Insert Image"
      >
        🖼️ Image
      </button>
      
      <div className="toolbar-separator" />
      
      <select 
        value={pageSize}
        onChange={(e) => onPageSizeChange(e.target.value)}
        title="Page Size"
      >
        <option value="A4">A4</option>
        <option value="Letter">Letter</option>
        <option value="Legal">Legal</option>
      </select>
    </div>
  );
};

export default EditorToolbar;
