/**
 * Table Resize Utilities for HTML Editor
 * Provides functionality for resizing table columns, rows, and overall table size
 */

/**
 * Default table resize options
 */
export const DEFAULT_TABLE_RESIZE_OPTIONS = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
};

/**
 * Table resize handler types
 */
export const TABLE_RESIZE_HANDLERS = {
  COLUMN: 'column',
  ROW: 'row',
  TABLE_BOTTOM: 'table-bottom',
  TABLE_RIGHT: 'table-right'
};

/**
 * Check if an element is a table that can be resized
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} Whether the element is a resizable table
 */
export function isResizableTable(element) {
  if (!element) return false;
  return element.tagName === 'TABLE';
}

/**
 * Get table dimensions and structure
 * @param {HTMLTableElement} tableElement - Table element
 * @returns {Object} Table structure information
 */
export function getTableStructure(tableElement) {
  if (!isResizableTable(tableElement)) {
    return null;
  }

  const rect = tableElement.getBoundingClientRect();
  const rows = Array.from(tableElement.rows);
  const columns = rows.length > 0 ? rows[0].cells.length : 0;

  // Get column widths - first try colgroup, then fall back to measuring cells
  const columnWidths = [];
  const colgroup = tableElement.querySelector('colgroup');
  const cols = colgroup ? colgroup.querySelectorAll('col') : [];

  if (cols.length >= columns) {
    // Use colgroup widths if available and sufficient
    for (let i = 0; i < columns; i++) {
      const col = cols[i];
      const width = col.style.width ? parseInt(col.style.width, 10) : col.offsetWidth;
      columnWidths.push(width || 100); // Default width if not set
    }
  } else {
    // Fall back to measuring first row cells
    if (rows.length > 0) {
      const firstRow = rows[0];
      for (let i = 0; i < firstRow.cells.length; i++) {
        const cell = firstRow.cells[i];
        columnWidths.push(cell.offsetWidth);
      }
    }
  }

  // Get row heights
  const rowHeights = rows.map(row => {
    // Use explicit height if set, otherwise measure
    const explicitHeight = row.style.height ? parseInt(row.style.height, 10) : null;
    return explicitHeight || row.offsetHeight;
  });

  return {
    width: rect.width,
    height: rect.height,
    columns,
    rows: rows.length,
    columnWidths,
    rowHeights,
    rect
  };
}

/**
 * Calculate new dimensions for table resize operations
 * @param {Object} params - Resize parameters
 * @param {string} params.type - Type of resize (column, row, table)
 * @param {number} params.index - Index of column/row being resized
 * @param {number} params.delta - Change in size
 * @param {Object} params.currentStructure - Current table structure
 * @param {Object} params.options - Resize options
 * @returns {Object} New dimensions
 */
export function calculateTableResizeDimensions({
  type,
  index,
  delta,
  currentStructure,
  options = DEFAULT_TABLE_RESIZE_OPTIONS
}) {
  const result = {
    columnWidths: [...currentStructure.columnWidths],
    rowHeights: [...currentStructure.rowHeights],
    tableWidth: currentStructure.width,
    tableHeight: currentStructure.height
  };

  // Helper function to apply resize with bounds checking
  const applyResize = (array, arrayIndex, delta, min, max) => {
    if (arrayIndex >= 0 && arrayIndex < array.length) {
      array[arrayIndex] = Math.max(min, Math.min(max, array[arrayIndex] + delta));
    }
  };

  switch (type) {
    case TABLE_RESIZE_HANDLERS.COLUMN:
      applyResize(result.columnWidths, index, delta, options.minColumnWidth, options.maxColumnWidth);
      result.tableWidth = currentStructure.width;
      break;

    case TABLE_RESIZE_HANDLERS.ROW:
      applyResize(result.rowHeights, index, delta, options.minRowHeight, options.maxRowHeight);
      result.tableHeight = currentStructure.height;
      break;

    case TABLE_RESIZE_HANDLERS.TABLE_BOTTOM:
      applyResize(result.rowHeights, currentStructure.rows - 1, delta, options.minRowHeight, options.maxRowHeight);
      break;

    case TABLE_RESIZE_HANDLERS.TABLE_RIGHT:
      applyResize(result.columnWidths, currentStructure.columns - 1, delta, options.minColumnWidth, options.maxColumnWidth);
      break;
  }

  return result;
}

