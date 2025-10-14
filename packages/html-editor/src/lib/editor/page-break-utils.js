/**
 * Page break utilities
 * Handles creating, inserting, and managing page breaks
 */

import { PAGE_BREAK_SELECTOR, calculateMaxContentHeight } from './page-boundary-utils.js';

/**
 * Get the total height of an element including its margins
 * Optimized to use known CSS margins instead of getComputedStyle
 * Based on MultiPageEditor.css: .continuous-content p { margin: 0 0 16px 0; }
 * Also handles images within center-aligned paragraphs
 * @param {HTMLElement} element - The element to measure
 * @returns {number} Total height including margins
 */
const getElementTotalHeight = (element) => {
  if (!element || !element.getBoundingClientRect) {
    return 0;
  }
  
  const rect = element.getBoundingClientRect();
  
  // Check if element contains only an image (center-aligned images)
  // These images may have float: none and their height needs special handling
  if (element.tagName === 'P') {
    const images = element.querySelectorAll('img');
    const textContent = element.textContent.trim();
    
    // If paragraph contains only an image (no text content)
    if (images.length === 1 && !textContent) {
      const img = images[0];
      const imgRect = img.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(element);
      const textAlign = computedStyle.textAlign;
      
      // For center-aligned images, use actual image height plus paragraph margin
      if (textAlign === 'center' || textAlign === '-webkit-center') {
        return imgRect.height + 16; // Image height + paragraph bottom margin
      }
    }
    
    // Regular paragraph with 16px bottom margin
    return rect.height + 16;  // Add known bottom margin
  }
  
  // For other block elements (headings, lists), use a conservative estimate
  if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || 
      element.tagName === 'H4' || element.tagName === 'H5' || element.tagName === 'H6') {
    return rect.height + 20;  // Headings typically have larger margins
  }
  
  if (element.tagName === 'UL' || element.tagName === 'OL') {
    return rect.height + 16;  // Lists have similar margins to paragraphs
  }
  
  // For other elements, just return the rect height
  return rect.height;
};

/**
 * Insert a page break element before the specified element
 * @param {HTMLElement} targetElement - The element to insert the page break before
 * @param {number} pageNumber - The page number for this break
 * @returns {boolean} Success status
 */
