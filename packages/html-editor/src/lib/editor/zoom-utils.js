/**
 * Zoom utilities for the HTML editor
 * Provides constants and helper functions for zoom functionality
 */

/**
 * Allowed zoom levels in percentage
 * Range: 50% to 200% in 5% increments
 */
export const ZOOM_LEVELS = [
  50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100, 105, 110, 115, 120, 125, 130, 135, 140, 145,
  150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200
];

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
export const ZOOM_STEP = 5;

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
  return nextLevel <= MAX_ZOOM ? nextLevel : currentZoom;
};

/**
 * Get previous zoom level (zoom out)
 * @param {number} currentZoom - Current zoom level
 * @returns {number} Previous zoom level or current if at min
 */
export const getPreviousZoomLevel = (currentZoom) => {
  if (!canZoomOut(currentZoom)) return currentZoom;
  
  const prevLevel = currentZoom - ZOOM_STEP;
  return prevLevel >= MIN_ZOOM ? prevLevel : currentZoom;
};

/**
 * Validate if a zoom level is allowed
 * @param {number} zoom - Zoom level to validate
 * @returns {boolean} True if zoom level is valid
 */
export const isValidZoomLevel = (zoom) => {
  return zoom >= MIN_ZOOM && zoom <= MAX_ZOOM;
};

/**
 * Get zoom as decimal multiplier
 * @param {number} zoom - Zoom percentage
 * @returns {number} Decimal multiplier (e.g., 100 -> 1.0, 150 -> 1.5)
 */
export const getZoomMultiplier = (zoom) => {
  return zoom / 100;
};