/**
 * Synchronize colgroup with actual table structure
 * @param {HTMLTableElement} tableElement - Table element
 */
export function synchronizeTableColgroup(tableElement) {
  if (!isResizableTable(tableElement)) return;

  const rows = Array.from(tableElement.rows);
  if (rows.length === 0) return;

  const columnCount = rows[0].cells.length;

  // Get or create colgroup
  let colgroup = tableElement.querySelector('colgroup');
  if (!colgroup) {
    colgroup = document.createElement('colgroup');
    tableElement.insertBefore(colgroup, tableElement.firstChild);
  }

  // Ensure colgroup has the right number of col elements
  const existingCols = colgroup.querySelectorAll('col');
  const currentColCount = existingCols.length;

  if (currentColCount < columnCount) {
    // Add missing col elements
    for (let i = currentColCount; i < columnCount; i++) {
      const col = document.createElement('col');
      colgroup.appendChild(col);
    }
  } else if (currentColCount > columnCount) {
    // Remove extra col elements
    for (let i = currentColCount - 1; i >= columnCount; i--) {
      colgroup.removeChild(existingCols[i]);
    }
  }
}

/**
 * Apply table dimensions to table element
 * @param {HTMLTableElement} tableElement - Table element
 * @param {Object} dimensions - New dimensions
 * @param {string} resizeType - Type of resize operation (optional)
 */
export function applyTableDimensions(tableElement, dimensions) {
  if (!isResizableTable(tableElement)) return;

  // First synchronize colgroup with table structure
  synchronizeTableColgroup(tableElement);

  const { columnWidths, rowHeights, tableWidth, tableHeight } = dimensions;

  // Calculate sums once
  const sumWidth = columnWidths ? columnWidths.reduce((sum, w) => sum + w, 0) : 0;
  const sumHeight = rowHeights ? rowHeights.reduce((sum, h) => sum + h, 0) : 0;

  // Apply table size
  if (tableWidth !== undefined) {
    tableElement.style.width = `${tableWidth}px`;
  } else if (sumWidth > 0) {
    tableElement.style.width = `${sumWidth}px`;
  }

  if (tableHeight !== undefined) {
    tableElement.style.height = `${tableHeight}px`;
  } else if (sumHeight > 0) {
    tableElement.style.height = `${sumHeight}px`;
  }

  // Apply column widths
  if (columnWidths && columnWidths.length > 0) {
    // Set table-layout to fixed to ensure colgroup widths are respected
    tableElement.style.tableLayout = 'fixed';

    const colgroup = tableElement.querySelector('colgroup');
    if (colgroup) {
      const cols = colgroup.querySelectorAll('col');
      cols.forEach((col, index) => {
        if (index < columnWidths.length) {
          col.style.width = `${columnWidths[index]}px`;
        }
      });
    }

    // Ensure table width is set to sum of column widths
    tableElement.style.width = `${sumWidth}px`;
  }

  // Apply row heights
  if (rowHeights && rowHeights.length > 0) {
    const rows = Array.from(tableElement.rows);
    rows.forEach((row, index) => {
      if (index < rowHeights.length) {
        row.style.height = `${rowHeights[index]}px`;
      }
    });

    // Ensure table height is set to sum of row heights
    tableElement.style.height = `${sumHeight}px`;
  }

  // Force a reflow to ensure dimensions are applied immediately
  tableElement.offsetHeight;
}

/**
 * Create resize overlay for a table
 * @param {HTMLTableElement} tableElement - Table element to resize
 * @param {Object} options - Resize options
 * @returns {HTMLElement} Resize overlay element
 */
