import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { handleTabIndentation } from '../../packages/html-editor/src/lib/editor/indentation-utils.js';

// Mock document and window objects for testing
const mockDocument = {
  execCommand: vi.fn(),
  createRange: vi.fn(() => ({
    setStart: vi.fn(),
    setEnd: vi.fn(),
    selectNodeContents: vi.fn(),
    intersectsNode: vi.fn(),
    toString: vi.fn(),
    cloneRange: vi.fn(() => ({
      setStart: vi.fn(),
      setEnd: vi.fn(),
      selectNodeContents: vi.fn(),
      intersectsNode: vi.fn(),
      toString: vi.fn()
    }))
  })),
  getSelection: vi.fn(() => ({
    rangeCount: 1,
    getRangeAt: vi.fn(() => ({
      collapsed: true,
      commonAncestorContainer: { nodeType: 1, contentEditable: 'true' },
      startContainer: { nodeType: 1 },
      startOffset: 0,
      endContainer: { nodeType: 1 },
      endOffset: 0,
      intersectsNode: vi.fn(),
      cloneRange: vi.fn(() => ({
        setStart: vi.fn(),
        setEnd: vi.fn(),
        selectNodeContents: vi.fn(),
        intersectsNode: vi.fn(),
        toString: vi.fn()
      }))
    })),
    removeAllRanges: vi.fn(),
    addRange: vi.fn()
  }))
};

const mockWindow = {
  getSelection: vi.fn(() => mockDocument.getSelection())
};

describe('indentation-utils', () => {
  beforeEach(() => {
    // Setup global mocks
    global.document = mockDocument;
    global.window = mockWindow;

    // Reset mocks
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('handleTabIndentation', () => {
    it('should return false for non-tab keys', () => {
      const event = { key: 'Enter', preventDefault: vi.fn() };
      expect(handleTabIndentation(event)).toBe(false);
      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should handle Tab key with collapsed selection (cursor)', () => {
      const event = { key: 'Tab', shiftKey: false, preventDefault: vi.fn() };
      const result = handleTabIndentation(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(mockDocument.execCommand).toHaveBeenCalledWith('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
      expect(result).toBe(true);
    });

    it('should handle Shift+Tab with collapsed selection (do nothing)', () => {
      const event = { key: 'Tab', shiftKey: true, preventDefault: vi.fn() };
      const result = handleTabIndentation(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(mockDocument.execCommand).not.toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should handle Tab with selection (indent blocks)', () => {
      // Mock expanded selection
      const mockBlock1 = { innerHTML: 'Content 1', firstChild: { nodeType: 3 } };
      const mockBlock2 = { innerHTML: 'Content 2', firstChild: { nodeType: 3 } };

      const mockRange = {
        collapsed: false,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => [mockBlock1, mockBlock2]),
          parentElement: null
        },
        intersectsNode: vi.fn(() => true), // Both blocks intersect
        cloneRange: vi.fn(() => ({
          setStart: vi.fn(),
          setEnd: vi.fn(),
          selectNodeContents: vi.fn(),
          intersectsNode: vi.fn(),
          toString: vi.fn()
        }))
      };

      const mockSelection = {
        rangeCount: 1,
        getRangeAt: vi.fn(() => mockRange),
        removeAllRanges: vi.fn(),
        addRange: vi.fn()
      };

      mockDocument.getSelection.mockReturnValue(mockSelection);

      const event = { key: 'Tab', shiftKey: false, preventDefault: vi.fn() };
      const result = handleTabIndentation(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(mockDocument.execCommand).not.toHaveBeenCalled(); // Should not use execCommand for block indentation
      expect(result).toBe(true);
      expect(mockBlock1.innerHTML).toBe('&nbsp;&nbsp;&nbsp;&nbsp;Content 1');
      expect(mockBlock2.innerHTML).toBe('&nbsp;&nbsp;&nbsp;&nbsp;Content 2');
    });

    it('should handle Shift+Tab with selection (outdent blocks)', () => {
      // Mock expanded selection with pre-indented content
      const mockBlock1 = { innerHTML: '&nbsp;&nbsp;&nbsp;&nbsp;Content 1', firstChild: { nodeType: 3 } };
      const mockBlock2 = { innerHTML: '&nbsp;&nbsp;&nbsp;&nbsp;Content 2', firstChild: { nodeType: 3 } };

      const mockRange = {
        collapsed: false,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => [mockBlock1, mockBlock2]),
          parentElement: null
        },
        intersectsNode: vi.fn(() => true), // Both blocks intersect
        cloneRange: vi.fn(() => ({
          setStart: vi.fn(),
          setEnd: vi.fn(),
          selectNodeContents: vi.fn(),
          intersectsNode: vi.fn(),
          toString: vi.fn()
        }))
      };

      const mockSelection = {
        rangeCount: 1,
        getRangeAt: vi.fn(() => mockRange),
        removeAllRanges: vi.fn(),
        addRange: vi.fn()
      };

      mockDocument.getSelection.mockReturnValue(mockSelection);

      const event = { key: 'Tab', shiftKey: true, preventDefault: vi.fn() };
      const result = handleTabIndentation(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(mockDocument.execCommand).not.toHaveBeenCalled();
      expect(result).toBe(true);
      expect(mockBlock1.innerHTML).toBe('Content 1');
      expect(mockBlock2.innerHTML).toBe('Content 2');
    });

    it('should handle Tab with no intersecting blocks', () => {
      const mockRange = {
        collapsed: false,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => []),
          parentElement: null
        },
        intersectsNode: vi.fn(() => false)
      };

      mockDocument.getSelection.mockReturnValue({
        rangeCount: 1,
        getRangeAt: vi.fn(() => mockRange)
      });

      const event = { key: 'Tab', shiftKey: false, preventDefault: vi.fn() };
      const result = handleTabIndentation(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(mockDocument.execCommand).toHaveBeenCalledWith('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
      expect(result).toBe(true);
    });
  });
});