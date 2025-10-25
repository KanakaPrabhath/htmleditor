import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDocumentActions } from '../../context/DocumentContext';

/**
 * TableCellSelection - Component for handling table cell selection with automatic row/column expansion
 * Features:
 * - Cell selection with mouse drag
 * - Auto-select entire row when >2 cells selected horizontally
 * - Auto-select entire column when 2 cells selected vertically
 * - Visual feedback for selections
 */
const TableCellSelection = ({
  editorRef,
  onCellSelectionChange
}) => {
  const [selectedCells, setSelectedCells] = useState(new Set());
  const [selectionMode, setSelectionMode] = useState(null); // 'cells', 'row', 'column'
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedColIndex, setSelectedColIndex] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startCell, setStartCell] = useState(null);
  const [currentTable, setCurrentTable] = useState(null);

  const actions = useDocumentActions();
  const selectionRef = useRef(null);

  // Clear all selections
  const clearSelection = useCallback(() => {
    setSelectedCells(new Set());
    setSelectionMode(null);
    setSelectedRowIndex(null);
    setSelectedColIndex(null);
    setStartCell(null);
    setCurrentTable(null);
    setIsSelecting(false);
    setHasDragged(false);

    // Remove visual selection classes
    document.querySelectorAll('.table-cell-selected, .table-row-selected, .table-col-selected').forEach(cell => {
      cell.classList.remove('table-cell-selected', 'table-row-selected', 'table-col-selected');
    });

    if (onCellSelectionChange) {
      onCellSelectionChange(null);
    }
  }, [onCellSelectionChange]);

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

  // Apply visual selection feedback
  const applyVisualSelection = useCallback((mode, rowIndex, colIndex, cells, table) => {
    // Clear previous selections
    document.querySelectorAll('.table-cell-selected, .table-row-selected, .table-col-selected').forEach(cell => {
      cell.classList.remove('table-cell-selected', 'table-row-selected', 'table-col-selected');
    });

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
  }, []);

  // Update selection based on current state
  const updateSelection = useCallback((newCells, table) => {
    const expansion = checkSelectionExpansion(newCells);

    setSelectedCells(newCells);
    setSelectionMode(expansion.mode);
    setSelectedRowIndex(expansion.rowIndex);
    setSelectedColIndex(expansion.colIndex);
    setCurrentTable(table);

    applyVisualSelection(expansion.mode, expansion.rowIndex, expansion.colIndex, newCells, table);

    if (onCellSelectionChange && expansion.mode) {
      onCellSelectionChange({
        mode: expansion.mode,
        cells: newCells,
        rowIndex: expansion.rowIndex,
        colIndex: expansion.colIndex,
        table
      });
    }
  }, [checkSelectionExpansion, applyVisualSelection, onCellSelectionChange]);

  // Handle mouse down on table cell
  const handleMouseDown = useCallback((event) => {
    const cell = event.target.closest('td, th');
    if (!cell) return;

    // Don't prevent default immediately - let single clicks work for editing
    // Only prevent default if we detect dragging

    const coords = getCellCoordinates(cell);
    if (!coords) return;

    setIsSelecting(true);
    setStartCell(cell);
    setCurrentTable(coords.table);
    setHasDragged(false);

    // Don't apply selection immediately - wait to see if user drags
  }, [getCellCoordinates]);

  // Handle mouse enter on table cell (for drag selection)
  const handleMouseEnter = useCallback((event) => {
    if (!isSelecting || !startCell) return;

    const cell = event.target.closest('td, th');
    if (!cell || !currentTable || !currentTable.contains(cell)) return;

    // Mark that we've started dragging
    setHasDragged(true);

    // Prevent default to avoid text selection during drag
    event.preventDefault();

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
  }, [isSelecting, getCellCoordinates]);

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
    if (cell && currentTable && currentTable.contains(cell)) return;

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
  }, [editorRef, clearSelection]);

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