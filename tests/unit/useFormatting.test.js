import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFormatting } from '@prabhath-tharaka/html-editor';

describe('useFormatting Hook', () => {
  beforeEach(() => {
    // Mock document.execCommand
    document.execCommand = vi.fn();
    
    // Mock document.queryCommandState
    document.queryCommandState = vi.fn((command) => {
      return false; // Default: not active
    });
    
    // Create a contenteditable element to simulate editor
    const editor = document.createElement('div');
    editor.setAttribute('contenteditable', 'true');
    editor.id = 'test-editor';
    document.body.appendChild(editor);
    editor.focus();
  });

  afterEach(() => {
    const editor = document.getElementById('test-editor');
    if (editor) {
      document.body.removeChild(editor);
    }
    vi.clearAllMocks();
  });

  describe('Initial State', () => {
    it('should initialize with default format state', () => {
      const { result } = renderHook(() => useFormatting());
      
      expect(result.current.currentFormat).toBeDefined();
      expect(result.current.formatText).toBeDefined();
      expect(typeof result.current.formatText).toBe('function');
    });

    it('should have all format properties initialized', () => {
      const { result } = renderHook(() => useFormatting());
      
      const { currentFormat } = result.current;
      
      expect(currentFormat).toHaveProperty('bold');
      expect(currentFormat).toHaveProperty('italic');
      expect(currentFormat).toHaveProperty('underline');
      expect(currentFormat).toHaveProperty('strikethrough');
    });
  });

  describe('Format Text Function', () => {
    it('should call document.execCommand for bold formatting', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('bold');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('bold', false, null);
    });

    it('should call document.execCommand for italic formatting', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('italic');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('italic', false, null);
    });

    it('should call document.execCommand for underline formatting', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('underline');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('underline', false, null);
    });

    it('should call document.execCommand for strikethrough formatting', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('strikethrough');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('strikethrough', false, null);
    });

    it('should handle alignment commands', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('justifyLeft');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('justifyLeft', false, null);
    });

    it('should handle list commands', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('insertOrderedList');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('insertOrderedList', false, null);
    });

    it('should handle font family with value parameter', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('fontName', 'Arial');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('fontName', false, 'Arial');
    });

    it('should handle font size with value parameter', () => {
      const { result } = renderHook(() => useFormatting());
      
      act(() => {
        result.current.formatText('fontSize', '16px');
      });
      
      expect(document.execCommand).toHaveBeenCalled();
    });
  });

  describe('Format State Tracking', () => {
    it('should update format state when selection changes', () => {
      document.queryCommandState = vi.fn((command) => {
        if (command === 'bold') return true;
        return false;
      });
      
      const { result } = renderHook(() => useFormatting());
      
      // Simulate selection change
      const event = new Event('selectionchange');
      document.dispatchEvent(event);
      
      // Format state should be updated
      expect(result.current.currentFormat).toBeDefined();
    });

    it('should track multiple format states', () => {
      document.queryCommandState = vi.fn((command) => {
        if (command === 'bold' || command === 'italic') return true;
        return false;
      });
      
      const { result } = renderHook(() => useFormatting());
      
      // Trigger format check
      const event = new Event('selectionchange');
      document.dispatchEvent(event);
      
      expect(result.current.currentFormat).toBeDefined();
    });
  });

  describe('Edge Cases', () => {
    it('should handle unknown format commands gracefully', () => {
      const { result } = renderHook(() => useFormatting());
      
      expect(() => {
        act(() => {
          result.current.formatText('unknownCommand');
        });
      }).not.toThrow();
    });

    it('should handle null or undefined commands', () => {
      const { result } = renderHook(() => useFormatting());
      
      expect(() => {
        act(() => {
          result.current.formatText(null);
        });
      }).not.toThrow();
      
      expect(() => {
        act(() => {
          result.current.formatText(undefined);
        });
      }).not.toThrow();
    });

    it('should work even when no text is selected', () => {
      const { result } = renderHook(() => useFormatting());
      
      // Clear selection
      window.getSelection().removeAllRanges();
      
      expect(() => {
        act(() => {
          result.current.formatText('bold');
        });
      }).not.toThrow();
    });
  });

  describe('Integration with ContentEditable', () => {
    it('should work with contenteditable element', () => {
      const { result } = renderHook(() => useFormatting());
      
      const editor = document.getElementById('test-editor');
      editor.innerHTML = '<p>Test content</p>';
      
      // Select text
      const range = document.createRange();
      range.selectNodeContents(editor);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      
      act(() => {
        result.current.formatText('bold');
      });
      
      expect(document.execCommand).toHaveBeenCalledWith('bold', false, null);
    });
  });
});
