import React, { useCallback, useEffect, useRef, useState, useMemo, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useDocumentState, useDocumentActions } from '../../context/DocumentContext';
import { useFormatting, useContinuousReflow, useKeyboardShortcuts, useSelectionHandling } from '../../hooks';
import { canZoomIn, canZoomOut } from '../../lib/editor/zoom-utils';
import { getPageDimensions } from '../../lib/editor/page-sizes';
import { DEFAULT_IMAGE_RESIZE_OPTIONS } from '../../lib/editor/image-resize-utils';
import { deleteImage } from '../../lib/storage/index-db';
import { normalizeContent } from '../../lib/editor/content-normalize-utils';
import { getCursorPosition } from '../../lib/editor/cursor-scroll-utils';
import Sidebar from './Sidebar';
import EditorToolbar from './EditorToolbar';
import PageView from './PageView';
import PageManager from './PageManager';
import ImageResizeHandlers from './ImageResizeHandlers';
import ImageTooltipMenu from './ImageTooltipMenu';
import TableResizeHandlers from './TableResizeHandlers';
import TableTooltipMenu from './TableTooltipMenu';
import TableCellSelection from './TableCellSelection';
import './MultiPageEditor.css';

const INITIAL_BOUNDARY_DELAY = 50;
const BOUNDARY_UPDATE_DELAY = 50;
const NAVIGATION_DELAY = 50;
const SCROLL_DEBOUNCE = 100;
const NAVIGATION_LOCK_TIMEOUT = 300;

/**
 * HtmlEditor - Main WYSIWYG HTML Editor Component
 * 
 * Exposed methods via ref:
 * - getHTMLContent() - Returns the current HTML content as a string
 * - getPlainText() - Returns the plain text content (HTML stripped)
 * - setContent(html) - Sets the editor content programmatically
 * - setPageSize(size) - Sets the page size ('A4', 'Letter', 'Legal')
 * - setPageMargins(margins) - Sets the page margins ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom {top, bottom, left, right} in inches
 * - insertContent(html) - Inserts content at the current cursor position without replacing existing content
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.pageManagerComponent - Optional custom PageManager component from parent app
 * @param {Function} props.onNavigatePage - Optional callback when navigating to a page (pageIndex)
 * @param {Function} props.onAddPage - Optional callback when adding a page
 * @param {Function} props.onDeletePage - Optional callback when deleting a page (pageIndex)
 * @param {Function} props.onPageSizeChange - Optional callback when page size changes (newSize)
 * @param {Function} props.onPageMarginsChange - Optional callback when page margins change (newMargins)
 * @param {Function} props.onChange - Optional callback when content changes (htmlContent)
 * @param {boolean} props.showSidebar - Whether to show the sidebar (default: true)
 * @param {boolean} props.showToolbar - Whether to show the toolbar (default: true)
 * @param {boolean} props.showPageManager - Whether to show the PageManager component (default: true)
 * @param {React.Ref} ref - Forwarded ref to access editor methods
 */
