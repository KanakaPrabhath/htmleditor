import { useCallback, useRef, useEffect } from 'react';
import { useDocumentActions } from '../context/DocumentContext';

// Constants moved outside to prevent recreation
const PAGE_DIMENSIONS = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
};

const CONTENT_PADDING = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
};

// Performance constants
const DEFAULT_BOUNDARY_DELAY = 300;
const DEFAULT_REFLOW_DELAY = 200; // Reduced from 500ms for better typing responsiveness
const BOUNDARY_UPDATE_DELAY = 50;
const CURSOR_POSITION_DELAY = 400;
const SCROLL_POSITION_DELAY = 50;
const PAGE_BREAK_SELECTOR = 'page-break, [data-page-break="true"]';

// Performance optimization: Cache selectors

/**
 * useContinuousReflow - Automatically insert page breaks based on content height
 * Monitors content height and inserts <page-break> tags when content exceeds page dimensions
 * Content remains in a single continuous contenteditable surface
 * @param {string} pageSize - The page size (A4, Letter, Legal)
 * @param {React.RefObject} editorRef - Reference to the editor element
 * @param {number} zoomLevel - Current zoom level percentage (50-200)
 */
export const useContinuousReflow = (pageSize, editorRef, zoomLevel = 100) => {
  const actions = useDocumentActions();
  const boundaryTimeoutRef = useRef(null);
  const reflowTimeoutRef = useRef(null);
  const latestPageSizeRef = useRef(pageSize);
  const latestZoomLevelRef = useRef(zoomLevel);
  const isReflowingRef = useRef(false);

  useEffect(() => {
    latestPageSizeRef.current = pageSize;
  }, [pageSize]);

  useEffect(() => {
    latestZoomLevelRef.current = zoomLevel;
  }, [zoomLevel]);

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
   * Optimized for performance with early exit
   */
  const findOverflowPoint = useCallback((pageElements, maxHeight) => {
    if (!pageElements || pageElements.length === 0) {
      return null;
    }
    
    let currentHeight = 0;
    let lastValidElement = null;
    let lastValidIndex = -1;
    
    for (let i = 0; i < pageElements.length; i++) {
      const element = pageElements[i];
      if (!element || !element.getBoundingClientRect) {
        continue;
      }
      
      const elementHeight = element.getBoundingClientRect().height;
      
      // Skip empty elements (like empty <p> tags from Enter key)
      if (elementHeight < 1) {
        continue;
      }
      
      const potentialHeight = currentHeight + elementHeight;
      
      // Check if adding this element would exceed the page height
      if (potentialHeight > maxHeight) {
        // If we haven't added any elements yet (first element is too large)
        if (lastValidElement === null) {
          // Element is larger than page - must break anyway
          // But only if it's not the very first element on the page
          if (i > 0) {
            return { 
              overflowIndex: i, 
              overflowElement: element, 
              accumulatedHeight: currentHeight 
            };
          }
          // If it's the first element and it's too large, let it overflow (unbreakable content)
          return null;
        }
        
        // We have overflow - return the current element as the break point
        return { 
          overflowIndex: i, 
          overflowElement: element, 
          accumulatedHeight: currentHeight 
        };
      }
      
      // Element fits, add it to current height
      currentHeight += elementHeight;
      lastValidElement = element;
      lastValidIndex = i;
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
   * Calculate visual page boundaries based on <page-break> tags in content
   * Returns array of boundary objects with top positions
   * Optimized with cached selectors and better null checks
   */
  const calculatePageBoundaries = useCallback((options = {}) => {
    if (!editorRef?.current || typeof document === 'undefined') {
      return [];
    }

    const targetPageSize = options.pageSize || latestPageSizeRef.current || 'A4';
    const dimensions = PAGE_DIMENSIONS[targetPageSize] || PAGE_DIMENSIONS.A4;
    
    const editor = editorRef.current;
    
    // Find all <page-break> elements using cached selector
    const pageBreakElements = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
    
    const boundaries = [];
    
    // Always have at least one page (page 1)
    boundaries.push({
      id: 'page-0',
      pageNumber: 1,
      top: 0,
      height: dimensions.height
    });

    // Add boundaries for each page break - optimized measurement
    const editorRect = editor.getBoundingClientRect();
    const editorScrollTop = editor.scrollTop;
    
    pageBreakElements.forEach((breakEl, index) => {
      const rect = breakEl.getBoundingClientRect();
      const relativeTop = rect.top - editorRect.top + editorScrollTop;
      
      boundaries.push({
        id: `page-${index + 1}`,
        pageNumber: index + 2,
        top: relativeTop,
        height: dimensions.height
      });
    });

    return boundaries;
  }, [editorRef]);

  /**
   * Update page boundaries in Context state
   */
  const updateBoundaries = useCallback((options = {}) => {
    const boundaries = calculatePageBoundaries(options);
    actions.updatePageBoundaries(boundaries);
    return boundaries;
  }, [calculatePageBoundaries, actions]);

  /**
   * Automatic reflow: Insert page breaks when content exceeds page height
   * Optimized with performance guards and single-page-at-a-time processing
   * Accounts for current zoom level when calculating max height
   */
  const checkAndReflow = useCallback(() => {
    // Performance guard: prevent concurrent reflows
    if (!editorRef?.current || isReflowingRef.current) {
      return;
    }

    try {
      isReflowingRef.current = true;
      const editor = editorRef.current;
      const targetPageSize = latestPageSizeRef.current || 'A4';
      const currentZoom = latestZoomLevelRef.current || 100;
      const dimensions = PAGE_DIMENSIONS[targetPageSize] || PAGE_DIMENSIONS.A4;
      
      // Calculate max content height accounting for zoom
      // When zoomed in (e.g., 150%), content appears larger, so effective height is less
      // When zoomed out (e.g., 50%), content appears smaller, so effective height is more
      const baseMaxHeight = dimensions.height - CONTENT_PADDING.top - CONTENT_PADDING.bottom;
      const zoomMultiplier = currentZoom / 100;
      const maxHeight = baseMaxHeight / zoomMultiplier;
      
      // Get all child elements in the editor
      const allChildren = Array.from(editor.children);
      
      if (allChildren.length === 0) {
        return;
      }
      
      // Find existing page breaks using cached selector
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
      
      // Check each page for overflow (process ALL pages for better typing support)
      let insertedBreaks = false;
      let pagesProcessed = 0;
      const MAX_PAGES_PER_REFLOW = 3; // Process up to 3 pages per reflow cycle
      const MIN_OVERFLOW_THRESHOLD = 20; // Minimum pixels of overflow before breaking
      
      for (let pageIndex = 0; pageIndex < pages.length && pagesProcessed < MAX_PAGES_PER_REFLOW; pageIndex++) {
        const pageElements = pages[pageIndex];
        const overflow = findOverflowPoint(pageElements, maxHeight);
        
        // Only insert break if we have actual overflow and not on first element
        // Also check that the overflow is significant (not just a pixel or two)
        if (overflow && overflow.overflowIndex > 0) {
          // Calculate actual overflow amount
          let totalPageHeight = 0;
          for (let i = 0; i < pageElements.length; i++) {
            const el = pageElements[i];
            if (el && el.getBoundingClientRect) {
              totalPageHeight += el.getBoundingClientRect().height;
            }
          }
          
          // Only break if overflow is significant
          const overflowAmount = totalPageHeight - maxHeight;
          if (overflowAmount < MIN_OVERFLOW_THRESHOLD) {
            continue; // Skip this page, overflow is too small
          }
          
          const pageNumber = pageIndex + 2;
          const inserted = insertPageBreakBefore(overflow.overflowElement, pageNumber);
          
          if (inserted) {
            insertedBreaks = true;
            pagesProcessed++;
            
            // Re-query pages after insertion to continue checking
            const updatedChildren = Array.from(editor.children);
            const updatedPages = [];
            let currentPageElements = [];
            
            for (const child of updatedChildren) {
              if (child.tagName === 'PAGE-BREAK' || child.getAttribute('data-page-break') === 'true') {
                if (currentPageElements.length > 0) {
                  updatedPages.push(currentPageElements);
                  currentPageElements = [];
                }
              } else {
                currentPageElements.push(child);
              }
            }
            
            if (currentPageElements.length > 0) {
              updatedPages.push(currentPageElements);
            }
            
            pages = updatedPages;
          }
        }
      }
      
      // Update boundaries if we inserted breaks
      if (insertedBreaks) {
        // Trigger content update to Context
        const html = editor.innerHTML;
        actions.updateContinuousContent(html);
        
        // Recalculate boundaries with slight delay for DOM update
        setTimeout(() => {
          updateBoundaries();
          
          // If we processed the max number of pages, schedule another reflow check
          // to handle any remaining overflows from typing
          if (pagesProcessed >= MAX_PAGES_PER_REFLOW) {
            setTimeout(() => {
              if (!isReflowingRef.current) {
                checkAndReflow();
              }
            }, 100);
          }
        }, BOUNDARY_UPDATE_DELAY);
      }
      
    } catch (error) {
      console.warn('[checkAndReflow] Reflow failed:', error);
    } finally {
      isReflowingRef.current = false;
    }
  }, [editorRef, findOverflowPoint, insertPageBreakBefore, actions, updateBoundaries]);

  /**
   * Debounced automatic reflow check
   * Optimized to prevent excessive reflow operations
   */
  const triggerAutoReflow = useCallback((delay = DEFAULT_REFLOW_DELAY) => {
    if (reflowTimeoutRef.current) {
      clearTimeout(reflowTimeoutRef.current);
    }

    reflowTimeoutRef.current = setTimeout(() => {
      reflowTimeoutRef.current = null;
      checkAndReflow();
    }, delay);
  }, [checkAndReflow]);

  /**
   * Debounced boundary calculation
   * Triggers after content changes to recalculate page boundaries
   * Optimized with configurable delay
   */
  const checkAndUpdateBoundaries = useCallback((options = {}) => {
    if (boundaryTimeoutRef.current) {
      clearTimeout(boundaryTimeoutRef.current);
    }

    const delay = typeof options.delay === 'number' ? options.delay : DEFAULT_BOUNDARY_DELAY;

    boundaryTimeoutRef.current = setTimeout(() => {
      boundaryTimeoutRef.current = null;
      updateBoundaries(options);
    }, Math.max(0, delay));
  }, [updateBoundaries]);

  /**
   * Get current page number based on viewport scroll position
   * @param {HTMLElement} containerRef - The scroll container element
   */
  const getCurrentPage = useCallback((containerRef) => {
    if (!containerRef?.current || !editorRef?.current) {
      return 0;
    }

    try {
      const container = containerRef.current;
      const editor = editorRef.current;
      
      // Get all page breaks
      const pageBreaks = editor.querySelectorAll('page-break, [data-page-break="true"]');
      
      if (pageBreaks.length === 0) {
        return 0; // Only one page
      }
      
      // Get viewport center position
      const containerRect = container.getBoundingClientRect();
      const viewportCenter = containerRect.top + (containerRect.height / 2);
      
      // Check each page break to find which page we're on
      // Start from the last break and work backwards
      for (let i = pageBreaks.length - 1; i >= 0; i--) {
        const breakElement = pageBreaks[i];
        const breakRect = breakElement.getBoundingClientRect();
        
        // If the break is above the viewport center, we're on the page after it
        if (breakRect.top < viewportCenter) {
          return i + 1; // Page index (0-based)
        }
      }
      
      // If we're above all breaks, we're on page 0
      return 0;
    } catch (error) {
      console.warn('[getCurrentPage] Failed to calculate page:', error);
      return 0;
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
   * Scroll to a specific page and position cursor at the start of that page
   */
  const scrollToPage = useCallback((pageNumber, containerRef) => {
    if (!containerRef?.current || !editorRef?.current) {
      console.warn('[scrollToPage] Missing refs');
      return;
    }

    const container = containerRef.current;
    const editor = editorRef.current;
    
    try {
      let targetElement = null;
      
      if (pageNumber === 0) {
        // First page - scroll to top of editor
        targetElement = editor;
      } else {
        // Find the page break for this page
        const pageBreaks = editor.querySelectorAll('page-break, [data-page-break="true"]');
        const targetBreak = pageBreaks[pageNumber - 1];
        
        if (targetBreak) {
          targetElement = targetBreak;
        } else {
          console.warn('[scrollToPage] Page break not found for page', pageNumber);
          return;
        }
      }
      
      if (targetElement) {
        // Get the element's position relative to the container
        const elementRect = targetElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Calculate scroll position: current scroll + element position relative to container
        const scrollTop = container.scrollTop + (elementRect.top - containerRect.top);
        
        console.log('[scrollToPage] Scrolling to page', pageNumber, 'scrollTop:', scrollTop);
        
        // Scroll to the page
        container.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
        
        // Position cursor after scroll completes
        setTimeout(() => {
          positionCursorAtPage(pageNumber);
        }, 400);
      }
    } catch (error) {
      console.error('[scrollToPage] Error:', error);
    }
  }, [editorRef, positionCursorAtPage]);

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

      // Update content in Context
      const updatedHTML = editor.innerHTML;
      actions.updateContinuousContent(updatedHTML);

      // Update boundaries after deletion
      setTimeout(() => {
        updateBoundaries();
      }, 100);

      return true;
    } catch (error) {
      console.error('[removePageAndContent] Failed to remove page:', error);
      return false;
    }
  }, [editorRef, calculatePageBoundaries, actions, updateBoundaries, positionCursorAtPage]);

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
