/**
 * Integration test for page boundaries at different zoom levels
 * Verifies that page boundaries and reflow behavior are maintained correctly
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import HtmlEditor from '../../packages/html-editor/src/components/editor/HtmlEditor';
import { DocumentProvider } from '../../packages/html-editor/src/context/DocumentContext';

describe('Integration Test - Zoom and Page Boundaries', () => {
  const renderWithProvider = (component) => {
    return render(
      React.createElement(DocumentProvider, null, component)
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should maintain page boundaries when zooming in', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Add some content
    const editor = container.querySelector('[contenteditable="true"]');
    expect(editor).toBeInTheDocument();
    
    // Insert content
    fireEvent.input(editor, {
      target: { innerHTML: '<p>Test content for page boundaries</p>'.repeat(50) }
    });
    
    // Get initial page count
    const initialPage = screen.getByText(/Page 1/);
    
    // Zoom in to 105%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('105%');
    });
    
    // Page boundaries should still be calculated
    expect(screen.getByText(/Page 1/)).toBeInTheDocument();
  });

  it('should recalculate boundaries within 100ms when zoom changes', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    const editor = container.querySelector('[contenteditable="true"]');
    fireEvent.input(editor, {
      target: { innerHTML: '<p>Content</p>'.repeat(100) }
    });
    
    const startTime = Date.now();
    
    // Change zoom
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('105%');
    });
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    // Boundary recalculation should complete within 100ms
    expect(duration).toBeLessThan(100);
  });

  it('should maintain reflow behavior at 50% zoom', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 50%
    const zoomOutButton = screen.getByRole('button', { name: /zoom out/i });
    for (let i = 0; i < 10; i++) {
      fireEvent.click(zoomOutButton);
    }
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('50%');
    });
    
    const editor = container.querySelector('[contenteditable="true"]');
    
    // Add content that would cause reflow
    fireEvent.input(editor, {
      target: { innerHTML: '<p>Test paragraph</p>'.repeat(200) }
    });
    
    // Wait for reflow
    await waitFor(() => {
      const pageBreaks = container.querySelectorAll('page-break');
      expect(pageBreaks.length).toBeGreaterThan(0);
    }, { timeout: 1000 });
  });

  it('should maintain reflow behavior at 200% zoom', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 200%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    for (let i = 0; i < 20; i++) {
      fireEvent.click(zoomInButton);
    }
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('200%');
    });
    
    const editor = container.querySelector('[contenteditable="true"]');
    
    // Add content
    fireEvent.input(editor, {
      target: { innerHTML: '<p>Test paragraph</p>'.repeat(200) }
    });
    
    // Wait for reflow
    await waitFor(() => {
      const pageBreaks = container.querySelectorAll('page-break');
      expect(pageBreaks.length).toBeGreaterThan(0);
    }, { timeout: 1000 });
  });

  it('should complete reflow within 500ms at all zoom levels', async () => {
    const zoomLevels = [50, 75, 100, 105, 125, 150, 175, 200];
    
    for (const targetZoom of zoomLevels) {
      const { container, unmount } = renderWithProvider(React.createElement(HtmlEditor));
      
      // Set zoom level
      const currentZoom = 100;
      const steps = (targetZoom - currentZoom) / 5;
      const button = steps > 0 
        ? screen.getByRole('button', { name: /zoom in/i })
        : screen.getByRole('button', { name: /zoom out/i });
      
      for (let i = 0; i < Math.abs(steps); i++) {
        fireEvent.click(button);
      }
      
      await waitFor(() => {
        const zoomDisplay = container.querySelector('.zoom-level-display');
        expect(zoomDisplay).toBeInTheDocument();
        expect(zoomDisplay.textContent).toBe(`${targetZoom}%`);
      });
      
      const editor = container.querySelector('[contenteditable="true"]');
      const startTime = Date.now();
      
      // Add significant content
      fireEvent.input(editor, {
        target: { innerHTML: '<p>Test content</p>'.repeat(300) }
      });
      
      // Wait for reflow to complete
      await waitFor(() => {
        const pageBreaks = container.querySelectorAll('page-break');
        expect(pageBreaks.length).toBeGreaterThan(0);
      }, { timeout: 600 });
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      // Reflow should complete within 500ms
      expect(duration).toBeLessThan(500);
      
      unmount();
    }
  });

  it('should preserve page breaks when zoom changes', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    const editor = container.querySelector('[contenteditable="true"]');
    
    // Add content with manual page break
    fireEvent.input(editor, {
      target: { innerHTML: '<p>Page 1</p><page-break></page-break><p>Page 2</p>' }
    });
    
    let pageBreaks = container.querySelectorAll('page-break');
    const initialBreakCount = pageBreaks.length;
    
    // Zoom in
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('105%');
    });
    
    // Page breaks should be preserved
    pageBreaks = container.querySelectorAll('page-break');
    expect(pageBreaks.length).toBe(initialBreakCount);
  });
});
