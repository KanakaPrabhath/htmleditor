import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';
import { updateTableResizeOverlay } from '../../lib/editor/table-resize-utils';

/**
 * TableTooltipMenu - Component for table tooltip menu with alignment options
 */
const TableTooltipMenu = ({
  tableElement,
  onAlignChange,
  onClose
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState('top'); // 'top' or 'bottom'
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
      const overlay = document.querySelector('.table-resize-overlay');
      if (overlay) {
        updateTableResizeOverlay(overlay, element);
      }
    });
  };

  // Helper function to get current table state for undo operations
  const getTableState = (element) => {
    if (!element) return null;
    const style = window.getComputedStyle(element);
    return {
      float: style.float || 'none',
      margin: element.style.margin || '',
      marginLeft: element.style.marginLeft || '',
      marginRight: element.style.marginRight || '',
      display: style.display || 'table'
    };
  };

  // Get current alignment of the table
  const getCurrentAlignment = useCallback(() => {
    if (!tableElement) return 'left';
    const style = window.getComputedStyle(tableElement);

    // Check for center alignment (margin auto)
    if (style.marginLeft === 'auto' && style.marginRight === 'auto') return 'center';

    // Check for float alignment
    if (style.float === 'right') return 'right';
    if (style.float === 'left') return 'left';

    // Default to left
    return 'left';
  }, [tableElement]);

  const [currentAlignment, setCurrentAlignment] = useState('left');

  // Update current alignment when table element changes
  useEffect(() => {
    if (tableElement) {
      setCurrentAlignment(getCurrentAlignment());
    }
  }, [tableElement, getCurrentAlignment]);

  const calculateMenuPosition = useCallback(() => {
    if (!tableElement || !menuRef.current) return;

    const tableRect = tableElement.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    const viewportRect = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight,
      offsetTop: 0,
      offsetLeft: 0
    };

    // Check if table is visible in viewport
    const isTableInViewport = (
      tableRect.bottom >= 0 &&
      tableRect.top <= viewportRect.height &&
      tableRect.right >= 0 &&
      tableRect.left <= viewportRect.width
    );

    let menuPosition = 'top';
    let top = 0;
    let left = 0;

    if (isTableInViewport) {
      const spaceAbove = tableRect.top - menuRect.height - 10;
      const spaceBelow = viewportRect.height - tableRect.bottom - menuRect.height - 10;

      if (spaceBelow > spaceAbove && spaceBelow > 0) {
        menuPosition = 'bottom';
        top = tableRect.bottom + 10;
      } else {
        menuPosition = 'top';
        top = tableRect.top - menuRect.height - 10;
      }
    } else {
      menuPosition = 'top';
      top = 10;
    }

    left = tableRect.left + (tableRect.width / 2) - (menuRect.width / 2);

    // Ensure the menu stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let adjustedLeft = Math.max(10, Math.min(left, viewportWidth - menuRect.width - 10));
    let adjustedTop = Math.max(10, Math.min(top, viewportHeight - menuRect.height - 10));

    setPosition({ top: adjustedTop, left: adjustedLeft });
    setMenuPosition(menuPosition);
    setIsVisible(true);
  }, [tableElement]);

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
  }, [tableElement, calculateMenuPosition]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          event.target !== tableElement && !tableElement.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tableElement, onClose]);

  const alignmentStyles = {
    left: {
      float: 'left',
      margin: '10px 10px 10px 0',
      marginLeft: '',
      marginRight: ''
    },
    center: {
      float: 'none',
      margin: '10px auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    right: {
      float: 'right',
      margin: '10px 0 10px 10px',
      marginLeft: '',
      marginRight: ''
    }
  };

  const handleAlign = (alignment) => {
    if (tableElement && alignmentStyles[alignment]) {
      const beforeState = getTableState(tableElement);
      const oldAlignment = currentAlignment;

      const styles = alignmentStyles[alignment];
      tableElement.style.float = styles.float;
      tableElement.style.margin = styles.margin;
      tableElement.style.marginLeft = styles.marginLeft;
      tableElement.style.marginRight = styles.marginRight;

      setCurrentAlignment(alignment);
      syncResizeOverlayPosition(tableElement);

      const afterState = getTableState(tableElement);

      // Record operation for undo
      actions.recordOperation(
        { type: 'TABLE_ALIGN', payload: { element: tableElement, alignment, state: afterState } },
        { type: 'TABLE_ALIGN', payload: { element: tableElement, alignment: oldAlignment, state: beforeState } }
      );

      onAlignChange && onAlignChange(alignment);
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

  if (!tableElement) return null;

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      ref={menuRef}
      className="table-tooltip-menu"
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
        minWidth: '100px',
        minHeight: '32px',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.15s ease, visibility 0.15s ease'
      }}
    >
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
    </div>,
    document.body
  );
};

TableTooltipMenu.propTypes = {
  tableElement: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object),
  onAlignChange: PropTypes.func,
  onClose: PropTypes.func.isRequired
};

TableTooltipMenu.defaultProps = {
  tableElement: null,
  onAlignChange: undefined
};

export default TableTooltipMenu;