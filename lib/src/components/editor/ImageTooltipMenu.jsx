import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AlignLeft, AlignCenter, AlignRight, Trash2, Scaling, ImageUpscale } from 'lucide-react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';
import { updateResizeOverlay } from '../../lib/editor/image-resize-utils';

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

  const syncResizeOverlayPosition = (element) => {
    if (!element) {
      return;
    }

    const raf = typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function'
      ? window.requestAnimationFrame
      : (callback) => setTimeout(callback, 16);

    raf(() => {
      const overlay = document.querySelector('.image-resize-overlay');
      if (overlay) {
        updateResizeOverlay(overlay, element);
      }
    });
  };

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

  // Get current alignment of the image
  const getCurrentAlignment = useCallback(() => {
    if (!imageElement) return 'left';
    const style = window.getComputedStyle(imageElement);
    if (style.float === 'right') return 'right';
    if (style.float === 'left') return 'left';
    if (style.display === 'block' && style.margin.includes('auto')) return 'center';
    return 'left';
  }, [imageElement]);

  const [currentAlignment, setCurrentAlignment] = useState('left');

  // Update current alignment when image element changes
  useEffect(() => {
    if (imageElement) {
      setCurrentAlignment(getCurrentAlignment());
    }
  }, [imageElement, getCurrentAlignment]);

  const calculateMenuPosition = useCallback(() => {
    if (!imageElement || !menuRef.current) return;

    const imageRect = imageElement.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

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

    let menuPosition = 'top';
    let top = 0;
    let left = 0;

    if (isImageInViewport) {
      const spaceAbove = imageRect.top - menuRect.height - 10;
      const spaceBelow = viewportRect.height - imageRect.bottom - menuRect.height - 10;

      if (spaceBelow > spaceAbove && spaceBelow > 0) {
        menuPosition = 'bottom';
        top = imageRect.bottom + 10;
      } else {
        menuPosition = 'top';
        top = imageRect.top - menuRect.height - 10;
      }
    } else {
      menuPosition = 'top';
      top = 10;
    }

    left = imageRect.left + (imageRect.width / 2) - (menuRect.width / 2);

    // Ensure the menu stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let adjustedLeft = Math.max(10, Math.min(left, viewportWidth - menuRect.width - 10));
    let adjustedTop = Math.max(10, Math.min(top, viewportHeight - menuRect.height - 10));

    setPosition({ top: adjustedTop, left: adjustedLeft });
    setMenuPosition(menuPosition);
    setIsVisible(true);
  }, [imageElement]);

  // Position the tooltip menu
  useLayoutEffect(() => {
    // Initial positioning
    calculateMenuPosition();

    // Add scroll listener to update position on scroll
    const handleScroll = () => {
      calculateMenuPosition();
    };

    // Capture the current scroll container ref for cleanup
    const currentScrollContainer = scrollContainerRef.current;

    // Add scroll listener to scroll container if available
    if (currentScrollContainer) {
      currentScrollContainer.addEventListener('scroll', handleScroll);
    }

    // Also add window scroll listener for safety
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      if (currentScrollContainer) {
        currentScrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      setIsVisible(false);
    };
  }, [imageElement, calculateMenuPosition]);

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

  const alignmentStyles = {
    left: { float: 'left', margin: '0 10px 10px 0', display: 'block' },
    center: { float: 'none', margin: '10px auto', display: 'block' },
    right: { float: 'right', margin: '0 0 10px 10px', display: 'block' }
  };

  const handleAlign = (alignment) => {
    if (imageElement && alignmentStyles[alignment]) {
      const beforeState = getImageState(imageElement);
      const oldAlignment = currentAlignment;

      const styles = alignmentStyles[alignment];
      imageElement.style.float = styles.float;
      imageElement.style.margin = styles.margin;
      imageElement.style.display = styles.display;
      setCurrentAlignment(alignment);
      syncResizeOverlayPosition(imageElement);

      const afterState = getImageState(imageElement);

      // Record operation for undo
      actions.recordOperation(
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment, state: afterState } },
        { type: 'IMAGE_ALIGN', payload: { element: imageElement, alignment: oldAlignment, state: beforeState } }
      );

      onAlignChange && onAlignChange(alignment);
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

  const buttonBaseStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '28px',
    height: '28px'
  };

  const getAlignmentButtonStyle = (isActive) => ({
    ...buttonBaseStyle,
    background: isActive ? '#007bff' : 'transparent',
    color: isActive ? '#fff' : '#333'
  });

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
        onClick={() => handleAlign('left')}
        title="Align Left"
        style={getAlignmentButtonStyle(currentAlignment === 'left')}
      >
        <AlignLeft size={14} />
      </button>
      
      <button
        className={`tooltip-button ${currentAlignment === 'center' ? 'active' : ''}`}
        onClick={() => handleAlign('center')}
        title="Align Center"
        style={getAlignmentButtonStyle(currentAlignment === 'center')}
      >
        <AlignCenter size={14} />
      </button>
      
      <button
        className={`tooltip-button ${currentAlignment === 'right' ? 'active' : ''}`}
        onClick={() => handleAlign('right')}
        title="Align Right"
        style={getAlignmentButtonStyle(currentAlignment === 'right')}
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