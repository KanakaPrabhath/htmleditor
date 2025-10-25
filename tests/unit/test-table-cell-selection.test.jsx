import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import TableCellSelection from '../../lib/src/components/editor/TableCellSelection';
import { DocumentProvider } from '../../lib/src/context/DocumentContext';

describe('TableCellSelection Component', () => {
  let mockOnSelectionChange;
  let container;
  let editorRef;

  beforeEach(() => {
    mockOnSelectionChange = vi.fn();
    container = document.createElement('div');
    document.body.appendChild(container);
    editorRef = { current: container };
  });

  afterEach(() => {
    cleanup();
    document.body.removeChild(container);
  });

  it('should render without crashing', () => {
    render(
      <DocumentProvider>
        <TableCellSelection 
          editorRef={editorRef}
          onCellSelectionChange={mockOnSelectionChange} 
        />
      </DocumentProvider>,
      { container }
    );
    expect(container).toBeDefined();
  });

  it('should handle cell selection and expansion', () => {
    // Create a mock table structure
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const row1 = document.createElement('tr');
    const row2 = document.createElement('tr');

    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');

    row1.appendChild(cell1);
    row1.appendChild(cell2);
    row2.appendChild(cell3);
    row2.appendChild(cell4);
    tbody.appendChild(row1);
    tbody.appendChild(row2);
    table.appendChild(tbody);
    container.appendChild(table);

    render(
      <DocumentProvider>
        <TableCellSelection 
          editorRef={editorRef}
          onCellSelectionChange={mockOnSelectionChange} 
        />
      </DocumentProvider>,
      { container }
    );

    // Simulate mouse down on first cell
    fireEvent.mouseDown(cell1, { button: 0 });

    // Simulate mouse enter on second cell (horizontal selection)
    fireEvent.mouseEnter(cell2);

    // Simulate mouse up
    fireEvent.mouseUp(cell2);

    // Check if selection change was called
    expect(mockOnSelectionChange).toHaveBeenCalled();
  });

  it('should apply visual selection classes', () => {
    // Create a mock table structure
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const row = document.createElement('tr');

    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    tbody.appendChild(row);
    table.appendChild(tbody);
    container.appendChild(table);

    render(
      <DocumentProvider>
        <TableCellSelection 
          editorRef={editorRef}
          onCellSelectionChange={mockOnSelectionChange} 
        />
      </DocumentProvider>,
      { container }
    );

    // Simulate selecting multiple cells horizontally (>2)
    fireEvent.mouseDown(cell1, { button: 0 });
    fireEvent.mouseEnter(cell2);
    fireEvent.mouseEnter(cell3);
    fireEvent.mouseUp(cell3);

    // Check if row selection class is applied
    expect(cell1.classList.contains('table-row-selected')).toBe(true);
    expect(cell2.classList.contains('table-row-selected')).toBe(true);
    expect(cell3.classList.contains('table-row-selected')).toBe(true);
  });
});