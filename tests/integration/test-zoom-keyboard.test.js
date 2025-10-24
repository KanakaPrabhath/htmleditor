/**
 * Integration test for zoom keyboard shortcuts
 * Tests Ctrl+Plus, Ctrl+Minus, Ctrl+0 keyboard interactions
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import HtmlEditor from '../../lib/src/components/editor/HtmlEditor';
import { DocumentProvider } from '../../lib/src/context/DocumentContext';

describe('Integration Test - Zoom Keyboard Shortcuts', () => {
  const renderWithProvider = (component) => {
    return render(
      React.createElement(DocumentProvider, null, component)
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should zoom in when Ctrl+Plus is pressed', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    const zoomDisplay = container.querySelector('.zoom-level-display');
    expect(zoomDisplay).toBeInTheDocument();
    expect(zoomDisplay.textContent).toBe('100%');
    
    // Press Ctrl+Plus
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    
    // Should zoom to 105%
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('105%');
    });
  });

  it('should zoom in when Ctrl+= is pressed (alternative)', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    const zoomDisplay = container.querySelector('.zoom-level-display');
    expect(zoomDisplay).toBeInTheDocument();
    expect(zoomDisplay.textContent).toBe('100%');
    
    // Press Ctrl+= (same key as + without shift)
    fireEvent.keyDown(window, { key: '=', ctrlKey: true });
    
    // Should zoom to 105%
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('105%');
    });
  });

  it('should zoom out when Ctrl+Minus is pressed', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    const zoomDisplay = container.querySelector('.zoom-level-display');
    expect(zoomDisplay).toBeInTheDocument();
    expect(zoomDisplay.textContent).toBe('100%');
    
    // Press Ctrl+Minus
    fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    
    // Should zoom to 95%
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('95%');
    });
  });

  it('should reset zoom when Ctrl+0 is pressed', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 110%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('110%');
    });
    
    // Press Ctrl+0
    fireEvent.keyDown(window, { key: '0', ctrlKey: true });
    
    // Should reset to 100%
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('100%');
    });
  });

  it('should not zoom when editor is not focused and shortcuts are pressed', async () => {
    const { container } = renderWithProvider(
      React.createElement('div', null,
        React.createElement('input', { 'data-testid': 'external-input' }),
        React.createElement(HtmlEditor)
      )
    );
    
    const externalInput = screen.getByTestId('external-input');
    externalInput.focus();
    
    // Wait for PageManager to be rendered
    await waitFor(() => {
      expect(document.querySelector('.page-manager')).toBeInTheDocument();
    });
    
    // Initially at 100% - wait for it to appear
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('100%');
    });
    
    // Press Ctrl+Plus while focused on external input
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    
    // Should remain at 100%
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('100%');
    }, { timeout: 1000 });
  });

  it('should handle multiple keyboard shortcuts in sequence', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom in twice with keyboard
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('105%');
    });
    
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('110%');
    });
    
    // Zoom out once
    fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('105%');
    });
    
    // Reset
    fireEvent.keyDown(window, { key: '0', ctrlKey: true });
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('100%');
    });
  });

  it('should not zoom when Ctrl+Plus is pressed at 200%', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 200%
    for (let i = 0; i < 20; i++) {
      fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    }
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('200%');
    });
    
    // Try to zoom in again
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    
    // Should stay at 200%
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('200%');
    }, { timeout: 1000 });
  });

  it('should not zoom when Ctrl+Minus is pressed at 50%', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 50%
    for (let i = 0; i < 10; i++) {
      fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    }
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('50%');
    });
    
    // Try to zoom out again
    fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    
    // Should stay at 50%
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('50%');
    }, { timeout: 1000 });
  });

  it('should prevent default browser zoom behavior', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    const event = new KeyboardEvent('keydown', { 
      key: '+', 
      ctrlKey: true,
      bubbles: true,
      cancelable: true
    });
    
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
    window.dispatchEvent(event);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
