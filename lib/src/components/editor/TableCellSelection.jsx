import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { clearClasses, clearTextSelection, suppressEvent, isWithin } from '../../lib/editor/dom-utils';

/**
 * TableCellSelection - Component for handling table cell selection with automatic row/column expansion
 * Features:
 * - Cell selection with mouse drag
 * - Auto-select entire row when >2 cells selected horizontally
 * - Auto-select entire column when 2 cells selected vertically
 * - Visual feedback for selections
 */

// Selection class constants
const SELECTION_CLASSES = '.table-cell-selected, .table-row-selected, .table-col-selected';

/**
 * Clear visual selection from all cells
 * Extracted as a helper to avoid duplicate code
 */
const clearVisualSelection = () => {
  clearClasses(SELECTION_CLASSES, ['table-cell-selected', 'table-row-selected', 'table-col-selected']);
};

const TableCellSelection = ({
  editorRef,
  onCellSelectionChange
}) => {
  // Selection state - consolidated into a ref since this is a headless component (renders null)
  // and these values don't affect rendering, only internal logic
  const selectionStateRef = useRef({
    selectedCells: new Set(),
    selectionMode: null,
    selectedRowIndex: null,
    selectedColIndex: null,
    currentTable: null,
    isSelecting: false,
    hasDragged: false,
    startCell: null
  });

  const [isSelecting, setIsSelecting] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startCell, setStartCell] = useState(null);
  const [currentTable, setCurrentTable] = useState(null);

  const lastSelectionRef = useRef(null); // Track last selection to avoid unnecessary callbacks

  /**
   * Reset all selection state
   */
  const resetSelectionState = useCallback(() => {
    selectionStateRef.current = {
      selectedCells: new Set(),
      selectionMode: null,
      selectedRowIndex: null,
      selectedColIndex: null,
      currentTable: null,
      isSelecting: false,
      hasDragged: false,
      startCell: null
    };
    setIsSelecting(false);
    setHasDragged(false);
    setStartCell(null);
    setCurrentTable(null);
  }, []);

  // Clear all selections
  const clearSelection = useCallback(() => {
    resetSelectionState();
    clearVisualSelection();

    // Only call callback if selection actually changed
    if (lastSelectionRef.current !== null) {
      lastSelectionRef.current = null;
      if (onCellSelectionChange) {
        onCellSelectionChange(null);
      }
    }
  }, [onCellSelectionChange, resetSelectionState]);

  // Get cell coordinates within table
  const getCellCoordinates = useCallback((cell) => {
    const row = cell.closest('tr');
    const table = cell.closest('table');

    if (!row || !table) return null;

    const rowIndex = Array.from(table.rows).indexOf(row);
    const cellIndex = Array.from(row.cells).indexOf(cell);

    return { rowIndex, cellIndex, table };
  }, []);

  // Check if selection should expand to row or column
  const checkSelectionExpansion = useCallback((cells) => {
    if (cells.size === 0) return { mode: null, rowIndex: null, colIndex: null };

    const cellArray = Array.from(cells);
    const firstCell = cellArray[0];
    const coords = getCellCoordinates(firstCell);

    if (!coords) return { mode: null, rowIndex: null, colIndex: null };

    const { table } = coords;

    // Check for horizontal selection (same row, multiple cells)
    const sameRowCells = cellArray.filter(cell => {
      const cellCoords = getCellCoordinates(cell);
      return cellCoords && cellCoords.table === table && cellCoords.rowIndex === coords.rowIndex;
    });

    if (sameRowCells.length >= 2) {
      // 2 or more cells in same row - select entire row
      return { mode: 'row', rowIndex: coords.rowIndex, colIndex: null };
    }

    // Check for vertical selection (same column, 2 or more cells)
    const sameColCells = cellArray.filter(cell => {
      const cellCoords = getCellCoordinates(cell);
      return cellCoords && cellCoords.table === table && cellCoords.cellIndex === coords.cellIndex;
    });

    if (sameColCells.length >= 2) {
      // 2 or more cells in same column - select entire column
      return { mode: 'column', rowIndex: null, colIndex: coords.cellIndex };
    }

    // Single cell - no selection (allow editing)
    return { mode: null, rowIndex: null, colIndex: null };
  }, [getCellCoordinates]);

  /**
   * Apply visual selection based on selection mode
   */
  const applyVisualSelection = useCallback((mode, rowIndex, colIndex, cells, table) => {
    clearVisualSelection();

    if (!table || !mode) return;

    if (mode === 'row' && rowIndex !== null) {
      // Select entire row
      const row = table.rows[rowIndex];
      if (row) {
        Array.from(row.cells).forEach(cell => {
          cell.classList.add('table-row-selected');
        });
      }
    } else if (mode === 'column' && colIndex !== null) {
      // Select entire column
      Array.from(table.rows).forEach(row => {
        const cell = row.cells[colIndex];
        if (cell) {
          cell.classList.add('table-col-selected');
        }
      });
    } else if (mode === 'cells') {
      // Select individual cells
      cells.forEach(cell => {
        cell.classList.add('table-cell-selected');
      });
    }

    // Clear any text selection when applying visual selection
    clearTextSelection();
  }, []);

  // Update selection based on current state
  const updateSelection = useCallback((newCells, table) => {
    const expansion = checkSelectionExpansion(newCells);

    // Update ref cache
    selectionStateRef.current.selectedCells = newCells;
    selectionStateRef.current.selectionMode = expansion.mode;
    selectionStateRef.current.selectedRowIndex = expansion.rowIndex;
    selectionStateRef.current.selectedColIndex = expansion.colIndex;
    selectionStateRef.current.currentTable = table;

    // Only update component state if needed for event listeners
    setCurrentTable(table);

    applyVisualSelection(expansion.mode, expansion.rowIndex, expansion.colIndex, newCells, table);

    // Only call callback if selection actually changed
    const newSelection = expansion.mode ? {
      mode: expansion.mode,
      cells: newCells,
      rowIndex: expansion.rowIndex,
      colIndex: expansion.colIndex,
      table
    } : null;

    const hasChanged = JSON.stringify(lastSelectionRef.current) !== JSON.stringify(newSelection);
    if (hasChanged) {
      lastSelectionRef.current = newSelection;
      if (onCellSelectionChange) {
        onCellSelectionChange(newSelection);
      }
    }
  }, [checkSelectionExpansion, applyVisualSelection, onCellSelectionChange]);

  // Handle mouse down on table cell
  const handleMouseDown = useCallback((event) => {
    const cell = event.target.closest('td, th');
    if (!cell) return;

    const coords = getCellCoordinates(cell);
    if (!coords) return;

    setIsSelecting(true);
    setStartCell(cell);
    setCurrentTable(coords.table);
    setHasDragged(false);
  }, [getCellCoordinates]);

  // Handle mouse enter on table cell (for drag selection)
  const handleMouseEnter = useCallback((event) => {
    if (!isSelecting || !startCell) return;

    const cell = event.target.closest('td, th');
    if (!cell || !currentTable || !isWithin(currentTable, cell)) return;

    // Mark that we've started dragging
    setHasDragged(true);

    // Prevent default to avoid text selection during drag
    suppressEvent(event);

    const startCoords = getCellCoordinates(startCell);
    const currentCoords = getCellCoordinates(cell);

    if (!startCoords || !currentCoords || startCoords.table !== currentCoords.table) return;

    // Create rectangular selection from start to current cell
    const minRow = Math.min(startCoords.rowIndex, currentCoords.rowIndex);
    const maxRow = Math.max(startCoords.rowIndex, currentCoords.rowIndex);
    const minCol = Math.min(startCoords.cellIndex, currentCoords.cellIndex);
    const maxCol = Math.max(startCoords.cellIndex, currentCoords.cellIndex);

    const newCells = new Set();

    for (let row = minRow; row <= maxRow; row++) {
      const tableRow = currentTable.rows[row];
      if (tableRow) {
        for (let col = minCol; col <= maxCol; col++) {
          const tableCell = tableRow.cells[col];
          if (tableCell) {
            newCells.add(tableCell);
          }
        }
      }
    }

    updateSelection(newCells, currentTable);
  }, [isSelecting, startCell, currentTable, getCellCoordinates, updateSelection]);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    // If dragging occurred, keep the selection
    // If no dragging occurred, it was a single click - don't apply any selection
    if (!hasDragged) {
      clearSelection();
    }

    setIsSelecting(false);
    setStartCell(null);
  }, [hasDragged, clearSelection]);

  // Handle click outside to clear selection
  const handleClickOutside = useCallback((event) => {
    const cell = event.target.closest('td, th');
    const table = event.target.closest('table');

    // If clicking on a cell in the same table, don't clear
    if (cell && currentTable && isWithin(currentTable, cell)) return;

    // If clicking on a different table, clear selection
    if (table && table !== currentTable) {
      clearSelection();
      return;
    }

    // If clicking outside any table, clear selection
    if (!table) {
      clearSelection();
    }
  }, [clearSelection, currentTable]);

  // Add event listeners
  useEffect(() => {
    if (!editorRef.current) return;

    const editor = editorRef.current;

    // Add cell selection event listeners
    const handleMouseDownCapture = (event) => {
      const cell = event.target.closest('td, th');
      if (cell) {
        handleMouseDown(event);
      }
    };

    const handleMouseEnterCapture = (event) => {
      const cell = event.target.closest('td, th');
      if (cell) {
        handleMouseEnter(event);
      }
    };

    editor.addEventListener('mousedown', handleMouseDownCapture, true);
    editor.addEventListener('mouseenter', handleMouseEnterCapture, true);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('click', handleClickOutside);

    return () => {
      editor.removeEventListener('mousedown', handleMouseDownCapture, true);
      editor.removeEventListener('mouseenter', handleMouseEnterCapture, true);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [editorRef, handleMouseDown, handleMouseEnter, handleMouseUp, handleClickOutside]);

  // Clear selection when table is deleted or changed
  useEffect(() => {
    if (!editorRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Check if our selected table was removed
          if (currentTable && !editorRef.current.contains(currentTable)) {
            clearSelection();
          }
        }
      });
    });

    observer.observe(editorRef.current, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [editorRef, clearSelection, currentTable]);

  // This component doesn't render anything visible - it just manages cell selection
  return null;
};

TableCellSelection.propTypes = {
  editorRef: PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object)
  }).isRequired,
  onCellSelectionChange: PropTypes.func
};

TableCellSelection.defaultProps = {
  onCellSelectionChange: undefined
};

export default TableCellSelection;