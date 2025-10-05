/**
 * Page size constants with real-world dimensions
 * Dimensions calculated at 72 DPI (PDF standard resolution)
 */

/**
 * Page size configurations
 * All dimensions in pixels at 72 DPI
 * 
 * Conversion: 1 inch = 72 pixels, 1 mm = 72/25.4 pixels
 */
export const PAGE_SIZES = {
  A4: {
    name: 'A4',
    width: 595,  // 210mm = 210 * 72 / 25.4 ≈ 595px
    height: 842, // 297mm = 297 * 72 / 25.4 ≈ 842px
    widthMm: 210,
    heightMm: 297,
    widthIn: 8.27,
    heightIn: 11.69
  },
  Letter: {
    name: 'Letter',
    width: 612,  // 8.5 inches = 8.5 * 72 = 612px
    height: 792, // 11 inches = 11 * 72 = 792px
    widthMm: 216,
    heightMm: 279,
    widthIn: 8.5,
    heightIn: 11
  },
  Legal: {
    name: 'Legal',
    width: 612,  // 8.5 inches = 8.5 * 72 = 612px
    height: 1008, // 14 inches = 14 * 72 = 1008px
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