export function createTableResizeOverlay(tableElement) {
  if (!isResizableTable(tableElement)) return null;

  // Ensure colgroup is synchronized before creating overlay
  synchronizeTableColgroup(tableElement);

  const structure = getTableStructure(tableElement);
  if (!structure) return null;

  // Create overlay container
  const overlay = document.createElement('div');
  overlay.className = 'table-resize-overlay';
  overlay.style.position = 'fixed';
  overlay.style.zIndex = '1000';
  overlay.style.pointerEvents = 'none';

  // Position overlay over the table
  const rect = tableElement.getBoundingClientRect();
  overlay.style.top = `${rect.top}px`;
  overlay.style.left = `${rect.left}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;

  // Create column resize handlers (one less than column count)
  for (let i = 0; i < structure.columns - 1; i++) {
    const handler = createColumnResizeHandler(i, structure, rect, tableElement);
    overlay.appendChild(handler);
  }

  // Create row resize handlers (one less than row count)
  for (let i = 0; i < structure.rows - 1; i++) {
    const handler = createRowResizeHandler(i, structure, rect, tableElement);
    overlay.appendChild(handler);
  }

  // Create table bottom resize handler
  const bottomHandler = createTableBottomHandler(structure, rect);
  overlay.appendChild(bottomHandler);

  // Create table right resize handler
  const rightHandler = createTableRightHandler(structure, rect);
  overlay.appendChild(rightHandler);

  return overlay;
}

/**
 * Create a resize handler with common properties
 * @param {string} type - Handler type (column, row, table-bottom, table-right)
 * @param {string} className - CSS class name
 * @param {number} primarySize - Width or height depending on type
 * @param {number} secondarySize - Height or width depending on type
 * @param {string} cursor - CSS cursor value
 * @returns {HTMLElement} Handler element
 */
function createResizeHandler(type, className, primarySize, secondarySize, cursor) {
  const handler = document.createElement('div');
  handler.className = className;
  handler.dataset.type = type;
  handler.style.position = 'absolute';
  handler.style.cursor = cursor;
  handler.style.pointerEvents = 'all';

  if (type === TABLE_RESIZE_HANDLERS.COLUMN || type === TABLE_RESIZE_HANDLERS.TABLE_RIGHT) {
    handler.style.width = '4px';
    handler.style.height = `${primarySize}px`;
  } else {
    handler.style.width = `${primarySize}px`;
    handler.style.height = '4px';
  }

  return handler;
}

/**
 * Create a column resize handler
 * @param {number} columnIndex - Index of the column
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @param {HTMLTableElement} tableElement - Table element
 * @returns {HTMLElement} Column resize handler
 */
function createColumnResizeHandler(columnIndex, structure, rect, tableElement) {
  const handler = createResizeHandler(
    TABLE_RESIZE_HANDLERS.COLUMN,
    'table-resize-handler table-column-resize-handler',
    rect.height,
    4,
    'col-resize'
  );
  handler.dataset.index = columnIndex;
  positionColumnHandler(handler, columnIndex, structure, rect, tableElement);
  return handler;
}

/**
 * Create a row resize handler
 * @param {number} rowIndex - Index of the row
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @param {HTMLTableElement} tableElement - Table element
 * @returns {HTMLElement} Row resize handler
 */
function createRowResizeHandler(rowIndex, structure, rect, tableElement) {
  const handler = createResizeHandler(
    TABLE_RESIZE_HANDLERS.ROW,
    'table-resize-handler table-row-resize-handler',
    rect.width,
    4,
    'row-resize'
  );
  handler.dataset.index = rowIndex;
  positionRowHandler(handler, rowIndex, structure, rect, tableElement);
  return handler;
}

/**
 * Create a table bottom resize handler
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @returns {HTMLElement} Bottom resize handler
 */
function createTableBottomHandler(structure, rect) {
  const handler = createResizeHandler(
    TABLE_RESIZE_HANDLERS.TABLE_BOTTOM,
    'table-resize-handler table-bottom-resize-handler',
    rect.width,
    4,
    'ns-resize'
  );
  positionBottomHandler(handler, structure, rect);
  return handler;
}

/**
 * Create a table right resize handler
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @returns {HTMLElement} Right resize handler
 */
function createTableRightHandler(structure, rect) {
  const handler = createResizeHandler(
    TABLE_RESIZE_HANDLERS.TABLE_RIGHT,
    'table-resize-handler table-right-resize-handler',
    rect.height,
    4,
    'ew-resize'
  );
  positionRightHandler(handler, structure, rect);
  return handler;
}

/**
 * Update table resize overlay position and size
 * @param {HTMLElement} overlay - Resize overlay
 * @param {HTMLTableElement} tableElement - Table element
 */
export function updateTableResizeOverlay(overlay, tableElement) {
  if (!overlay || !tableElement) return;

  // Ensure colgroup is synchronized
  synchronizeTableColgroup(tableElement);

  const structure = getTableStructure(tableElement);
  if (!structure) return;

  const rect = tableElement.getBoundingClientRect();

  overlay.style.top = `${rect.top}px`;
  overlay.style.left = `${rect.left}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;

  // Check if handler counts match current structure
  const columnHandlers = overlay.querySelectorAll('.table-column-resize-handler');
  const rowHandlers = overlay.querySelectorAll('.table-row-resize-handler');
  const bottomHandler = overlay.querySelector('.table-bottom-resize-handler');
  const rightHandler = overlay.querySelector('.table-right-resize-handler');

  const needsRecreate = columnHandlers.length !== structure.columns - 1 ||
                       rowHandlers.length !== structure.rows - 1 ||
                       !bottomHandler ||
                       !rightHandler;

  if (needsRecreate) {
    // Remove existing handlers
    overlay.innerHTML = '';

    // Recreate all handlers
    for (let i = 0; i < structure.columns - 1; i++) {
      const handler = createColumnResizeHandler(i, structure, rect, tableElement);
      overlay.appendChild(handler);
    }

    for (let i = 0; i < structure.rows - 1; i++) {
      const handler = createRowResizeHandler(i, structure, rect, tableElement);
      overlay.appendChild(handler);
    }

    const newBottomHandler = createTableBottomHandler(structure, rect);
    overlay.appendChild(newBottomHandler);

    const newRightHandler = createTableRightHandler(structure, rect);
    overlay.appendChild(newRightHandler);
  } else {
    // Just update positions
    columnHandlers.forEach((handler, index) => {
      positionColumnHandler(handler, index, structure, rect, tableElement);
    });

    rowHandlers.forEach((handler, index) => {
      positionRowHandler(handler, index, structure, rect, tableElement);
    });

    if (bottomHandler) {
      positionBottomHandler(bottomHandler, structure, rect);
    }

    if (rightHandler) {
      positionRightHandler(rightHandler, structure, rect);
    }
  }
}

