import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { ContentEditableEditor, documentReducer } from '@prabhath-tharaka/html-editor';

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

const createTestStore = () => {
  return configureStore({
    reducer: {
      document: documentReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['document/updateContinuousContent'],
          ignoredPaths: ['document.continuousContent']
        }
      })
  });
};

describe('ContentEditableEditor - showPageManager prop', () => {
  it('should render PageManager by default (showPageManager=true)', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor />
      </Provider>
    );
    
    // PageManager should be present in the DOM
    const pageManager = document.querySelector('.page-manager-sidebar');
    expect(pageManager).toBeTruthy();
  });

  it('should render PageManager when showPageManager is explicitly true', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor showPageManager={true} />
      </Provider>
    );
    
    const pageManager = document.querySelector('.page-manager-sidebar');
    expect(pageManager).toBeTruthy();
  });

  it('should NOT render PageManager when showPageManager is false', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor showPageManager={false} />
      </Provider>
    );
    
    // PageManager should NOT be in the DOM
    const pageManager = document.querySelector('.page-manager-sidebar');
    expect(pageManager).toBeFalsy();
  });

  it('should still render editor content when PageManager is hidden', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor showPageManager={false} />
      </Provider>
    );
    
    // Editor viewport should still be present
    const editorViewport = document.querySelector('.editor-viewport');
    expect(editorViewport).toBeTruthy();
    
    // Contenteditable should still exist
    const contenteditable = document.querySelector('[contenteditable="true"]');
    expect(contenteditable).toBeTruthy();
  });

  it('should hide toolbar when showToolbar is false', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor showToolbar={false} />
      </Provider>
    );
    
    const toolbar = document.querySelector('.editor-toolbar');
    expect(toolbar).toBeFalsy();
  });

  it('should hide sidebar when showSidebar is false', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor showSidebar={false} />
      </Provider>
    );
    
    const sidebar = document.querySelector('.editor-sidebar');
    expect(sidebar).toBeFalsy();
  });

  it('should allow hiding all UI components except editor', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor 
          showToolbar={false}
          showSidebar={false}
          showPageManager={false}
        />
      </Provider>
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
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor />
      </Provider>
    );
    
    // Page counter should be visible
    const pageCounter = document.querySelector('.page-counter');
    expect(pageCounter).toBeTruthy();
    expect(pageCounter.textContent).toContain('Page 1 of');
    
    // Navigation buttons should exist
    const navButtons = document.querySelectorAll('.nav-button');
    expect(navButtons.length).toBe(2); // Previous and Next buttons
  });

  it('should connect PageManager directly to Redux state', () => {
    const store = createTestStore();
    
    render(
      <Provider store={store}>
        <ContentEditableEditor />
      </Provider>
    );
    
    // PageManager should display correct page size from Redux state
    const pageSize = store.getState().document.pageSize;
    const pageSizeSelector = document.querySelector('#page-size-selector');
    expect(pageSizeSelector).toBeTruthy();
    expect(pageSizeSelector.value).toBe(pageSize);
  });
});
