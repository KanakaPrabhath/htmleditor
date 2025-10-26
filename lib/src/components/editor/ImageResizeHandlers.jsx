import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';
import {
  isResizableImage,
  createResizeOverlay,
  removeResizeOverlay,
  updateResizeOverlay,
  RESIZE_HANDLERS,
  DEFAULT_IMAGE_RESIZE_OPTIONS
} from '../../lib/editor/image-resize-utils';

// Constants for keyboard shortcuts and defaults
const KEYBOARD_RESIZE_STEP = 10;
const DEFAULT_RESET_WIDTH = 300;
const DEFAULT_RESET_HEIGHT = 200;
const MUTATION_OBSERVER_DELAY = 50;

/**
 * Helper function to get cursor for handler
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
 * Apply aspect ratio constraints to dimensions
 */
function applyAspectRatioConstraints(newWidth, newHeight, startWidth, startHeight, handler, options) {
  if (!options.preserveAspectRatio) return { width: newWidth, height: newHeight };

  const aspectRatio = startWidth / startHeight;

  // For corner handlers, maintain aspect ratio
  if ([RESIZE_HANDLERS.TOP_LEFT, RESIZE_HANDLERS.TOP_RIGHT,
       RESIZE_HANDLERS.BOTTOM_LEFT, RESIZE_HANDLERS.BOTTOM_RIGHT].includes(handler)) {
    // Use the larger dimension to maintain aspect ratio
    if (newWidth / aspectRatio > newHeight) {
      newHeight = newWidth / aspectRatio;
    } else {
      newWidth = newHeight * aspectRatio;
    }
  }
  // For edge handlers, maintain aspect ratio
  else if ([RESIZE_HANDLERS.TOP, RESIZE_HANDLERS.BOTTOM].includes(handler)) {
    newWidth = newHeight * aspectRatio;
  } else if ([RESIZE_HANDLERS.LEFT, RESIZE_HANDLERS.RIGHT].includes(handler)) {
    newHeight = newWidth / aspectRatio;
  }

  return { width: newWidth, height: newHeight };
}

/**
 * Helper function to calculate resize dimensions
 */
function calculateResizeDimensions({
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
      newWidth = startWidth - deltaX;
      newHeight = startHeight - deltaY;
      break;
    case RESIZE_HANDLERS.TOP_RIGHT:
      newWidth = startWidth + deltaX;
      newHeight = startHeight - deltaY;
      break;
    case RESIZE_HANDLERS.BOTTOM_LEFT:
      newWidth = startWidth - deltaX;
      newHeight = startHeight + deltaY;
      break;
    case RESIZE_HANDLERS.BOTTOM_RIGHT:
      newWidth = startWidth + deltaX;
      newHeight = startHeight + deltaY;
      break;
    case RESIZE_HANDLERS.TOP:
      newHeight = startHeight - deltaY;
      break;
    case RESIZE_HANDLERS.BOTTOM:
      newHeight = startHeight + deltaY;
      break;
    case RESIZE_HANDLERS.LEFT:
      newWidth = startWidth - deltaX;
      break;
    case RESIZE_HANDLERS.RIGHT:
      newWidth = startWidth + deltaX;
      break;
    default:
      return { width: newWidth, height: newHeight };
  }

  // Apply aspect ratio constraints
  ({ width: newWidth, height: newHeight } = applyAspectRatioConstraints(
    newWidth, newHeight, startWidth, startHeight, handler, options
  ));

  // Apply max dimensions
  if (options.maxWidth && newWidth > options.maxWidth) {
    newWidth = options.maxWidth;
    if (options.preserveAspectRatio) {
      newHeight = newWidth / (startWidth / startHeight);
    }
  }

  if (options.maxHeight && newHeight > options.maxHeight) {
    newHeight = options.maxHeight;
    if (options.preserveAspectRatio) {
      newWidth = newHeight * (startWidth / startHeight);
    }
  }

  // Ensure minimum and maximum dimensions
  newWidth = Math.max(options.minWidth, Math.min(options.maxWidth || newWidth, newWidth));
  newHeight = Math.max(options.minHeight, Math.min(options.maxHeight || newHeight, newHeight));

  return {
    width: Math.round(newWidth),
    height: Math.round(newHeight)
  };
}

/**
 * Helper function to apply image dimensions
 */