/**
 * Remove table resize overlay
 * @param {HTMLElement} overlay - Resize overlay to remove
 */
export function removeTableResizeOverlay(overlay) {
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
  }
}

/**
 * Insert a new row above the specified row index
 * @param {HTMLTableElement} tableElement - Table element
 * @param {number} rowIndex - Index of the row to insert above
 * @returns {HTMLTableRowElement} The newly created row, or null if failed
 */
export function insertRowAbove(tableElement, rowIndex) {
  if (!isResizableTable(tableElement)) {
    console.warn('insertRowAbove: Invalid table element');
    return null;
  }

  if (rowIndex < 0 || rowIndex > tableElement.rows.length) {
    console.warn(`insertRowAbove: Invalid row index ${rowIndex}, table has ${tableElement.rows.length} rows`);
    return null;
  }

  const referenceRow = tableElement.rows[rowIndex];
  if (!referenceRow) {
    console.warn(`insertRowAbove: Could not find reference row at index ${rowIndex}`);
    return null;
  }

  // Create new row with cells matching the reference row
  const newRow = document.createElement('tr');
  const cellCount = referenceRow.cells.length;
  
  for (let i = 0; i < cellCount; i++) {
    const newCell = document.createElement('td');
    newCell.innerHTML = '&nbsp;';
    newRow.appendChild(newCell);
  }

  // Insert the new row before the reference row
  try {
    referenceRow.parentNode.insertBefore(newRow, referenceRow);
  } catch (error) {
    console.error('insertRowAbove: Failed to insert row', error);
    return null;
  }

  // Update table structure
  synchronizeTableColgroup(tableElement);
  const structure = getTableStructure(tableElement);
  if (structure) {
    applyTableDimensions(tableElement, {
      columnWidths: structure.columnWidths,
      rowHeights: structure.rowHeights
    });
  }

  return newRow;
}

