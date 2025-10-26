import React, { useState, useEffect, useRef, useLayoutEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { AlignLeft, AlignCenter, AlignRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';
import { 
  updateTableResizeOverlay, 
  insertRowAbove, 
  insertRowBelow, 
  insertColumnLeft, 
  insertColumnRight, 
  deleteRow, 
  deleteColumn 
} from '../../lib/editor/table-resize-utils';

// Constants for button styling and operation types
const BUTTON_BASE_STYLE = {
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

const ALIGNMENT_STYLES = {
  left: { float: 'left', margin: '10px 10px 10px 0', marginLeft: '', marginRight: '' },
  center: { float: 'none', margin: '10px auto', marginLeft: 'auto', marginRight: 'auto' },
  right: { float: 'right', margin: '10px 0 10px 10px', marginLeft: '', marginRight: '' }
};

const OPERATION_TYPES = {
  INSERT_ROW_ABOVE: 'INSERT_ROW_ABOVE',
  INSERT_ROW_BELOW: 'INSERT_ROW_BELOW',
  INSERT_COL_LEFT: 'INSERT_COL_LEFT',
  INSERT_COL_RIGHT: 'INSERT_COL_RIGHT',
  DELETE_ROW: 'DELETE_ROW',
  DELETE_COL: 'DELETE_COL'
};

/**
 * Helper utility to sync resize overlay position
 */
const syncResizeOverlay = (element) => {
  if (!element) return;
  
  const callback = (el) => {
    const overlay = document.querySelector('.table-resize-overlay');
    if (overlay) {
      updateTableResizeOverlay(overlay, el);
    }
  };

  if (typeof window !== 'undefined' && window.requestAnimationFrame) {
    window.requestAnimationFrame(() => callback(element));
  } else {
    setTimeout(() => callback(element), 16);
  }
};

/**
 * Helper utility to get current table alignment state
 */
const getTableAlignmentState = (element) => {
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

/**
 * TableTooltipMenu - Component for table tooltip menu with alignment options and row/column manipulation
 */
const TableTooltipMenu = ({
  tableElement,
  onAlignChange,
  onClose,
  selectedRowIndex,
  selectedColIndex,
  editorRef
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState('top'); // 'top' or 'bottom'
  const [currentAlignment, setCurrentAlignment] = useState('left');
  const menuRef = useRef(null);
  const actions = useDocumentActions();

  // Determine current alignment of the table
  const getCurrentAlignment = useCallback(() => {
    if (!tableElement) return 'left';
    const style = window.getComputedStyle(tableElement);

    // Check for center alignment (margin auto)
    if (style.marginLeft === 'auto' && style.marginRight === 'auto') return 'center';

    // Check for float alignment
    if (style.float === 'right') return 'right';
    if (style.float === 'left') return 'left';

    return 'left';
  }, [tableElement]);

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

    // Add window scroll listener for safety
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
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

  // Handle table alignment
  const handleAlign = useCallback((alignment) => {
    if (!tableElement || !ALIGNMENT_STYLES[alignment]) return;

    const beforeState = getTableAlignmentState(tableElement);
    const oldAlignment = currentAlignment;
    const styles = ALIGNMENT_STYLES[alignment];

    tableElement.style.float = styles.float;
    tableElement.style.margin = styles.margin;
    tableElement.style.marginLeft = styles.marginLeft;
    tableElement.style.marginRight = styles.marginRight;

    setCurrentAlignment(alignment);
    syncResizeOverlay(tableElement);

    const afterState = getTableAlignmentState(tableElement);

    // Record operation for undo
    actions.recordOperation(
      { type: 'TABLE_ALIGN', payload: { element: tableElement, alignment, state: afterState } },
      { type: 'TABLE_ALIGN', payload: { element: tableElement, alignment: oldAlignment, state: beforeState } }
    );

    onAlignChange?.(alignment);
  }, [tableElement, currentAlignment, actions, onAlignChange]);

  // Factory function to create table operation handlers
  const createTableOperationHandler = useCallback((operationType, operationFn) => {
    return () => {
      if (!tableElement) return;

      const isRowOperation = operationType.includes('ROW');
      const selectedIndex = isRowOperation ? selectedRowIndex : selectedColIndex;

      if (selectedIndex === null || selectedIndex === undefined) return;

      const result = operationFn(tableElement, selectedIndex);
      if (!result) return;

      // Update editor content
      if (editorRef?.current) {
        actions.updateContinuousContent(editorRef.current.innerHTML);
      }

      // Record for undo
      const payload = isRowOperation 
        ? { element: tableElement, index: selectedIndex }
        : { element: tableElement, index: selectedIndex };

      actions.recordOperation(
        { type: operationType, payload },
        { type: operationType, payload } // Reverse operation would be same type
      );

      syncResizeOverlay(tableElement);
      requestAnimationFrame(() => calculateMenuPosition());
    };
  }, [tableElement, selectedRowIndex, selectedColIndex, editorRef, actions, calculateMenuPosition]);

  // Create handlers using the factory pattern
  const handleInsertRowAbove = useMemo(
    () => createTableOperationHandler(OPERATION_TYPES.INSERT_ROW_ABOVE, insertRowAbove),
    [createTableOperationHandler]
  );

  const handleInsertRowBelow = useMemo(
    () => createTableOperationHandler(OPERATION_TYPES.INSERT_ROW_BELOW, insertRowBelow),
    [createTableOperationHandler]
  );

  const handleInsertColumnLeft = useMemo(
    () => createTableOperationHandler(OPERATION_TYPES.INSERT_COL_LEFT, insertColumnLeft),
    [createTableOperationHandler]
  );

  const handleInsertColumnRight = useMemo(
    () => createTableOperationHandler(OPERATION_TYPES.INSERT_COL_RIGHT, insertColumnRight),
    [createTableOperationHandler]
  );

  const handleDeleteRow = useMemo(
    () => createTableOperationHandler(OPERATION_TYPES.DELETE_ROW, deleteRow),
    [createTableOperationHandler]
  );

  const handleDeleteColumn = useMemo(
    () => createTableOperationHandler(OPERATION_TYPES.DELETE_COL, deleteColumn),
    [createTableOperationHandler]
  );

  // Reusable button style helper
  const getAlignmentButtonStyle = (isActive) => ({
    ...BUTTON_BASE_STYLE,
    background: isActive ? '#007bff' : 'transparent',
    color: isActive ? '#fff' : '#333'
  });

  // Action button styles
  const ACTION_BUTTON_STYLES = useMemo(() => ({
    rowAction: { ...BUTTON_BASE_STYLE, background: '#28a745', color: '#fff' },
    colAction: { ...BUTTON_BASE_STYLE, background: '#0056b3', color: '#fff' },
    delete: { ...BUTTON_BASE_STYLE, background: '#dc3545', color: '#fff' },
    divider: { width: '1px', height: '24px', background: '#ddd', margin: '0 4px' }
  }), []);

  // Menu container styles
  const MENU_CONTAINER_STYLE = useMemo(() => ({
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
  }), [position, isVisible]);

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
      style={MENU_CONTAINER_STYLE}
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

      {/* Row operations section */}
      {selectedRowIndex !== null && selectedRowIndex !== undefined && (
        <>
          <div style={ACTION_BUTTON_STYLES.divider} />

          <button
            className="tooltip-button insert-row-above"
            onClick={handleInsertRowAbove}
            title="Insert Row Above"
            style={ACTION_BUTTON_STYLES.rowAction}
          >
            <ArrowUp size={14} />
          </button>

          <button
            className="tooltip-button insert-row-below"
            onClick={handleInsertRowBelow}
            title="Insert Row Below"
            style={ACTION_BUTTON_STYLES.rowAction}
          >
            <ArrowDown size={14} />
          </button>

          <button
            className="tooltip-button delete-row"
            onClick={handleDeleteRow}
            title="Delete Row"
            style={ACTION_BUTTON_STYLES.delete}
          >
            <Trash2 size={14} />
          </button>
        </>
      )}

      {/* Column operations section */}
      {selectedColIndex !== null && selectedColIndex !== undefined && (
        <>
          <div style={ACTION_BUTTON_STYLES.divider} />

          <button
            className="tooltip-button insert-column-left"
            onClick={handleInsertColumnLeft}
            title="Insert Column Left"
            style={ACTION_BUTTON_STYLES.colAction}
          >
            <ArrowLeft size={14} />
          </button>

          <button
            className="tooltip-button insert-column-right"
            onClick={handleInsertColumnRight}
            title="Insert Column Right"
            style={ACTION_BUTTON_STYLES.colAction}
          >
            <ArrowRight size={14} />
          </button>

          <button
            className="tooltip-button delete-column"
            onClick={handleDeleteColumn}
            title="Delete Column"
            style={ACTION_BUTTON_STYLES.delete}
          >
            <Trash2 size={14} />
          </button>
        </>
      )}
    </div>,
    document.body
  );
};

TableTooltipMenu.propTypes = {
  tableElement: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object),
  onAlignChange: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  selectedRowIndex: PropTypes.number,
  selectedColIndex: PropTypes.number,
  editorRef: PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object)
  })
};

TableTooltipMenu.defaultProps = {
  tableElement: null,
  onAlignChange: undefined,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};

export default TableTooltipMenu;