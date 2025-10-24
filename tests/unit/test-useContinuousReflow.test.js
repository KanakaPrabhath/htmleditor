/**
 * Unit tests for useContinuousReflow hook with zoom support
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import React from 'react';
import { DocumentProvider } from '../../lib/src/context/DocumentContext';
import { useContinuousReflow } from '../../lib/src/hooks/useContinuousReflow';

describe('useContinuousReflow with Zoom', () => {
  let editorRef;
  const wrapper = ({ children }) => React.createElement(DocumentProvider, null, children);

  beforeEach(() => {
    // Create a mock editor element
    editorRef = {
      current: document.createElement('div')
    };
    editorRef.current.setAttribute('contenteditable', 'true');
    document.body.appendChild(editorRef.current);
  });

  it('should accept zoom level parameter', () => {
    const { result } = renderHook(
      () => useContinuousReflow('A4', editorRef, 150),
      { wrapper }
    );

    expect(result.current).toBeDefined();
    expect(result.current.calculatePageBoundaries).toBeDefined();
    expect(result.current.checkAndUpdateBoundaries).toBeDefined();
    expect(result.current.triggerAutoReflow).toBeDefined();
  });

  it('should calculate boundaries at different zoom levels', () => {
    const { result: result100 } = renderHook(
      () => useContinuousReflow('A4', editorRef, 100),
      { wrapper }
    );

    const { result: result150 } = renderHook(
      () => useContinuousReflow('A4', editorRef, 150),
      { wrapper }
    );

    const boundaries100 = result100.current.calculatePageBoundaries();
    const boundaries150 = result150.current.calculatePageBoundaries();

    // Both should return at least one boundary (page 1)
    expect(boundaries100.length).toBeGreaterThan(0);
    expect(boundaries150.length).toBeGreaterThan(0);

    // First page should always start at 0
    expect(boundaries100[0].top).toBe(0);
    expect(boundaries150[0].top).toBe(0);
  });

  it('should provide navigation helpers', () => {
    const { result } = renderHook(
      () => useContinuousReflow('A4', editorRef, 100),
      { wrapper }
    );

    expect(result.current.scrollToPage).toBeDefined();
    expect(result.current.getCurrentPage).toBeDefined();
    expect(result.current.positionCursorAtPage).toBeDefined();
  });

  it('should provide page management utilities', () => {
    const { result } = renderHook(
      () => useContinuousReflow('A4', editorRef, 100),
      { wrapper }
    );

    expect(result.current.removePageAndContent).toBeDefined();
    expect(result.current.checkAndReflow).toBeDefined();
  });

  it('should maintain refs for debouncing', () => {
    const { result } = renderHook(
      () => useContinuousReflow('A4', editorRef, 100),
      { wrapper }
    );

    expect(result.current.boundaryTimeoutRef).toBeDefined();
    expect(result.current.reflowTimeoutRef).toBeDefined();
  });
});
