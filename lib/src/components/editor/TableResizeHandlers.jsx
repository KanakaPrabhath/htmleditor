import React, { useEffect, useRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';
import {
  isResizableTable,
  createTableResizeOverlay,
  removeTableResizeOverlay,
  updateTableResizeOverlay,
  calculateTableResizeDimensions,
  getTableStructure,
  applyTableDimensions,
  TABLE_RESIZE_HANDLERS,
  DEFAULT_TABLE_RESIZE_OPTIONS
} from '../../lib/editor/table-resize-utils';

/**
 * TableResizeHandlers - Component for handling table resize operations
 * Provides resize handlers for table columns, rows, and overall table size
 */
const TableResizeHandlers = ({
  editorRef,
  onTableResize,
  onTableSelect,
  onTableDeselect,
  resizeOptions = DEFAULT_TABLE_RESIZE_OPTIONS
}) => {
  const resizeOverlayRef = useRef(null);
  const resizeTableRef = useRef(null);
  const resizeStartRef = useRef(null);
  const resizeTypeRef = useRef(null);
  const resizeIndexRef = useRef(null);
  const resizeOptionsRef = useRef(resizeOptions);
  const isResizingRef = useRef(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const actions = useDocumentActions();

  // Update resize options when they change
  useEffect(() => {
    resizeOptionsRef.current = resizeOptions;
  }, [resizeOptions]);

  /**
   * Clear table selection
   */
  const clearTableSelection = useCallback(() => {
    if (resizeTableRef.current) {
      resizeTableRef.current.classList.remove('selected');
      resizeTableRef.current = null;
    }

    if (resizeOverlayRef.current) {
      removeTableResizeOverlay(resizeOverlayRef.current);
      resizeOverlayRef.current = null;
    }

    setSelectedTable(null);
    resizeStartRef.current = null;
    resizeTypeRef.current = null;
    resizeIndexRef.current = null;
    isResizingRef.current = false;

    // Notify parent
    if (onTableDeselect) {
      onTableDeselect();
    }
  }, [onTableDeselect]);

  /**
   * Start table resize operation
   */
  const handleResizeStart = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!resizeTableRef.current) return;

    const handler = event.currentTarget;
    const type = handler.dataset.type;
    const index = parseInt(handler.dataset.index, 10);

    const tableRect = resizeTableRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Store the original state for undo
    const structure = getTableStructure(resizeTableRef.current);
    resizeStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      structure: { ...structure }
    };

    resizeTypeRef.current = type;
    resizeIndexRef.current = index;
    isResizingRef.current = true;

    // Add resize class to prevent text selection
    document.body.classList.add('table-resize-in-progress');

    // Update cursor based on resize type
    const cursorMap = {
      [TABLE_RESIZE_HANDLERS.COLUMN]: 'col-resize',
      [TABLE_RESIZE_HANDLERS.ROW]: 'row-resize',
      [TABLE_RESIZE_HANDLERS.TABLE_BOTTOM]: 'ns-resize',
      [TABLE_RESIZE_HANDLERS.TABLE_RIGHT]: 'ew-resize'
    };
    document.body.style.cursor = cursorMap[type] || 'default';

    // Add global event listeners
    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
  }, []);

  /**
   * Create and attach resize overlay for a table
   */
  const createAndAttachOverlay = useCallback((tableElement) => {
    const overlay = createTableResizeOverlay(tableElement, resizeOptionsRef.current);
    if (overlay) {
      resizeOverlayRef.current = overlay;
      resizeTableRef.current = tableElement;

      // Add overlay to document body
      document.body.appendChild(overlay);

      // Add event listeners to handlers
      const handlers = overlay.querySelectorAll('.table-resize-handler');
      handlers.forEach(handler => {
        handler.addEventListener('mousedown', handleResizeStart);
      });
    }
    return overlay;
  }, [handleResizeStart]);

  /**
   * Handle table selection
   */
  const handleTableSelection = useCallback((tableElement) => {
    if (!isResizableTable(tableElement)) return;

    // Clear any existing resize overlay
    if (resizeOverlayRef.current) {
      removeTableResizeOverlay(resizeOverlayRef.current);
      resizeOverlayRef.current = null;
    }

    // Mark table as selected
    tableElement.classList.add('selected');

    // Create resize overlay
    const overlay = createAndAttachOverlay(tableElement);
    if (overlay) {
      setSelectedTable(tableElement);
      // Notify parent
      if (onTableSelect) {
        onTableSelect(tableElement);
      }
    }
  }, [onTableSelect, createAndAttachOverlay]);

  /**
   * Perform table resize operation
   */
  const handleResizeMove = useCallback((event) => {
    if (!isResizingRef.current || !resizeTableRef.current || !resizeStartRef.current || !resizeTypeRef.current) return;

    event.preventDefault();
    event.stopPropagation();

    const { x: startX, y: startY, structure: startStructure } = resizeStartRef.current;
    const type = resizeTypeRef.current;
    const index = resizeIndexRef.current;
    const currentX = event.clientX;
    const currentY = event.clientY;

    // Calculate delta based on resize type
    let delta = 0;
    switch (type) {
      case TABLE_RESIZE_HANDLERS.COLUMN:
        delta = currentX - startX;
        break;
      case TABLE_RESIZE_HANDLERS.ROW:
        delta = currentY - startY;
        break;
      case TABLE_RESIZE_HANDLERS.TABLE_BOTTOM:
        delta = currentY - startY;
        break;
      case TABLE_RESIZE_HANDLERS.TABLE_RIGHT:
        delta = currentX - startX;
        break;
    }

    // Calculate new dimensions
    const newDimensions = calculateTableResizeDimensions({
      type,
      index,
      delta,
      currentStructure: startStructure,
      options: resizeOptionsRef.current
    });

    // Apply new dimensions to the table
    applyTableDimensions(resizeTableRef.current, newDimensions, type);

    // Update resize overlay
    if (resizeOverlayRef.current) {
      updateTableResizeOverlay(resizeOverlayRef.current, resizeTableRef.current);
    }
  }, []);

  /**
   * End table resize operation
   */
  const handleResizeEnd = useCallback((event) => {
    if (!isResizingRef.current) return;

    event.preventDefault();
    event.stopPropagation();

    // Record the resize operation for undo before clearing refs
    if (resizeTableRef.current && resizeStartRef.current) {
      const beforeState = {
        structure: resizeStartRef.current.structure
      };
      const afterState = {
        structure: getTableStructure(resizeTableRef.current)
      };

      // Only record if dimensions actually changed
      const hasChanged =
        beforeState.structure.width !== afterState.structure.width ||
        beforeState.structure.height !== afterState.structure.height ||
        JSON.stringify(beforeState.structure.columnWidths) !== JSON.stringify(afterState.structure.columnWidths) ||
        JSON.stringify(beforeState.structure.rowHeights) !== JSON.stringify(afterState.structure.rowHeights);

      if (hasChanged) {
        actions.recordOperation(
          { type: 'TABLE_RESIZE', payload: { element: resizeTableRef.current, state: afterState } },
          { type: 'TABLE_RESIZE', payload: { element: resizeTableRef.current, state: beforeState } }
        );
      }
    }

    resizeStartRef.current = null;
    resizeTypeRef.current = null;
    resizeIndexRef.current = null;
    isResizingRef.current = false;

    // Remove global event listeners
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeEnd);

    // Remove resize classes
    document.body.classList.remove('table-resize-in-progress');
    document.body.style.cursor = '';

    // Update content in document context
    if (resizeTableRef.current) {
      // Trigger input event to update document state
      const inputEvent = new Event('input', { bubbles: true, cancelable: true });
      resizeTableRef.current.dispatchEvent(inputEvent);

      // Notify parent about resize
      if (onTableResize) {
        onTableResize(resizeTableRef.current, getTableStructure(resizeTableRef.current));
      }
    }
  }, [onTableResize, actions]);

  /**
   * Handle click on editor to select tables
   */
  const handleEditorClick = useCallback((event) => {
    // Clear selection if clicking outside a table
    if (resizeOverlayRef.current && !resizeOverlayRef.current.contains(event.target)) {
      clearTableSelection();
    }

    // Check if clicked on a table
    const target = event.target;
    const tableElement = target.closest('table');

    if (tableElement && isResizableTable(tableElement)) {
      // If already selected, don't reselect
      if (tableElement === resizeTableRef.current) {
        return;
      }

      // Select the new table
      handleTableSelection(tableElement);
    }
  }, [handleTableSelection, clearTableSelection]);

  /**
   * Handle keydown events (for deleting selected tables, etc.)
   */
  const handleKeyDown = useCallback((event) => {
    // Delete selected table with Delete or Backspace key
    if ((event.key === 'Delete' || event.key === 'Backspace') &&
        resizeTableRef.current &&
        !isResizingRef.current) {

      // Prevent default behavior
      event.preventDefault();

      // Remove the table
      const tableToRemove = resizeTableRef.current;
      if (tableToRemove.parentNode) {
        tableToRemove.parentNode.removeChild(tableToRemove);

        // Clear selection
        clearTableSelection();

        // Trigger input event to update document state
        const inputEvent = new Event('input', { bubbles: true, cancelable: true });
        editorRef.current.dispatchEvent(inputEvent);
      }
    }

    // Escape key to clear selection
    if (event.key === 'Escape' && resizeTableRef.current) {
      clearTableSelection();
    }
  }, [editorRef, clearTableSelection]);

  /**
   * Handle scroll events to update overlay position
   */
  const handleScroll = useCallback(() => {
    if (resizeOverlayRef.current && resizeTableRef.current) {
      updateTableResizeOverlay(resizeOverlayRef.current, resizeTableRef.current);
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
      if (isResizingRef.current) {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
        document.body.classList.remove('table-resize-in-progress');
        document.body.style.cursor = '';
      }

      // Remove overlay
      if (resizeOverlayRef.current) {
        removeTableResizeOverlay(resizeOverlayRef.current);
      }
    };
  }, [editorRef, handleEditorClick, handleKeyDown, handleScroll, handleResizeMove, handleResizeEnd]);

  // Add a mutation observer to detect when tables are added/removed
  useEffect(() => {
    if (!editorRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type !== 'childList') return;

        // Handle removed tables
        mutation.removedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE && isResizableTable(node) && node === selectedTable) {
            clearTableSelection();
          }
        });

        // Handle added tables - auto-select the first one
        mutation.addedNodes.forEach(node => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;

          // Check if node itself is a table
          if (isResizableTable(node)) {
            setTimeout(() => handleTableSelection(node), 50);
            return;
          }

          // Check if node contains tables
          const tables = node.querySelectorAll?.('table') || [];
          if (tables.length > 0) {
            setTimeout(() => handleTableSelection(tables[0]), 50);
          }
        });
      });
    });

    observer.observe(editorRef.current, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [editorRef, clearTableSelection, handleTableSelection]);

  // Add a mutation observer to detect changes in the selected table structure
  useEffect(() => {
    if (!selectedTable) return;

    const tableObserver = new MutationObserver((mutations) => {
      const structureChanged = mutations.some((mutation) => {
        if (mutation.type === 'childList') {
          // Check for added/removed table rows
          const hasRowChanges = [...mutation.addedNodes, ...mutation.removedNodes].some(node =>
            node.nodeType === Node.ELEMENT_NODE && node.tagName === 'TR'
          );
          if (hasRowChanges) return true;
        } else if (mutation.type === 'attributes' && ['colspan', 'rowspan'].includes(mutation.attributeName)) {
          return true;
        }
        return false;
      });

      // If table structure changed, update the resize overlay
      if (structureChanged && resizeOverlayRef.current && resizeTableRef.current) {
        // Remove the old overlay
        removeTableResizeOverlay(resizeOverlayRef.current);
        resizeOverlayRef.current = null;

        // Create a new overlay with the updated structure
        createAndAttachOverlay(resizeTableRef.current);
      }
    });

    // Observe the selected table for structural changes
    tableObserver.observe(selectedTable, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['colspan', 'rowspan']
    });

    return () => tableObserver.disconnect();
  }, [selectedTable, createAndAttachOverlay]); // Re-run when selected table changes

  // This component doesn't render anything visible - it just manages the resize functionality
  return null;
};

TableResizeHandlers.propTypes = {
  editorRef: PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object)
  }).isRequired,
  onTableResize: PropTypes.func,
  onTableSelect: PropTypes.func,
  onTableDeselect: PropTypes.func,
  resizeOptions: PropTypes.shape({
    minColumnWidth: PropTypes.number,
    minRowHeight: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    maxRowHeight: PropTypes.number,
    tableMinWidth: PropTypes.number,
    tableMinHeight: PropTypes.number,
    tableMaxWidth: PropTypes.number,
    tableMaxHeight: PropTypes.number
  })
};

TableResizeHandlers.defaultProps = {
  onTableResize: undefined,
  onTableSelect: undefined,
  onTableDeselect: undefined,
  resizeOptions: DEFAULT_TABLE_RESIZE_OPTIONS
};

export default TableResizeHandlers;