import React from 'react';
import PropTypes from 'prop-types';
import { 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Link,
  Table,
  FileText,
  Undo,
  Redo,
  Image as ImageIcon
} from 'lucide-react';
import { saveImage, getImage } from '../../lib/storage/index-db';
import { logger } from '../../lib/editor/utils/logger';
import { COMMON_FONT_SIZES, DEFAULT_FONT_SIZE } from '../../lib/editor/font-sizes';

/**
 * EditorToolbar - Formatting toolbar for the multi-page editor
 * Provides text formatting, alignment, lists, links, tables, and image insertion
 */
const EditorToolbar = ({ 
  currentFormat, 
  onFormatText, 
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
      const imageUrl = await getImage(key);
      
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
        onClick={() => onFormatText('undo')} 
        title="Undo"
      >
        <Undo size={16} />
      </button>
      <button 
        onClick={() => onFormatText('redo')} 
        title="Redo"
      >
        <Redo size={16} />
      </button>
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => onFormatText('bold')} 
        className={currentFormat.bold ? 'active' : ''} 
        title="Bold"
      >
        <Bold size={16} />
      </button>
      <button 
        onClick={() => onFormatText('italic')} 
        className={currentFormat.italic ? 'active' : ''} 
        title="Italic"
      >
        <Italic size={16} />
      </button>
      <button 
        onClick={() => onFormatText('underline')} 
        className={currentFormat.underline ? 'active' : ''} 
        title="Underline"
      >
        <Underline size={16} />
      </button>
      <button 
        onClick={() => onFormatText('strikethrough')} 
        className={currentFormat.strikethrough ? 'active' : ''} 
        title="Strikethrough"
      >
        <Strikethrough size={16} />
      </button>
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => onFormatText('justifyLeft')} 
        className={currentFormat.alignLeft ? 'active' : ''} 
        title="Align Left"
      >
        <AlignLeft size={16} />
      </button>
      <button 
        onClick={() => onFormatText('justifyCenter')} 
        className={currentFormat.alignCenter ? 'active' : ''} 
        title="Align Center"
      >
        <AlignCenter size={16} />
      </button>
      <button 
        onClick={() => onFormatText('justifyRight')} 
        className={currentFormat.alignRight ? 'active' : ''} 
        title="Align Right"
      >
        <AlignRight size={16} />
      </button>
      <button 
        onClick={() => onFormatText('justifyFull')} 
        className={currentFormat.alignJustify ? 'active' : ''} 
        title="Justify"
      >
        <AlignJustify size={16} />
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
        defaultValue={DEFAULT_FONT_SIZE}
        title="Font Size"
      >
        {COMMON_FONT_SIZES.map(({ value, label, pt }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      
      <select 
        onChange={(e) => onFormatText('formatBlock', e.target.value)}
        value={currentFormat.headingLevel || 'p'}
        title="Heading Level"
      >
        <option value="p">Normal</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="h4">Heading 4</option>
        <option value="h5">Heading 5</option>
        <option value="h6">Heading 6</option>
      </select>
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => onFormatText('insertUnorderedList')} 
        title="Bullet List"
      >
        <List size={16} />
      </button>
      <button 
        onClick={() => onFormatText('insertOrderedList')} 
        title="Numbered List"
      >
        <ListOrdered size={16} />
      </button>
      
      <div className="toolbar-separator" />
      
      <button 
        onClick={() => {
          const url = prompt('Enter URL:');
          if (url) onFormatText('createLink', url);
        }} 
        title="Insert Link"
      >
        <Link size={16} />
      </button>
      <button 
        onClick={() => onFormatText('insertHTML', '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>')} 
        title="Insert Table"
      >
        <Table size={16} />
      </button>
      
      {onAddPageBreak && (
        <button 
          onClick={onAddPageBreak} 
          title="Insert Page Break"
        >
          <FileText size={16} />
        </button>
      )}

      {/* Image resize controls - enhanced with better visual feedback */}
      {currentFormat.imageSelected && (
        <div className="toolbar-group">
          <button 
            onClick={() => onFormatText('toggleImageAspectRatio')} 
            title={currentFormat.preserveAspectRatio ? 'Toggle aspect ratio preservation (currently ON)' : 'Toggle aspect ratio preservation (currently OFF)'}
            className={`toolbar-button ${currentFormat.preserveAspectRatio ? 'active' : ''}`}
          >
            {currentFormat.preserveAspectRatio ? '🔗' : '🔓'}
          </button>
          
          {/* Add image resize options dropdown */}
          <div className="toolbar-separator" />
          
          <div className="toolbar-group">
            <select 
              title="Image width"
              className="toolbar-button"
              onChange={(e) => {
                const value = e.target.value;
                // Handle image width changes
                if (value === 'auto') {
                  document.execCommand('styleWithCSS', false, true);
                  document.execCommand('removeFormat', false, 'width');
                } else {
                  document.execCommand('styleWithCSS', false, true);
                  document.execCommand('styleWithCSS', false, `width: ${value}`);
                }
              }}
            >
              <option value="">Width...</option>
              <option value="auto">Auto</option>
              <option value="100px">100px</option>
              <option value="200px">200px</option>
              <option value="300px">300px</option>
              <option value="50%">50%</option>
              <option value="100%">100%</option>
            </select>
            
            <select 
              title="Image height"
              className="toolbar-button"
              onChange={(e) => {
                const value = e.target.value;
                // Handle image height changes
                if (value === 'auto') {
                  document.execCommand('styleWithCSS', false, true);
                  document.execCommand('removeFormat', false, 'height');
                } else {
                  document.execCommand('styleWithCSS', false, true);
                  document.execCommand('styleWithCSS', false, `height: ${value}`);
                }
              }}
            >
              <option value="">Height...</option>
              <option value="auto">Auto</option>
              <option value="100px">100px</option>
              <option value="200px">200px</option>
              <option value="300px">300px</option>
              <option value="50%">50%</option>
              <option value="100%">100%</option>
            </select>
          </div>
        </div>
      )}
      
      {/* Fixed: Added missing closing tags */}
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
        <ImageIcon size={16} />
      </button>
      </div>
  );
};

EditorToolbar.propTypes = {
  currentFormat: PropTypes.shape({
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    underline: PropTypes.bool,
    strikethrough: PropTypes.bool,
    alignLeft: PropTypes.bool,
    alignCenter: PropTypes.bool,
    alignRight: PropTypes.bool,
    alignJustify: PropTypes.bool,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    headingLevel: PropTypes.string
  }).isRequired,
  onFormatText: PropTypes.func.isRequired,
  onAddPageBreak: PropTypes.func
};

EditorToolbar.defaultProps = {
  onAddPageBreak: undefined
};

export default EditorToolbar;