function applyImageDimensions(element, { width, height }) {
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
 * Helper function to apply dimensions and trigger input event
 */
function applyDimensionsAndTriggerInput(editorRef, imageElement, dimensions) {
  applyImageDimensions(imageElement, dimensions);
  // Trigger input event to update document state
  const inputEvent = new Event('input', { bubbles: true, cancelable: true });
  editorRef.current.dispatchEvent(inputEvent);
}

/**
 * Helper function to handle keyboard shortcuts for image resizing
 */
function handleImageKeyboardShortcut(event, editorRef, imageElement, options) {
  const { ctrlKey, metaKey, shiftKey, key } = event;
  const isModifierPressed = ctrlKey || metaKey;
  const currentWidth = imageElement.offsetWidth;
  const currentHeight = imageElement.offsetHeight;

  const shortcuts = {
    // Increase width
    '>': isModifierPressed && shiftKey ? () => ({
      width: Math.min(options.maxWidth || 800, currentWidth + KEYBOARD_RESIZE_STEP),
      height: currentHeight
    }) : null,

    // Decrease width
    '<': isModifierPressed && shiftKey ? () => ({
      width: Math.max(options.minWidth || 50, currentWidth - KEYBOARD_RESIZE_STEP),
      height: currentHeight
    }) : null,

    // Increase height
    '+': isModifierPressed && shiftKey ? () => ({
      width: currentWidth,
      height: Math.min(options.maxHeight || 600, currentHeight + KEYBOARD_RESIZE_STEP)
    }) : null,

    // Decrease height
    '-': isModifierPressed && shiftKey ? () => ({
      width: currentWidth,
      height: Math.max(options.minHeight || 50, currentHeight - KEYBOARD_RESIZE_STEP)
    }) : null,

    // Reset to default
    'r': isModifierPressed && !shiftKey ? () => ({ width: DEFAULT_RESET_WIDTH, height: DEFAULT_RESET_HEIGHT }) : null
  };

  const action = shortcuts[key];
  if (action) {
    event.preventDefault();
    const dimensions = action();
    applyDimensionsAndTriggerInput(editorRef, imageElement, dimensions);
    return true;
  }

  return false;
}

/**
 * ImageResizeHandlers - Component for handling image resize operations
 * Provides resize handlers, selection, and resize functionality for images
 * 
 * Features:
 * - Visual resize handles around selected images
 * - Mouse-based resizing with aspect ratio preservation
 * - Keyboard shortcuts for quick resizing
 * - Automatic overlay positioning on scroll
 * - Undo/redo support for resize operations
 * 
 * @param {Object} props - Component props
 * @param {React.RefObject} props.editorRef - Reference to the editor element
 * @param {Function} props.onImageResize - Callback when image is resized
 * @param {Function} props.onImageSelect - Callback when image is selected
 * @param {Function} props.onImageDeselect - Callback when image selection is cleared
 * @param {Object} props.resizeOptions - Resize configuration options
 */
const ImageResizeHandlers = ({
  editorRef,
  onImageResize,
  onImageSelect,
  onImageDeselect,
  resizeOptions = DEFAULT_IMAGE_RESIZE_OPTIONS
}) => {
  const resizeStateRef = useRef({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: false
  });
  const resizeOptionsRef = useRef(resizeOptions);
  const actions = useDocumentActions();

  // Update resize options when they change
  useEffect(() => {
    resizeOptionsRef.current = resizeOptions;
  }, [resizeOptions]);

  /**
   * Handle image selection by creating resize overlay and handlers
   * @param {HTMLElement} imageElement - The image element to select
   */
  const handleImageSelection = useCallback((imageElement) => {
    if (!isResizableImage(imageElement)) return;

    // Clear any existing resize overlay
    if (resizeStateRef.current.overlay) {
      removeResizeOverlay(resizeStateRef.current.overlay);
      resizeStateRef.current.overlay = null;
    }

    // Mark image as selected
    imageElement.classList.add('selected');

    // Create resize overlay
    const overlay = createResizeOverlay(imageElement, resizeOptionsRef.current);
    if (overlay) {
      resizeStateRef.current.overlay = overlay;
      resizeStateRef.current.image = imageElement;
      
      // Add overlay to document body
      document.body.appendChild(overlay);
      
      // Add event listeners to handlers
      const handlers = overlay.querySelectorAll('.resize-handler');
      handlers.forEach(handler => {
        handler.addEventListener('mousedown', handleResizeStart);
      });
      
      // Notify parent
      if (onImageSelect) {
        onImageSelect(imageElement);
      }
    }
  }, [onImageSelect]);

  /**
   * Clear current image selection and remove resize overlay
   */
  const clearImageSelection = useCallback(() => {
    if (resizeStateRef.current.image) {
      resizeStateRef.current.image.classList.remove('selected');
      resizeStateRef.current.image = null;
    }

    if (resizeStateRef.current.overlay) {
      removeResizeOverlay(resizeStateRef.current.overlay);
      resizeStateRef.current.overlay = null;
    }

    resizeStateRef.current.start = null;
    resizeStateRef.current.handler = null;
    resizeStateRef.current.isResizing = false;

    // Notify parent
    if (onImageDeselect) {
      onImageDeselect();
    }
  }, [onImageDeselect]);

  /**
   * Start image resize operation when user clicks on a resize handler
   * @param {MouseEvent} event - The mousedown event
   */
  const handleResizeStart = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (!resizeStateRef.current.image) return;

    const handler = event.currentTarget.dataset.handler;
    const rect = resizeStateRef.current.image.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Store the original dimensions for undo
    resizeStateRef.current.start = {
      x: event.clientX,
      y: event.clientY,
      width: resizeStateRef.current.image.offsetWidth,
      height: resizeStateRef.current.image.offsetHeight,
      originalWidth: resizeStateRef.current.image.offsetWidth,
      originalHeight: resizeStateRef.current.image.offsetHeight,
      offsetX: event.clientX - rect.left - scrollLeft,
      offsetY: event.clientY - rect.top - scrollTop
    };

    resizeStateRef.current.handler = handler;
    resizeStateRef.current.isResizing = true;

    // Add resize class to prevent text selection
    document.body.classList.add('resize-in-progress');

    // Update cursor based on handler
    document.body.style.cursor = getCursorForHandler(handler);

    // Add global event listeners
    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
  }, []);

  /**
   * Perform image resize operation during mouse move
   * @param {MouseEvent} event - The mousemove event
   */
  const handleResizeMove = useCallback((event) => {
    if (!resizeStateRef.current.isResizing || !resizeStateRef.current.image || !resizeStateRef.current.start || !resizeStateRef.current.handler) return;

    event.preventDefault();
    event.stopPropagation();

    const { x: startX, y: startY, width: startWidth, height: startHeight } = resizeStateRef.current.start;
    const handler = resizeStateRef.current.handler;
    const currentX = event.clientX;
    const currentY = event.clientY;

    // Calculate new dimensions
    const newDimensions = calculateResizeDimensions({
      handler,
      startX,
      startY,
      currentX,
      currentY,
      startWidth,
      startHeight,
      options: resizeOptionsRef.current
    });

    // Apply new dimensions to the image
    applyImageDimensions(resizeStateRef.current.image, newDimensions);

    // Update resize overlay
    if (resizeStateRef.current.overlay) {
      updateResizeOverlay(resizeStateRef.current.overlay, resizeStateRef.current.image);
    }
  }, []);

  /**
   * End image resize operation and record for undo/redo
   * @param {MouseEvent} event - The mouseup event
   */
  const handleResizeEnd = useCallback((event) => {
    if (!resizeStateRef.current.isResizing) return;

    event.preventDefault();
    event.stopPropagation();

    // Record the resize operation for undo before clearing refs
    if (resizeStateRef.current.image && resizeStateRef.current.start) {
      const beforeState = {
        width: resizeStateRef.current.start.originalWidth,
        height: resizeStateRef.current.start.originalHeight
      };
      const afterState = {
        width: resizeStateRef.current.image.offsetWidth,
        height: resizeStateRef.current.image.offsetHeight
      };

      // Only record if dimensions actually changed
      if (beforeState.width !== afterState.width || beforeState.height !== afterState.height) {
        actions.recordOperation(
          { type: 'IMAGE_RESIZE', payload: { element: resizeStateRef.current.image, state: afterState } },
          { type: 'IMAGE_RESIZE', payload: { element: resizeStateRef.current.image, state: beforeState } }
        );
      }
    }

    resizeStateRef.current.start = null;
    resizeStateRef.current.handler = null;
    resizeStateRef.current.isResizing = false;

    // Remove global event listeners
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeEnd);

    // Remove resize classes
    document.body.classList.remove('resize-in-progress');
    document.body.style.cursor = '';

    // Update content in document context
    if (resizeStateRef.current.image) {
      // Trigger input event to update document state
      const inputEvent = new Event('input', { bubbles: true, cancelable: true });
      resizeStateRef.current.image.dispatchEvent(inputEvent);

      // Notify parent about resize
      if (onImageResize) {
        onImageResize(resizeStateRef.current.image, {
          width: resizeStateRef.current.image.offsetWidth,
          height: resizeStateRef.current.image.offsetHeight
        });
      }
    }
  }, [onImageResize, actions]);

  /**
   * Handle click on editor to select images
   */
  const handleEditorClick = useCallback((event) => {
    
    // Clear selection if clicking outside an image
    if (resizeStateRef.current.overlay && !resizeStateRef.current.overlay.contains(event.target)) {
      clearImageSelection();
    }

    // Check if clicked on an image
    const target = event.target;
    if (isResizableImage(target)) {
      // If already selected, don't reselect
      if (target === resizeStateRef.current.image) {
        return;
      }
      
      // Select the new image
      handleImageSelection(target);
    }
  }, [handleImageSelection, clearImageSelection]);

  /**
   * Handle keydown events (for deleting selected images, etc.)
   */
  const handleKeyDown = useCallback((event) => {
    // Delete selected image with Delete or Backspace key
    if ((event.key === 'Delete' || event.key === 'Backspace') && 
        resizeStateRef.current.image && 
        !resizeStateRef.current.isResizing) {
      
      // Prevent default behavior
      event.preventDefault();
      
      // Remove the image
      const imageToRemove = resizeStateRef.current.image;
      if (imageToRemove.parentNode) {
        imageToRemove.parentNode.removeChild(imageToRemove);
        
        // Clear selection
        clearImageSelection();
        
        // Trigger input event to update document state
        const inputEvent = new Event('input', { bubbles: true, cancelable: true });
        editorRef.current.dispatchEvent(inputEvent);
      }
    }
    
    // Escape key to clear selection
    if (event.key === 'Escape' && resizeStateRef.current.image) {
      clearImageSelection();
    }
    
    // Add keyboard shortcuts for image operations
    if (resizeStateRef.current.image && !resizeStateRef.current.isResizing) {
      handleImageKeyboardShortcut(event, editorRef, resizeStateRef.current.image, resizeOptionsRef.current);
    }
  }, [editorRef, clearImageSelection]);

  /**
   * Handle scroll events to update overlay position
   */
  const handleScroll = useCallback(() => {
    if (resizeStateRef.current.overlay && resizeStateRef.current.image) {
      updateResizeOverlay(resizeStateRef.current.overlay, resizeStateRef.current.image);
    }
  }, []);

  // Add scroll listener to editor viewport
  useEffect(() => {
    if (!editorRef.current) return;

    const editor = editorRef.current;
    const viewport = editor.closest('.editor-viewport');
    
    if (viewport) {
      // Add scroll listener to viewport
      viewport.addEventListener('scroll', handleScroll);
      
      // Also listen to window scroll in case of nested scrolling
      window.addEventListener('scroll', handleScroll);
    }

    // Cleanup
    return () => {
      if (viewport) {
        viewport.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [editorRef, handleScroll]);

  // Add event listeners when editor is available
  useEffect(() => {
    if (!editorRef.current) return;

    const editor = editorRef.current;
    
    // Add event listeners
    editor.addEventListener('click', handleEditorClick);
    editor.addEventListener('keydown', handleKeyDown);
    
    // Add window resize listener
    window.addEventListener('resize', handleScroll);

    // Cleanup
    return () => {
      editor.removeEventListener('click', handleEditorClick);
      editor.removeEventListener('keydown', handleKeyDown);
      
      window.removeEventListener('resize', handleScroll);
      
      // Clean up any active resize operations
      if (resizeStateRef.current.isResizing) {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
        document.body.classList.remove('resize-in-progress');
        document.body.style.cursor = '';
      }
      
      // Remove overlay
      if (resizeStateRef.current.overlay) {
        removeResizeOverlay(resizeStateRef.current.overlay);
      }
    };
  }, [editorRef, handleEditorClick, handleKeyDown, handleScroll, handleResizeMove, handleResizeEnd]);

  // Add a mutation observer to detect when images are added/removed
  useEffect(() => {
    if (!editorRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type !== 'childList') return;

        // Handle removed images
        mutation.removedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE && isResizableImage(node) && node === resizeStateRef.current.image) {
            clearImageSelection();
          }
        });
      });
    });

    observer.observe(editorRef.current, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [editorRef, clearImageSelection, handleImageSelection]);

  // This component doesn't render anything visible - it just manages the resize functionality
  return null;
};

ImageResizeHandlers.propTypes = {
  editorRef: PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object)
  }).isRequired,
  onImageResize: PropTypes.func,
  onImageSelect: PropTypes.func,
  onImageDeselect: PropTypes.func,
  resizeOptions: PropTypes.shape({
    minWidth: PropTypes.number,
    minHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    aspectRatio: PropTypes.bool,
    preserveAspectRatio: PropTypes.bool,
    defaultWidth: PropTypes.number,
    defaultHeight: PropTypes.number
  })
};

ImageResizeHandlers.defaultProps = {
  onImageResize: undefined,
  onImageSelect: undefined,
  onImageDeselect: undefined,
  resizeOptions: DEFAULT_IMAGE_RESIZE_OPTIONS
};

export default ImageResizeHandlers;
