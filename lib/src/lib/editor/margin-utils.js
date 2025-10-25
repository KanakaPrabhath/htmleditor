/**
 * Page Margin Utilities
 * 
 * Provides margin presets and conversion utilities for page margins.
 * Margins are defined in inches and converted to pixels at 96 DPI (CSS standard).
 * 
 * DPI Conversion: 1 inch = 96 pixels (CSS/Web standard)
 * 
 * Common margin presets similar to Microsoft Word:
 * - Normal: 1" all sides (most common)
 * - Narrow: 0.5" all sides (minimal margins)
 * - Moderate: 1" top/bottom, 0.75" left/right
 * - Wide: 1" top/bottom, 2" left/right
 * - Mirrored: For two-sided printing
 */

// DPI constant for CSS/Web (96 DPI is the standard)
export const CSS_DPI = 96;

// Convert inches to pixels at 96 DPI
export const inchesToPixels = (inches) => Math.round(inches * CSS_DPI);

// Convert pixels to inches
export const pixelsToInches = (pixels) => pixels / CSS_DPI;

// Margin preset definitions (in inches)
export const MARGIN_PRESETS = {
  NORMAL: {
    name: 'Normal',
    label: 'Normal (1")',
    top: 1,
    bottom: 1,
    left: 1,
    right: 1
  },
  NARROW: {
    name: 'Narrow',
    label: 'Narrow (0.5")',
    top: 0.5,
    bottom: 0.5,
    left: 0.5,
    right: 0.5
  },
  MODERATE: {
    name: 'Moderate',
    label: 'Moderate (1" / 0.75")',
    top: 1,
    bottom: 1,
    left: 0.75,
    right: 0.75
  },
  WIDE: {
    name: 'Wide',
    label: 'Wide (1" / 2")',
    top: 1,
    bottom: 1,
    left: 2,
    right: 2
  },
  OFFICE_2003: {
    name: 'Office 2003',
    label: 'Office 2003 (1" / 1.25")',
    top: 1,
    bottom: 1,
    left: 1.25,
    right: 1.25
  }
};

// Default margin preset
export const DEFAULT_MARGIN_PRESET = 'NORMAL';

/**
 * Convert margin preset to pixel values
 * @param {string|Object} marginInput - Name of the preset (e.g., 'NORMAL', 'NARROW') or custom margin object {top, bottom, left, right} in inches
 * @returns {Object} Margin object with top, bottom, left, right in pixels
 */
export const getMarginPixels = (marginInput = DEFAULT_MARGIN_PRESET) => {
  // Check if it's a custom margin object
  if (typeof marginInput === 'object' && marginInput !== null && 
      typeof marginInput.top === 'number' && 
      typeof marginInput.bottom === 'number' && 
      typeof marginInput.left === 'number' && 
      typeof marginInput.right === 'number') {
    // Custom margins provided in inches
    return {
      top: inchesToPixels(marginInput.top),
      bottom: inchesToPixels(marginInput.bottom),
      left: inchesToPixels(marginInput.left),
      right: inchesToPixels(marginInput.right)
    };
  }
  
  // Otherwise, treat as preset name
  const preset = MARGIN_PRESETS[marginInput] || MARGIN_PRESETS[DEFAULT_MARGIN_PRESET];
  
  return {
    top: inchesToPixels(preset.top),
    bottom: inchesToPixels(preset.bottom),
    left: inchesToPixels(preset.left),
    right: inchesToPixels(preset.right)
  };
};

/**
 * Get total vertical margins (top + bottom)
 * @param {string|Object} marginInput - Name of the preset or custom margin object
 * @returns {number} Total vertical margins in pixels
 */
export const getTotalVerticalMargins = (marginInput = DEFAULT_MARGIN_PRESET) => {
  const margins = getMarginPixels(marginInput);
  return margins.top + margins.bottom;
};

/**
 * Get total horizontal margins (left + right)
 * @param {string|Object} marginInput - Name of the preset or custom margin object
 * @returns {number} Total horizontal margins in pixels
 */
export const getTotalHorizontalMargins = (marginInput = DEFAULT_MARGIN_PRESET) => {
  const margins = getMarginPixels(marginInput);
  return margins.left + margins.right;
};

/**
 * Get all available margin preset names
 * @returns {Array<string>} Array of preset names
 */
export const getMarginPresetNames = () => {
  return Object.keys(MARGIN_PRESETS);
};

/**
 * Get margin preset label for display
 * @param {string|Object} marginInput - Name of the preset or custom margin object
 * @returns {string} Display label
 */
export const getMarginPresetLabel = (marginInput) => {
  // Check if it's a custom margin object
  if (typeof marginInput === 'object' && marginInput !== null && 
      typeof marginInput.top === 'number' && 
      typeof marginInput.bottom === 'number' && 
      typeof marginInput.left === 'number' && 
      typeof marginInput.right === 'number') {
    // Custom margins - format as "Custom (top/bottom x left/right)"
    return `Custom (${marginInput.top}" / ${marginInput.left}")`;
  }
  
  // Otherwise, treat as preset name
  const preset = MARGIN_PRESETS[marginInput];
  return preset ? preset.label : 'Unknown';
};

/**
 * Check if margins are custom (not a preset)
 * @param {string|Object} marginInput - Margin input to check
 * @returns {boolean} True if custom margins
 */
export const isCustomMargins = (marginInput) => {
  return typeof marginInput === 'object' && marginInput !== null && 
         typeof marginInput.top === 'number' && 
         typeof marginInput.bottom === 'number' && 
         typeof marginInput.left === 'number' && 
         typeof marginInput.right === 'number';
};

/**
 * Validate if a preset name exists
 * @param {string} presetName - Name to validate
 * @returns {boolean} True if valid
 */
export const isValidMarginPreset = (presetName) => {
  return presetName in MARGIN_PRESETS;
};

export default {
  CSS_DPI,
  inchesToPixels,
  pixelsToInches,
  MARGIN_PRESETS,
  DEFAULT_MARGIN_PRESET,
  getMarginPixels,
  getTotalVerticalMargins,
  getTotalHorizontalMargins,
  getMarginPresetNames,
  getMarginPresetLabel,
  isValidMarginPreset,
  isCustomMargins
};
