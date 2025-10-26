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
  Image as ImageIcon,
  Indent,
  Outdent
} from './icons.jsx';
import { deleteImage, saveImage, getImage } from '../../lib/storage/index-db';
import { logger } from '../../lib/editor/utils/logger';
import { COMMON_FONT_SIZES, DEFAULT_FONT_SIZE } from '../../lib/editor/font-sizes';
import { indentSelectedBlocks } from '../../lib/editor/indentation-utils';
import ColorPickerDropdown from './ColorPickerDropdown';

// Constants for toolbar options
const FONT_FAMILIES = [
  // English Fonts
  { value: 'Segoe UI', label: 'Segoe UI' },
  { value: 'Arial', label: 'Arial' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Verdana', label: 'Verdana' },
  // Sinhala Fonts
  { value: 'Noto Sans Sinhala', label: 'Noto Sans Sinhala' },
  { value: 'Iskoola Pota', label: 'Iskoola Pota' },
  // Tamil Fonts
  { value: 'Noto Sans Tamil', label: 'Noto Sans Tamil' },
  // Unicode Fonts
  { value: 'Noto Sans', label: 'Noto Sans' }
];

const HEADING_LEVELS = [
  { value: 'p', label: 'Normal' },
  { value: 'h1', label: 'Heading 1' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'h3', label: 'Heading 3' },
  { value: 'h4', label: 'Heading 4' },
  { value: 'h5', label: 'Heading 5' },
  { value: 'h6', label: 'Heading 6' }
];

const DEFAULT_TABLE_HTML = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>';

/**
 * EditorToolbar - Formatting toolbar for the multi-page editor
 * Provides text formatting, alignment, lists, links, tables, and image insertion
 */
const EditorToolbar = ({ 
  currentFormat, 
  onFormatText, 
  onAddPageBreak,
  onInsertImage,
  canUndo = false,
  canRedo = false
}) => {
  /**
   * Render a button with optional active state
   */
  const renderButton = (onClick, Icon, title, formatKey = null, disabled = false) => (
    <button 
      key={title}
      onClick={onClick} 
      className={formatKey && currentFormat[formatKey] ? 'active' : ''} 
      disabled={disabled}
      title={title}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <Icon size={16} />
    </button>
  );

  /**
   * Render a separator
   */
  const renderSeparator = () => <div className="toolbar-separator" />;

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
      
      if (imageUrl && onInsertImage) {
        const imageHtml = `<img src="${imageUrl}" data-key="${key}" alt="Inserted image" />`;
        onInsertImage(imageHtml);
      } else {
        logger.warn('Failed to insert image: missing URL or callback');
      }
      
      // Reset file input to allow re-uploading the same file
      document.getElementById('image-upload').value = '';
    } catch (error) {
      logger.error('Error uploading image', error);
    }
  };

  /**
   * Handle indent button click
   */
  const handleIndent = () => {
    const success = indentSelectedBlocks(false);
    if (!success) {
      // If no blocks selected, insert indentation at cursor
      document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  };

  /**
   * Handle outdent button click
   */
  const handleOutdent = () => {
    indentSelectedBlocks(true);
  };

  /**
   * Handle link insertion
   */
  const handleInsertLink = () => {
    const url = prompt('Enter URL:');
    if (url) onFormatText('createLink', url);
  };

  /**
   * Handle image button click
   */
  const handleImageButtonClick = () => {
    document.getElementById('image-upload').click();
  };

  return (
    <div className="editor-toolbar">
      {/* Undo/Redo */}
      {renderButton(() => onFormatText('undo'), Undo, 'Undo', null, !canUndo)}
      {renderButton(() => onFormatText('redo'), Redo, 'Redo', null, !canRedo)}
      
      {renderSeparator()}
      
      {/* Text Formatting */}
      {renderButton(() => onFormatText('bold'), Bold, 'Bold', 'bold')}
      {renderButton(() => onFormatText('italic'), Italic, 'Italic', 'italic')}
      {renderButton(() => onFormatText('underline'), Underline, 'Underline', 'underline')}
      {renderButton(() => onFormatText('strikethrough'), Strikethrough, 'Strikethrough', 'strikethrough')}
      
      {renderSeparator()}
      
      {/* Alignment */}
      {renderButton(() => onFormatText('justifyLeft'), AlignLeft, 'Align Left', 'alignLeft')}
      {renderButton(() => onFormatText('justifyCenter'), AlignCenter, 'Align Center', 'alignCenter')}
      {renderButton(() => onFormatText('justifyRight'), AlignRight, 'Align Right', 'alignRight')}
      {renderButton(() => onFormatText('justifyFull'), AlignJustify, 'Justify', 'alignJustify')}
      
      {renderSeparator()}
      
      {/* Font Controls */}
      <select 
        onChange={(e) => onFormatText('fontName', e.target.value)}
        value={currentFormat.fontFamily || 'Segoe UI'}
        title="Font Family"
      >
        {FONT_FAMILIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      
      <select 
        onChange={(e) => onFormatText('fontSize', e.target.value)}
        value={currentFormat.fontSize || DEFAULT_FONT_SIZE}
        title="Font Size"
      >
        {COMMON_FONT_SIZES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      
      <ColorPickerDropdown
        currentColor={currentFormat.fontColor}
        onColorSelect={(color) => onFormatText('foreColor', color)}
        title="Font Color"
      />
      
      <select 
        onChange={(e) => onFormatText('formatBlock', e.target.value)}
        value={currentFormat.headingLevel || 'p'}
        title="Heading Level"
      >
        {HEADING_LEVELS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      
      {renderSeparator()}
      
      {/* Lists */}
      {renderButton(() => onFormatText('insertUnorderedList'), List, 'Bullet List')}
      {renderButton(() => onFormatText('insertOrderedList'), ListOrdered, 'Numbered List')}
      
      {renderSeparator()}
      
      {/* Indentation */}
      <button 
        onClick={handleIndent} 
        title="Increase Indent (Tab)"
      >
        <Indent size={16} />
      </button>
      <button 
        onClick={handleOutdent} 
        title="Decrease Indent (Shift+Tab)"
      >
        <Outdent size={16} />
      </button>
      
      {renderSeparator()}
      
      {/* Links and Tables */}
      <button 
        onClick={handleInsertLink} 
        title="Insert Link"
      >
        <Link size={16} />
      </button>
      {renderButton(() => onFormatText('insertHTML', DEFAULT_TABLE_HTML), Table, 'Insert Table')}
      
      {onAddPageBreak && renderButton(onAddPageBreak, FileText, 'Insert Page Break')}
      
      {renderSeparator()}
      
      {/* Images */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => e.target.files[0] && handleImageUpload(e.target.files[0])}
        style={{ display: 'none' }}
        id="image-upload"
      />
      <button 
        onClick={handleImageButtonClick} 
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
    fontColor: PropTypes.string,
    headingLevel: PropTypes.string
  }).isRequired,
  onFormatText: PropTypes.func.isRequired,
  onAddPageBreak: PropTypes.func,
  onInsertImage: PropTypes.func,
  canUndo: PropTypes.bool,
  canRedo: PropTypes.bool
};

EditorToolbar.defaultProps = {
  onAddPageBreak: undefined,
  onInsertImage: undefined,
  canUndo: false,
  canRedo: false
};

export default EditorToolbar;
