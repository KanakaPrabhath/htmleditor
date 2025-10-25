import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ColorPickerDropdown } from '@kanaka-prabhath/html-editor';

describe('ColorPickerDropdown Component', () => {
  it('should render color picker button', () => {
    const mockOnColorSelect = vi.fn();
    render(
      <ColorPickerDropdown
        currentColor="#FF0000"
        onColorSelect={mockOnColorSelect}
      />
    );

    const button = screen.getByTitle('Font Color');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: '#FF0000' });
  });

  it('should open dropdown when button is clicked', () => {
    const mockOnColorSelect = vi.fn();
    render(
      <ColorPickerDropdown
        currentColor="#000000"
        onColorSelect={mockOnColorSelect}
      />
    );

    const button = screen.getByTitle('Font Color');
    fireEvent.click(button);

    // Check if color palette is visible
    const colorGrid = document.querySelector('.color-grid');
    expect(colorGrid).toBeInTheDocument();
  });

  it('should call onColorSelect when color is clicked', () => {
    const mockOnColorSelect = vi.fn();
    render(
      <ColorPickerDropdown
        currentColor="#000000"
        onColorSelect={mockOnColorSelect}
      />
    );

    const button = screen.getByTitle('Font Color');
    fireEvent.click(button);

    // Find and click the red color option
    const redColorOption = screen.getByTitle('#FF0000');
    fireEvent.click(redColorOption);

    expect(mockOnColorSelect).toHaveBeenCalledWith('#FF0000');
  });

  it('should handle custom color input', () => {
    const mockOnColorSelect = vi.fn();
    render(
      <ColorPickerDropdown
        currentColor="#000000"
        onColorSelect={mockOnColorSelect}
      />
    );

    const button = screen.getByTitle('Font Color');
    fireEvent.click(button);

    // Find the custom color input
    const customColorInput = screen.getByDisplayValue('#000000');
    fireEvent.change(customColorInput, { target: { value: '#00FF00' } });

    expect(mockOnColorSelect).toHaveBeenCalledWith('#00ff00');
  });
});