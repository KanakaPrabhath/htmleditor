import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { handleTabIndentation, indentSelectedBlocks } from '../../lib/src/lib/editor/indentation-utils.js';

// Mock document and window objects for testing
const mockDocument = {
  execCommand: vi.fn(),
  createRange: vi.fn(() => ({
    setStart: vi.fn(),
    setEnd: vi.fn(),
    setStartBefore: vi.fn(),
    setEndAfter: vi.fn(),
    selectNodeContents: vi.fn(),
    intersectsNode: vi.fn(),
    toString: vi.fn(),
    cloneRange: vi.fn(() => ({
      setStart: vi.fn(),
      setEnd: vi.fn(),
      setStartBefore: vi.fn(),
      setEndAfter: vi.fn(),
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
        setStartBefore: vi.fn(),
        setEndAfter: vi.fn(),
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

    mockDocument.getSelection.mockImplementation(() => ({
      rangeCount: 1,
      getRangeAt: vi.fn(() => ({
        collapsed: true,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => []),
          parentElement: null
        },
        startContainer: { nodeType: 3, parentElement: null, parentNode: null },
        startOffset: 0,
        endContainer: { nodeType: 3, parentElement: null, parentNode: null },
        endOffset: 0,
        intersectsNode: vi.fn(),
        cloneRange: vi.fn(() => ({
          setStart: vi.fn(),
          setEnd: vi.fn(),
          setStartBefore: vi.fn(),
          setEndAfter: vi.fn(),
          selectNodeContents: vi.fn(),
          intersectsNode: vi.fn(),
          toString: vi.fn()
        }))
      })),
      removeAllRanges: vi.fn(),
      addRange: vi.fn()
    }));

    mockWindow.getSelection.mockImplementation(() => mockDocument.getSelection());
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
      const mockBlock1 = { innerHTML: 'Content 1', firstChild: { nodeType: 3 }, tagName: 'P', dataset: {}, style: {} };
      const mockBlock2 = { innerHTML: 'Content 2', firstChild: { nodeType: 3 }, tagName: 'P', dataset: {}, style: {} };

      const mockRange = {
        collapsed: false,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => [mockBlock1, mockBlock2]),
          parentElement: null
        },
        intersectsNode: vi.fn(() => true), // Both blocks intersect
        startContainer: { nodeType: 3, parentElement: mockBlock1, parentNode: mockBlock1 },
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
      expect(mockBlock1.style.marginLeft).toBe('32px');
      expect(mockBlock2.style.marginLeft).toBe('32px');
      expect(mockBlock1.dataset.indentLevel).toBe('1');
      expect(mockBlock2.dataset.indentLevel).toBe('1');
    });

    it('should handle Shift+Tab with selection (outdent blocks)', () => {
      // Mock expanded selection with pre-indented content
      const mockBlock1 = { innerHTML: 'Content 1', firstChild: { nodeType: 3 }, tagName: 'P', dataset: { indentLevel: '1' }, style: { marginLeft: '32px' } };
      const mockBlock2 = { innerHTML: 'Content 2', firstChild: { nodeType: 3 }, tagName: 'P', dataset: { indentLevel: '1' }, style: { marginLeft: '32px' } };

      const mockRange = {
        collapsed: false,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => [mockBlock1, mockBlock2]),
          parentElement: null
        },
        intersectsNode: vi.fn(() => true), // Both blocks intersect
        startContainer: { nodeType: 3, parentElement: mockBlock1, parentNode: mockBlock1 },
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
      expect(mockBlock1.style.marginLeft).toBe('');
      expect(mockBlock2.style.marginLeft).toBe('');
      expect(mockBlock1.dataset.indentLevel).toBeUndefined();
      expect(mockBlock2.dataset.indentLevel).toBeUndefined();
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
        intersectsNode: vi.fn(() => false),
        startContainer: { nodeType: 3, parentElement: null, parentNode: null }
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

  describe('indentSelectedBlocks', () => {
    it('should indent selected list items by applying margin styles', () => {
      const listItem1 = { nodeType: 1, tagName: 'LI', innerHTML: 'Item 1', childNodes: [], dataset: {}, style: {} };
      const listItem2 = { nodeType: 1, tagName: 'LI', innerHTML: 'Item 2', childNodes: [], dataset: {}, style: {} };

      const mockRange = {
        collapsed: false,
        startContainer: listItem1,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => [listItem1, listItem2]),
          parentElement: null
        },
        intersectsNode: vi.fn(() => true)
      };

      const mockSelection = {
        rangeCount: 1,
        getRangeAt: vi.fn(() => mockRange),
        removeAllRanges: vi.fn(),
        addRange: vi.fn()
      };

      mockDocument.getSelection.mockReturnValue(mockSelection);

      const result = indentSelectedBlocks(false);

      expect(result).toBe(true);
      expect(mockDocument.execCommand).not.toHaveBeenCalled();
      expect(listItem1.style.marginLeft).toBe('32px');
      expect(listItem2.style.marginLeft).toBe('32px');
      expect(listItem1.dataset.indentLevel).toBe('1');
      expect(listItem2.dataset.indentLevel).toBe('1');
    });

    it('should outdent selected list items by reducing margin styles', () => {
      const listItem1 = { nodeType: 1, tagName: 'LI', innerHTML: 'Item 1', childNodes: [], dataset: { indentLevel: '1' }, style: { marginLeft: '32px' } };
      const listItem2 = { nodeType: 1, tagName: 'LI', innerHTML: 'Item 2', childNodes: [], dataset: { indentLevel: '1' }, style: { marginLeft: '32px' } };

      const mockRange = {
        collapsed: false,
        startContainer: listItem1,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => [listItem1, listItem2]),
          parentElement: null
        },
        intersectsNode: vi.fn(() => true)
      };

      const mockSelection = {
        rangeCount: 1,
        getRangeAt: vi.fn(() => mockRange),
        removeAllRanges: vi.fn(),
        addRange: vi.fn()
      };

      mockDocument.getSelection.mockReturnValue(mockSelection);

      const result = indentSelectedBlocks(true);

  expect(result).toBe(true);
  expect(mockDocument.execCommand).not.toHaveBeenCalled();
      expect(listItem1.style.marginLeft).toBe('');
      expect(listItem2.style.marginLeft).toBe('');
      expect(listItem1.dataset.indentLevel).toBeUndefined();
      expect(listItem2.dataset.indentLevel).toBeUndefined();
    });

    it('should indent current list item when selection is collapsed inside it', () => {
      const listItem = { nodeType: 1, tagName: 'LI', innerHTML: 'Item 1', childNodes: [], dataset: {}, style: {} };
      const textNode = { nodeType: 3, parentElement: listItem, parentNode: listItem };

      const mockRange = {
        collapsed: true,
        startContainer: textNode,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => []),
          parentElement: null
        },
        intersectsNode: vi.fn(() => false)
      };

      const mockSelection = {
        rangeCount: 1,
        getRangeAt: vi.fn(() => mockRange),
        removeAllRanges: vi.fn(),
        addRange: vi.fn()
      };

      mockDocument.getSelection.mockReturnValue(mockSelection);

      const result = indentSelectedBlocks(false);

      expect(result).toBe(true);
      expect(mockDocument.execCommand).not.toHaveBeenCalled();
      expect(listItem.style.marginLeft).toBe('32px');
      expect(listItem.dataset.indentLevel).toBe('1');
    });

    it('should outdent current list item when selection is collapsed inside it', () => {
      const listItem = { nodeType: 1, tagName: 'LI', innerHTML: 'Item 1', childNodes: [], dataset: { indentLevel: '1' }, style: { marginLeft: '32px' } };
      const textNode = { nodeType: 3, parentElement: listItem, parentNode: listItem };

      const mockRange = {
        collapsed: true,
        startContainer: textNode,
        commonAncestorContainer: {
          nodeType: 1,
          contentEditable: 'true',
          querySelectorAll: vi.fn(() => []),
          parentElement: null
        },
        intersectsNode: vi.fn(() => false)
      };

      const mockSelection = {
        rangeCount: 1,
        getRangeAt: vi.fn(() => mockRange),
        removeAllRanges: vi.fn(),
        addRange: vi.fn()
      };

      mockDocument.getSelection.mockReturnValue(mockSelection);

      const result = indentSelectedBlocks(true);

      expect(result).toBe(true);
      expect(mockDocument.execCommand).not.toHaveBeenCalled();
      expect(listItem.style.marginLeft).toBe('');
      expect(listItem.dataset.indentLevel).toBeUndefined();
    });
  });
});