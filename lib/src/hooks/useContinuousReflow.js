import { useCallback, useRef, useEffect, useMemo } from 'react';
import { useDocumentActions } from '../context/DocumentContext';
import { 
  calculatePageBoundaries, 
  getCurrentPage,
  calculateMaxContentHeight
} from '../lib/editor/page-boundary-utils.js';
import { 
  insertPageBreakAtBoundary, 
  removePageAndContent,
  removePageBreak
} from '../lib/editor/page-break-utils.js';
import { 
  checkAndReflow, 
  triggerAutoReflow 
} from '../lib/editor/content-reflow-utils.js';
import { 
  positionCursorAtPage, 
  scrollToPage, 
  checkAndUpdateBoundaries 
} from '../lib/editor/cursor-scroll-utils.js';

// Performance constants
const DEFAULT_BOUNDARY_DELAY = 300;

/**
 * useContinuousReflow - Automatically insert page breaks based on content height
 * Monitors content height and inserts <page-break> tags when content exceeds page dimensions
 * Content remains in a single continuous contenteditable surface
 * @param {string} pageSize - The page size (A4, Letter, Legal)
 * @param {React.RefObject} editorRef - Reference to the editor element
 * @param {number} zoomLevel - Current zoom level percentage (50-200)
 * @param {string} pageMargins - The margin preset name
 */
