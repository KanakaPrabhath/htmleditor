import { useCallback, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePageBoundaries, updateContinuousContent } from '../store/slices/documentSlice';

const PAGE_DIMENSIONS = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};

const CONTENT_PADDING = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
};

/**
 * useContinuousReflow - Automatically insert page breaks based on content height
 * Monitors content height and inserts <page-break> tags when content exceeds page dimensions
 * Content remains in a single continuous contenteditable surface
 */
export const useContinuousReflow = (pageSize, editorRef) => {
  const dispatch = useDispatch();
  const boundaryTimeoutRef = useRef(null);
  const reflowTimeoutRef = useRef(null);
  const latestPageSizeRef = useRef(pageSize);
  const isReflowingRef = useRef(false);

  useEffect(() => {
    latestPageSizeRef.current = pageSize;
  }, [pageSize]);

  useEffect(() => {
    return () => {
      if (boundaryTimeoutRef.current) {
        clearTimeout(boundaryTimeoutRef.current);
      }
      if (reflowTimeoutRef.current) {
        clearTimeout(reflowTimeoutRef.current);
      }
    };
  }, []);

  /**
   * Check if content in a page section exceeds the maximum height
   * Returns the element where overflow occurs
   */
  const findOverflowPoint = useCallback((pageElements, maxHeight) => {
    let currentHeight = 0;
    
    for (let i = 0; i < pageElements.length; i++) {
      const element = pageElements[i];
      const elementHeight = element.getBoundingClientRect().height;
      
      if (currentHeight + elementHeight > maxHeight) {
        return { overflowIndex: i, overflowElement: element, accumulatedHeight: currentHeight };
      }
      
      currentHeight += elementHeight;
    }
    
    return null; // No overflow
  }, []);

  /**
   * Insert a page break element before the specified element
   */
  const insertPageBreakBefore = useCallback((targetElement, pageNumber) => {
    if (!targetElement || !editorRef?.current) {
      return false;
    }

    try {
      const editor = editorRef.current;
      const pageBreak = document.createElement('page-break');
      pageBreak.setAttribute('data-page-break', 'true');
      pageBreak.setAttribute('contenteditable', 'false');
      pageBreak.setAttribute('data-page-number', pageNumber || '2');
      
      // Insert before the target element
      targetElement.parentNode.insertBefore(pageBreak, targetElement);
      
      return true;
    } catch (error) {
      console.warn('[insertPageBreakBefore] Failed to insert page break:', error);
      return false;
    }
  }, [editorRef]);

  /**
   * Automatic reflow: Insert page breaks when content exceeds page height
   */
  const checkAndReflow = useCallback(() => {
    if (!editorRef?.current || isReflowingRef.current) {
      return;
    }

    try {
      isReflowingRef.current = true;
      const editor = editorRef.current;
      const targetPageSize = latestPageSizeRef.current || 'A4';
      const dimensions = PAGE_DIMENSIONS[targetPageSize] || PAGE_DIMENSIONS.A4;
      
      // Calculate max content height (page height - padding)
      const maxHeight = dimensions.height - CONTENT_PADDING.top - CONTENT_PADDING.bottom;
      
      // Get all child elements in the editor
      const allChildren = Array.from(editor.children);
      
      // Find existing page breaks
      const existingBreaks = allChildren.filter(el => 
        el.tagName === 'PAGE-BREAK' || el.getAttribute('data-page-break') === 'true'
      );
      
      // Split content into pages based on existing breaks
      const pages = [];
      let currentPage = [];
      
      for (const child of allChildren) {
        if (child.tagName === 'PAGE-BREAK' || child.getAttribute('data-page-break') === 'true') {
          if (currentPage.length > 0) {
            pages.push(currentPage);
            currentPage = [];
          }
        } else {
          currentPage.push(child);
        }
      }
      
      // Add the last page
      if (currentPage.length > 0) {
        pages.push(currentPage);
      }
      
      // If no pages, all elements are on one page
      if (pages.length === 0 && allChildren.length > 0) {
        pages.push(allChildren.filter(el => 
          !(el.tagName === 'PAGE-BREAK' || el.getAttribute('data-page-break') === 'true')
        ));
      }
      
      // Check each page for overflow
      let insertedBreaks = false;
      
      for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
        const pageElements = pages[pageIndex];
        const overflow = findOverflowPoint(pageElements, maxHeight);
        
        if (overflow && overflow.overflowIndex > 0) {
          // Insert page break before the overflow element
          // Page number is pageIndex + 2 (since we're creating the break for the next page)
          const pageNumber = pageIndex + 2;
          const inserted = insertPageBreakBefore(overflow.overflowElement, pageNumber);
          if (inserted) {
            insertedBreaks = true;
            // Only process one page at a time to avoid complexity
            break;
          }
        }
      }
      
      // Update boundaries if we inserted breaks
      if (insertedBreaks) {
        // Trigger content update to Redux
        const html = editor.innerHTML;
        dispatch(updateContinuousContent(html));
        
        // Recalculate boundaries
        setTimeout(() => {
          updateBoundaries();
        }, 50);
      }
      
    } catch (error) {
      console.warn('[checkAndReflow] Reflow failed:', error);
    } finally {
      isReflowingRef.current = false;
    }
  }, [editorRef, findOverflowPoint, insertPageBreakBefore, dispatch]);

  /**
   * Debounced automatic reflow check
   */
  const triggerAutoReflow = useCallback((delay = 500) => {
    if (reflowTimeoutRef.current) {
      clearTimeout(reflowTimeoutRef.current);
    }

    reflowTimeoutRef.current = setTimeout(() => {
      reflowTimeoutRef.current = null;
      checkAndReflow();
    }, delay);
  }, [checkAndReflow]);

  /**
   * Calculate visual page boundaries based on <page-break> tags in content
   * Returns array of boundary objects with top positions
   */
  const calculatePageBoundaries = useCallback((options = {}) => {
    if (!editorRef?.current || typeof document === 'undefined') {
      return [];
    }

    const targetPageSize = options.pageSize || latestPageSizeRef.current || 'A4';
    const dimensions = PAGE_DIMENSIONS[targetPageSize] || PAGE_DIMENSIONS.A4;
    
    const editor = editorRef.current;
    
    // Find all <page-break> elements in the content
    const pageBreakElements = editor.querySelectorAll('page-break, [data-page-break="true"]');
    
    const boundaries = [];
    let currentTop = 0;
    
    // Always have at least one page (page 1)
    boundaries.push({
      id: 'page-0',
      pageNumber: 1,
      top: 0,
      height: dimensions.height
      // No breakElement for first page
    });

    // Add boundaries for each page break
    pageBreakElements.forEach((breakEl, index) => {
      const rect = breakEl.getBoundingClientRect();
      const editorRect = editor.getBoundingClientRect();
      const relativeTop = rect.top - editorRect.top + editor.scrollTop;
      
      boundaries.push({
        id: `page-${index + 1}`,
        pageNumber: index + 2,
        top: relativeTop,
        height: dimensions.height
        // Don't store breakElement - not serializable
      });
    });

    return boundaries;
  }, [editorRef]);

  /**
   * Update page boundaries in Redux state
   */
  const updateBoundaries = useCallback((options = {}) => {
    const boundaries = calculatePageBoundaries(options);
    dispatch(updatePageBoundaries(boundaries));
    return boundaries;
  }, [calculatePageBoundaries, dispatch]);

  /**
   * Debounced boundary calculation
   * Triggers after content changes to recalculate page boundaries
   */
  const checkAndUpdateBoundaries = useCallback((options = {}) => {
    if (boundaryTimeoutRef.current) {
      clearTimeout(boundaryTimeoutRef.current);
    }

    const delay = typeof options.delay === 'number' ? options.delay : 300;

    boundaryTimeoutRef.current = setTimeout(() => {
      boundaryTimeoutRef.current = null;
      updateBoundaries(options);
    }, Math.max(0, delay));
  }, [updateBoundaries]);

  /**
   * Get current page number based on cursor position
   */
  const getCurrentPage = useCallback(() => {
    if (!editorRef?.current) {
      return 0;
    }

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return 0;
    }

    try {
      const range = selection.getRangeAt(0);
      const editor = editorRef.current;
      let currentNode = range.startContainer;
      
      // Find all page breaks before cursor
      const pageBreaks = Array.from(editor.querySelectorAll('page-break, [data-page-break="true"]'));
      
      if (pageBreaks.length === 0) {
        return 0; // Only one page
      }

      // Walk up the tree to find the editor
      while (currentNode && currentNode !== editor) {
        // Check if current node is after any page breaks
        for (let i = pageBreaks.length - 1; i >= 0; i--) {
          const breakEl = pageBreaks[i];
          const position = breakEl.compareDocumentPosition(currentNode);
          
          // If currentNode is after this page break
          if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
            return i + 1; // Page number (0-indexed internally)
          }
        }
        
        currentNode = currentNode.parentNode;
      }
      
      return 0; // Default to first page
    } catch (error) {
      console.warn('[getCurrentPage] Failed to calculate page:', error);
      return 0;
    }
  }, [editorRef]);

  /**
   * Scroll to a specific page and position cursor at the start of that page
   */
  const scrollToPage = useCallback((pageNumber, containerRef) => {
    if (!containerRef?.current || !editorRef?.current) {
      return;
    }

    const editor = editorRef.current;
    const boundaries = calculatePageBoundaries();
    
    // Find the boundary for the requested page
    const targetBoundary = boundaries.find(b => b.pageNumber === pageNumber + 1);
    
    if (targetBoundary) {
      // Scroll to the page
      containerRef.current.scrollTo({
        top: targetBoundary.top - 40,
        behavior: 'smooth'
      });
      
      // Position cursor at the start of this page
      setTimeout(() => {
        positionCursorAtPage(pageNumber);
      }, 300); // Wait for smooth scroll
    }
  }, [editorRef]);

  /**
   * Position cursor at the start of a specific page
   */
  const positionCursorAtPage = useCallback((pageNumber) => {
    if (!editorRef?.current) {
      return;
    }

    const editor = editorRef.current;
    editor.focus();

    try {
      let targetNode = null;
      let targetOffset = 0;

      if (pageNumber === 0) {
        // First page - position at start
        targetNode = editor.firstChild;
        targetOffset = 0;
      } else {
        // Find the page break element for this page
        const pageBreaks = editor.querySelectorAll('page-break, [data-page-break="true"]');
        const breakElement = pageBreaks[pageNumber - 1];
        
        if (breakElement && breakElement.nextSibling) {
          targetNode = breakElement.nextSibling;
          targetOffset = 0;
        }
      }

      if (targetNode) {
        const range = document.createRange();
        const selection = window.getSelection();
        
        // If target is a text node, use it directly
        if (targetNode.nodeType === Node.TEXT_NODE) {
          range.setStart(targetNode, targetOffset);
        } else {
          // If it's an element, position at its start
          range.setStart(targetNode, 0);
        }
        
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } catch (error) {
      console.warn('[positionCursorAtPage] Failed to position cursor:', error);
    }
  }, [editorRef]);

  /**
   * Remove a page and its content from the continuous editor
   * Removes the page break and all content between the page boundaries
   * @param {number} pageIndex - The index of the page to remove (0-based)
   */
  const removePageAndContent = useCallback((pageIndex) => {
    if (!editorRef?.current) {
      return false;
    }

    const editor = editorRef.current;
    const boundaries = calculatePageBoundaries();

    // Cannot delete if only one page
    if (boundaries.length <= 1) {
      console.warn('[removePageAndContent] Cannot delete the only page');
      return false;
    }

    try {
      // Find all page breaks in the editor
      const pageBreaks = Array.from(editor.querySelectorAll('page-break, [data-page-break="true"]'));
      
      if (pageIndex > pageBreaks.length) {
        console.warn('[removePageAndContent] Invalid page index');
        return false;
      }

      // Save cursor position before deletion
      const selection = window.getSelection();
      let cursorWasInDeletedContent = false;
      
      let nodesToRemove = [];
      let pageBreakToRemove = null;

      // Special handling for first page (pageIndex === 0)
      if (pageIndex === 0) {
        // For the first page, remove all content before the first page break
        const firstPageBreak = pageBreaks[0];
        
        if (!firstPageBreak) {
          console.warn('[removePageAndContent] No page break found for first page');
          return false;
        }

        // Collect all nodes before the first page break
        let currentNode = editor.firstChild;
        while (currentNode && currentNode !== firstPageBreak) {
          nodesToRemove.push(currentNode);
          currentNode = currentNode.nextSibling;
        }

        // The first page break itself should also be removed
        pageBreakToRemove = firstPageBreak;

      } else {
        // For pages 1 and onwards, remove content between page breaks
        // The page break that starts this page is at index (pageIndex - 1)
        // because page 0 has no break, page 1 has break[0], page 2 has break[1], etc.
        const pageBreakElement = pageBreaks[pageIndex - 1];
        
        if (!pageBreakElement) {
          console.warn('[removePageAndContent] Page break not found');
          return false;
        }

        // Find the next page break (if any) to determine the end of this page
        const nextPageBreakElement = pageBreaks[pageIndex];

        // Collect all nodes between the current page break and the next one (or end)
        let currentNode = pageBreakElement.nextSibling;

        while (currentNode) {
          // Stop if we reach the next page break
          if (currentNode === nextPageBreakElement) {
            break;
          }
          
          nodesToRemove.push(currentNode);
          currentNode = currentNode.nextSibling;
        }

        pageBreakToRemove = pageBreakElement;
      }

      // Check if cursor is in the content being deleted
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const cursorNode = range.startContainer;
        
        for (const node of nodesToRemove) {
          if (node.contains(cursorNode) || node === cursorNode) {
            cursorWasInDeletedContent = true;
            break;
          }
        }
      }

      // Remove the page break element
      if (pageBreakToRemove && pageBreakToRemove.parentNode) {
        pageBreakToRemove.remove();
      }

      // Remove all content nodes
      nodesToRemove.forEach(node => {
        if (node.parentNode) {
          node.remove();
        }
      });

      // Renumber remaining page breaks
      const remainingBreaks = editor.querySelectorAll('page-break, [data-page-break="true"]');
      remainingBreaks.forEach((breakEl, index) => {
        breakEl.setAttribute('data-page-number', String(index + 2));
      });

      // Position cursor appropriately after deletion
      if (cursorWasInDeletedContent) {
        // Position cursor at the start of the first remaining page (page 0)
        setTimeout(() => {
          positionCursorAtPage(0);
        }, 50);
      }

      // Update content in Redux
      const updatedHTML = editor.innerHTML;
      dispatch(updateContinuousContent(updatedHTML));

      // Update boundaries after deletion
      setTimeout(() => {
        updateBoundaries();
      }, 100);

      return true;
    } catch (error) {
      console.error('[removePageAndContent] Failed to remove page:', error);
      return false;
    }
  }, [editorRef, calculatePageBoundaries, dispatch, updateBoundaries, positionCursorAtPage]);

  return {
    calculatePageBoundaries,
    checkAndUpdateBoundaries,
    updateBoundaries,
    getCurrentPage,
    scrollToPage,
    positionCursorAtPage,
    checkAndReflow,
    triggerAutoReflow,
    removePageAndContent,
    boundaryTimeoutRef,
    reflowTimeoutRef
  };
};
