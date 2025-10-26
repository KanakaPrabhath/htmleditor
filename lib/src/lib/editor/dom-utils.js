/**
 * DOM manipulation utilities for common patterns across components
 * Reduces code duplication and improves maintainability
 * Optimized to export only actively used functions
 */

/**
 * Prevent default event behavior and stop propagation
 * Common pattern in resize handlers and event listeners
 * @param {Event} event - The event to suppress
 */
export const suppressEvent = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

/**
 * Clear multiple classes from elements matching a selector
 * Efficiently removes one or more classes from all matching elements
 * @param {string} selector - CSS selector for elements
 * @param {string|string[]} classes - Class or classes to remove
 */
export const clearClasses = (selector, classes) => {
  const classArray = Array.isArray(classes) ? classes : [classes];
  document.querySelectorAll(selector).forEach(el => {
    classArray.forEach(className => {
      el.classList.remove(className);
    });
  });
};

/**
 * Check if element is within another element
 * @param {Element} parent - Potential parent element
 * @param {Element} child - Potential child element
 * @returns {boolean} True if child is within parent
 */
export const isWithin = (parent, child) => {
  if (!parent || !child) return false;
  return parent.contains(child);
};

/**
 * Clear text selection
 * Cross-browser compatible method to deselect all selected text
 */
export const clearTextSelection = () => {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
};
