import { describe, it, expect } from 'vitest';
import {
  isResizableTable,
  getTableStructure,
  calculateTableResizeDimensions,
  applyTableDimensions,
  synchronizeTableColgroup,
  createTableResizeOverlay,
  updateTableResizeOverlay,
  TABLE_RESIZE_HANDLERS,
  DEFAULT_TABLE_RESIZE_OPTIONS
} from '../../lib/src/lib/editor/table-resize-utils';

describe('Table Resize Utils', () => {
  describe('isResizableTable', () => {
    it('should return true for table elements', () => {
      const table = document.createElement('table');
      expect(isResizableTable(table)).toBe(true);
    });

    it('should return false for non-table elements', () => {
      const div = document.createElement('div');
      expect(isResizableTable(div)).toBe(false);
    });

    it('should return false for null or undefined', () => {
      expect(isResizableTable(null)).toBe(false);
      expect(isResizableTable(undefined)).toBe(false);
    });
  });

  describe('getTableStructure', () => {
    it('should return null for non-table elements', () => {
      const div = document.createElement('div');
      expect(getTableStructure(div)).toBe(null);
    });

    it('should return table structure for valid table', () => {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      `;

      // Mock getBoundingClientRect
      table.getBoundingClientRect = () => ({
        width: 400,
        height: 200,
        top: 0,
        left: 0,
        right: 400,
        bottom: 200
      });

      // Mock offsetWidth and offsetHeight for table rows and cells
      Object.defineProperty(table, 'offsetWidth', { value: 400 });
      Object.defineProperty(table, 'offsetHeight', { value: 200 });

      const rows = table.rows;
      for (let i = 0; i < rows.length; i++) {
        Object.defineProperty(rows[i], 'offsetHeight', { value: 100 });
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
          Object.defineProperty(cells[j], 'offsetWidth', { value: 200 });
        }
      }

      const structure = getTableStructure(table);
      expect(structure).toEqual({
        width: 400,
        height: 200,
        columns: 2,
        rows: 2,
        columnWidths: [200, 200], // Assuming equal width cells
        rowHeights: [100, 100], // Assuming equal height rows
        rect: expect.any(Object)
      });
    });
  });

  describe('calculateTableResizeDimensions', () => {
    const mockStructure = {
      width: 400,
      height: 200,
      columns: 2,
      rows: 2,
      columnWidths: [200, 200],
      rowHeights: [100, 100],
      rect: { width: 400, height: 200 }
    };

    it('should resize column width', () => {
      const result = calculateTableResizeDimensions({
        type: TABLE_RESIZE_HANDLERS.COLUMN,
        index: 0,
        delta: 50,
        currentStructure: mockStructure,
        options: DEFAULT_TABLE_RESIZE_OPTIONS
      });

      expect(result.columnWidths[0]).toBe(250);
      expect(result.columnWidths[1]).toBe(200);
      expect(result.tableWidth).toBe(400);
      expect(result.tableHeight).toBe(200);
    });

    it('should resize row height', () => {
      const result = calculateTableResizeDimensions({
        type: TABLE_RESIZE_HANDLERS.ROW,
        index: 1,
        delta: 30,
        currentStructure: mockStructure,
        options: DEFAULT_TABLE_RESIZE_OPTIONS
      });

      expect(result.rowHeights[0]).toBe(100);
      expect(result.rowHeights[1]).toBe(130);
      expect(result.tableWidth).toBe(400);
      expect(result.tableHeight).toBe(200);
    });

    it('should resize last row height only with bottom handler and change table height', () => {
      const result = calculateTableResizeDimensions({
        type: TABLE_RESIZE_HANDLERS.TABLE_BOTTOM,
        index: 0,
        delta: 75,
        currentStructure: mockStructure,
        options: DEFAULT_TABLE_RESIZE_OPTIONS
      });

      expect(result.tableWidth).toBe(400); // Width should remain unchanged
      expect(result.tableHeight).toBe(200); // Table height in result remains unchanged
      expect(result.columnWidths).toEqual([200, 200]); // Column widths unchanged
      expect(result.rowHeights).toEqual([100, 175]); // Last row height should increase by delta
    });

    it('should resize last column width only with right handler', () => {
      const result = calculateTableResizeDimensions({
        type: TABLE_RESIZE_HANDLERS.TABLE_RIGHT,
        index: 0,
        delta: 50,
        currentStructure: mockStructure,
        options: DEFAULT_TABLE_RESIZE_OPTIONS
      });

      expect(result.tableWidth).toBe(400); // Table width should remain unchanged
      expect(result.tableHeight).toBe(200); // Table height should remain unchanged
      expect(result.columnWidths).toEqual([200, 250]); // Last column width should increase by delta
      expect(result.rowHeights).toEqual([100, 100]); // Row heights unchanged
    });

    it('should respect minimum dimensions', () => {
      const result = calculateTableResizeDimensions({
        type: TABLE_RESIZE_HANDLERS.COLUMN,
        index: 0,
        delta: -300, // Would make width negative
        currentStructure: mockStructure,
        options: DEFAULT_TABLE_RESIZE_OPTIONS
      });

      expect(result.columnWidths[0]).toBe(10); // Updated minimum column width
    });

    it('should respect maximum dimensions', () => {
      const result = calculateTableResizeDimensions({
        type: TABLE_RESIZE_HANDLERS.COLUMN,
        index: 0,
        delta: 1000, // Would exceed max
        currentStructure: mockStructure,
        options: DEFAULT_TABLE_RESIZE_OPTIONS
      });

      expect(result.columnWidths[0]).toBe(DEFAULT_TABLE_RESIZE_OPTIONS.maxColumnWidth);
    });
  });

  describe('applyTableDimensions', () => {
    it('should apply dimensions to table element', () => {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      `;

      const dimensions = {
        columnWidths: [150, 250],
        rowHeights: [80, 120],
        tableWidth: 400,
        tableHeight: 200
      };

      applyTableDimensions(table, dimensions);

      expect(table.style.width).toBe('400px'); // Width set to sum of columnWidths
      expect(table.style.height).toBe('200px'); // Height set to sum of rowHeights
      expect(table.style.tableLayout).toBe('fixed'); // Should set table-layout to fixed for column widths

      // Check colgroup was created
      const colgroup = table.querySelector('colgroup');
      expect(colgroup).toBeTruthy();
      expect(colgroup.children.length).toBe(2);

      // Check row heights
      const rows = table.rows;
      expect(rows[0].style.height).toBe('80px');
      expect(rows[1].style.height).toBe('120px');
    });

    it('should not apply dimensions to non-table elements', () => {
      const div = document.createElement('div');
      const dimensions = { tableWidth: 400, tableHeight: 200 };

      // Should not throw error
      expect(() => applyTableDimensions(div, dimensions)).not.toThrow();
    });

    it('should set table height for TABLE_BOTTOM resize type', () => {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      `;

      const dimensions = {
        columnWidths: [150, 250],
        rowHeights: [80, 120],
        tableWidth: 400,
        tableHeight: 200
      };

      applyTableDimensions(table, dimensions, TABLE_RESIZE_HANDLERS.TABLE_BOTTOM);

      expect(table.style.width).toBe('400px'); // Width set to tableWidth
      expect(table.style.height).toBe('200px'); // Height set to sum of rowHeights

      // Check row heights are still applied
      const rows = table.rows;
      expect(rows[0].style.height).toBe('80px');
      expect(rows[1].style.height).toBe('120px');
    });

    it('should set table width for TABLE_RIGHT resize type', () => {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      `;

      const dimensions = {
        columnWidths: [150, 250],
        rowHeights: [80, 120],
        tableWidth: 400,
        tableHeight: 200
      };

      applyTableDimensions(table, dimensions, TABLE_RESIZE_HANDLERS.TABLE_RIGHT);

      expect(table.style.width).toBe('400px'); // Width set to sum of columnWidths
      expect(table.style.height).toBe('200px'); // Height set to sum of rowHeights
      expect(table.style.tableLayout).toBe('fixed'); // Should set table-layout to fixed for column widths

      // Check column widths are still applied
      const colgroup = table.querySelector('colgroup');
      expect(colgroup).toBeTruthy();
      const cols = colgroup.children;
      expect(cols[0].style.width).toBe('150px');
      expect(cols[1].style.width).toBe('250px');
    });
  });

  describe('createTableResizeOverlay', () => {
    it('should create overlay with all handler types', () => {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      `;

      // Mock getBoundingClientRect
      table.getBoundingClientRect = () => ({
        width: 400,
        height: 200,
        top: 0,
        left: 0,
        right: 400,
        bottom: 200
      });

      const overlay = createTableResizeOverlay(table);
      expect(overlay).toBeTruthy();

      // Check for all handler types
      const columnHandlers = overlay.querySelectorAll('.table-column-resize-handler');
      const rowHandlers = overlay.querySelectorAll('.table-row-resize-handler');
      const bottomHandler = overlay.querySelector('.table-bottom-resize-handler');
      const rightHandler = overlay.querySelector('.table-right-resize-handler');

      expect(columnHandlers.length).toBe(1); // 2 columns - 1 = 1 handler
      expect(rowHandlers.length).toBe(1); // 2 rows - 1 = 1 handler
      expect(bottomHandler).toBeTruthy();
      expect(rightHandler).toBeTruthy();

      // Check bottom handler properties
      expect(bottomHandler.dataset.type).toBe(TABLE_RESIZE_HANDLERS.TABLE_BOTTOM);
      expect(bottomHandler.style.cursor).toBe('ns-resize');

      // Check right handler properties
      expect(rightHandler.dataset.type).toBe(TABLE_RESIZE_HANDLERS.TABLE_RIGHT);
      expect(rightHandler.style.cursor).toBe('ew-resize');
    });
  });

  describe('Table structure changes', () => {
    it('should synchronize colgroup when table structure changes', () => {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      `;

      // Initially no colgroup
      expect(table.querySelector('colgroup')).toBeNull();

      // Synchronize colgroup
      synchronizeTableColgroup(table);

      const colgroup = table.querySelector('colgroup');
      expect(colgroup).toBeTruthy();
      expect(colgroup.children.length).toBe(2);

      // Add a column by modifying existing rows
      const rows = table.rows;
      for (let i = 0; i < rows.length; i++) {
        const newCell = document.createElement('td');
        newCell.textContent = `Cell ${i * 3 + 3}`;
        rows[i].appendChild(newCell);
      }

      // Synchronize again
      synchronizeTableColgroup(table);

      expect(colgroup.children.length).toBe(3);
    });

    it('should handle table structure changes in resize overlay', () => {
      const table = document.createElement('table');
      table.innerHTML = `
        <tr><td>Cell 1</td><td>Cell 2</td></tr>
        <tr><td>Cell 3</td><td>Cell 4</td></tr>
      `;

      // Mock getBoundingClientRect
      table.getBoundingClientRect = () => ({
        width: 400,
        height: 200,
        top: 0,
        left: 0,
        right: 400,
        bottom: 200
      });

      // Create initial overlay
      const overlay1 = createTableResizeOverlay(table);
      expect(overlay1).toBeTruthy();

      // Count initial handlers
      const initialColumnHandlers = overlay1.querySelectorAll('.table-column-resize-handler');
      const initialRowHandlers = overlay1.querySelectorAll('.table-row-resize-handler');
      expect(initialColumnHandlers.length).toBe(1); // 2 columns - 1 = 1 handler
      expect(initialRowHandlers.length).toBe(1); // 2 rows - 1 = 1 handler

      // Add a row to the table
      const newRow = document.createElement('tr');
      newRow.innerHTML = '<td>Cell 5</td><td>Cell 6</td>';
      table.appendChild(newRow);

      // Update overlay
      updateTableResizeOverlay(overlay1, table);

      // Check that handlers were recreated
      const updatedColumnHandlers = overlay1.querySelectorAll('.table-column-resize-handler');
      const updatedRowHandlers = overlay1.querySelectorAll('.table-row-resize-handler');
      expect(updatedColumnHandlers.length).toBe(1); // Still 2 columns
      expect(updatedRowHandlers.length).toBe(2); // Now 3 rows - 1 = 2 handlers
    });
  });
});