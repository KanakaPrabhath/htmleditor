/**
 * Integration test for zoom keyboard shortcuts
 * Tests Ctrl+Plus, Ctrl+Minus, Ctrl+0 keyboard interactions
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import HtmlEditor from '../../packages/html-editor/src/components/editor/HtmlEditor';
import { DocumentProvider } from '../../packages/html-editor/src/context/DocumentContext';

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
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    
    // Press Ctrl+Plus
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    
    // Should zoom to 125%
    await waitFor(() => {
      expect(screen.getByText(/125%/)).toBeInTheDocument();
    });
  });

  it('should zoom in when Ctrl+= is pressed (alternative)', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    
    // Press Ctrl+= (same key as + without shift)
    fireEvent.keyDown(window, { key: '=', ctrlKey: true });
    
    // Should zoom to 125%
    await waitFor(() => {
      expect(screen.getByText(/125%/)).toBeInTheDocument();
    });
  });

  it('should zoom out when Ctrl+Minus is pressed', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    
    // Press Ctrl+Minus
    fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    
    // Should zoom to 75%
    await waitFor(() => {
      expect(screen.getByText(/75%/)).toBeInTheDocument();
    });
  });

  it('should reset zoom when Ctrl+0 is pressed', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 150%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      expect(screen.getByText(/150%/)).toBeInTheDocument();
    });
    
    // Press Ctrl+0
    fireEvent.keyDown(window, { key: '0', ctrlKey: true });
    
    // Should reset to 100%
    await waitFor(() => {
      expect(screen.getByText(/100%/)).toBeInTheDocument();
    });
  });

  it('should not zoom when editor is not focused and shortcuts are pressed', async () => {
    const { container } = render(
      React.createElement('div', null,
        React.createElement('input', { 'data-testid': 'external-input' }),
        React.createElement(HtmlEditor)
      )
    );
    
    const externalInput = screen.getByTestId('external-input');
    externalInput.focus();
    
    // Initially at 100%
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    
    // Press Ctrl+Plus while focused on external input
    fireEvent.keyDown(externalInput, { key: '+', ctrlKey: true });
    
    // Should remain at 100%
    await waitFor(() => {
      expect(screen.getByText(/100%/)).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should handle multiple keyboard shortcuts in sequence', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom in twice with keyboard
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    await waitFor(() => {
      expect(screen.getByText(/125%/)).toBeInTheDocument();
    });
    
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    await waitFor(() => {
      expect(screen.getByText(/150%/)).toBeInTheDocument();
    });
    
    // Zoom out once
    fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    await waitFor(() => {
      expect(screen.getByText(/125%/)).toBeInTheDocument();
    });
    
    // Reset
    fireEvent.keyDown(window, { key: '0', ctrlKey: true });
    await waitFor(() => {
      expect(screen.getByText(/100%/)).toBeInTheDocument();
    });
  });

  it('should not zoom when Ctrl+Plus is pressed at 200%', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 200%
    for (let i = 0; i < 4; i++) {
      fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    }
    
    await waitFor(() => {
      expect(screen.getByText(/200%/)).toBeInTheDocument();
    });
    
    // Try to zoom in again
    fireEvent.keyDown(window, { key: '+', ctrlKey: true });
    
    // Should stay at 200%
    await waitFor(() => {
      expect(screen.getByText(/200%/)).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should not zoom when Ctrl+Minus is pressed at 50%', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 50%
    for (let i = 0; i < 2; i++) {
      fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    }
    
    await waitFor(() => {
      expect(screen.getByText(/50%/)).toBeInTheDocument();
    });
    
    // Try to zoom out again
    fireEvent.keyDown(window, { key: '-', ctrlKey: true });
    
    // Should stay at 50%
    await waitFor(() => {
      expect(screen.getByText(/50%/)).toBeInTheDocument();
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
