/**
 * Content reflow utilities
 * Handles detecting content overflow and managing reflow operations
 */

import { calculateMaxContentHeight, splitContentIntoPages } from './page-boundary-utils.js';
import { insertPageBreakBefore } from './page-break-utils.js';

// Performance constants
export const DEFAULT_REFLOW_DELAY = 200; // Reduced from 500ms for better typing responsiveness
export const BOUNDARY_UPDATE_DELAY = 50;
export const MAX_PAGES_PER_REFLOW = 3; // Process up to 3 pages per reflow cycle
export const MIN_OVERFLOW_THRESHOLD = 20; // Minimum pixels of overflow before breaking

/**
 * Check if content in a page section exceeds the maximum height
 * Returns the element where overflow occurs
 * Optimized for performance with early exit
 * @param {Array} pageElements - Array of elements in the page
 * @param {number} maxHeight - Maximum height for the page
 * @returns {Object|null} Overflow information or null if no overflow
 */
export const findOverflowPoint = (pageElements, maxHeight) => {
  if (!pageElements || pageElements.length === 0) {
    return null;
  }
  
  let currentHeight = 0;
  let lastValidElement = null;
  
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
  }
  
  return null; // No overflow
};

/**
 * Automatic reflow: Insert page breaks when content exceeds page height
 * Optimized with performance guards and single-page-at-a-time processing
 * Accounts for current zoom level and margins when calculating max height
 * @param {HTMLElement} editor - The editor element
 * @param {string} pageSize - The page size
 * @param {number} zoomLevel - Current zoom level percentage
 * @param {string} pageMargins - The margin preset name
 * @param {Function} updateContentCallback - Callback to update content in context
 * @param {Function} updateBoundariesCallback - Callback to update boundaries
 * @param {boolean} isReflowingRef - Reference to track if reflow is in progress
 * @param {Function} checkAndReflowCallback - Callback to trigger additional reflow if needed
 * @returns {boolean} True if reflow was performed, false otherwise
 */
export const checkAndReflow = (
  editor, 
  pageSize, 
  zoomLevel, 
  pageMargins,
  updateContentCallback, 
  updateBoundariesCallback, 
  isReflowingRef, 
  checkAndReflowCallback
) => {
  // Performance guard: prevent concurrent reflows
  if (!editor || isReflowingRef.current) {
    return false;
  }

  try {
    isReflowingRef.current = true;
    
    const maxHeight = calculateMaxContentHeight(pageSize, zoomLevel, pageMargins);
    
    // Split content into pages based on existing breaks
    let pages = splitContentIntoPages(editor);
    
    // Check each page for overflow (process ALL pages for better typing support)
    let insertedBreaks = false;
    let pagesProcessed = 0;
    
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
          const updatedPages = splitContentIntoPages(editor);
          pages = updatedPages;
        }
      }
    }
    
    // Update boundaries if we inserted breaks
    if (insertedBreaks) {
      // Trigger content update to Context
      if (updateContentCallback) {
        const html = editor.innerHTML;
        updateContentCallback(html);
      }
      
      // Recalculate boundaries with slight delay for DOM update
      setTimeout(() => {
        if (updateBoundariesCallback) {
          updateBoundariesCallback();
        }
        
        // If we processed the max number of pages, schedule another reflow check
        // to handle any remaining overflows from typing
        if (pagesProcessed >= MAX_PAGES_PER_REFLOW && checkAndReflowCallback) {
          setTimeout(() => {
            if (!isReflowingRef.current) {
              checkAndReflowCallback();
            }
          }, 100);
        }
      }, BOUNDARY_UPDATE_DELAY);
    }
    
    return insertedBreaks;
  } catch (error) {
    console.warn('[checkAndReflow] Reflow failed:', error);
    return false;
  } finally {
    isReflowingRef.current = false;
  }
};

/**
 * Debounced automatic reflow check
 * Optimized to prevent excessive reflow operations
 * @param {Function} checkAndReflowCallback - The reflow function to call
 * @param {Object} timeoutRef - Reference to store the timeout
 * @param {number} delay - Delay in milliseconds
 */
export const triggerAutoReflow = (checkAndReflowCallback, timeoutRef, delay = DEFAULT_REFLOW_DELAY) => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(() => {
    timeoutRef.current = null;
    checkAndReflowCallback();
  }, delay);
};