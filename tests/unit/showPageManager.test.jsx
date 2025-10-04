import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ContentEditableEditor, DocumentProvider } from '@prabhath-tharaka/html-editor';

// Mock the hooks to prevent actual DOM manipulations during tests
vi.mock('@prabhath-tharaka/html-editor', async () => {
  const actual = await vi.importActual('@prabhath-tharaka/html-editor');
  return {
    ...actual,
    useFormatting: () => ({
      currentFormat: {},
      formatText: vi.fn()
    }),
    useContinuousReflow: () => ({
      checkAndUpdateBoundaries: vi.fn(),
      getCurrentPage: vi.fn(() => 0),
      scrollToPage: vi.fn(),
      positionCursorAtPage: vi.fn(),
      updateBoundaries: vi.fn(),
      triggerAutoReflow: vi.fn(),
      removePageAndContent: vi.fn()
    })
  };
});

describe('ContentEditableEditor - showPageManager prop', () => {
  it('should render PageManager by default (showPageManager=true)', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor />
      </DocumentProvider>
    );
    
    // PageManager should be present in the DOM
    const pageManager = document.querySelector('.page-manager-sidebar');
    expect(pageManager).toBeTruthy();
  });

  it('should render PageManager when showPageManager is explicitly true', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor showPageManager={true} />
      </DocumentProvider>
    );
    
    const pageManager = document.querySelector('.page-manager-sidebar');
    expect(pageManager).toBeTruthy();
  });

  it('should NOT render PageManager when showPageManager is false', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor showPageManager={false} />
      </DocumentProvider>
    );
    
    // PageManager should NOT be in the DOM
    const pageManager = document.querySelector('.page-manager-sidebar');
    expect(pageManager).toBeFalsy();
  });

  it('should still render editor content when PageManager is hidden', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor showPageManager={false} />
      </DocumentProvider>
    );
    
    // Editor viewport should still be present
    const editorViewport = document.querySelector('.editor-viewport');
    expect(editorViewport).toBeTruthy();
    
    // Contenteditable should still exist
    const contenteditable = document.querySelector('[contenteditable="true"]');
    expect(contenteditable).toBeTruthy();
  });

  it('should hide toolbar when showToolbar is false', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor showToolbar={false} />
      </DocumentProvider>
    );
    
    const toolbar = document.querySelector('.editor-toolbar');
    expect(toolbar).toBeFalsy();
  });

  it('should hide sidebar when showSidebar is false', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor showSidebar={false} />
      </DocumentProvider>
    );
    
    const sidebar = document.querySelector('.editor-sidebar');
    expect(sidebar).toBeFalsy();
  });

  it('should allow hiding all UI components except editor', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor 
          showToolbar={false}
          showSidebar={false}
          showPageManager={false}
        />
      </DocumentProvider>
    );
    
    // UI components should be hidden
    expect(document.querySelector('.editor-toolbar')).toBeFalsy();
    expect(document.querySelector('.editor-sidebar')).toBeFalsy();
    expect(document.querySelector('.page-manager-sidebar')).toBeFalsy();
    
    // But editor should still work
    const contenteditable = document.querySelector('[contenteditable="true"]');
    expect(contenteditable).toBeTruthy();
  });

  it('should render PageManager with page counter and navigation', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor />
      </DocumentProvider>
    );
    
    // Page buttons should be visible (PageManager shows individual page buttons)
    const pageButtons = document.querySelectorAll('.page-button');
    expect(pageButtons.length).toBeGreaterThan(0);
    expect(pageButtons[0].textContent).toContain('Page 1');
    
    // Navigation buttons should exist (add page button)
    const addPageButton = document.querySelector('.add-page-button');
    expect(addPageButton).toBeTruthy();
  });

  it('should connect PageManager directly to Redux state', () => {
    render(
      <DocumentProvider>
        <ContentEditableEditor />
      </DocumentProvider>
    );
    
    // PageManager should display correct page size from context state (default is A4)
    const pageSizeSelector = document.querySelector('#page-size-selector');
    expect(pageSizeSelector).toBeTruthy();
    expect(pageSizeSelector.value).toBe('A4');
  });
});