/**
 * Insert a new row below the specified row index
 * @param {HTMLTableElement} tableElement - Table element
 * @param {number} rowIndex - Index of the row to insert below
 * @returns {HTMLTableRowElement} The newly created row, or null if failed
 */
export function insertRowBelow(tableElement, rowIndex) {
  if (!isResizableTable(tableElement)) {
    console.warn('insertRowBelow: Invalid table element');
    return null;
  }

  if (rowIndex < 0 || rowIndex >= tableElement.rows.length) {
    console.warn(`insertRowBelow: Invalid row index ${rowIndex}, table has ${tableElement.rows.length} rows`);
    return null;
  }

  const referenceRow = tableElement.rows[rowIndex];
  if (!referenceRow) {
    console.warn(`insertRowBelow: Could not find reference row at index ${rowIndex}`);
    return null;
  }

  // Create new row with cells matching the reference row
  const newRow = document.createElement('tr');
  const cellCount = referenceRow.cells.length;
  
  for (let i = 0; i < cellCount; i++) {
    const newCell = document.createElement('td');
    newCell.innerHTML = '&nbsp;';
    newRow.appendChild(newCell);
  }

  // Get the row after the reference row
  const nextRow = referenceRow.nextSibling;
  
  // Insert the new row after the reference row
  try {
    if (nextRow) {
      referenceRow.parentNode.insertBefore(newRow, nextRow);
    } else {
      // If there's no next row, append to parent
      referenceRow.parentNode.appendChild(newRow);
    }
  } catch (error) {
    console.error('insertRowBelow: Failed to insert row', error);
    return null;
  }

  // Update table structure
  synchronizeTableColgroup(tableElement);
  const structure = getTableStructure(tableElement);
  if (structure) {
    applyTableDimensions(tableElement, {
      columnWidths: structure.columnWidths,
      rowHeights: structure.rowHeights
    });
  }

  return newRow;
}

/**
 * Position a column resize handler
 * @param {HTMLElement} handler - Handler element
 * @param {number} columnIndex - Index of the column
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @param {HTMLTableElement} tableElement - Table element
 */
function positionColumnHandler(handler, columnIndex, structure, rect, tableElement) {
  // Get the actual position of the column border by measuring cells
  if (tableElement?.rows.length > 0 && tableElement.rows[0].cells.length > columnIndex) {
    const cellRect = tableElement.rows[0].cells[columnIndex].getBoundingClientRect();
    const tableRect = tableElement.getBoundingClientRect();
    handler.style.left = `${cellRect.right - tableRect.left - 2}px`;
    handler.style.height = `${rect.height}px`;
    return;
  }

  // Fallback to cumulative width calculation
  let left = 0;
  for (let i = 0; i <= columnIndex; i++) {
    left += structure.columnWidths[i];
  }
  handler.style.left = `${left - 2}px`;
  handler.style.height = `${rect.height}px`;
}

