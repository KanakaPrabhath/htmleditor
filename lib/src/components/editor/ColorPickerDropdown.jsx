import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Palette } from 'lucide-react';

/**
 * ColorPickerDropdown - A dropdown component for selecting font colors
 * Provides a palette of basic colors with a custom color picker option
 */
const ColorPickerDropdown = ({ currentColor, onColorSelect, title = "Font Color" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Basic color palette
  const colorPalette = [
    '#000000', // Black
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
    '#FFA500', // Orange
    '#800080', // Purple
    '#FFC0CB', // Pink
    '#A52A2A', // Brown
    '#808080', // Gray
    '#FFFFFF', // White
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleColorClick = (color) => {
    onColorSelect(color);
    setIsOpen(false);
  };

  const handleCustomColorChange = (event) => {
    const color = event.target.value;
    onColorSelect(color);
  };

  return (
    <div className="color-picker-dropdown" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="color-picker-button"
        title={title}
        style={{
          backgroundColor: currentColor || '#000000',
          border: '1px solid #ccc',
          borderRadius: '3px',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <Palette size={14} style={{ color: currentColor === '#FFFFFF' ? '#000' : '#FFF' }} />
      </button>

      {isOpen && (
        <div className="color-picker-palette">
          <div className="color-grid">
            {colorPalette.map((color) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                className={`color-option ${currentColor === color ? 'selected' : ''}`}
                style={{
                  backgroundColor: color,
                  border: currentColor === color ? '2px solid #007acc' : '1px solid #ccc',
                  width: '24px',
                  height: '24px',
                  margin: '2px',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
                title={color}
              />
            ))}
          </div>

          <div className="custom-color-section">
            <label htmlFor="custom-color-input" style={{ fontSize: '12px', marginBottom: '4px', display: 'block' }}>
              Custom Color:
            </label>
            <input
              id="custom-color-input"
              type="color"
              value={currentColor || '#000000'}
              onChange={handleCustomColorChange}
              style={{
                width: '100%',
                height: '32px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

ColorPickerDropdown.propTypes = {
  currentColor: PropTypes.string,
  onColorSelect: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default ColorPickerDropdown;