/**
 * Page boundary calculation utilities
 * Handles calculating page boundaries based on page breaks and content
 */

import { PAGE_SIZES } from './page-sizes.js';
import { getTotalVerticalMargins, DEFAULT_MARGIN_PRESET } from './margin-utils.js';

// Content padding constants
export const CONTENT_PADDING = {
  top: 40,
  bottom: 40,
  left: 40,
  right: 40
};

// Page break selector
export const PAGE_BREAK_SELECTOR = 'page-break, [data-page-break="true"]';

/**
 * Get page dimensions for a given page size
 * @param {string} pageSize - The page size (A4, Letter, Legal)
 * @returns {Object} Dimensions object with width and height
 */
export const getPageDimensions = (pageSize) => {
  return PAGE_SIZES[pageSize] || PAGE_SIZES.A4;
};

/**
 * Calculate visual page boundaries based on <page-break> tags in content
 * Returns array of boundary objects with top positions
 * @param {HTMLElement} editor - The editor element
 * @param {Object} options - Options for boundary calculation
 * @param {string} options.pageSize - The page size to use
 * @returns {Array} Array of boundary objects
 */
export const calculatePageBoundaries = (editor, options = {}) => {
  if (!editor || typeof document === 'undefined') {
    return [];
  }

  const targetPageSize = options.pageSize || 'A4';
  const dimensions = getPageDimensions(targetPageSize);
  
  // Find all <page-break> elements
  const pageBreakElements = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
  
  const boundaries = [];
  
  // Always have at least one page (page 1)
  boundaries.push({
    id: 'page-0',
    pageNumber: 1,
    top: 0,
    height: dimensions.height
  });

  // Add boundaries for each page break
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
};

/**
 * Calculate maximum content height for a page accounting for zoom and margins
 * @param {string} pageSize - The page size
 * @param {number} zoomLevel - Current zoom level percentage
 * @param {string} pageMargins - The margin preset name
 * @returns {number} Maximum content height in pixels
 */
export const calculateMaxContentHeight = (pageSize, zoomLevel = 100, pageMargins = DEFAULT_MARGIN_PRESET) => {
  const dimensions = getPageDimensions(pageSize);
  const verticalMargins = getTotalVerticalMargins(pageMargins);
  const baseMaxHeight = dimensions.height - verticalMargins;
  const zoomMultiplier = zoomLevel / 100;
  return baseMaxHeight / zoomMultiplier;
};

/**
 * Get current page number based on viewport scroll position
 * @param {HTMLElement} container - The scroll container element
 * @param {HTMLElement} editor - The editor element
 * @returns {number} Current page index (0-based)
 */
export const getCurrentPage = (container, editor) => {
  if (!container || !editor) {
    return 0;
  }

  try {
    // Get all page breaks
    const pageBreaks = editor.querySelectorAll(PAGE_BREAK_SELECTOR);
    
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
};

/**
 * Split content into pages based on existing page breaks
 * @param {HTMLElement} editor - The editor element
 * @returns {Array} Array of page element arrays
 */
export const splitContentIntoPages = (editor) => {
  if (!editor) {
    return [];
  }

  const allChildren = Array.from(editor.children);
  
  if (allChildren.length === 0) {
    return [];
  }
  
  // Split content into pages based on existing breaks
  let pages = [];
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
  
  return pages;
};