import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActivePage,
  updatePageSize,
  updateContinuousContent,
  addPageBreak,
  removePageBreak
} from '../../store/slices/documentSlice';
import { useFormatting, useContinuousReflow } from '../../hooks';
import Sidebar from './Sidebar';
import EditorToolbar from './EditorToolbar';
import ContinuousPageView from './ContinuousPageView';
import PageManager from './PageManager';
import './MultiPageEditor.css';
const PAGE_DIMENSIONS = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};

/**
 * ContentEditableEditor - Main WYSIWYG HTML Editor Component
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.pageManagerComponent - Optional custom PageManager component from parent app
 * @param {Function} props.onNavigatePage - Optional callback when navigating to a page (pageIndex)
 * @param {Function} props.onAddPage - Optional callback when adding a page
 * @param {Function} props.onDeletePage - Optional callback when deleting a page (pageIndex)
 * @param {Function} props.onPageSizeChange - Optional callback when page size changes (newSize)
 * @param {boolean} props.showSidebar - Whether to show the sidebar (default: true)
 * @param {boolean} props.showToolbar - Whether to show the toolbar (default: true)
 * @param {boolean} props.showPageManager - Whether to show the PageManager component (default: true)
 */
const ContentEditableEditor = ({
  pageManagerComponent = null,
  onNavigatePage,
  onAddPage,
  onDeletePage,
  onPageSizeChange: onPageSizeChangeCallback,
  showSidebar = true,
  showToolbar = true,
  showPageManager = true
}) => {
  const dispatch = useDispatch();
  const documentState = useSelector((state) => state.document);
  const { pageSize, continuousContent, pageBoundaries, activePage } = documentState;

  const containerRef = useRef(null);
  const editorRef = useRef(null);

  const { currentFormat, formatText } = useFormatting();
  const { 
    checkAndUpdateBoundaries, 
    getCurrentPage, 
    scrollToPage,
    positionCursorAtPage,
    updateBoundaries,
    triggerAutoReflow,
    removePageAndContent
  } = useContinuousReflow(pageSize, editorRef);

  const dimensions = PAGE_DIMENSIONS[pageSize] || PAGE_DIMENSIONS.A4;
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Initialize editor content
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== continuousContent) {
      editorRef.current.innerHTML = continuousContent;
      // Calculate initial boundaries after content is set
      setTimeout(() => {
        updateBoundaries();
      }, 100);
    }
  }, [continuousContent, updateBoundaries]);

  // Focus editor on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleInput = useCallback((event) => {
    const html = event.currentTarget.innerHTML;
    dispatch(updateContinuousContent(html));
    
    // Update page boundaries after content change
    checkAndUpdateBoundaries();
    
    // Trigger automatic reflow to insert page breaks when content overflows
    triggerAutoReflow();
    
    // Update active page based on cursor position
    const currentPage = getCurrentPage();
    if (currentPage !== activePage) {
      dispatch(setActivePage(currentPage));
    }
  }, [checkAndUpdateBoundaries, dispatch, getCurrentPage, activePage, triggerAutoReflow]);

  const handlePageSizeChange = useCallback((newSize) => {
    dispatch(updatePageSize(newSize));
    // Recalculate boundaries with new page size
    updateBoundaries({ pageSize: newSize });
    
    // Call parent callback if provided
    if (onPageSizeChangeCallback) {
      onPageSizeChangeCallback(newSize);
    }
  }, [dispatch, updateBoundaries, onPageSizeChangeCallback]);

  const handleNavigatePage = useCallback((pageIndex) => {
    dispatch(setActivePage(pageIndex));
    scrollToPage(pageIndex, containerRef);
    
    // Call parent callback if provided
    if (onNavigatePage) {
      onNavigatePage(pageIndex);
    }
  }, [dispatch, scrollToPage, onNavigatePage]);

  const handleAddPage = useCallback(() => {
    // Add a page break at the end
    dispatch(addPageBreak({ position: 'end' }));
    
    // Update boundaries after adding page break
    setTimeout(() => {
      updateBoundaries();
    }, 100);
    
    // Call parent callback if provided
    if (onAddPage) {
      onAddPage();
    }
  }, [dispatch, updateBoundaries, onAddPage]);

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
      
      // Update boundaries after a short delay
      setTimeout(() => {
        updateBoundaries();
      }, 100);
    }
  }, [updateBoundaries, editorRef]);

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
      dispatch(setActivePage(0));
      
      // Call parent callback if provided
      if (onDeletePage) {
        onDeletePage(pageIndex);
      }
    }
  }, [pageBoundaries.length, removePageAndContent, dispatch, onDeletePage]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !editorRef.current) return;

    // Update active page based on scroll position
    const currentPage = getCurrentPage();
    if (currentPage !== activePage) {
      dispatch(setActivePage(currentPage));
    }
  }, [getCurrentPage, activePage, dispatch]);

  // Word count for sidebar
  const wordCount = continuousContent
    ? (continuousContent.replace(/<[^>]*>/g, ' ').match(/\b\w+\b/g) || []).length
    : 0;

  const totalPages = pageBoundaries.length || 1;

  return (
    <div className="multi-page-editor">
      {showToolbar && (
        <EditorToolbar
          currentFormat={currentFormat}
          pageSize={pageSize}
          onFormatText={formatText}
          onPageSizeChange={handlePageSizeChange}
          onAddPageBreak={handleAddPageBreak}
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
          <ContinuousPageView
            content={continuousContent}
            dimensions={dimensions}
            pageSize={pageSize}
            pageBoundaries={pageBoundaries}
            editorRef={editorRef}
            onInput={handleInput}
            onClick={() => editorRef.current?.focus()}
          />
        </div>

        {/* Render PageManager only if showPageManager is true */}
        {showPageManager && (
          <div className="page-manager-sidebar">
            {pageManagerComponent ? (
              React.cloneElement(pageManagerComponent, {
                pages: pageBoundaries.map((b, i) => ({ 
                  id: b.id, 
                  index: i,
                  size: pageSize 
                })),
                activePage,
                pageSize,
                onNavigate: handleNavigatePage,
                onAddPage: handleAddPage,
                onDeletePage: handleDeletePage,
                onPageSizeChange: handlePageSizeChange
              })
            ) : (
              <PageManager
                pages={pageBoundaries.map((b, i) => ({ 
                  id: b.id, 
                  index: i,
                  size: pageSize 
                }))}
                activePage={activePage}
                pageSize={pageSize}
                onNavigate={handleNavigatePage}
                onAddPage={handleAddPage}
                onDeletePage={handleDeletePage}
                onPageSizeChange={handlePageSizeChange}
                continuousMode={false}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentEditableEditor;