/**
 * Position a row resize handler
 * @param {HTMLElement} handler - Handler element
 * @param {number} rowIndex - Index of the row
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @param {HTMLTableElement} tableElement - Table element
 */
function positionRowHandler(handler, rowIndex, structure, rect, tableElement) {
  // Get the actual position of the row border by measuring cells
  if (tableElement?.rows.length > rowIndex && tableElement.rows[rowIndex].cells.length > 0) {
    const cellRect = tableElement.rows[rowIndex].cells[0].getBoundingClientRect();
    const tableRect = tableElement.getBoundingClientRect();
    handler.style.top = `${cellRect.bottom - tableRect.top - 2}px`;
    handler.style.width = `${rect.width}px`;
    return;
  }

  // Fallback to cumulative height calculation
  let top = 0;
  for (let i = 0; i <= rowIndex; i++) {
    top += structure.rowHeights[i];
  }
  handler.style.top = `${top - 2}px`;
  handler.style.width = `${rect.width}px`;
}

/**
 * Position the bottom resize handler
 * @param {HTMLElement} handler - Handler element
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 */
function positionBottomHandler(handler, structure, rect) {
  handler.style.bottom = '-2px';
  handler.style.left = '0px';
  handler.style.width = `${rect.width}px`;
}

/**
 * Position the right resize handler
 * @param {HTMLElement} handler - Handler element
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 */
function positionRightHandler(handler, structure, rect) {
  handler.style.right = '-2px';
  handler.style.top = '0px';
  handler.style.height = `${rect.height}px`;
}

/**
 * Insert a new column to the left of the specified column index
 * @param {HTMLTableElement} tableElement - Table element
 * @param {number} columnIndex - Index of the column to insert to the left of
 * @returns {boolean} Whether the operation was successful
 */
export function insertColumnLeft(tableElement, columnIndex) {
  if (!isResizableTable(tableElement)) {
    console.warn('insertColumnLeft: Invalid table element');
    return false;
  }

  if (columnIndex < 0) {
    console.warn(`insertColumnLeft: Invalid column index ${columnIndex}`);
    return false;
  }

  const rows = Array.from(tableElement.rows);
  if (rows.length === 0) {
    console.warn('insertColumnLeft: Table has no rows');
    return false;
  }

  // Check if column index is valid
  if (columnIndex > rows[0].cells.length) {
    console.warn(`insertColumnLeft: Column index ${columnIndex} out of bounds`);
    return false;
  }

  try {
    // Insert a cell in each row at the specified column index
    for (const row of rows) {
      const newCell = document.createElement('td');
      newCell.innerHTML = '&nbsp;';

      if (columnIndex < row.cells.length) {
        // Insert before the existing cell at this index
        row.insertBefore(newCell, row.cells[columnIndex]);
      } else {
        // Append if index is at the end
        row.appendChild(newCell);
      }
    }

    // Update colgroup if it exists
    synchronizeTableColgroup(tableElement);
    const structure = getTableStructure(tableElement);
    if (structure) {
      applyTableDimensions(tableElement, {
        columnWidths: structure.columnWidths,
        rowHeights: structure.rowHeights
      });
    }

    return true;
  } catch (error) {
    console.error('insertColumnLeft: Failed to insert column', error);
    return false;
  }
}

/**
 * Insert a new column to the right of the specified column index
 * @param {HTMLTableElement} tableElement - Table element
 * @param {number} columnIndex - Index of the column to insert to the right of
 * @returns {boolean} Whether the operation was successful
 */
