import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { AlignLeft, AlignCenter, AlignRight, Trash2, Scaling, ImageUpscale } from 'lucide-react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';

/**
 * ImageTooltipMenu - Component for image tooltip menu with alignment, aspect ratio, and delete options
 */
const ImageTooltipMenu = ({
  imageElement,
  onAlignChange,
  onAspectRatioToggle,
  onDelete,
  onClose,
  initialPreserveAspectRatio = true
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState('top'); // 'top' or 'bottom'
  const [preserveAspectRatio, setPreserveAspectRatio] = useState(initialPreserveAspectRatio);
  const menuRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const actions = useDocumentActions();

  // Helper function to get current image state for undo operations
  const getImageState = (element) => {
    if (!element) return null;
    const style = window.getComputedStyle(element);
    return {
      float: style.float || 'none',
      margin: element.style.margin || '',
      display: style.display || 'inline',
      width: element.style.width || element.width || '',
      height: element.style.height || element.height || '',
      aspectRatio: preserveAspectRatio
    };
  };

  // Helper function to apply image state
  const applyImageState = (element, state) => {
    if (!element || !state) return;
    element.style.float = state.float;
    element.style.margin = state.margin;
    element.style.display = state.display;
    if (state.width) element.style.width = state.width;
    if (state.height) element.style.height = state.height;
  };

  // Get current alignment of the image
  const getCurrentAlignment = () => {
    if (!imageElement) return 'left';
    const style = window.getComputedStyle(imageElement);
    return style.float || style.display === 'block' ? 'left' :
           style.display === 'flex' && style.justifyContent === 'center' ? 'center' :
           style.float === 'right' ? 'right' : 'left';
  };

  const [currentAlignment, setCurrentAlignment] = useState(getCurrentAlignment());

  useEffect(() => {
    return () => {
      console.log('ImageTooltipMenu unmounted');
    };
  }, [imageElement]);

  // Find the scroll container (editor viewport)
  useEffect(() => {
    if (imageElement) {
      // Find the scroll container (editor viewport)
      let scrollContainer = imageElement.closest('.editor-viewport') || imageElement.closest('.continuous-scroll');
      if (scrollContainer) {
        scrollContainerRef.current = scrollContainer;
      }
    }
  }, [imageElement]);

  // Position the tooltip menu
  useLayoutEffect(() => {
    if (!imageElement || !menuRef.current) return;

    const updatePosition = () => {
      const imageRect = imageElement.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const scrollContainer = scrollContainerRef.current;
      
      // Determine if image is in view (partially or fully)
      const viewportRect = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight,
        offsetTop: 0,
        offsetLeft: 0
      };
      
      // Check if image is visible in viewport
      const isImageInViewport = (
        imageRect.bottom >= 0 &&
        imageRect.top <= viewportRect.height &&
        imageRect.right >= 0 &&
        imageRect.left <= viewportRect.width
      );
      
      // Determine if menu should be positioned above or below the image
      let menuPosition = 'top'; // default to top
      let top = 0;
      let left = 0;
      
      // If image is in view, position menu relative to image
      if (isImageInViewport) {
        // Check if there's enough space above or below the image for the menu
        const spaceAbove = imageRect.top - menuRect.height - 10;
        const spaceBelow = viewportRect.height - imageRect.bottom - menuRect.height - 10;
        
        // Position menu below if there's more space there, or if space above is negative
        if (spaceBelow > spaceAbove && spaceBelow > 0) {
          menuPosition = 'bottom';
          top = imageRect.bottom + 10;
        } else {
          menuPosition = 'top';
          top = imageRect.top - menuRect.height - 10;
        }
      } else {
        // If image is not in view, position menu at the top of the viewport
        menuPosition = 'top';
        top = 10; // 10px from top of viewport
      }
      
      left = imageRect.left + (imageRect.width / 2) - (menuRect.width / 2);
      
      // Ensure the menu stays within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      let adjustedLeft = left;
      let adjustedTop = top;
      
      // Adjust horizontal position if menu goes outside viewport
      if (left < 10) {
        adjustedLeft = 10;
      } else if (left + menuRect.width > viewportWidth - 10) {
        adjustedLeft = viewportWidth - menuRect.width - 10;
      }
      
      // Adjust vertical position if menu goes outside viewport
      if (top < 10) {
        adjustedTop = 10;
      } else if (top + menuRect.height > viewportHeight - 10) {
        adjustedTop = viewportHeight - menuRect.height - 10;
      }
      
      setPosition({
        top: adjustedTop,
        left: adjustedLeft
      });
      setMenuPosition(menuPosition);
      setIsVisible(true);
    };

    // Initial positioning
    updatePosition();
    
    // Add scroll listener to update position on scroll
    const handleScroll = () => {
      updatePosition();
    };
    
    // Add scroll listener to scroll container if available
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }
    
    // Also add window scroll listener for safety
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      setIsVisible(false);
    };
  }, [imageElement]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          event.target !== imageElement) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [imageElement, onClose]);

  const handleAlignLeft = () => {
    if (imageElement) {
      const beforeState = getImageState(imageElement);
      
      imageElement.style.float = 'left';
      imageElement.style.margin = '0 10px 10px 0';
      imageElement.style.display = 'block';
      setCurrentAlignment('left');
      
      const afterState = getImageState(imageElement);
      
      // Record operation for undo
      actions.recordOperation(
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment: 'left', state: afterState } },
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment: getCurrentAlignment(), state: beforeState } }
      );
      
      onAlignChange && onAlignChange('left');
    }
  };

  const handleAlignCenter = () => {
    if (imageElement) {
      const beforeState = getImageState(imageElement);
      
      imageElement.style.float = 'none';
      imageElement.style.margin = '10px auto';
      imageElement.style.display = 'block';
      setCurrentAlignment('center');
      
      const afterState = getImageState(imageElement);
      
      // Record operation for undo
      actions.recordOperation(
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment: 'center', state: afterState } },
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment: getCurrentAlignment(), state: beforeState } }
      );
      
      onAlignChange && onAlignChange('center');
    }
  };

  const handleAlignRight = () => {
    if (imageElement) {
      const beforeState = getImageState(imageElement);
      
      imageElement.style.float = 'right';
      imageElement.style.margin = '0 0 10px 10px';
      imageElement.style.display = 'block';
      setCurrentAlignment('right');
      
      const afterState = getImageState(imageElement);
      
      // Record operation for undo
      actions.recordOperation(
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment: 'right', state: afterState } },
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment: getCurrentAlignment(), state: beforeState } }
      );
      
      onAlignChange && onAlignChange('right');
    }
  };

  const handleDelete = () => {
    if (imageElement && imageElement.parentNode) {
      const beforeState = {
        element: imageElement,
        parent: imageElement.parentNode,
        nextSibling: imageElement.nextSibling
      };
      
      // Record operation for undo (re-insert the image)
      actions.recordOperation(
        { type: 'IMAGE_DELETE', payload: { element: imageElement } },
        { type: 'IMAGE_REINSERT', payload: { state: beforeState } }
      );
      
      imageElement.parentNode.removeChild(imageElement);
      onDelete && onDelete();
      onClose();
    }
  };

  const handleAspectRatioToggle = () => {
    const oldPreserveRatio = preserveAspectRatio;
    const newPreserveRatio = !preserveAspectRatio;
    setPreserveAspectRatio(newPreserveRatio);
    
    // Record operation for undo
    actions.recordOperation(
      { type: 'IMAGE_ASPECT_RATIO', payload: { element: imageElement, preserveAspectRatio: newPreserveRatio } },
      { type: 'IMAGE_ASPECT_RATIO', payload: { element: imageElement, preserveAspectRatio: oldPreserveRatio } }
    );
    
    // Call the parent callback if provided
    if (onAspectRatioToggle) {
      onAspectRatioToggle(newPreserveRatio);
    }
  };

  if (!imageElement) return null;

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      ref={menuRef}
      className="image-tooltip-menu"
      data-menu-position={menuPosition}
      aria-hidden={!isVisible}
      style={{
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 999,
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '6px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        padding: '8px',
        display: 'flex',
        gap: '2px',
        alignItems: 'center',
        pointerEvents: isVisible ? 'auto' : 'none',
        minWidth: '140px',
        minHeight: '32px',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.15s ease, visibility 0.15s ease'
      }}
    >
      {/* Aspect Ratio Toggle */}
      <button
        className={`tooltip-button aspect-ratio-toggle ${!preserveAspectRatio ? 'active' : ''}`}
        onClick={handleAspectRatioToggle}
        title={`Toggle aspect ratio preservation (currently ${preserveAspectRatio ? 'ON' : 'OFF'})`}
      >
        {preserveAspectRatio ? <Scaling size={14} /> : <ImageUpscale size={14} />}
      </button>

      {/* Alignment buttons */}
      <button
        className={`tooltip-button ${currentAlignment === 'left' ? 'active' : ''}`}
        onClick={handleAlignLeft}
        title="Align Left"
        style={{
          background: currentAlignment === 'left' ? '#007bff' : 'transparent',
          color: currentAlignment === 'left' ? '#fff' : '#333',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '28px',
          height: '28px'
        }}
      >
        <AlignLeft size={14} />
      </button>
      
      <button
        className={`tooltip-button ${currentAlignment === 'center' ? 'active' : ''}`}
        onClick={handleAlignCenter}
        title="Align Center"
        style={{
          background: currentAlignment === 'center' ? '#007bff' : 'transparent',
          color: currentAlignment === 'center' ? '#fff' : '#333',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '28px',
          height: '28px'
        }}
      >
        <AlignCenter size={14} />
      </button>
      
      <button
        className={`tooltip-button ${currentAlignment === 'right' ? 'active' : ''}`}
        onClick={handleAlignRight}
        title="Align Right"
        style={{
          background: currentAlignment === 'right' ? '#007bff' : 'transparent',
          color: currentAlignment === 'right' ? '#fff' : '#333',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '28px',
          height: '28px'
        }}
      >
        <AlignRight size={14} />
      </button>

      {/* Delete button */}
      <button
        className="tooltip-button delete-button"
        onClick={handleDelete}
        title="Delete Image"
        style={{
          background: 'transparent',
          color: '#dc3545',
          border: '1px solid #dc3545',
          borderRadius: '4px',
          padding: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '28px',
          height: '28px'
        }}
      >
        <Trash2 size={14} />
      </button>
    </div>,
    document.body
  );
};

ImageTooltipMenu.propTypes = {
  imageElement: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object),
  onAlignChange: PropTypes.func,
  onAspectRatioToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  initialPreserveAspectRatio: PropTypes.bool
};

ImageTooltipMenu.defaultProps = {
  imageElement: null,
  onAlignChange: undefined,
  onAspectRatioToggle: undefined,
  onDelete: undefined,
  initialPreserveAspectRatio: true
};

export default ImageTooltipMenu;