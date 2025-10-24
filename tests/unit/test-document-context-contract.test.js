/**
 * Contract test for DocumentContext zoom actions
 * Verifies that DocumentContext provides zoom state and actions correctly
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import React from 'react';
import { DocumentProvider, useDocumentState, useDocumentActions } from '../../lib/src/context/DocumentContext';

describe('DocumentContext Contract - Zoom Actions', () => {
  const wrapper = ({ children }) => React.createElement(DocumentProvider, null, children);

  it('should provide zoomLevel in state with default value of 100', () => {
    const { result } = renderHook(() => useDocumentState(), { wrapper });
    
    expect(result.current.zoomLevel).toBe(100);
  });

  it('should provide setZoomLevel action', () => {
    const { result: actionsResult } = renderHook(() => useDocumentActions(), { wrapper });
    
    expect(actionsResult.current.setZoomLevel).toBeDefined();
    expect(typeof actionsResult.current.setZoomLevel).toBe('function');
  });

  it('should provide zoomIn action', () => {
    const { result: actionsResult } = renderHook(() => useDocumentActions(), { wrapper });
    
    expect(actionsResult.current.zoomIn).toBeDefined();
    expect(typeof actionsResult.current.zoomIn).toBe('function');
  });

  it('should provide zoomOut action', () => {
    const { result: actionsResult } = renderHook(() => useDocumentActions(), { wrapper });
    
    expect(actionsResult.current.zoomOut).toBeDefined();
    expect(typeof actionsResult.current.zoomOut).toBe('function');
  });

  it('should provide resetZoom action', () => {
    const { result: actionsResult } = renderHook(() => useDocumentActions(), { wrapper });
    
    expect(actionsResult.current.resetZoom).toBeDefined();
    expect(typeof actionsResult.current.resetZoom).toBe('function');
  });

  it('should update zoomLevel when setZoomLevel is called', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });
    
    act(() => {
      result.current.actions.setZoomLevel(125);
    });
    
    expect(result.current.state.zoomLevel).toBe(125);
  });

  it('should increase zoomLevel by 5 when zoomIn is called', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });
    
    act(() => {
      result.current.actions.zoomIn();
    });
    
    expect(result.current.state.zoomLevel).toBe(105);
  });

  it('should decrease zoomLevel by 5 when zoomOut is called', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });
    
    act(() => {
      result.current.actions.zoomOut();
    });
    
    expect(result.current.state.zoomLevel).toBe(95);
  });

  it('should reset zoomLevel to 100 when resetZoom is called', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });
    
    act(() => {
      result.current.actions.setZoomLevel(175);
    });
    expect(result.current.state.zoomLevel).toBe(175);
    
    act(() => {
      result.current.actions.resetZoom();
    });
    
    expect(result.current.state.zoomLevel).toBe(100);
  });

  it('should not allow zoom below 50', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });
    
    act(() => {
      result.current.actions.setZoomLevel(50);
    });
    expect(result.current.state.zoomLevel).toBe(50);
    
    act(() => {
      result.current.actions.zoomOut();
    });
    
    expect(result.current.state.zoomLevel).toBe(50);
  });

  it('should not allow zoom above 200', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });
    
    act(() => {
      result.current.actions.setZoomLevel(200);
    });
    expect(result.current.state.zoomLevel).toBe(200);
    
    act(() => {
      result.current.actions.zoomIn();
    });
    
    expect(result.current.state.zoomLevel).toBe(200);
  });
});
