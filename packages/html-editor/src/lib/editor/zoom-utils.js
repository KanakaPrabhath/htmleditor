/**
 * Zoom utilities for the HTML editor
 * Provides constants and helper functions for zoom functionality
 */

/**
 * Allowed zoom levels in percentage
 * Range: 50% to 200% in 25% increments
 */
export const ZOOM_LEVELS = [50, 75, 100, 125, 150, 175, 200];

/**
 * Default zoom level
 */
export const DEFAULT_ZOOM = 100;

/**
 * Minimum zoom level
 */
export const MIN_ZOOM = 50;

/**
 * Maximum zoom level
 */
export const MAX_ZOOM = 200;

/**
 * Zoom increment/decrement step
 */
export const ZOOM_STEP = 25;

/**
 * Check if zoom can be increased
 * @param {number} currentZoom - Current zoom level
 * @returns {boolean} True if zoom can be increased
 */
export const canZoomIn = (currentZoom) => {
  return currentZoom < MAX_ZOOM;
};

/**
 * Check if zoom can be decreased
 * @param {number} currentZoom - Current zoom level
 * @returns {boolean} True if zoom can be decreased
 */
export const canZoomOut = (currentZoom) => {
  return currentZoom > MIN_ZOOM;
};

/**
 * Get next zoom level (zoom in)
 * @param {number} currentZoom - Current zoom level
 * @returns {number} Next zoom level or current if at max
 */
export const getNextZoomLevel = (currentZoom) => {
  if (!canZoomIn(currentZoom)) return currentZoom;
  
  const nextLevel = currentZoom + ZOOM_STEP;
  return ZOOM_LEVELS.includes(nextLevel) ? nextLevel : currentZoom;
};

/**
 * Get previous zoom level (zoom out)
 * @param {number} currentZoom - Current zoom level
 * @returns {number} Previous zoom level or current if at min
 */
export const getPreviousZoomLevel = (currentZoom) => {
  if (!canZoomOut(currentZoom)) return currentZoom;
  
  const prevLevel = currentZoom - ZOOM_STEP;
  return ZOOM_LEVELS.includes(prevLevel) ? prevLevel : currentZoom;
};

/**
 * Validate if a zoom level is allowed
 * @param {number} zoom - Zoom level to validate
 * @returns {boolean} True if zoom level is valid
 */
export const isValidZoomLevel = (zoom) => {
  return ZOOM_LEVELS.includes(zoom);
};

/**
 * Get zoom as decimal multiplier
 * @param {number} zoom - Zoom percentage
 * @returns {number} Decimal multiplier (e.g., 100 -> 1.0, 150 -> 1.5)
 */
export const getZoomMultiplier = (zoom) => {
  return zoom / 100;
};
