/**
 * Font size constants and conversions
 * Approximate conversions from Points (pt) to Pixels (px) at 96 DPI
 * 
 * Standard conversion: 1 pt = 1.333... px (at 96 DPI)
 * These values match Microsoft Word's font size rendering
 */

/**
 * Font size mapping from points to pixels
 * Based on 96 DPI (Microsoft Word standard)
 */
export const FONT_SIZE_MAP = {
  '7.5pt': { pt: 7.5, px: 10, label: '7.5' },
  '9pt': { pt: 9, px: 12, label: '9' },
  '10pt': { pt: 10, px: 13, label: '10' },
  '11pt': { pt: 11, px: 15, label: '11' },
  '12pt': { pt: 12, px: 16, label: '12' },
  '14pt': { pt: 14, px: 19, label: '14' },
  '16pt': { pt: 16, px: 21, label: '16' },
  '18pt': { pt: 18, px: 24, label: '18' },
  '20pt': { pt: 20, px: 27, label: '20' },
  '22pt': { pt: 22, px: 29, label: '22' },
  '24pt': { pt: 24, px: 32, label: '24' },
  '26pt': { pt: 26, px: 35, label: '26' },
  '28pt': { pt: 28, px: 37, label: '28' },
  '36pt': { pt: 36, px: 48, label: '36' },
  '48pt': { pt: 48, px: 64, label: '48' },
  '72pt': { pt: 72, px: 96, label: '72' }
};

/**
 * Common font sizes for editor dropdown
 * Values in pixels matching Word's point sizes
 */
export const COMMON_FONT_SIZES = [
  { value: '10px', label: '7.5', pt: 7.5 },   // 7.5 pt ≈ 10 px
  { value: '12px', label: '9', pt: 9 },       // 9 pt ≈ 12 px
  { value: '13px', label: '10', pt: 10 },     // 10 pt ≈ 13 px
  { value: '15px', label: '11', pt: 11 },     // 11 pt ≈ 15 px (default in Word)
  { value: '16px', label: '12', pt: 12 },     // 12 pt ≈ 16 px
  { value: '19px', label: '14', pt: 14 },     // 14 pt ≈ 19 px
  { value: '21px', label: '16', pt: 16 },     // 16 pt ≈ 21 px
  { value: '24px', label: '18', pt: 18 },     // 18 pt ≈ 24 px
  { value: '27px', label: '20', pt: 20 },     // 20 pt ≈ 27 px
  { value: '32px', label: '24', pt: 24 },     // 24 pt ≈ 32 px
  { value: '37px', label: '28', pt: 28 },     // 28 pt ≈ 37 px
  { value: '48px', label: '36', pt: 36 },     // 36 pt ≈ 48 px
  { value: '64px', label: '48', pt: 48 },     // 48 pt ≈ 64 px
  { value: '96px', label: '72', pt: 72 }      // 72 pt ≈ 96 px
];

/**
 * Default font size (11 pt in Word, which is 15px at 96 DPI)
 */
export const DEFAULT_FONT_SIZE = '15px';

/**
 * Convert points to pixels at 96 DPI
 * @param {number} points - Font size in points
 * @returns {number} Font size in pixels
 */
export const pointsToPixels = (points) => {
  return Math.round(points * 96 / 72);
};

/**
 * Convert pixels to points at 96 DPI
 * @param {number} pixels - Font size in pixels
 * @returns {number} Font size in points
 */
export const pixelsToPoints = (pixels) => {
  return Math.round((pixels * 72 / 96) * 2) / 2; // Round to nearest 0.5
};

/**
 * Get pixel value from point size
 * @param {number} pt - Point size
 * @returns {string} Pixel value with 'px' suffix
 */
export const getPixelValue = (pt) => {
  const fontSize = Object.values(FONT_SIZE_MAP).find(size => size.pt === pt);
  return fontSize ? `${fontSize.px}px` : `${pointsToPixels(pt)}px`;
};

/**
 * Get point value from pixel size
 * @param {string} px - Pixel size (e.g., '16px')
 * @returns {number} Point value
 */
export const getPointValue = (px) => {
  const pixelValue = parseInt(px);
  const fontSize = Object.values(FONT_SIZE_MAP).find(size => size.px === pixelValue);
  return fontSize ? fontSize.pt : pixelsToPoints(pixelValue);
};

/**
 * Validate if a font size is valid
 * @param {string} size - Font size to validate (e.g., '16px' or '12pt')
 * @returns {boolean} True if valid
 */
export const isValidFontSize = (size) => {
  if (!size) return false;
  
  if (size.endsWith('px')) {
    const px = parseInt(size);
    return px >= 8 && px <= 144; // Min 6pt, Max 108pt
  }
  
  if (size.endsWith('pt')) {
    const pt = parseFloat(size);
    return pt >= 6 && pt <= 108;
  }
  
  return false;
};
