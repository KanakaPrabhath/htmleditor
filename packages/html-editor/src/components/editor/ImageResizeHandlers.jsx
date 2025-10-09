import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  isResizableImage,
  createResizeOverlay,
  removeResizeOverlay,
  updateResizeOverlay,
  RESIZE_HANDLERS,
  DEFAULT_IMAGE_RESIZE_OPTIONS
} from '../../lib/editor/image-resize-utils';

/**
 * ImageResizeHandlers - Component for handling image resize operations
 * Provides resize handlers, selection, and resize functionality for images
 */
const ImageResizeHandlers = ({
  editorRef,
  onImageResize,
  onImageSelect,
  onImageDeselect,
  resizeOptions = DEFAULT_IMAGE_RESIZE_OPTIONS
}) => {
  const resizeOverlayRef = useRef(null);
  const resizeImageRef = useRef(null);
  const resizeStartRef = useRef(null);
  const resizeHandlerRef = useRef(null);
  const resizeOptionsRef = useRef(resizeOptions);
  const isResizingRef = useRef(false);

  // Update resize options when they change
  useEffect(() => {
    resizeOptionsRef.current = resizeOptions;
  }, [resizeOptions]);

  /**
   * Handle image selection
   */
  const handleImageSelection = useCallback((imageElement) => {
    if (!isResizableImage(imageElement)) return;

    // Clear any existing resize overlay
    if (resizeOverlayRef.current) {
      removeResizeOverlay(resizeOverlayRef.current);
      resizeOverlayRef.current = null;
    }

    // Mark image as selected
    imageElement.classList.add('selected');

    // Create resize overlay
    const overlay = createResizeOverlay(imageElement);
    if (overlay) {
      resizeOverlayRef.current = overlay;
      resizeImageRef.current = imageElement;
      
      // Add overlay to document body
      document.body.appendChild(overlay);
      
      // Add event listeners to handlers
      const handlers = overlay.querySelectorAll('.resize-handler');
      handlers.forEach(handler => {
        handler.addEventListener('mousedown', handleResizeStart);
      });

      // Add event listener to aspect ratio toggle
      const aspectRatioToggle = overlay.querySelector('.aspect-ratio-toggle');
      if (aspectRatioToggle) {
        aspectRatioToggle.addEventListener('click', handleAspectRatioToggle);
      }
      
      // Notify parent
      if (onImageSelect) {
        onImageSelect(imageElement);
      }
    }
  }, [onImageSelect]);

  /**
   * Clear image selection
   */
  const clearImageSelection = useCallback(() => {
    if (resizeImageRef.current) {
      resizeImageRef.current.classList.remove('selected');
      resizeImageRef.current = null;
    }

    if (resizeOverlayRef.current) {
      removeResizeOverlay(resizeOverlayRef.current);
      resizeOverlayRef.current = null;
    }

    resizeStartRef.current = null;
    resizeHandlerRef.current = null;
    isResizingRef.current = false;

    // Notify parent
    if (onImageDeselect) {
      onImageDeselect();
    }
  }, [onImageDeselect]);

  /**
   * Handle aspect ratio toggle
   */
  const handleAspectRatioToggle = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const newPreserveRatio = !resizeOptionsRef.current.preserveAspectRatio;
    
    resizeOptionsRef.current = {
      ...resizeOptionsRef.current,
      preserveAspectRatio: newPreserveRatio,
      aspectRatio: newPreserveRatio
    };

    // Update the aspect ratio toggle button
    const toggleButton = event.currentTarget;
    if (newPreserveRatio) {
      toggleButton.innerHTML = '🔗';
      toggleButton.title = 'Toggle aspect ratio preservation (currently ON)';
      toggleButton.classList.remove('locked');
    } else {
      toggleButton.innerHTML = '🔓';
      toggleButton.title = 'Toggle aspect ratio preservation (currently OFF)';
      toggleButton.classList.add('locked');
    }
  }, []);

  /**
   * Start image resize operation
   */
  const handleResizeStart = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (!resizeImageRef.current) return;

    const handler = event.currentTarget.dataset.handler;
    const rect = resizeImageRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    resizeStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      width: resizeImageRef.current.offsetWidth,
      height: resizeImageRef.current.offsetHeight,
      offsetX: event.clientX - rect.left - scrollLeft,
      offsetY: event.clientY - rect.top - scrollTop
    };

    resizeHandlerRef.current = handler;
    isResizingRef.current = true;

    // Add resize class to prevent text selection
    document.body.classList.add('resize-in-progress');

    // Update cursor based on handler
    document.body.style.cursor = getCursorForHandler(handler);

    // Add global event listeners
    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
  }, []);

  /**
   * Perform image resize operation
   */
  const handleResizeMove = useCallback((event) => {
    if (!isResizingRef.current || !resizeImageRef.current || !resizeStartRef.current || !resizeHandlerRef.current) return;

    event.preventDefault();
    event.stopPropagation();

    const { x: startX, y: startY, width: startWidth, height: startHeight } = resizeStartRef.current;
    const handler = resizeHandlerRef.current;
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
    applyImageDimensions(resizeImageRef.current, newDimensions);

    // Update resize overlay
    if (resizeOverlayRef.current) {
      updateResizeOverlay(resizeOverlayRef.current, resizeImageRef.current);
    }
  }, []);

  /**
   * End image resize operation
   */
  const handleResizeEnd = useCallback((event) => {
    if (!isResizingRef.current) return;

    event.preventDefault();
    event.stopPropagation();

    resizeStartRef.current = null;
    resizeHandlerRef.current = null;
    isResizingRef.current = false;

    // Remove global event listeners
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeEnd);

    // Remove resize classes
    document.body.classList.remove('resize-in-progress');
    document.body.style.cursor = '';

    // Update content in document context
    if (resizeImageRef.current) {
      // Trigger input event to update document state
      const inputEvent = new Event('input', { bubbles: true, cancelable: true });
      resizeImageRef.current.dispatchEvent(inputEvent);

      // Notify parent about resize
      if (onImageResize) {
        onImageResize(resizeImageRef.current, {
          width: resizeImageRef.current.offsetWidth,
          height: resizeImageRef.current.offsetHeight
        });
      }
    }
  }, [onImageResize]);

  /**
   * Handle click on editor to select images
   */
  const handleEditorClick = useCallback((event) => {
    // Clear selection if clicking outside an image
    if (resizeOverlayRef.current && !resizeOverlayRef.current.contains(event.target)) {
      clearImageSelection();
    }

    // Check if clicked on an image
    const target = event.target;
    if (isResizableImage(target)) {
      // If already selected, don't reselect
      if (target === resizeImageRef.current) {
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
        resizeImageRef.current && 
        !isResizingRef.current) {
      
      // Prevent default behavior
      event.preventDefault();
      
      // Remove the image
      const imageToRemove = resizeImageRef.current;
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
    if (event.key === 'Escape' && resizeImageRef.current) {
      clearImageSelection();
    }
    
    // Add keyboard shortcuts for image operations
    if (resizeImageRef.current && !isResizingRef.current) {
      // Ctrl/Cmd + Shift + > - Increase image width by 10px
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === '>') {
        event.preventDefault();
        const currentWidth = resizeImageRef.current.offsetWidth;
        const newWidth = Math.min(resizeOptionsRef.current.maxWidth || 800, currentWidth + 10);
        applyImageDimensions(resizeImageRef.current, { width: newWidth, height: resizeImageRef.current.offsetHeight });
        
        // Trigger input event to update document state
        const inputEvent = new Event('input', { bubbles: true, cancelable: true });
        editorRef.current.dispatchEvent(inputEvent);
      }
      
      // Ctrl/Cmd + Shift + < - Decrease image width by 10px
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === '<') {
        event.preventDefault();
        const currentWidth = resizeImageRef.current.offsetWidth;
        const newWidth = Math.max(resizeOptionsRef.current.minWidth || 50, currentWidth - 10);
        applyImageDimensions(resizeImageRef.current, { width: newWidth, height: resizeImageRef.current.offsetHeight });
        
        // Trigger input event to update document state
        const inputEvent = new Event('input', { bubbles: true, cancelable: true });
        editorRef.current.dispatchEvent(inputEvent);
      }
      
      // Ctrl/Cmd + Shift + + - Increase image height by 10px
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === '+') {
        event.preventDefault();
        const currentHeight = resizeImageRef.current.offsetHeight;
        const newHeight = Math.min(resizeOptionsRef.current.maxHeight || 600, currentHeight + 10);
        applyImageDimensions(resizeImageRef.current, { width: resizeImageRef.current.offsetWidth, height: newHeight });
        
        // Trigger input event to update document state
        const inputEvent = new Event('input', { bubbles: true, cancelable: true });
        editorRef.current.dispatchEvent(inputEvent);
      }
      
      // Ctrl/Cmd + Shift + - - Decrease image height by 10px
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === '-') {
        event.preventDefault();
        const currentHeight = resizeImageRef.current.offsetHeight;
        const newHeight = Math.max(resizeOptionsRef.current.minHeight || 50, currentHeight - 10);
        applyImageDimensions(resizeImageRef.current, { width: resizeImageRef.current.offsetWidth, height: newHeight });
        
        // Trigger input event to update document state
        const inputEvent = new Event('input', { bubbles: true, cancelable: true });
        editorRef.current.dispatchEvent(inputEvent);
      }
      
      // Ctrl/Cmd + R - Reset image to default size (300x200)
      if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
        event.preventDefault();
        applyImageDimensions(resizeImageRef.current, { width: 300, height: 200 });
        
        // Trigger input event to update document state
        const inputEvent = new Event('input', { bubbles: true, cancelable: true });
        editorRef.current.dispatchEvent(inputEvent);
      }
      
      // Ctrl/Cmd + Alt + L - Lock/unlock aspect ratio
      if ((event.ctrlKey || event.metaKey) && event.altKey && event.key === 'l') {
        event.preventDefault();
        const newPreserveRatio = !resizeOptionsRef.current.preserveAspectRatio;
        
        resizeOptionsRef.current = {
          ...resizeOptionsRef.current,
          preserveAspectRatio: newPreserveRatio,
          aspectRatio: newPreserveRatio
        };

        // Update the aspect ratio toggle button if it's currently active
        if (resizeOverlayRef.current) {
          const toggleButton = resizeOverlayRef.current.querySelector('.aspect-ratio-toggle');
          if (toggleButton) {
            if (newPreserveRatio) {
              toggleButton.innerHTML = '🔗';
              toggleButton.title = 'Toggle aspect ratio preservation (currently ON)';
              toggleButton.classList.remove('locked');
            } else {
              toggleButton.innerHTML = '🔓';
              toggleButton.title = 'Toggle aspect ratio preservation (currently OFF)';
              toggleButton.classList.add('locked');
            }
          }
        }
      }
    }
  }, [editorRef, clearImageSelection]);

  /**
   * Handle scroll events to update overlay position
   */
  const handleScroll = useCallback(() => {
    if (resizeOverlayRef.current && resizeImageRef.current) {
      updateResizeOverlay(resizeOverlayRef.current, resizeImageRef.current);
    }
  }, []);

  // Add event listeners when editor is available
  useEffect(() => {
    if (!editorRef.current) return;

    const editor = editorRef.current;
    
    // Add event listeners
    editor.addEventListener('click', handleEditorClick);
    editor.addEventListener('keydown', handleKeyDown);
    
    // Add scroll listener to viewport
    const viewport = editor.closest('.editor-viewport');
    if (viewport) {
      viewport.addEventListener('scroll', handleScroll);
    }
    
    // Add window resize listener
    window.addEventListener('resize', handleScroll);

    // Cleanup
    return () => {
      editor.removeEventListener('click', handleEditorClick);
      editor.removeEventListener('keydown', handleKeyDown);
      
      if (viewport) {
        viewport.removeEventListener('scroll', handleScroll);
      }
      
      window.removeEventListener('resize', handleScroll);
      
      // Clean up any active resize operations
      if (isResizingRef.current) {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
        document.body.classList.remove('resize-in-progress');
        document.body.style.cursor = '';
      }
      
      // Remove overlay
      if (resizeOverlayRef.current) {
        removeResizeOverlay(resizeOverlayRef.current);
      }
    };
  }, [editorRef, handleEditorClick, handleKeyDown, handleScroll, handleResizeMove, handleResizeEnd]);

  // Helper function to get cursor for handler
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

  // Helper function to calculate resize dimensions
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

  // Helper function to apply image dimensions
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