export const insertPageBreakBefore = (targetElement, pageNumber) => {
  if (!targetElement) {
    return false;
  }

  try {
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
};

/**
 * Insert a page break at a specific page boundary based on content height
 * @param {HTMLElement} editor - The editor element
 * @param {number} pageNumber - The page number where the break should be inserted (1-based)
 * @param {string} pageSize - The page size
 * @param {number} zoomLevel - Current zoom level percentage
 * @param {string} pageMargins - The margin preset name
 * @param {Function} updateContentCallback - Callback to update content in context
 * @param {Function} updateBoundariesCallback - Callback to update boundaries
 * @returns {boolean} Success status
 */
export const insertPageBreakAtBoundary = (
  editor,
  pageNumber,
  pageSize,
  zoomLevel,
  pageMargins,
  updateContentCallback,
  updateBoundariesCallback
) => {
  if (!editor) {
    return false;
  }

  try {
    // Calculate max content height accounting for zoom, padding, and margins
    const maxHeight = calculateMaxContentHeight(pageSize, zoomLevel, pageMargins);
    
    // Target height for the page break insertion
    const targetHeight = maxHeight * (pageNumber - 1);
    
    // Get all children and find where to insert the break
    const allChildren = Array.from(editor.children);
    let accumulatedHeight = 0;
    let insertBeforeElement = null;
    
    for (let i = 0; i < allChildren.length; i++) {
      const child = allChildren[i];
      
      // Skip existing page breaks
      if (child.tagName === 'PAGE-BREAK' || child.getAttribute('data-page-break') === 'true') {
        continue;
      }
      
      const childHeight = getElementTotalHeight(child);
      
      // Check if adding this element would exceed the target height
      if (accumulatedHeight + childHeight > targetHeight) {
        insertBeforeElement = child;
        break;
      }
      
      accumulatedHeight += childHeight;
    }
    
    // If we found an insertion point, insert the page break
    if (insertBeforeElement) {
      const pageBreak = document.createElement('page-break');
      pageBreak.setAttribute('data-page-break', 'true');
      pageBreak.setAttribute('contenteditable', 'false');
      pageBreak.setAttribute('data-page-number', String(pageNumber));
      
      insertBeforeElement.parentNode.insertBefore(pageBreak, insertBeforeElement);
      
      // Update content in Context
      if (updateContentCallback) {
        const updatedHTML = editor.innerHTML;
        updateContentCallback(updatedHTML);
      }
      
      // Update boundaries
      if (updateBoundariesCallback) {
        setTimeout(() => {
          updateBoundariesCallback();
        }, 50);
      }
      
      return true;
    } else {
      // If no insertion point found, insert at the end
      const pageBreak = document.createElement('page-break');
      pageBreak.setAttribute('data-page-break', 'true');
      pageBreak.setAttribute('contenteditable', 'false');
      pageBreak.setAttribute('data-page-number', String(pageNumber));
      
      editor.appendChild(pageBreak);
      
      // Add an empty paragraph after the break
      const emptyParagraph = document.createElement('p');
      emptyParagraph.innerHTML = '<br>';
      editor.appendChild(emptyParagraph);
      
      // Update content in Context
      if (updateContentCallback) {
        const updatedHTML = editor.innerHTML;
        updateContentCallback(updatedHTML);
      }
      
      // Update boundaries
      if (updateBoundariesCallback) {
        setTimeout(() => {
          updateBoundariesCallback();
        }, 50);
      }
      
      return true;
    }
  } catch (error) {
    console.error('[insertPageBreakAtBoundary] Failed to insert page break:', error);
    return false;
  }
};

/**
 * Remove a page and its content from the continuous editor
 * Removes the page break and all content between the page boundaries
 * @param {HTMLElement} editor - The editor element
 * @param {number} pageIndex - The index of the page to remove (0-based)
 * @param {Function} calculateBoundariesCallback - Callback to calculate boundaries
 * @param {Function} updateContentCallback - Callback to update content in context
 * @param {Function} updateBoundariesCallback - Callback to update boundaries
 * @param {Function} positionCursorCallback - Callback to position cursor
 * @param {Function} checkReflowCallback - Callback to trigger reflow
 * @returns {boolean} Success status
 */
export const removePageAndContent = (
  editor, 
  pageIndex, 
  calculateBoundariesCallback, 
  updateContentCallback, 
  updateBoundariesCallback, 
  positionCursorCallback, 
  checkReflowCallback
) => {
  if (!editor) {
    return false;
  }

  const boundaries = calculateBoundariesCallback();

  // Cannot delete if only one page
  if (boundaries.length <= 1) {
    console.warn('[removePageAndContent] Cannot delete the only page');
    return false;
  }

  try {
    // Find all page breaks in the editor
    const pageBreaks = Array.from(editor.querySelectorAll(PAGE_BREAK_SELECTOR));
    
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
    const remainingBreaks = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
    remainingBreaks.forEach((breakEl, index) => {
      breakEl.setAttribute('data-page-number', String(index + 2));
    });

    // Position cursor appropriately after deletion
    if (cursorWasInDeletedContent && positionCursorCallback) {
      // Position cursor at the start of the first remaining page (page 0)
      setTimeout(() => {
        positionCursorCallback(0);
      }, 50);
    }

    // Update content in Context
    if (updateContentCallback) {
      const updatedHTML = editor.innerHTML;
      updateContentCallback(updatedHTML);
    }

    // Update boundaries after deletion
    if (updateBoundariesCallback) {
      setTimeout(() => {
        updateBoundariesCallback();
        
        // Trigger auto reflow to handle any overflow from content redistribution
        if (checkReflowCallback) {
          setTimeout(() => {
            checkReflowCallback();
          }, 150);
        }
      }, 100);
    }

    return true;
  } catch (error) {
    console.error('[removePageAndContent] Failed to remove page:', error);
    return false;
  }
};

/**
 * Renumber all page breaks in the editor
 * @param {HTMLElement} editor - The editor element
 */
export const renumberPageBreaks = (editor) => {
  if (!editor) {
    return;
  }

  try {
    const pageBreaks = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
    pageBreaks.forEach((breakEl, index) => {
      breakEl.setAttribute('data-page-number', String(index + 2));
    });
  } catch (error) {
    console.error('[renumberPageBreaks] Failed to renumber page breaks:', error);
  }
};