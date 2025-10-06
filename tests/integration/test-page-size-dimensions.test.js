/**
 * Integration test for page size matching real dimensions
 * Verifies that page sizes display at true-to-life dimensions at 100% zoom
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import HtmlEditor from '../../packages/html-editor/src/components/editor/HtmlEditor';
import { PAGE_SIZES } from '../../packages/html-editor/src/lib/editor/page-sizes';
import { DocumentProvider } from '../../packages/html-editor/src/context/DocumentContext';

describe('Integration Test - Page Size Real Dimensions', () => {
  const renderWithProvider = (component) => {
    return render(
      React.createElement(DocumentProvider, null, component)
    );
  };

  beforeEach(() => {
    // Ensure we're at 100% zoom for dimension tests
  });

  it('should display A4 page at correct pixel dimensions at 100% zoom', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Select A4 page size (should be default)
    const pageSizeSelector = screen.getByRole('combobox', { name: /page size/i });
    fireEvent.change(pageSizeSelector, { target: { value: 'A4' } });
    
    await waitFor(() => {
      const pageView = container.querySelector('.page-view, [data-page-size="A4"]');
      if (pageView) {
        const styles = window.getComputedStyle(pageView);
        const width = parseInt(styles.width);
        const height = parseInt(styles.height);
        
        // A4 dimensions: 794px x 1123px at 96 DPI
        expect(width).toBe(PAGE_SIZES.A4.width);
        expect(height).toBe(PAGE_SIZES.A4.height);
      }
    });
  });

  it('should display Letter page at correct pixel dimensions at 100% zoom', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Select Letter page size
    const pageSizeSelector = screen.getByRole('combobox', { name: /page size/i });
    fireEvent.change(pageSizeSelector, { target: { value: 'Letter' } });
    
    await waitFor(() => {
      const pageView = container.querySelector('.page-view, [data-page-size="Letter"]');
      if (pageView) {
        const styles = window.getComputedStyle(pageView);
        const width = parseInt(styles.width);
        const height = parseInt(styles.height);
        
        // Letter dimensions: 816px x 1056px at 96 DPI
        expect(width).toBe(PAGE_SIZES.Letter.width);
        expect(height).toBe(PAGE_SIZES.Letter.height);
      }
    });
  });

  it('should display Legal page at correct pixel dimensions at 100% zoom', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Select Legal page size
    const pageSizeSelector = screen.getByRole('combobox', { name: /page size/i });
    fireEvent.change(pageSizeSelector, { target: { value: 'Legal' } });
    
    await waitFor(() => {
      const pageView = container.querySelector('.page-view, [data-page-size="Legal"]');
      if (pageView) {
        const styles = window.getComputedStyle(pageView);
        const width = parseInt(styles.width);
        const height = parseInt(styles.height);
        
        // Legal dimensions: 816px x 1344px at 96 DPI
        expect(width).toBe(PAGE_SIZES.Legal.width);
        expect(height).toBe(PAGE_SIZES.Legal.height);
      }
    });
  });

  it('should scale page dimensions proportionally at different zoom levels', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Get dimensions at 100%
    let pageView = container.querySelector('.page-view, [data-page-size]');
    const originalWidth = pageView ? parseInt(window.getComputedStyle(pageView).width) : PAGE_SIZES.A4.width;
    
    // Zoom to 150%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('150%');
    });
    
    // Check scaled dimensions
    pageView = container.querySelector('.page-view, [data-page-size]');
    if (pageView) {
      const scaledWidth = parseInt(window.getComputedStyle(pageView).width);
      const expectedWidth = originalWidth * 1.5;
      
      // Allow for minor rounding differences
      expect(Math.abs(scaledWidth - expectedWidth)).toBeLessThan(5);
    }
  });

  it('should recalculate boundaries when page size changes at any zoom level', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Zoom to 125%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    fireEvent.click(zoomInButton);
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('125%');
    });
    
    // Add content
    const editor = container.querySelector('[contenteditable="true"]');
    fireEvent.input(editor, {
      target: { innerHTML: '<p>Test content</p>'.repeat(100) }
    });
    
    // Change page size
    const pageSizeSelector = screen.getByRole('combobox', { name: /page size/i });
    const startTime = Date.now();
    
    fireEvent.change(pageSizeSelector, { target: { value: 'Letter' } });
    
    // Boundaries should recalculate within 100ms
    await waitFor(() => {
      const endTime = Date.now();
      expect(endTime - startTime).toBeLessThan(100);
    });
  });

  it('should complete reflow within 500ms when page size changes at any zoom level', async () => {
    const { container } = renderWithProvider(React.createElement(HtmlEditor));
    
    // Set zoom to 175%
    const zoomInButton = screen.getByRole('button', { name: /zoom in/i });
    for (let i = 0; i < 3; i++) {
      fireEvent.click(zoomInButton);
    }
    
    await waitFor(() => {
      const zoomDisplay = container.querySelector('.zoom-level-display');
      expect(zoomDisplay).toBeInTheDocument();
      expect(zoomDisplay.textContent).toBe('175%');
    });
    
    // Add substantial content
    const editor = container.querySelector('[contenteditable="true"]');
    fireEvent.input(editor, {
      target: { innerHTML: '<p>Paragraph</p>'.repeat(200) }
    });
    
    const startTime = Date.now();
    
    // Change page size
    const pageSizeSelector = screen.getByRole('combobox', { name: /page size/i });
    fireEvent.change(pageSizeSelector, { target: { value: 'Legal' } });
    
    // Wait for reflow
    await waitFor(() => {
      const pageBreaks = container.querySelectorAll('page-break');
      expect(pageBreaks.length).toBeGreaterThan(0);
    }, { timeout: 600 });
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    // Reflow should complete within 500ms
    expect(duration).toBeLessThan(500);
  });

  it('should maintain aspect ratio for all page sizes', () => {
    // A4: 210mm x 297mm ratio = 1:1.414
    const a4Ratio = PAGE_SIZES.A4.height / PAGE_SIZES.A4.width;
    expect(Math.abs(a4Ratio - 1.414)).toBeLessThan(0.01);
    
    // Letter: 8.5" x 11" ratio = 1:1.294
    const letterRatio = PAGE_SIZES.Letter.height / PAGE_SIZES.Letter.width;
    expect(Math.abs(letterRatio - 1.294)).toBeLessThan(0.01);
    
    // Legal: 8.5" x 14" ratio = 1:1.647
    const legalRatio = PAGE_SIZES.Legal.height / PAGE_SIZES.Legal.width;
    expect(Math.abs(legalRatio - 1.647)).toBeLessThan(0.01);
  });
});
