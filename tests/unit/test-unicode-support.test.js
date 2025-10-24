/**
 * Test for Unicode text support in HTML Editor
 * Verifies that Unicode characters are properly handled, displayed, and saved
 */

import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import React from 'react';
import { DocumentProvider, useDocumentState, useDocumentActions } from '../../lib/src/context/DocumentContext';

describe('Unicode Text Support', () => {
  const wrapper = ({ children }) => React.createElement(DocumentProvider, null, children);

  it('should handle Unicode characters in continuous content', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });

    // Test various Unicode scripts and characters
    const unicodeContent = '<p>Hello 世界! 🌍</p><p>Arabic: مرحبا بالعالم</p><p>Chinese: 你好世界</p><p>Japanese: こんにちは世界</p><p>Korean: 안녕하세요 세계</p><p>Sinhala: ආයුබෝවන් සිංහල භාෂාව</p><p>Tamil: வணக்கம் தமிழ் மொழி</p><p>Emoji: 😀🎉🚀</p><p>Math: ∫∑√∆∞</p><p>Currency: €£¥₹₽</p>';

    act(() => {
      result.current.actions.updateContinuousContent(unicodeContent);
    });

    expect(result.current.state.continuousContent).toBe(unicodeContent);
  });

  it('should preserve Unicode characters when sanitizing content', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });

    const unicodeContent = '<p>Unicode test: αβγδε 中文 español français සිංහල தமிழ்</p>';

    act(() => {
      result.current.actions.updateContinuousContent(unicodeContent);
    });

    expect(result.current.state.continuousContent).toContain('αβγδε');
    expect(result.current.state.continuousContent).toContain('中文');
    expect(result.current.state.continuousContent).toContain('español');
    expect(result.current.state.continuousContent).toContain('français');
    expect(result.current.state.continuousContent).toContain('සිංහල');
    expect(result.current.state.continuousContent).toContain('தமிழ்');
  });

  it('should handle Unicode characters in title', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });

    const unicodeTitle = 'Document 📄 with Unicode 字符 සිංහල අක්ෂර தமிழ் எழுத்து';

    act(() => {
      result.current.actions.updateTitle(unicodeTitle);
    });

    expect(result.current.state.title).toBe(unicodeTitle);
  });

  it('should handle empty or null content gracefully', () => {
    const { result: actionsResult } = renderHook(() => useDocumentActions(), { wrapper });
    const { result: stateResult } = renderHook(() => useDocumentState(), { wrapper });

    act(() => {
      actionsResult.current.updateContinuousContent('');
    });

    expect(stateResult.current.continuousContent).toBe('<p><br></p>');

    act(() => {
      actionsResult.current.updateContinuousContent(null);
    });

    expect(stateResult.current.continuousContent).toBe('<p><br></p>');
  });

  it('should handle Unicode characters with HTML entities', () => {
    const { result } = renderHook(() => ({
      state: useDocumentState(),
      actions: useDocumentActions()
    }), { wrapper });

    // Test content with Unicode HTML entities
    const contentWithEntities = '<p>Copyright: &copy; Trademark: &trade; Arrows: &#8594; &#8592;</p>';

    act(() => {
      result.current.actions.updateContinuousContent(contentWithEntities);
    });

    expect(result.current.state.continuousContent).toBe(contentWithEntities);
  });
});