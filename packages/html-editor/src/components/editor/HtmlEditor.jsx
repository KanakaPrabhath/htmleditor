import React, { useCallback, useEffect, useRef, useState, useMemo, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useDocumentState, useDocumentActions } from '../../context/DocumentContext';
import { useFormatting, useContinuousReflow } from '../../hooks';
import { canZoomIn, canZoomOut } from '../../lib/editor/zoom-utils';
import { PAGE_SIZES, getPageDimensions } from '../../lib/editor/page-sizes';
import { DEFAULT_IMAGE_RESIZE_OPTIONS } from '../../lib/editor/image-resize-utils';
import { deleteImage } from '../../lib/storage/index-db';
import { normalizeParagraphs } from '../../lib/editor/content-normalize-utils';
import Sidebar from './Sidebar';
import EditorToolbar from './EditorToolbar';
import PageView from './PageView';
import PageManager from './PageManager';
import ImageResizeHandlers from './ImageResizeHandlers';
import ImageTooltipMenu from './ImageTooltipMenu';
import './MultiPageEditor.css';

const INITIAL_BOUNDARY_DELAY = 50;
const BOUNDARY_UPDATE_DELAY = 50;
const NAVIGATION_DELAY = 50;
const SCROLL_DEBOUNCE = 100;
const FOCUS_DELAY = 200;
const NAVIGATION_LOCK_TIMEOUT = 500;

/**
 * HtmlEditor - Main WYSIWYG HTML Editor Component
 * 
 * Exposed methods via ref:
 * - getHTMLContent() - Returns the current HTML content as a string
 * - getPlainText() - Returns the plain text content (HTML stripped)
 * - setContent(html) - Sets the editor content programmatically
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
  const {
    checkAndUpdateBoundaries,
    getCurrentPage,
    scrollToPage,
    updateBoundaries,
    triggerAutoReflow,
    removePageAndContent,
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
  
  useEffect(() => {
    if (!editorRef.current) return;
    
    // Initial setup
    if (!contentSetRef.current) {
      editorRef.current.innerHTML = continuousContent;
      contentSetRef.current = true;
      lastContentRef.current = continuousContent;
      
      const timer = setTimeout(() => {
        updateBoundaries();
      }, INITIAL_BOUNDARY_DELAY);
      return () => clearTimeout(timer);
    }
    
    // Sync programmatic content changes to DOM
    if (lastContentRef.current !== continuousContent) {
      const currentDOMContent = editorRef.current.innerHTML;
      
      // Only update if DOM is out of sync (prevents user input loops)
      if (currentDOMContent !== continuousContent) {
        editorRef.current.innerHTML = continuousContent;
        
        const timer = setTimeout(() => {
          updateBoundaries();
          
          if (addingPageRef.current) {
            addingPageRef.current = false;
            const newPageIndex = Math.max(0, pageBoundaries.length - 1);
            actions.setActivePage(newPageIndex);
            
            setTimeout(() => {
              scrollToPage(newPageIndex, containerRef);
            }, NAVIGATION_DELAY);
          }
        }, BOUNDARY_UPDATE_DELAY);
        
        lastContentRef.current = continuousContent;
        return () => clearTimeout(timer);
      }
      
      lastContentRef.current = continuousContent;
    }
  }, [continuousContent, updateBoundaries, pageBoundaries.length, actions, scrollToPage]);

  // Notify parent app when content changes
  useEffect(() => {
    if (onChange && contentSetRef.current) {
      onChange(continuousContent);
    }
  }, [continuousContent, onChange]);

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => ({
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
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (html) => {
      actions.updateContinuousContent(html);
      if (editorRef.current) {
        editorRef.current.innerHTML = html;
        setTimeout(() => {
          updateBoundaries();
        }, 50);
      }
    }
  }), [continuousContent, actions, updateBoundaries, editorRef]);

  // Update format state when selection changes
  useEffect(() => {
    const handleSelectionChange = () => {
      updateCurrentFormatFromSelection();
    };

    // Listen for selection changes
    document.addEventListener('selectionchange', handleSelectionChange);
    
    // Also update when editor gets focus
    const handleFocus = () => {
      setTimeout(updateCurrentFormatFromSelection, 10);
    };
    
    if (editorRef.current) {
      editorRef.current.addEventListener('focus', handleFocus);
    }

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      if (editorRef.current) {
        editorRef.current.removeEventListener('focus', handleFocus);
      }
    };
  }, [updateCurrentFormatFromSelection]);

  // Extract content update logic for reuse
  const updateContent = useCallback(() => {
    if (!editorRef.current) return;
    
    let html = editorRef.current.innerHTML;
    
    // Normalize paragraph structure to ensure proper <p> tags
    html = normalizeParagraphs(html);
    
    // Update the DOM with normalized content if it changed
    if (html !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = html;
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
  }, [actions, checkAndUpdateBoundaries, getCurrentPage, activePage, triggerAutoReflow, containerRef, editorRef]);

  const handleInput = useCallback((event) => {
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
          addingPageRef.current = false;
          const newPageIndex = Math.max(0, pageBoundaries.length - 1);
          actions.setActivePage(newPageIndex);
          
          setTimeout(() => {
            scrollToPage(newPageIndex, containerRef);
          }, NAVIGATION_DELAY);
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

  // Zoom handlers
  const handleZoomIn = useCallback(() => {
    actions.zoomIn();
  }, [actions]);

  const handleZoomOut = useCallback(() => {
    actions.zoomOut();
  }, [actions]);

  const handleZoomReset = useCallback(() => {
    actions.resetZoom();
  }, [actions]);

  // Keyboard shortcuts for zoom
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl key (or Cmd on Mac) is pressed
      if (event.ctrlKey || event.metaKey) {
        // Prevent default browser zoom behavior for our shortcuts
        if (['+', '=', '-', '_', '0'].includes(event.key)) {
          event.preventDefault();
        }
        
        // Only handle zoom shortcuts when editor or its container has focus
        // or when no specific input elements are focused
        const isEditorFocused = document.activeElement === editorRef.current;
        const isContainerFocused = document.activeElement === containerRef.current;
        const isInputFocused = document.activeElement?.tagName === 'INPUT' ||
                               document.activeElement?.tagName === 'TEXTAREA' ||
                               document.activeElement?.isContentEditable === false;
        
        if (isEditorFocused || isContainerFocused || !isInputFocused) {
          switch (event.key) {
            case '+':
            case '=':
              handleZoomIn();
              break;
            case '-':
            case '_':
              handleZoomOut();
              break;
            case '0':
              handleZoomReset();
              break;
            default:
              break;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleZoomIn, handleZoomOut, handleZoomReset]);

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

        {/* Image Tooltip Menu - shows when an image is selected */}
        {imageSelected && selectedImage && (
          <ImageTooltipMenu
            imageElement={selectedImage}
            initialPreserveAspectRatio={preserveAspectRatio}
            onAlignChange={(_) => {
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