export function insertColumnRight(tableElement, columnIndex) {
  if (!isResizableTable(tableElement)) {
    console.warn('insertColumnRight: Invalid table element');
    return false;
  }

  if (columnIndex < 0) {
    console.warn(`insertColumnRight: Invalid column index ${columnIndex}`);
    return false;
  }

  const rows = Array.from(tableElement.rows);
  if (rows.length === 0) {
    console.warn('insertColumnRight: Table has no rows');
    return false;
  }

  // Check if column index is valid
  if (columnIndex >= rows[0].cells.length) {
    console.warn(`insertColumnRight: Column index ${columnIndex} out of bounds`);
    return false;
  }

  try {
    // Insert a cell in each row after the specified column index
    for (const row of rows) {
      const newCell = document.createElement('td');
      newCell.innerHTML = '&nbsp;';

      // Get the cell after the current index
      const nextCell = row.cells[columnIndex + 1];
      if (nextCell) {
        // Insert before the next cell
        row.insertBefore(newCell, nextCell);
      } else {
        // Append if no next cell
        row.appendChild(newCell);
      }
    }

    // Update colgroup if it exists
    synchronizeTableColgroup(tableElement);
    const structure = getTableStructure(tableElement);
    if (structure) {
      applyTableDimensions(tableElement, {
        columnWidths: structure.columnWidths,
        rowHeights: structure.rowHeights
      });
    }

    return true;
  } catch (error) {
    console.error('insertColumnRight: Failed to insert column', error);
    return false;
  }
}

/**
 * Delete a row at the specified row index
 * @param {HTMLTableElement} tableElement - Table element
 * @param {number} rowIndex - Index of the row to delete
 * @returns {boolean} Whether the operation was successful
 */
export function deleteRow(tableElement, rowIndex) {
  if (!isResizableTable(tableElement)) {
    console.warn('deleteRow: Invalid table element');
    return false;
  }

  if (rowIndex < 0 || rowIndex >= tableElement.rows.length) {
    console.warn(`deleteRow: Invalid row index ${rowIndex}, table has ${tableElement.rows.length} rows`);
    return false;
  }

  // Don't allow deleting the last row
  if (tableElement.rows.length <= 1) {
    console.warn('deleteRow: Cannot delete the last row in the table');
    return false;
  }

  try {
    const row = tableElement.rows[rowIndex];
    row.parentNode.removeChild(row);

    // Update colgroup if it exists
    synchronizeTableColgroup(tableElement);
    const structure = getTableStructure(tableElement);
    if (structure) {
      applyTableDimensions(tableElement, {
        columnWidths: structure.columnWidths,
        rowHeights: structure.rowHeights
      });
    }

    return true;
  } catch (error) {
    console.error('deleteRow: Failed to delete row', error);
    return false;
  }
}

/**
 * Delete a column at the specified column index
 * @param {HTMLTableElement} tableElement - Table element
 * @param {number} columnIndex - Index of the column to delete
 * @returns {boolean} Whether the operation was successful
 */
export function deleteColumn(tableElement, columnIndex) {
  if (!isResizableTable(tableElement)) {
    console.warn('deleteColumn: Invalid table element');
    return false;
  }

  if (columnIndex < 0) {
    console.warn(`deleteColumn: Invalid column index ${columnIndex}`);
    return false;
  }

  const rows = Array.from(tableElement.rows);
  if (rows.length === 0) {
    console.warn('deleteColumn: Table has no rows');
    return false;
  }

  // Check if column index is valid
  if (columnIndex >= rows[0].cells.length) {
    console.warn(`deleteColumn: Column index ${columnIndex} out of bounds`);
    return false;
  }

  // Don't allow deleting if it's the last column
  if (rows[0].cells.length <= 1) {
    console.warn('deleteColumn: Cannot delete the last column in the table');
    return false;
  }

  try {
    // Delete the cell at the specified column index from each row
    for (const row of rows) {
      if (row.cells.length > columnIndex) {
        row.removeChild(row.cells[columnIndex]);
      }
    }

    // Update colgroup if it exists
    synchronizeTableColgroup(tableElement);
    const structure = getTableStructure(tableElement);
    if (structure) {
      applyTableDimensions(tableElement, {
        columnWidths: structure.columnWidths,
        rowHeights: structure.rowHeights
      });
    }

    return true;
  } catch (error) {
    console.error('deleteColumn: Failed to delete column', error);
    return false;
  }
}