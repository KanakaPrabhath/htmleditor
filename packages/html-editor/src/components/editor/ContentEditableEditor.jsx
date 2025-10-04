import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { useDocumentState, useDocumentActions } from '../../context/DocumentContext';
import { useFormatting, useContinuousReflow } from '../../hooks';
import Sidebar from './Sidebar';
import EditorToolbar from './EditorToolbar';
import ContinuousPageView from './ContinuousPageView';
import PageManager from './PageManager';
import PageManagerConnected from './PageManagerConnected';
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
  const documentState = useDocumentState();
  const actions = useDocumentActions();
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

  const dimensions = useMemo(() => PAGE_DIMENSIONS[pageSize] || PAGE_DIMENSIONS.A4, [pageSize]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const addingPageRef = useRef(false);

  // Initialize editor content
  const contentSetRef = useRef(false);
  useEffect(() => {
    if (editorRef.current && !contentSetRef.current) {
      editorRef.current.innerHTML = continuousContent;
      contentSetRef.current = true;
      // Calculate initial boundaries after content is set
      // Use shorter delay to ensure PageManager displays immediately
      const timer = setTimeout(() => {
        updateBoundaries();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [continuousContent, updateBoundaries]);

  // Sync Redux content changes to DOM (for programmatic updates like addPageBreak)
  const lastContentRef = useRef(continuousContent);
  useEffect(() => {
    if (editorRef.current && contentSetRef.current && lastContentRef.current !== continuousContent) {
      // Only update DOM if content actually changed and it's not from user input
      // (user input already updates DOM via contenteditable)
      const currentDOMContent = editorRef.current.innerHTML;
      if (currentDOMContent !== continuousContent) {
        editorRef.current.innerHTML = continuousContent;
        // Recalculate boundaries after DOM update
        setTimeout(() => {
          updateBoundaries();
          
          // If we just added a page, navigate to it
          if (addingPageRef.current) {
            addingPageRef.current = false;
            setTimeout(() => {
              const newPageIndex = pageBoundaries.length > 0 ? pageBoundaries.length - 1 : 0;
              actions.setActivePage(newPageIndex);
              scrollToPage(newPageIndex, containerRef);
            }, 50);
          }
        }, 50);
      }
      lastContentRef.current = continuousContent;
    }
  }, [continuousContent, updateBoundaries, pageBoundaries.length, actions, scrollToPage]);

  // Ensure boundaries are calculated on mount, even if content hasn't changed
  const mountRef = useRef(false);
  useEffect(() => {
    if (!mountRef.current && editorRef.current) {
      mountRef.current = true;
      // Force boundary calculation on mount to ensure PageManager shows pages
      const timer = setTimeout(() => {
        updateBoundaries();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [updateBoundaries]);

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
    actions.updateContinuousContent(html);
    
    // Update page boundaries after content change (already debounced in hook)
    checkAndUpdateBoundaries();
    
    // Trigger automatic reflow to insert page breaks when content overflows (already debounced)
    triggerAutoReflow();
    
    // Update active page based on cursor position
    const currentPage = getCurrentPage();
    if (currentPage !== activePage) {
      actions.setActivePage(currentPage);
    }
  }, [checkAndUpdateBoundaries, actions, getCurrentPage, activePage, triggerAutoReflow]);

  const handlePageSizeChange = useCallback((newSize) => {
    actions.updatePageSize(newSize);
    // Recalculate boundaries with new page size (debounced in hook)
    updateBoundaries({ pageSize: newSize });
    
    // Call parent callback if provided
    if (onPageSizeChangeCallback) {
      onPageSizeChangeCallback(newSize);
    }
  }, [actions, updateBoundaries, onPageSizeChangeCallback]);

  const handleNavigatePage = useCallback((pageIndex) => {
    actions.setActivePage(pageIndex);
    scrollToPage(pageIndex, containerRef);
    
    // Call parent callback if provided
    if (onNavigatePage) {
      onNavigatePage(pageIndex);
    }
  }, [actions, scrollToPage, onNavigatePage]);

  const handleAddPage = useCallback(() => {
    // Set flag to indicate we're adding a page
    addingPageRef.current = true;
    
    // Add a page break at the end - this updates Context state
    actions.addPageBreak({ position: 'end' });
    
    // The useEffect above will sync the content to DOM, update boundaries, and navigate
    
    // Call parent callback if provided
    if (onAddPage) {
      onAddPage();
    }
  }, [actions, onAddPage]);

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
        const newBoundaries = updateBoundaries();
        // Get current page and stay on it
        const currentPage = getCurrentPage();
        actions.setActivePage(currentPage);
      }, 150);
    }
  }, [updateBoundaries, getCurrentPage, actions]);

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

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !editorRef.current) return;

    // Debounce scroll handler to prevent excessive updates
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const currentPage = getCurrentPage();
      if (currentPage !== activePage) {
        actions.setActivePage(currentPage);
      }
      scrollTimeoutRef.current = null;
    }, 100);
  }, [getCurrentPage, activePage, actions]);

  // Word count for sidebar - memoized to prevent expensive regex on every render
  const wordCount = useMemo(() => {
    if (!continuousContent) return 0;
    const text = continuousContent.replace(/<[^>]*>/g, ' ');
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
  }, [continuousContent]);

  const totalPages = pageBoundaries.length || 1;

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
                onNavigate: handleNavigatePage,
                onAddPage: handleAddPage,
                onDeletePage: handleDeletePage,
                onPageSizeChange: handlePageSizeChange
              })
            ) : (
              <PageManagerConnected
                onNavigate={handleNavigatePage}
                onAddPage={handleAddPage}
                onDeletePage={handleDeletePage}
                onPageSizeChange={handlePageSizeChange}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentEditableEditor;
