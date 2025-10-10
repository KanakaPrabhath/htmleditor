/**
 * Image Resize Utilities for HTML Editor
 * Provides functionality for resizing images with handlers
 */

/**
 * Default image resize options
 */
export const DEFAULT_IMAGE_RESIZE_OPTIONS = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: true,
  preserveAspectRatio: true,
  defaultWidth: 300,
  defaultHeight: 200
};

/**
 * Image resize handler positions
 */
export const RESIZE_HANDLERS = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
};

/**
 * Calculate new dimensions based on resize handler and mouse movement
 * @param {Object} params - Resize parameters
 * @param {string} params.handler - Resize handler position
 * @param {number} params.startX - Initial mouse X position
 * @param {number} params.startY - Initial mouse Y position
 * @param {number} params.currentX - Current mouse X position
 * @param {number} params.currentY - Current mouse Y position
 * @param {number} params.startWidth - Initial image width
 * @param {number} params.startHeight - Initial image height
 * @param {Object} params.options - Resize options
 * @returns {Object} New width and height
 */
export function calculateResizeDimensions({
  handler,
  startX,
  startY,
  currentX,
  currentY,
  startWidth,
  startHeight,
  options = DEFAULT_IMAGE_RESIZE_OPTIONS
}) {
  const deltaX = currentX - startX;
  const deltaY = currentY - startY;
  
  let newWidth = startWidth;
  let newHeight = startHeight;
  
  // Calculate based on handler position
  switch (handler) {
    case RESIZE_HANDLERS.TOP_LEFT:
      newWidth = Math.max(options.minWidth, startWidth - deltaX);
      newHeight = Math.max(options.minHeight, startHeight - deltaY);
      break;
      
    case RESIZE_HANDLERS.TOP_RIGHT:
      newWidth = Math.max(options.minWidth, startWidth + deltaX);
      newHeight = Math.max(options.minHeight, startHeight - deltaY);
      break;
      
    case RESIZE_HANDLERS.BOTTOM_LEFT:
      newWidth = Math.max(options.minWidth, startWidth - deltaX);
      newHeight = Math.max(options.minHeight, startHeight + deltaY);
      break;
      
    case RESIZE_HANDLERS.BOTTOM_RIGHT:
      newWidth = Math.max(options.minWidth, startWidth + deltaX);
      newHeight = Math.max(options.minHeight, startHeight + deltaY);
      break;
      
    case RESIZE_HANDLERS.TOP:
      newHeight = Math.max(options.minHeight, startHeight - deltaY);
      break;
      
    case RESIZE_HANDLERS.BOTTOM:
      newHeight = Math.max(options.minHeight, startHeight + deltaY);
      break;
      
    case RESIZE_HANDLERS.LEFT:
      newWidth = Math.max(options.minWidth, startWidth - deltaX);
      break;
      
    case RESIZE_HANDLERS.RIGHT:
      newWidth = Math.max(options.minWidth, startWidth + deltaX);
      break;
      
    default:
      return { width: newWidth, height: newHeight };
  }
  
  // Apply aspect ratio if needed
  if (options.preserveAspectRatio && options.aspectRatio) {
    const aspectRatio = startWidth / startHeight;
    
    // For corner handlers, maintain aspect ratio
    if ([RESIZE_HANDLERS.TOP_LEFT, RESIZE_HANDLERS.TOP_RIGHT, 
         RESIZE_HANDLERS.BOTTOM_LEFT, RESIZE_HANDLERS.BOTTOM_RIGHT].includes(handler)) {
      // Use the larger dimension to maintain aspect ratio
      if (newWidth / aspectRatio > newHeight) {
        newHeight = Math.max(options.minHeight, newWidth / aspectRatio);
      } else {
        newWidth = Math.max(options.minWidth, newHeight * aspectRatio);
      }
    }
    // For edge handlers, maintain aspect ratio
    else if ([RESIZE_HANDLERS.TOP, RESIZE_HANDLERS.BOTTOM].includes(handler)) {
      newWidth = newHeight * aspectRatio;
    } else if ([RESIZE_HANDLERS.LEFT, RESIZE_HANDLERS.RIGHT].includes(handler)) {
      newHeight = newWidth / aspectRatio;
    }
  }
  
  // Apply max dimensions
  if (options.maxWidth && newWidth > options.maxWidth) {
    newWidth = options.maxWidth;
    if (options.preserveAspectRatio && options.aspectRatio) {
      newHeight = newWidth / (startWidth / startHeight);
    }
  }
  
  if (options.maxHeight && newHeight > options.maxHeight) {
    newHeight = options.maxHeight;
    if (options.preserveAspectRatio && options.aspectRatio) {
      newWidth = newHeight * (startWidth / startHeight);
    }
  }
  
  // Ensure minimum dimensions
  newWidth = Math.max(options.minWidth, newWidth);
  newHeight = Math.max(options.minHeight, newHeight);
  
  return {
    width: Math.round(newWidth),
    height: Math.round(newHeight)
  };
}

