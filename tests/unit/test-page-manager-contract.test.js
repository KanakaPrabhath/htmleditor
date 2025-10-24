/**
 * Contract test for PageManager component props
 * Verifies that PageManager component accepts and handles zoom-related props correctly
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { PageManager } from '../../lib/src/components/editor/PageManager';

describe('PageManager Contract - Zoom Props', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 5,
    pageSize: 'A4',
    onPageSizeChange: vi.fn(),
    onPageChange: vi.fn(),
    onAddPage: vi.fn(),
    onDeletePage: vi.fn(),
    zoomLevel: 100,
    onZoomIn: vi.fn(),
    onZoomOut: vi.fn(),
    onZoomReset: vi.fn(),
    canZoomIn: true,
    canZoomOut: true
  };

  it('should accept zoomLevel prop and display it', () => {
    const props = { ...defaultProps, zoomLevel: 105 };
    render(React.createElement(PageManager, props));
    expect(screen.getByText(/105%/)).toBeInTheDocument();
  });

  it('should accept onZoomIn callback and call it when zoom in button is clicked', () => {
    const onZoomIn = vi.fn();
    const props = { ...defaultProps, onZoomIn };
    render(React.createElement(PageManager, props));
    
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    
    expect(onZoomIn).toHaveBeenCalledTimes(1);
  });

  it('should accept onZoomOut callback and call it when zoom out button is clicked', () => {
    const onZoomOut = vi.fn();
    const props = { ...defaultProps, onZoomOut };
    render(React.createElement(PageManager, props));
    
    const zoomOutButton = screen.getByRole('button', { name: /zoom out/i });
    fireEvent.click(zoomOutButton);
    
    expect(onZoomOut).toHaveBeenCalledTimes(1);
  });

  it('should accept onZoomReset callback and call it when reset button is clicked', () => {
    const onZoomReset = vi.fn();
    const props = { ...defaultProps, zoomLevel: 150, onZoomReset };
    render(React.createElement(PageManager, props));
    
    const resetButton = screen.getByRole('button', { name: /100%|reset/i });
    fireEvent.click(resetButton);
    
    expect(onZoomReset).toHaveBeenCalledTimes(1);
  });

  it('should disable zoom in button when canZoomIn is false', () => {
    const props = { ...defaultProps, canZoomIn: false };
    render(React.createElement(PageManager, props));
    
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    expect(zoomInButton).toBeDisabled();
  });

  it('should disable zoom out button when canZoomOut is false', () => {
    const props = { ...defaultProps, canZoomOut: false };
    render(React.createElement(PageManager, props));
    
    const zoomOutButton = screen.getByRole('button', { name: /zoom out/i });
    expect(zoomOutButton).toBeDisabled();
  });

  it('should render all zoom-related props correctly', () => {
    const props = { ...defaultProps, zoomLevel: 75 };
    const { container } = render(React.createElement(PageManager, props));
    
    expect(screen.getByText(/75%/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /zoom in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /zoom out/i })).toBeInTheDocument();
  });
});
