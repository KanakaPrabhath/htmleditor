/**
 * Cursor and scroll utilities
 * Handles cursor positioning and scroll operations for page navigation
 */

import { PAGE_BREAK_SELECTOR } from './page-boundary-utils.js';

// Performance constants
export const CURSOR_POSITION_DELAY = 400;
export const SCROLL_POSITION_DELAY = 50;

/**
 * Position cursor at the start of a specific page
 * @param {HTMLElement} editor - The editor element
 * @param {number} pageNumber - The page number (0-based)
 */
export const positionCursorAtPage = (editor, pageNumber) => {
  if (!editor) {
    return;
  }

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
      const pageBreaks = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
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
};

/**
 * Scroll to a specific page and position cursor at the start of that page
 * @param {HTMLElement} container - The scroll container element
 * @param {HTMLElement} editor - The editor element
 * @param {number} pageNumber - The page number (0-based)
 * @param {Function} positionCursorCallback - Callback to position cursor
 */
export const scrollToPage = (container, editor, pageNumber, positionCursorCallback) => {
  if (!container || !editor) {
    console.warn('[scrollToPage] Missing refs');
    return;
  }
  
  try {
    let targetElement = null;
    
    if (pageNumber === 0) {
      // First page - scroll to top of editor
      targetElement = editor;
    } else {
      // Find the page break for this page
      const pageBreaks = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
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
        if (positionCursorCallback) {
          positionCursorCallback(pageNumber);
        } else {
          positionCursorAtPage(editor, pageNumber);
        }
      }, CURSOR_POSITION_DELAY);
    }
  } catch (error) {
    console.error('[scrollToPage] Error:', error);
  }
};

/**
 * Debounced boundary calculation
 * Triggers after content changes to recalculate page boundaries
 * Optimized with configurable delay
 * @param {Function} updateBoundariesCallback - Callback to update boundaries
 * @param {Object} timeoutRef - Reference to store the timeout
 * @param {Object} options - Options for boundary calculation
 * @param {number} delay - Delay in milliseconds
 */
export const checkAndUpdateBoundaries = (
  updateBoundariesCallback, 
  timeoutRef, 
  options = {}, 
  delay = 300
) => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(() => {
    timeoutRef.current = null;
    updateBoundariesCallback(options);
  }, Math.max(0, delay));
};