const HtmlEditor = forwardRef(({
  pageManagerComponent = null,
  onNavigatePage,
  onAddPage,
  onDeletePage,
  onPageSizeChange: onPageSizeChangeCallback,
  onPageMarginsChange: onPageMarginsChangeCallback,
  onChange,
  showSidebar = true,
  showToolbar = true,
  showPageManager = true
}, ref) => {
  const documentState = useDocumentState();
  const actions = useDocumentActions();
  const { pageSize, pageMargins, continuousContent, pageBoundaries, activePage, zoomLevel, canUndo, canRedo } = documentState;

  const containerRef = useRef(null);
  const editorRef = useRef(null);

  const { currentFormat, formatText, updateCurrentFormatFromSelection } = useFormatting();
  const [imageSelected, setImageSelected] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [preserveAspectRatio, setPreserveAspectRatio] = useState(true);
  const [tableSelected, setTableSelected] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedColIndex, setSelectedColIndex] = useState(null);
  const {
    checkAndUpdateBoundaries,
    getCurrentPage,
    scrollToPage,
    updateBoundaries,
    triggerAutoReflow,
    removePageAndContent,
    removePageBreak,
    insertPageBreakAtBoundary
  } = useContinuousReflow(pageSize, editorRef, zoomLevel, pageMargins);

  const dimensions = useMemo(() => getPageDimensions(pageSize), [pageSize]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const addingPageRef = useRef(false);
  const isNavigatingRef = useRef(false);

  // Initialize editor content and sync programmatic updates
  const contentSetRef = useRef(false);
  const lastContentRef = useRef(continuousContent);

  const navigateToNewPage = useCallback(() => {
    addingPageRef.current = false;
    const newPageIndex = Math.max(0, pageBoundaries.length - 1);
    actions.setActivePage(newPageIndex);
    setTimeout(() => {
      scrollToPage(newPageIndex, containerRef);
    }, NAVIGATION_DELAY);
  }, [pageBoundaries.length, actions, scrollToPage]);

  // Initialize editor content on mount
  useEffect(() => {
    if (!editorRef.current || contentSetRef.current) return;

    editorRef.current.innerHTML = continuousContent;
    contentSetRef.current = true;
    lastContentRef.current = continuousContent;

    const timer = setTimeout(() => {
      updateBoundaries();
    }, INITIAL_BOUNDARY_DELAY);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array - only run once on mount

  // Sync programmatic content changes to DOM
  useEffect(() => {
    if (!editorRef.current || !contentSetRef.current) return;

    const currentDOMContent = editorRef.current.innerHTML;

    // Only update if DOM is out of sync (prevents user input loops)
    if (currentDOMContent !== continuousContent) {
      editorRef.current.innerHTML = continuousContent;

      const timer = setTimeout(() => {
        updateBoundaries();

        if (addingPageRef.current) {
          navigateToNewPage();
        }
      }, BOUNDARY_UPDATE_DELAY);

      lastContentRef.current = continuousContent;
      return () => clearTimeout(timer);
    }
  }, [continuousContent, updateBoundaries, navigateToNewPage]);

  // Notify parent app when content changes
  useEffect(() => {
    if (onChange && contentSetRef.current) {
      onChange(continuousContent);
    }
  }, [continuousContent, onChange]);

  const { restoreCursorPosition, hasActiveCursorSelection } = useSelectionHandling({
    updateCurrentFormatFromSelection,
    editorRef
  });

  // Helper function to update content and trigger boundary updates
  const updateContentAndBoundaries = useCallback((html) => {
    // Sync state only when the new content differs to avoid redundant updates
    if (html !== continuousContent) {
      actions.updateContinuousContent(html);
    }

    if (editorRef.current && editorRef.current.innerHTML !== html) {
      editorRef.current.innerHTML = html;
    }

    lastContentRef.current = html;

    // Update boundaries after a delay
    setTimeout(() => {
      updateBoundaries();
    }, BOUNDARY_UPDATE_DELAY);
  }, [continuousContent, actions, updateBoundaries]);

  // Helper function for inserting HTML content with cursor restoration
  const insertHtmlWithCursorRestore = useCallback((html) => {
    if (!editorRef.current || !html) return;

    // If no active selection, restore the last cursor position
    if (!hasActiveCursorSelection()) {
      restoreCursorPosition();
    }

    // Insert using execCommand for proper cursor handling
    document.execCommand('insertHTML', false, html);

    // Update content state with the new content
    const updatedContent = editorRef.current.innerHTML;
    actions.updateContinuousContent(updatedContent);
    lastContentRef.current = updatedContent;

    // Update boundaries and trigger reflow
    setTimeout(() => {
      updateBoundaries();
      triggerAutoReflow(200);
    }, BOUNDARY_UPDATE_DELAY);
  }, [hasActiveCursorSelection, restoreCursorPosition, actions, updateBoundaries, triggerAutoReflow]);

  // Exposed methods for parent component via ref
  const exposedMethods = useMemo(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => {
      // Return current DOM content if available (ensures we get the latest changes)
      if (editorRef.current) {
        return editorRef.current.innerHTML;
      }
      // Fallback to state if DOM not available
      return continuousContent;
    },
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => {
      // Get the most current content from DOM or state
      const htmlContent = editorRef.current ? editorRef.current.innerHTML : continuousContent;
      
      // Strip HTML tags and normalize whitespace, preserving Unicode characters
      return htmlContent
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
    },
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => {
      if (!editorRef.current) return null;
      return getCursorPosition(editorRef.current);
    },
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (html) => {
      const normalizedHtml = normalizeContent(html);
      updateContentAndBoundaries(normalizedHtml);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (size) => {
      actions.updatePageSize(size);
      // Recalculate boundaries with new page size (debounced in hook)
      updateBoundaries({ pageSize: size });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (margins) => {
      actions.updatePageMargins(margins);
      // Recalculate boundaries with new margins (debounced in hook)
      updateBoundaries({ pageMargins: margins });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (html) => {
      const normalizedHtml = normalizeContent(html);
      insertHtmlWithCursorRestore(normalizedHtml);
    }
  }), [continuousContent, actions, updateBoundaries, triggerAutoReflow, hasActiveCursorSelection, restoreCursorPosition]);

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => exposedMethods, [exposedMethods]);

  // Extract content update logic for reuse
  const updateContent = useCallback(() => {
    if (!editorRef.current) return;
    
    let html = editorRef.current.innerHTML;
    
    // Normalize paragraph structure to ensure proper <p> tags
    html = normalizeContent(html);
    
    // Update the DOM with normalized content if it changed
    if (html !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = html;
    }
    
    // Record the content change for undo/redo
    const previousContent = continuousContent;
    if (previousContent !== html) {
      // Create the operation to update content
      const updateOperation = {
        type: 'UPDATE_CONTINUOUS_CONTENT',
        payload: html
      };
      
      // Create the inverse operation to restore previous content
      const inverseOperation = {
        type: 'UPDATE_CONTINUOUS_CONTENT',
        payload: previousContent
      };
      
      // Record the operation
      actions.recordOperation(updateOperation, inverseOperation);
    }
    
    actions.updateContinuousContent(html);
    
    // Update page boundaries after content change (already debounced in hook)
    checkAndUpdateBoundaries();
    
    // Trigger automatic reflow with shorter delay for typing (200ms instead of default 500ms)
    triggerAutoReflow(200);
    
    // Update active page based on viewport scroll position
    const currentPage = getCurrentPage(containerRef);
    if (currentPage !== activePage) {
      actions.setActivePage(currentPage);
    }
  }, [actions, checkAndUpdateBoundaries, getCurrentPage, activePage, triggerAutoReflow, containerRef, editorRef, continuousContent]);

  const handleInput = useCallback((_event) => {
    updateContent();
  }, [updateContent]);

  const handlePageSizeChange = useCallback((newSize) => {
    actions.updatePageSize(newSize);
    // Recalculate boundaries with new page size (debounced in hook)
    updateBoundaries({ pageSize: newSize });
    
    // Call parent callback if provided
    if (onPageSizeChangeCallback) {
      onPageSizeChangeCallback(newSize);
    }
  }, [actions, updateBoundaries, onPageSizeChangeCallback]);

  const handlePageMarginsChange = useCallback((newMargins) => {
    actions.updatePageMargins(newMargins);
    // Recalculate boundaries with new margins (debounced in hook)
    updateBoundaries({ pageMargins: newMargins });
    
    // Call parent callback if provided
    if (onPageMarginsChangeCallback) {
      onPageMarginsChangeCallback(newMargins);
    }
  }, [actions, updateBoundaries, onPageMarginsChangeCallback]);

  const handleNavigatePage = useCallback((pageIndex) => {
    // Validate page index
    if (pageIndex < 0 || pageIndex >= pageBoundaries.length) {
      return;
    }
    
    // Set flag to prevent handleScroll from interfering during navigation
    isNavigatingRef.current = true;
    
    // Set active page immediately
    actions.setActivePage(pageIndex);
    
    // Scroll to the page
    scrollToPage(pageIndex, containerRef);
    
    // Clear the navigation flag after scroll completes
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, NAVIGATION_LOCK_TIMEOUT);
    
    // Call parent callback if provided
    if (onNavigatePage) {
      onNavigatePage(pageIndex);
    }
  }, [actions, scrollToPage, onNavigatePage, pageBoundaries.length]);

  const handleAddPage = useCallback(() => {
    // Calculate which page number we're adding (next page after current boundaries)
    const nextPageNumber = pageBoundaries.length + 1;
    
    // Use the smart insertion function to insert at the correct boundary
    const success = insertPageBreakAtBoundary(nextPageNumber);
    
    if (success) {
      // Set flag to indicate we're adding a page for navigation
      addingPageRef.current = true;
      
      // The insertPageBreakAtBoundary already updates content and boundaries
      // We just need to handle navigation after a delay
      setTimeout(() => {
        if (addingPageRef.current) {
          navigateToNewPage();
        }
      }, 100);
    }
    
    // Call parent callback if provided
    if (onAddPage) {
      onAddPage();
    }
  }, [pageBoundaries.length, insertPageBreakAtBoundary, actions, scrollToPage, onAddPage]);

  const handleAddPageBreak = useCallback(() => {
    // Insert page break at current cursor position
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      if (!editorRef?.current) return;
      
      // Count existing page breaks to determine the page number
      const existingBreaks = editorRef.current.querySelectorAll('page-break, [data-page-break="true"]');
      const pageNumber = existingBreaks.length + 2; // +2 because we're creating a break for the next page
      
      const pageBreakHTML = `<page-break data-page-break="true" contenteditable="false" data-page-number="${pageNumber}"></page-break><p><br></p>`;
      
      // Insert the page break
      document.execCommand('insertHTML', false, pageBreakHTML);
      
      // Update boundaries after a short delay and ensure PageManager updates
      setTimeout(() => {
        updateBoundaries();
        // Get current page based on scroll position and stay on it
        const currentPage = getCurrentPage(containerRef);
        actions.setActivePage(currentPage);
      }, 150);
    }
  }, [updateBoundaries, getCurrentPage, actions, containerRef]);

  const handleInsertImage = useCallback((imageHtml) => {
    insertHtmlWithCursorRestore(imageHtml);
  }, [insertHtmlWithCursorRestore]);

  const handleRemovePageBreak = useCallback((pageBreakElement) => {
    if (!pageBreakElement) return;
    
    // Use the removePageBreak function from the hook
    // This will remove the page break and trigger reflow to re-add breaks in correct positions
    const success = removePageBreak(pageBreakElement);
    
    if (success) {
      // Update active page based on current scroll position
      setTimeout(() => {
        const currentPage = getCurrentPage(containerRef);
        actions.setActivePage(currentPage);
      }, 200);
    }
  }, [removePageBreak, getCurrentPage, actions, containerRef]);

  const handleDeletePage = useCallback((pageIndex) => {
    if (pageBoundaries.length <= 1) {
      console.warn('Cannot delete the only page');
      return;
    }
    
    // Use the new removePageAndContent function from the hook
    // This will remove both the page break and all content within that page
    const success = removePageAndContent(pageIndex);
    
    if (success) {
      // Set active page to the first page after deletion
      actions.setActivePage(0);
      
      // Call parent callback if provided
      if (onDeletePage) {
        onDeletePage(pageIndex);
      }
    }
  }, [pageBoundaries.length, removePageAndContent, actions, onDeletePage]);

  // Action handlers object for zoom and undo/redo operations
  const actionHandlers = useMemo(() => ({
    handleZoomIn: () => actions.zoomIn(),
    handleZoomOut: () => actions.zoomOut(),
    handleZoomReset: () => actions.resetZoom(),
    handleUndo: () => actions.undo(),
    handleRedo: () => actions.redo()
  }), [actions]);

  // Extract individual handlers for use in components
  const { handleZoomIn, handleZoomOut, handleZoomReset, handleUndo, handleRedo } = actionHandlers;

  // Keyboard shortcuts for zoom, undo, redo
  useKeyboardShortcuts(
    { handleZoomIn, handleZoomOut, handleZoomReset, handleUndo, handleRedo },
    { editorRef, containerRef }
  );

  const handleScroll = useCallback(() => {
    // Early exit if refs not ready or navigating
    if (!containerRef.current || !editorRef.current || isNavigatingRef.current) {
      return;
    }

    // Clear existing timeout for debouncing
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      // Double-check navigation state after debounce
      if (isNavigatingRef.current) {
        scrollTimeoutRef.current = null;
        return;
      }
      
      const currentPage = getCurrentPage(containerRef);
      
      // Only update if page actually changed
      if (currentPage !== activePage && currentPage >= 0) {
        actions.setActivePage(currentPage);
      }
      
      scrollTimeoutRef.current = null;
    }, SCROLL_DEBOUNCE);
  }, [getCurrentPage, activePage, actions]);

  // Word count for sidebar - memoized to prevent expensive regex on every render
  const wordCount = useMemo(() => {
    if (!continuousContent) return 0;
    const text = continuousContent.replace(/<[^>]*>/g, ' ');
    // Use Unicode-aware word matching that supports various scripts
    const words = text.match(/\p{L}+/gu);
    return words ? words.length : 0;
  }, [continuousContent]);

  const totalPages = pageBoundaries.length || 1;

  // Image resize handlers callbacks
  const handleImageSelect = useCallback((imageElement) => {
    setImageSelected(true);
    setSelectedImage(imageElement);
  }, []);

  const handleImageDeselect = useCallback(() => {
    setImageSelected(false);
    setSelectedImage(null);
  }, []);

  const handleImageResize = useCallback((_, __) => {
    // Image resize completed - content will be updated by the ImageResizeHandlers component
    // We can add any additional handling here if needed
  }, []);

  // Table cell selection callback - memoized to prevent unnecessary re-renders
  const handleCellSelectionChange = useCallback((selection) => {
    if (selection && selection.mode === 'row') {
      // Row is selected
      setSelectedRowIndex(selection.rowIndex);
      setSelectedColIndex(null);
    } else if (selection && selection.mode === 'column') {
      // Column is selected
      setSelectedColIndex(selection.colIndex);
      setSelectedRowIndex(null);
    } else {
      // No row or column selected
      setSelectedRowIndex(null);
      setSelectedColIndex(null);
    }
  }, []);

  // Table resize handlers callbacks
  const handleTableSelect = useCallback((tableElement) => {
    setTableSelected(true);
    setSelectedTable(tableElement);
  }, []);

  const handleTableDeselect = useCallback(() => {
    setTableSelected(false);
    setSelectedTable(null);
  }, []);

  const handleTableResize = useCallback((_, __) => {
    // Table resize completed - content will be updated by the TableResizeHandlers component
    // We can add any additional handling here if needed
  }, []);

  // Cleanup scroll timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="multi-page-editor">
      {showToolbar && (
        <EditorToolbar
          currentFormat={{
            ...currentFormat,
            imageSelected
          }}
          onFormatText={formatText}
          onAddPageBreak={handleAddPageBreak}
          onInsertImage={handleInsertImage}
          canUndo={canUndo}
          canRedo={canRedo}
        />
      )}

      <div className="editor-container">
        {showSidebar && (
          <Sidebar
            editorView={null}
            isCollapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed((prev) => !prev)}
            wordCount={wordCount}
            pageCount={totalPages}
          />
        )}

        <div
          className="editor-viewport continuous-scroll"
          ref={containerRef}
          onScroll={handleScroll}
        >
          <PageView
            content={continuousContent}
            dimensions={dimensions}
            pageSize={pageSize}
            pageMargins={pageMargins}
            pageBoundaries={pageBoundaries}
            editorRef={editorRef}
            onInput={handleInput}
            onContentChange={updateContent}
            onClick={() => editorRef.current?.focus()}
            onRemovePageBreak={handleRemovePageBreak}
            zoomLevel={zoomLevel}
          />
        </div>

        {/* Image Resize Handlers - manages image selection and resizing */}
        <ImageResizeHandlers
          editorRef={editorRef}
          onImageSelect={handleImageSelect}
          onImageDeselect={handleImageDeselect}
          onImageResize={handleImageResize}
          resizeOptions={{
            ...DEFAULT_IMAGE_RESIZE_OPTIONS,
            preserveAspectRatio,
            aspectRatio: preserveAspectRatio
          }}
        />

        {/* Table Resize Handlers - manages table selection and resizing */}
        <TableResizeHandlers
          editorRef={editorRef}
          onTableSelect={handleTableSelect}
          onTableDeselect={handleTableDeselect}
          onTableResize={handleTableResize}
        />

        {/* Table Cell Selection - manages cell selection within tables */}
        <TableCellSelection
          editorRef={editorRef}
          onCellSelectionChange={handleCellSelectionChange}
        />

        {/* Image Tooltip Menu - shows when an image is selected */}
        {imageSelected && selectedImage && (
          <ImageTooltipMenu
            imageElement={selectedImage}
            initialPreserveAspectRatio={preserveAspectRatio}
            onAlignChange={(_alignment) => {
              // Handle alignment change if needed
            }}
            onAspectRatioToggle={(newPreserveRatio) => {
              setPreserveAspectRatio(newPreserveRatio);
            }}
            onDelete={() => {
              // Handle image deletion from IndexedDB and DOM
              if (selectedImage) {
                const imageKey = selectedImage.getAttribute('data-key');
                if (imageKey) {
                  // Delete from IndexedDB
                  deleteImage(imageKey).catch(error => {
                    console.error('Failed to delete image from IndexedDB:', error);
                  });
                }
                // Remove from DOM (handled by ImageTooltipMenu)
              }
            }}
            onClose={handleImageDeselect}
          />
        )}

        {/* Table Tooltip Menu - shows when a table is selected */}
        {tableSelected && selectedTable && (
          <TableTooltipMenu
            tableElement={selectedTable}
            onAlignChange={(_alignment) => {
              // Handle alignment change if needed
            }}
            onClose={handleTableDeselect}
            selectedRowIndex={selectedRowIndex}
            selectedColIndex={selectedColIndex}
            editorRef={editorRef}
          />
        )}

        {/* Render PageManager only if showPageManager is true */}
        {showPageManager && (
          <div className="page-manager-sidebar">
            {pageManagerComponent ? (
              React.cloneElement(pageManagerComponent, {
                onNavigate: handleNavigatePage,
                onAddPage: handleAddPage,
                onDeletePage: handleDeletePage,
                onPageSizeChange: handlePageSizeChange,
                onPageMarginsChange: handlePageMarginsChange,
                zoomLevel,
                canZoomIn: canZoomIn(zoomLevel),
                canZoomOut: canZoomOut(zoomLevel),
                onZoomIn: handleZoomIn,
                onZoomOut: handleZoomOut,
                onZoomReset: handleZoomReset
              })
            ) : (
              <PageManager
                pageBoundaries={pageBoundaries}
                activePage={activePage}
                pageSize={pageSize}
                pageMargins={pageMargins}
                zoomLevel={zoomLevel}
                canZoomIn={canZoomIn(zoomLevel)}
                canZoomOut={canZoomOut(zoomLevel)}
                onNavigate={handleNavigatePage}
                onAddPage={handleAddPage}
                onDeletePage={handleDeletePage}
                onPageSizeChange={handlePageSizeChange}
                onPageMarginsChange={handlePageMarginsChange}
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onZoomReset={handleZoomReset}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
});

HtmlEditor.displayName = 'HtmlEditor';

HtmlEditor.propTypes = {
  pageManagerComponent: PropTypes.element,
  onNavigatePage: PropTypes.func,
  onAddPage: PropTypes.func,
  onDeletePage: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onPageMarginsChange: PropTypes.func,
  onChange: PropTypes.func,
  showSidebar: PropTypes.bool,
  showToolbar: PropTypes.bool,
  showPageManager: PropTypes.bool
};

HtmlEditor.defaultProps = {
  pageManagerComponent: null,
  onNavigatePage: undefined,
  onAddPage: undefined,
  onDeletePage: undefined,
  onPageSizeChange: undefined,
  onPageMarginsChange: undefined,
  onChange: undefined,
  showSidebar: true,
  showToolbar: true,
  showPageManager: true
};

export default HtmlEditor;
