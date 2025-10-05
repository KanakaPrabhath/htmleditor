/**
 * Integration test for zoom controls functionality
 * Tests zoom in, zoom out, and reset button interactions
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import HtmlEditor from '../../packages/html-editor/src/components/editor/HtmlEditor';
import { DocumentProvider } from '../../packages/html-editor/src/context/DocumentContext';

describe('Integration Test - Zoom Controls', () => {
  const renderWithProvider = (component) => {
    return render(
      React.createElement(DocumentProvider, null, 
        component)
      
    );
  };

  beforeEach(() => {
    // Clear any previous state
    vi.clearAllMocks();
  });

  it('should zoom in by 25% when zoom in button is clicked', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    
    // Click zoom in
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    
    // Should now be at 125%
    await waitFor(() => {
      expect(screen.getByText(/125%/)).toBeInTheDocument();
    });
  });

  it('should zoom out by 25% when zoom out button is clicked', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Initially at 100%
    expect(screen.getByText(/100%/)).toBeInTheDocument();
    
    // Click zoom out
    const zoomOutButton = screen.getByRole('button', { name: /zoom out/i });
    fireEvent.click(zoomOutButton);
    
    // Should now be at 75%
    await waitFor(() => {
      expect(screen.getByText(/75%/)).toBeInTheDocument();
    });
  });

  it('should reset to 100% when reset button is clicked', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom in twice to 150%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      expect(screen.getByText(/150%/)).toBeInTheDocument();
    });
    
    // Click reset
    const resetButton = screen.getByRole('button', { name: /100%|reset/i });
    fireEvent.click(resetButton);
    
    // Should be back to 100%
    await waitFor(() => {
      expect(screen.getByText(/100%/)).toBeInTheDocument();
    });
  });

  it('should disable zoom in button at 200%', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to maximum (200%)
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    
    // Click 4 times to reach 200% (100 -> 125 -> 150 -> 175 -> 200)
    for (let i = 0; i < 4; i++) {
      fireEvent.click(zoomInButton);
    }
    
    await waitFor(() => {
      expect(screen.getByText(/200%/)).toBeInTheDocument();
      expect(zoomInButton).toBeDisabled();
    });
  });

  it('should disable zoom out button at 50%', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to minimum (50%)
    const zoomOutButton = screen.getByRole('button', { name: /zoom out/i });
    
    // Click twice to reach 50% (100 -> 75 -> 50)
    for (let i = 0; i < 2; i++) {
      fireEvent.click(zoomOutButton);
    }
    
    await waitFor(() => {
      expect(screen.getByText(/50%/)).toBeInTheDocument();
      expect(zoomOutButton).toBeDisabled();
    });
  });

  it('should maintain zoom level across multiple interactions', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    const zoomOutButton = screen.getByRole('button', { name: /zoom out/i });
    
    // Zoom in twice
    fireEvent.click(zoomInButton);
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      expect(screen.getByText(/150%/)).toBeInTheDocument();
    });
    
    // Zoom out once
    fireEvent.click(zoomOutButton);
    
    await waitFor(() => {
      expect(screen.getByText(/125%/)).toBeInTheDocument();
    });
  });

  it('should apply zoom only in valid increments', async () => {
    renderWithProvider(React.createElement(HtmlEditor));
    
    // Start at 100%, zoom in to 125%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      expect(screen.getByText(/125%/)).toBeInTheDocument();
    });
    
    // Verify no intermediate values appear
    expect(screen.queryByText(/110%/)).not.toBeInTheDocument();
    expect(screen.queryByText(/120%/)).not.toBeInTheDocument();
  });
});