/**
 * Check if an element is an image that can be resized
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} Whether the element is a resizable image
 */
export function isResizableImage(element) {
  if (!element) return false;
  
  console.log('Checking if element is resizable image:', element, 'tagName:', element.tagName);
  
  // Check if it's an img element
  if (element.tagName === 'IMG') {
    console.log('Element is an IMG tag, returning true');
    return true;
  }
  
  // Check if it's a div with background image that should be resizable
  if (element.tagName === 'DIV' &&
      element.style.backgroundImage &&
      element.style.backgroundImage !== 'none') {
    console.log('Element is a DIV with background image, returning true');
    return true;
  }
  
  console.log('Element is not a resizable image, returning false');
  return false;
}

/**
 * Get image dimensions from an element
 * @param {HTMLElement} element - Image element
 * @returns {Object} Width and height
 */
export function getImageDimensions(element) {
  if (!isResizableImage(element)) {
    return { width: 0, height: 0 };
  }
  
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/**
 * Apply image dimensions to an element
 * @param {HTMLElement} element - Image element
 * @param {Object} dimensions - Width and height
 * @param {number} dimensions.width - New width
 * @param {number} dimensions.height - New height
 */
export function applyImageDimensions(element, { width, height }) {
  if (!isResizableImage(element)) return;
  
  // For img elements
  if (element.tagName === 'IMG') {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.width = width;
    element.height = height;
  }
  // For div elements with background images
  else if (element.tagName === 'DIV') {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
  }
}

/**
 * Create resize overlay for an image
 * @param {HTMLElement} imageElement - Image element to resize
 * @param {Object} options - Resize options
 * @returns {HTMLElement} Resize overlay element
 */
export function createResizeOverlay(imageElement, options = DEFAULT_IMAGE_RESIZE_OPTIONS) {
  if (!isResizableImage(imageElement)) return null;
  
  // Create overlay container
  const overlay = document.createElement('div');
  overlay.className = 'image-resize-overlay';
  overlay.style.position = 'fixed'; // Changed to fixed for viewport positioning
  overlay.style.zIndex = '1000';
  overlay.style.pointerEvents = 'none';
  
  // Position overlay over the image using viewport coordinates
  const rect = imageElement.getBoundingClientRect();
  
  overlay.style.top = `${rect.top}px`;
  overlay.style.left = `${rect.left}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  
  // Create resize handlers
  const handlers = Object.values(RESIZE_HANDLERS);
  handlers.forEach(handler => {
    const handlerElement = document.createElement('div');
    handlerElement.className = `resize-handler resize-handler-${handler}`;
    handlerElement.dataset.handler = handler;
    handlerElement.style.position = 'absolute';
    handlerElement.style.width = '10px';
    handlerElement.style.height = '10px';
    handlerElement.style.backgroundColor = '#007bff';
    handlerElement.style.border = '2px solid white';
    handlerElement.style.borderRadius = '50%';
    handlerElement.style.boxShadow = '0 0 3px rgba(0,0,0,0.3)';
    handlerElement.style.cursor = getCursorForHandler(handler);
    handlerElement.style.pointerEvents = 'all';
    
    // Position handler
    positionHandler(handlerElement, handler, rect.width, rect.height);
    
    overlay.appendChild(handlerElement);
  });
  
  return overlay;
}

/**
 * Get cursor style for a resize handler
 * @param {string} handler - Handler position
 * @returns {string} CSS cursor value
 */
function getCursorForHandler(handler) {
  switch (handler) {
    case RESIZE_HANDLERS.TOP_LEFT:
    case RESIZE_HANDLERS.BOTTOM_RIGHT:
      return 'nwse-resize';
    case RESIZE_HANDLERS.TOP_RIGHT:
    case RESIZE_HANDLERS.BOTTOM_LEFT:
      return 'nesw-resize';
    case RESIZE_HANDLERS.TOP:
    case RESIZE_HANDLERS.BOTTOM:
      return 'ns-resize';
    case RESIZE_HANDLERS.LEFT:
    case RESIZE_HANDLERS.RIGHT:
      return 'ew-resize';
    default:
      return 'default';
  }
}

/**
 * Position a resize handler
 * @param {HTMLElement} handler - Handler element
 * @param {string} position - Handler position
 * @param {number} width - Container width
 * @param {number} height - Container height
 */
function positionHandler(handler, position, width, height) {
  const offset = -5; // Half of handler size to center it
  
  switch (position) {
    case RESIZE_HANDLERS.TOP_LEFT:
      handler.style.top = `${offset}px`;
      handler.style.left = `${offset}px`;
      break;
    case RESIZE_HANDLERS.TOP_RIGHT:
      handler.style.top = `${offset}px`;
      handler.style.right = `${offset}px`;
      break;
    case RESIZE_HANDLERS.BOTTOM_LEFT:
      handler.style.bottom = `${offset}px`;
      handler.style.left = `${offset}px`;
      break;
    case RESIZE_HANDLERS.BOTTOM_RIGHT:
      handler.style.bottom = `${offset}px`;
      handler.style.right = `${offset}px`;
      break;
    case RESIZE_HANDLERS.TOP:
      handler.style.top = `${offset}px`;
      handler.style.left = `${width / 2 + offset}px`;
      break;
    case RESIZE_HANDLERS.BOTTOM:
      handler.style.bottom = `${offset}px`;
      handler.style.left = `${width / 2 + offset}px`;
      break;
    case RESIZE_HANDLERS.LEFT:
      handler.style.top = `${height / 2 + offset}px`;
      handler.style.left = `${offset}px`;
      break;
    case RESIZE_HANDLERS.RIGHT:
      handler.style.top = `${height / 2 + offset}px`;
      handler.style.right = `${offset}px`;
      break;
  }
}

/**
 * Update resize overlay position and size
 * @param {HTMLElement} overlay - Resize overlay
 * @param {HTMLElement} imageElement - Image element
 */
export function updateResizeOverlay(overlay, imageElement) {
  if (!overlay || !imageElement) return;
  
  const rect = imageElement.getBoundingClientRect();
  
  overlay.style.top = `${rect.top}px`;
  overlay.style.left = `${rect.left}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  
  // Update handler positions
  const handlers = overlay.querySelectorAll('.resize-handler');
  handlers.forEach(handler => {
    const position = handler.dataset.handler;
    positionHandler(handler, position, rect.width, rect.height);
  });
}

/**
 * Remove resize overlay
 * @param {HTMLElement} overlay - Resize overlay to remove
 */
export function removeResizeOverlay(overlay) {
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
}
