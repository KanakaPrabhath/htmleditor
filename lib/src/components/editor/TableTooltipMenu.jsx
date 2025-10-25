import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AlignLeft, AlignCenter, AlignRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';
import { updateTableResizeOverlay, insertRowAbove, insertRowBelow, insertColumnLeft, insertColumnRight, deleteRow, deleteColumn } from '../../lib/editor/table-resize-utils';

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

  const handleInsertRowAbove = () => {
    console.log('handleInsertRowAbove called', { selectedRowIndex, tableElement, hasEditorRef: !!editorRef });
    
    if (!tableElement) {
      console.warn('handleInsertRowAbove: No table element');
      return;
    }

    if (selectedRowIndex === null || selectedRowIndex === undefined) {
      console.warn('handleInsertRowAbove: No row selected');
      return;
    }

    console.log(`Inserting row above index ${selectedRowIndex}`);
    const newRow = insertRowAbove(tableElement, selectedRowIndex);
    
    if (newRow) {
      console.log('Row inserted successfully, updating content');
      // Update the context with the new content
      if (editorRef && editorRef.current) {
        const updatedContent = editorRef.current.innerHTML;
        console.log('Updated content length:', updatedContent.length);
        actions.updateContinuousContent(updatedContent);
      } else {
        console.warn('No editor ref available to update content');
      }

      // Record operation for undo
      actions.recordOperation(
        { type: 'INSERT_ROW', payload: { element: tableElement, row: newRow, position: 'above', index: selectedRowIndex } },
        { type: 'DELETE_ROW', payload: { element: tableElement, index: selectedRowIndex } }
      );
      syncResizeOverlayPosition(tableElement);
    } else {
      console.error('Failed to insert row above');
    }
  };

  const handleInsertRowBelow = () => {
    console.log('handleInsertRowBelow called', { selectedRowIndex, tableElement, hasEditorRef: !!editorRef });
    
    if (!tableElement) {
      console.warn('handleInsertRowBelow: No table element');
      return;
    }

    if (selectedRowIndex === null || selectedRowIndex === undefined) {
      console.warn('handleInsertRowBelow: No row selected');
      return;
    }

    console.log(`Inserting row below index ${selectedRowIndex}`);
    const newRow = insertRowBelow(tableElement, selectedRowIndex);
    
    if (newRow) {
      console.log('Row inserted successfully, updating content');
      // Update the context with the new content
      if (editorRef && editorRef.current) {
        const updatedContent = editorRef.current.innerHTML;
        console.log('Updated content length:', updatedContent.length);
        actions.updateContinuousContent(updatedContent);
      } else {
        console.warn('No editor ref available to update content');
      }

      // Record operation for undo
      actions.recordOperation(
        { type: 'INSERT_ROW', payload: { element: tableElement, row: newRow, position: 'below', index: selectedRowIndex } },
        { type: 'DELETE_ROW', payload: { element: tableElement, index: selectedRowIndex + 1 } }
      );
      syncResizeOverlayPosition(tableElement);
    } else {
      console.error('Failed to insert row below');
    }
  };

  const handleInsertColumnLeft = () => {
    console.log('handleInsertColumnLeft called', { selectedColIndex, tableElement, hasEditorRef: !!editorRef });
    
    if (!tableElement) {
      console.warn('handleInsertColumnLeft: No table element');
      return;
    }

    if (selectedColIndex === null || selectedColIndex === undefined) {
      console.warn('handleInsertColumnLeft: No column selected');
      return;
    }

    console.log(`Inserting column left of index ${selectedColIndex}`);
    const success = insertColumnLeft(tableElement, selectedColIndex);
    
    if (success) {
      console.log('Column inserted successfully, updating content');
      // Update the context with the new content
      if (editorRef && editorRef.current) {
        const updatedContent = editorRef.current.innerHTML;
        console.log('Updated content length:', updatedContent.length);
        actions.updateContinuousContent(updatedContent);
      } else {
        console.warn('No editor ref available to update content');
      }

      // Record operation for undo
      actions.recordOperation(
        { type: 'INSERT_COLUMN', payload: { element: tableElement, position: 'left', index: selectedColIndex } },
        { type: 'DELETE_COLUMN', payload: { element: tableElement, index: selectedColIndex } }
      );
      syncResizeOverlayPosition(tableElement);
    } else {
      console.error('Failed to insert column left');
    }
  };

  const handleInsertColumnRight = () => {
    console.log('handleInsertColumnRight called', { selectedColIndex, tableElement, hasEditorRef: !!editorRef });
    
    if (!tableElement) {
      console.warn('handleInsertColumnRight: No table element');
      return;
    }

    if (selectedColIndex === null || selectedColIndex === undefined) {
      console.warn('handleInsertColumnRight: No column selected');
      return;
    }

    console.log(`Inserting column right of index ${selectedColIndex}`);
    const success = insertColumnRight(tableElement, selectedColIndex);
    
    if (success) {
      console.log('Column inserted successfully, updating content');
      // Update the context with the new content
      if (editorRef && editorRef.current) {
        const updatedContent = editorRef.current.innerHTML;
        console.log('Updated content length:', updatedContent.length);
        actions.updateContinuousContent(updatedContent);
      } else {
        console.warn('No editor ref available to update content');
      }

      // Record operation for undo
      actions.recordOperation(
        { type: 'INSERT_COLUMN', payload: { element: tableElement, position: 'right', index: selectedColIndex } },
        { type: 'DELETE_COLUMN', payload: { element: tableElement, index: selectedColIndex + 1 } }
      );
      syncResizeOverlayPosition(tableElement);
    } else {
      console.error('Failed to insert column right');
    }
  };

  const handleDeleteRow = () => {
    console.log('handleDeleteRow called', { selectedRowIndex, tableElement, hasEditorRef: !!editorRef });
    
    if (!tableElement) {
      console.warn('handleDeleteRow: No table element');
      return;
    }

    if (selectedRowIndex === null || selectedRowIndex === undefined) {
      console.warn('handleDeleteRow: No row selected');
      return;
    }

    console.log(`Deleting row at index ${selectedRowIndex}`);
    const success = deleteRow(tableElement, selectedRowIndex);
    
    if (success) {
      console.log('Row deleted successfully, updating content');
      // Update the context with the new content
      if (editorRef && editorRef.current) {
        const updatedContent = editorRef.current.innerHTML;
        console.log('Updated content length:', updatedContent.length);
        actions.updateContinuousContent(updatedContent);
      } else {
        console.warn('No editor ref available to update content');
      }

      // Record operation for undo
      actions.recordOperation(
        { type: 'DELETE_ROW', payload: { element: tableElement, index: selectedRowIndex } },
        { type: 'INSERT_ROW', payload: { element: tableElement, position: 'at', index: selectedRowIndex } }
      );
      syncResizeOverlayPosition(tableElement);
    } else {
      console.error('Failed to delete row');
    }
  };

  const handleDeleteColumn = () => {
    console.log('handleDeleteColumn called', { selectedColIndex, tableElement, hasEditorRef: !!editorRef });
    
    if (!tableElement) {
      console.warn('handleDeleteColumn: No table element');
      return;
    }

    if (selectedColIndex === null || selectedColIndex === undefined) {
      console.warn('handleDeleteColumn: No column selected');
      return;
    }

    console.log(`Deleting column at index ${selectedColIndex}`);
    const success = deleteColumn(tableElement, selectedColIndex);
    
    if (success) {
      console.log('Column deleted successfully, updating content');
      // Update the context with the new content
      if (editorRef && editorRef.current) {
        const updatedContent = editorRef.current.innerHTML;
        console.log('Updated content length:', updatedContent.length);
        actions.updateContinuousContent(updatedContent);
      } else {
        console.warn('No editor ref available to update content');
      }

      // Record operation for undo
      actions.recordOperation(
        { type: 'DELETE_COLUMN', payload: { element: tableElement, index: selectedColIndex } },
        { type: 'INSERT_COLUMN', payload: { element: tableElement, position: 'at', index: selectedColIndex } }
      );
      syncResizeOverlayPosition(tableElement);
    } else {
      console.error('Failed to delete column');
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

      {/* Divider - only show if row is selected */}
      {selectedRowIndex !== null && selectedRowIndex !== undefined && (
        <>
          <div style={{ width: '1px', height: '24px', background: '#ddd', margin: '0 4px' }} />

          {/* Insert Row Above button */}
          <button
            className="tooltip-button insert-row-above"
            onClick={handleInsertRowAbove}
            title="Insert Row Above"
            style={{
              ...buttonBaseStyle,
              background: '#28a745',
              color: '#fff'
            }}
            disabled={selectedRowIndex === null || selectedRowIndex === undefined}
          >
            <ArrowUp size={14} />
          </button>

          {/* Insert Row Below button */}
          <button
            className="tooltip-button insert-row-below"
            onClick={handleInsertRowBelow}
            title="Insert Row Below"
            style={{
              ...buttonBaseStyle,
              background: '#28a745',
              color: '#fff'
            }}
            disabled={selectedRowIndex === null || selectedRowIndex === undefined}
          >
            <ArrowDown size={14} />
          </button>

          {/* Delete Row button */}
          <button
            className="tooltip-button delete-row"
            onClick={handleDeleteRow}
            title="Delete Row"
            style={{
              ...buttonBaseStyle,
              background: '#dc3545',
              color: '#fff'
            }}
            disabled={selectedRowIndex === null || selectedRowIndex === undefined}
          >
            <Trash2 size={14} />
          </button>
        </>
      )}

      {/* Divider - only show if column is selected */}
      {selectedColIndex !== null && selectedColIndex !== undefined && (
        <>
          <div style={{ width: '1px', height: '24px', background: '#ddd', margin: '0 4px' }} />

          {/* Insert Column Left button */}
          <button
            className="tooltip-button insert-column-left"
            onClick={handleInsertColumnLeft}
            title="Insert Column Left"
            style={{
              ...buttonBaseStyle,
              background: '#0056b3',
              color: '#fff'
            }}
            disabled={selectedColIndex === null || selectedColIndex === undefined}
          >
            <ArrowLeft size={14} />
          </button>

          {/* Insert Column Right button */}
          <button
            className="tooltip-button insert-column-right"
            onClick={handleInsertColumnRight}
            title="Insert Column Right"
            style={{
              ...buttonBaseStyle,
              background: '#0056b3',
              color: '#fff'
            }}
            disabled={selectedColIndex === null || selectedColIndex === undefined}
          >
            <ArrowRight size={14} />
          </button>

          {/* Delete Column button */}
          <button
            className="tooltip-button delete-column"
            onClick={handleDeleteColumn}
            title="Delete Column"
            style={{
              ...buttonBaseStyle,
              background: '#dc3545',
              color: '#fff'
            }}
            disabled={selectedColIndex === null || selectedColIndex === undefined}
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