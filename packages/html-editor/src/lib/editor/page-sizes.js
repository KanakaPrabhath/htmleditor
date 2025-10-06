/**
 * Page size constants with real-world dimensions
 * Dimensions calculated at 96 DPI (Microsoft Word standard for screen display)
 */

/**
 * Page size configurations
 * All dimensions in pixels at 96 DPI (matching Microsoft Word)
 * 
 * Conversion: 1 inch = 96 pixels, 1 mm = 96/25.4 pixels
 */
export const PAGE_SIZES = {
  A4: {
    name: 'A4',
    width: 794,  // 210mm = 210 * 96 / 25.4 ≈ 794px (Word A4 width)
    height: 1123, // 297mm = 297 * 96 / 25.4 ≈ 1123px (Word A4 height)
    widthMm: 210,
    heightMm: 297,
    widthIn: 8.27,
    heightIn: 11.69
  },
  Letter: {
    name: 'Letter',
    width: 816,  // 8.5 inches = 8.5 * 96 = 816px (Word Letter width)
    height: 1056, // 11 inches = 11 * 96 = 1056px (Word Letter height)
    widthMm: 216,
    heightMm: 279,
    widthIn: 8.5,
    heightIn: 11
  },
  Legal: {
    name: 'Legal',
    width: 816,  // 8.5 inches = 8.5 * 96 = 816px (Word Legal width)
    height: 1344, // 14 inches = 14 * 96 = 1344px (Word Legal height)
    widthMm: 216,
    heightMm: 356,
    widthIn: 8.5,
    heightIn: 14
  }
};

/**
 * Default page size
 */
export const DEFAULT_PAGE_SIZE = 'A4';

/**
 * Get page dimensions for a given size
 * @param {string} size - Page size ('A4', 'Letter', 'Legal')
 * @returns {Object} Dimensions object with width and height
 */
export const getPageDimensions = (size) => {
  const pageSize = PAGE_SIZES[size] || PAGE_SIZES[DEFAULT_PAGE_SIZE];
  return {
    width: pageSize.width,
    height: pageSize.height
  };
};

/**
 * Validate if a page size is supported
 * @param {string} size - Page size to validate
 * @returns {boolean} True if page size is valid
 */
export const isValidPageSize = (size) => {
  return Object.keys(PAGE_SIZES).includes(size);
};

/**
 * Get all available page sizes
 * @returns {string[]} Array of page size names
 */
export const getAvailablePageSizes = () => {
  return Object.keys(PAGE_SIZES);
};
