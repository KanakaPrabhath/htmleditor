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
export function applyTableDimensions(tableElement, dimensions, resizeType) {
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
export function createTableResizeOverlay(tableElement, options = DEFAULT_TABLE_RESIZE_OPTIONS) {
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
 * Create a column resize handler
 * @param {number} columnIndex - Index of the column
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @param {HTMLTableElement} tableElement - Table element
 * @returns {HTMLElement} Column resize handler
 */
function createColumnResizeHandler(columnIndex, structure, rect, tableElement) {
  const handler = document.createElement('div');
  handler.className = 'table-resize-handler table-column-resize-handler';
  handler.dataset.type = TABLE_RESIZE_HANDLERS.COLUMN;
  handler.dataset.index = columnIndex;
  handler.style.position = 'absolute';
  handler.style.width = '4px';
  handler.style.height = `${rect.height}px`;
  handler.style.cursor = 'col-resize';
  handler.style.pointerEvents = 'all';

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
  const handler = document.createElement('div');
  handler.className = 'table-resize-handler table-row-resize-handler';
  handler.dataset.type = TABLE_RESIZE_HANDLERS.ROW;
  handler.dataset.index = rowIndex;
  handler.style.position = 'absolute';
  handler.style.width = `${rect.width}px`;
  handler.style.height = '4px';
  handler.style.cursor = 'row-resize';
  handler.style.pointerEvents = 'all';

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
  const handler = document.createElement('div');
  handler.className = 'table-resize-handler table-bottom-resize-handler';
  handler.dataset.type = TABLE_RESIZE_HANDLERS.TABLE_BOTTOM;
  handler.style.position = 'absolute';
  handler.style.width = `${rect.width}px`;
  handler.style.height = '4px';
  handler.style.cursor = 'ns-resize';
  handler.style.pointerEvents = 'all';

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
  const handler = document.createElement('div');
  handler.className = 'table-resize-handler table-right-resize-handler';
  handler.dataset.type = TABLE_RESIZE_HANDLERS.TABLE_RIGHT;
  handler.style.position = 'absolute';
  handler.style.width = '4px';
  handler.style.height = `${rect.height}px`;
  handler.style.cursor = 'ew-resize';
  handler.style.pointerEvents = 'all';

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
 * Position a column resize handler
 * @param {HTMLElement} handler - Handler element
 * @param {number} columnIndex - Index of the column
 * @param {Object} structure - Table structure
 * @param {DOMRect} rect - Table bounding rect
 * @param {HTMLTableElement} tableElement - Table element
 */
function positionColumnHandler(handler, columnIndex, structure, rect, tableElement) {
  // Get the actual position of the column border by measuring cells
  if (tableElement && tableElement.rows.length > 0) {
    const firstRow = tableElement.rows[0];
    if (firstRow.cells.length > columnIndex) {
      const cell = firstRow.cells[columnIndex];
      const cellRect = cell.getBoundingClientRect();
      const tableRect = tableElement.getBoundingClientRect();

      // Position handler at the right border of the cell
      const left = cellRect.right - tableRect.left - 2; // Center the 4px handler on the border
      handler.style.left = `${left}px`;
      handler.style.height = `${rect.height}px`;
      return;
    }
  }

  // Fallback to cumulative width calculation
  let left = 0;
  for (let i = 0; i <= columnIndex; i++) {
    left += structure.columnWidths[i];
  }
  handler.style.left = `${left - 2}px`; // Center on the border
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
  if (tableElement && tableElement.rows.length > rowIndex) {
    const row = tableElement.rows[rowIndex];
    if (row.cells.length > 0) {
      const firstCell = row.cells[0];
      const cellRect = firstCell.getBoundingClientRect();
      const tableRect = tableElement.getBoundingClientRect();

      // Position handler at the bottom border of the row
      const top = cellRect.bottom - tableRect.top - 2; // Center the 4px handler on the border
      handler.style.top = `${top}px`;
      handler.style.width = `${rect.width}px`;
      return;
    }
  }

  // Fallback to cumulative height calculation
  let top = 0;
  for (let i = 0; i <= rowIndex; i++) {
    top += structure.rowHeights[i];
  }
  handler.style.top = `${top - 2}px`; // Center on the border
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