export const useContinuousReflow = (pageSize, editorRef, zoomLevel = 100, pageMargins = 'NARROW') => {
  const actions = useDocumentActions();
  const boundaryTimeoutRef = useRef(null);
  const reflowTimeoutRef = useRef(null);
  const latestPageSizeRef = useRef(pageSize);
  const latestZoomLevelRef = useRef(zoomLevel);
  const latestPageMarginsRef = useRef(pageMargins);
  const isReflowingRef = useRef(false);

  useEffect(() => {
    latestPageSizeRef.current = pageSize;
  }, [pageSize]);

  useEffect(() => {
    latestZoomLevelRef.current = zoomLevel;
  }, [zoomLevel]);

  useEffect(() => {
    latestPageMarginsRef.current = pageMargins;
  }, [pageMargins]);

  useEffect(() => {
    return () => {
      if (boundaryTimeoutRef.current) {
        clearTimeout(boundaryTimeoutRef.current);
      }
      if (reflowTimeoutRef.current) {
        clearTimeout(reflowTimeoutRef.current);
      }
    };
  }, []);

  // ============================================================================
  // BOUNDARY MANAGEMENT
  // ============================================================================

  /**
   * Calculate visual page boundaries based on <page-break> tags in content
   * Returns array of boundary objects with top positions
   * Optimized with cached selectors and better null checks
   */
  const calculatePageBoundariesCallback = useCallback((options = {}) => {
    if (!editorRef?.current) {
      return [];
    }
    return calculatePageBoundaries(editorRef.current, options);
  }, [editorRef]);

  /**
   * Update page boundaries in Context state
   */
  const updateBoundaries = useCallback((options = {}) => {
    const boundaries = calculatePageBoundariesCallback(options);
    actions.updatePageBoundaries(boundaries);
    return boundaries;
  }, [calculatePageBoundariesCallback, actions]);

  /**
   * Debounced boundary calculation
   * Triggers after content changes to recalculate page boundaries
   * Optimized with configurable delay
   */
  const checkAndUpdateBoundariesCallback = useCallback((options = {}) => {
    const delay = typeof options.delay === 'number' ? options.delay : DEFAULT_BOUNDARY_DELAY;
    checkAndUpdateBoundaries(updateBoundaries, boundaryTimeoutRef, options, delay);
  }, [updateBoundaries]);

  // ============================================================================
  // REFLOW MANAGEMENT
  // ============================================================================

  /**
   * Automatic reflow: Insert page breaks when content exceeds page height
   * Optimized with performance guards and single-page-at-a-time processing
   * Accounts for current zoom level and margins when calculating max height
   */
  const checkAndReflowCallback = useCallback(() => {
    if (!editorRef?.current) {
      return;
    }

    checkAndReflow(
      editorRef.current,
      latestPageSizeRef.current,
      latestZoomLevelRef.current,
      latestPageMarginsRef.current,
      actions.updateContinuousContent,
      updateBoundaries,
      isReflowingRef,
      checkAndReflowCallback
    );
  }, [editorRef, actions, updateBoundaries]);

  /**
   * Debounced automatic reflow check
   * Optimized to prevent excessive reflow operations
   */
  const triggerAutoReflowCallback = useCallback((delay) => {
    triggerAutoReflow(checkAndReflowCallback, reflowTimeoutRef, delay);
  }, [checkAndReflowCallback]);

  // ============================================================================
  // NAVIGATION
  // ============================================================================

  /**
   * Get current page number based on viewport scroll position
   * @param {React.RefObject} containerRef - The scroll container element
   */
  const getCurrentPageCallback = useCallback((containerRef) => {
    if (!containerRef?.current || !editorRef?.current) {
      return 0;
    }
    return getCurrentPage(containerRef.current, editorRef.current);
  }, [editorRef]);

  /**
   * Position cursor at the start of a specific page
   */
  const positionCursorAtPageCallback = useCallback((pageNumber) => {
    if (!editorRef?.current) {
      return;
    }
    positionCursorAtPage(editorRef.current, pageNumber);
  }, [editorRef]);

  /**
   * Scroll to a specific page and position cursor at the start of that page
   */
  const scrollToPageCallback = useCallback((pageNumber, containerRef) => {
    if (!containerRef?.current || !editorRef?.current) {
      console.warn('[scrollToPage] Missing refs');
      return;
    }
    scrollToPage(containerRef.current, editorRef.current, pageNumber, positionCursorAtPageCallback);
  }, [editorRef, positionCursorAtPageCallback]);

  // ============================================================================
  // PAGE MANAGEMENT
  // ============================================================================

  /**
   * Insert a page break at a specific page boundary based on content height
   * This is used when manually adding pages to insert them at the correct location
   * @param {number} pageNumber - The page number where the break should be inserted (1-based)
   * @returns {Promise<boolean>} - Success status
   */
  const insertPageBreakAtBoundaryCallback = useCallback(async (pageNumber) => {
    if (!editorRef?.current) {
      return false;
    }

    return insertPageBreakAtBoundary(
      editorRef.current,
      pageNumber,
      latestPageSizeRef.current,
      latestZoomLevelRef.current,
      latestPageMarginsRef.current,
      actions.updateContinuousContent,
      updateBoundaries
    );
  }, [editorRef, actions, updateBoundaries]);

  /**
   * Remove a page and its content from the continuous editor
   * Removes the page break and all content between the page boundaries
   * @param {number} pageIndex - The index of the page to remove (0-based)
   */
  const removePageAndContentCallback = useCallback((pageIndex) => {
    if (!editorRef?.current) {
      return false;
    }

    return removePageAndContent(
      editorRef.current,
      pageIndex,
      calculatePageBoundariesCallback,
      actions.updateContinuousContent,
      updateBoundaries,
      positionCursorAtPageCallback,
      checkAndReflowCallback
    );
  }, [editorRef, calculatePageBoundariesCallback, actions, updateBoundaries, positionCursorAtPageCallback, checkAndReflowCallback]);

  /**
   * Remove a single page break element
   * This removes just the page break, allowing content to reflow naturally
   * @param {HTMLElement} pageBreakElement - The page break element to remove
   */
  const removePageBreakCallback = useCallback((pageBreakElement) => {
    if (!editorRef?.current) {
      return false;
    }

    return removePageBreak(
      pageBreakElement,
      editorRef.current,
      actions.updateContinuousContent,
      updateBoundaries,
      checkAndReflowCallback
    );
  }, [editorRef, actions, updateBoundaries, checkAndReflowCallback]);

  // ============================================================================
  // CLEANUP & PERFORMANCE
  // ============================================================================

  useEffect(() => {
    return () => {
      if (boundaryTimeoutRef.current) {
        clearTimeout(boundaryTimeoutRef.current);
      }
      if (reflowTimeoutRef.current) {
        clearTimeout(reflowTimeoutRef.current);
      }
    };
  }, []);

  // Memoize the return object to prevent unnecessary re-renders in consuming components
  return useMemo(() => ({
    calculatePageBoundaries: calculatePageBoundariesCallback,
    checkAndUpdateBoundaries: checkAndUpdateBoundariesCallback,
    updateBoundaries,
    getCurrentPage: getCurrentPageCallback,
    scrollToPage: scrollToPageCallback,
    positionCursorAtPage: positionCursorAtPageCallback,
    checkAndReflow: checkAndReflowCallback,
    triggerAutoReflow: triggerAutoReflowCallback,
    removePageAndContent: removePageAndContentCallback,
    removePageBreak: removePageBreakCallback,
    insertPageBreakAtBoundary: insertPageBreakAtBoundaryCallback,
    boundaryTimeoutRef,
    reflowTimeoutRef
  }), [
    calculatePageBoundariesCallback,
    checkAndUpdateBoundariesCallback,
    updateBoundaries,
    getCurrentPageCallback,
    scrollToPageCallback,
    positionCursorAtPageCallback,
    checkAndReflowCallback,
    triggerAutoReflowCallback,
    removePageAndContentCallback,
    removePageBreakCallback,
    insertPageBreakAtBoundaryCallback
  ]);
};

  // ============================================================================
  // REFLOW MANAGEMENT
  // ============================================================================

  /**
   * Automatic reflow: Insert page breaks when content exceeds page height
   * Optimized with performance guards and single-page-at-a-time processing
   * Accounts for current zoom level and margins when calculating max height
   */
  const checkAndReflowCallback = useCallback(() => {
    if (!editorRef?.current) {
      return;
    }

    checkAndReflow(
      editorRef.current,
      latestPageSizeRef.current,
      latestZoomLevelRef.current,
      latestPageMarginsRef.current,
      actions.updateContinuousContent,
      updateBoundaries,
      isReflowingRef,
      checkAndReflowCallback
    );
  }, [editorRef, actions, updateBoundaries]);

  /**
   * Debounced automatic reflow check
   * Optimized to prevent excessive reflow operations
   */
  const triggerAutoReflowCallback = useCallback((delay) => {
    triggerAutoReflow(checkAndReflowCallback, reflowTimeoutRef, delay);
  }, [checkAndReflowCallback]);

  // ============================================================================
  // NAVIGATION
  // ============================================================================

  /**
   * Get current page number based on viewport scroll position
   * @param {React.RefObject} containerRef - The scroll container element
   */
  const getCurrentPageCallback = useCallback((containerRef) => {
    if (!containerRef?.current || !editorRef?.current) {
      return 0;
    }
    return getCurrentPage(containerRef.current, editorRef.current);
  }, [editorRef]);

  /**
   * Position cursor at the start of a specific page
   */
  const positionCursorAtPageCallback = useCallback((pageNumber) => {
    if (!editorRef?.current) {
      return;
    }
    positionCursorAtPage(editorRef.current, pageNumber);
  }, [editorRef]);

  /**
   * Scroll to a specific page and position cursor at the start of that page
   */
  const scrollToPageCallback = useCallback((pageNumber, containerRef) => {
    if (!containerRef?.current || !editorRef?.current) {
      console.warn('[scrollToPage] Missing refs');
      return;
    }
    scrollToPage(containerRef.current, editorRef.current, pageNumber, positionCursorAtPageCallback);
  }, [editorRef, positionCursorAtPageCallback]);

  // ============================================================================
  // PAGE MANAGEMENT
  // ============================================================================

  /**
   * Insert a page break at a specific page boundary based on content height
   * This is used when manually adding pages to insert them at the correct location
   * @param {number} pageNumber - The page number where the break should be inserted (1-based)
   * @returns {Promise<boolean>} - Success status
   */
  const insertPageBreakAtBoundaryCallback = useCallback(async (pageNumber) => {
    if (!editorRef?.current) {
      return false;
    }

    return insertPageBreakAtBoundary(
      editorRef.current,
      pageNumber,
      latestPageSizeRef.current,
      latestZoomLevelRef.current,
      latestPageMarginsRef.current,
      actions.updateContinuousContent,
      updateBoundaries
    );
  }, [editorRef, actions, updateBoundaries]);

  /**
   * Remove a page and its content from the continuous editor
   * Removes the page break and all content between the page boundaries
   * @param {number} pageIndex - The index of the page to remove (0-based)
   */
  const removePageAndContentCallback = useCallback((pageIndex) => {
    if (!editorRef?.current) {
      return false;
    }

    return removePageAndContent(
      editorRef.current,
      pageIndex,
      calculatePageBoundariesCallback,
      actions.updateContinuousContent,
      updateBoundaries,
      positionCursorAtPageCallback,
      checkAndReflowCallback
    );
  }, [editorRef, calculatePageBoundariesCallback, actions, updateBoundaries, positionCursorAtPageCallback, checkAndReflowCallback]);

  /**
   * Remove a single page break element
   * This removes just the page break, allowing content to reflow naturally
   * @param {HTMLElement} pageBreakElement - The page break element to remove
   */
  const removePageBreakCallback = useCallback((pageBreakElement) => {
    if (!editorRef?.current) {
      return false;
    }

    return removePageBreak(
      pageBreakElement,
      editorRef.current,
      actions.updateContinuousContent,
      updateBoundaries,
      checkAndReflowCallback
    );
  }, [editorRef, actions, updateBoundaries, checkAndReflowCallback]);
