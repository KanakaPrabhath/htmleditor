import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_ZOOM, MIN_ZOOM, MAX_ZOOM, ZOOM_STEP, canZoomIn as checkCanZoomIn, canZoomOut as checkCanZoomOut } from '../lib/editor/zoom-utils.js';
import { DEFAULT_MARGIN_PRESET } from '../lib/editor/margin-utils.js';
import { getPageDimensions, DEFAULT_PAGE_SIZE as PAGE_SIZE_DEFAULT } from '../lib/editor/page-sizes.js';

// Constants moved outside for performance
const DEFAULT_PAGE_SIZE = PAGE_SIZE_DEFAULT;
const EMPTY_PARAGRAPH = '<p><br></p>';
const DEFAULT_EDITOR_MODE = 'continuous';

// Helper functions moved outside reducer for better performance and reusability
const createEmptyPage = (index, size = DEFAULT_PAGE_SIZE) => ({
  id: uuidv4(),
  index,
  size,
  content: EMPTY_PARAGRAPH,
  images: [],
  isBreakPoint: false
});

const sanitizeContent = (html) => {
  if (typeof html !== 'string' || html.trim() === '') {
    return EMPTY_PARAGRAPH;
  }
  return html;
};

const withMinimumPage = (pages, pageSize = DEFAULT_PAGE_SIZE) => {
  const nextPages = pages.length > 0 ? pages : [createEmptyPage(0, pageSize)];
  return nextPages.map((page, index) => ({
    id: page.id || uuidv4(),
    index,
    size: page.size || pageSize,
    content: sanitizeContent(page.content),
    images: page.images || [],
    isBreakPoint: Boolean(page.isBreakPoint)
  }));
};

const createDefaultBoundary = (pageSize = DEFAULT_PAGE_SIZE) => {
  const dimensions = getPageDimensions(pageSize);
  return [{
    id: 'page-0',
    pageNumber: 1,
    top: 0,
    height: dimensions.height
  }];
};

const generatePageBreaks = (pages) => {
  return pages.slice(0, -1).map((_, index) => ({
    id: `auto-break-${index}`,
    pageNumber: index + 1
  }));
};

const buildInitialState = (overrides = {}) => {
  const now = new Date().toISOString();
  const pageSize = overrides.pageSize || DEFAULT_PAGE_SIZE;
  const pages = withMinimumPage(overrides.pages || [createEmptyPage(0, pageSize)], pageSize);

  return {
    id: uuidv4(),
    title: overrides.title || 'Untitled Document',
    createdAt: now,
    updatedAt: now,
    pageSize,
    pages,
    activePage: overrides.activePage && overrides.activePage < pages.length ? overrides.activePage : 0,
    pageBreaks: overrides.pageBreaks || [],
    totalPages: pages.length,
    editorMode: overrides.editorMode || DEFAULT_EDITOR_MODE,
    continuousContent: overrides.continuousContent || EMPTY_PARAGRAPH,
    pageBoundaries: overrides.pageBoundaries || createDefaultBoundary(pageSize),
    zoomLevel: overrides.zoomLevel || DEFAULT_ZOOM,
    pageMargins: overrides.pageMargins || DEFAULT_MARGIN_PRESET,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: false,
    canRedo: false
  };
};

// Action types
const ActionTypes = {
  INITIALIZE_DOCUMENT: 'INITIALIZE_DOCUMENT',
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_PAGE_CONTENT: 'UPDATE_PAGE_CONTENT',
  UPDATE_PAGES: 'UPDATE_PAGES',
  ADD_PAGE: 'ADD_PAGE',
  DELETE_PAGE: 'DELETE_PAGE',
  SET_ACTIVE_PAGE: 'SET_ACTIVE_PAGE',
  UPDATE_PAGE_SIZE: 'UPDATE_PAGE_SIZE',
  RESET_DOCUMENT: 'RESET_DOCUMENT',
  UPDATE_CONTINUOUS_CONTENT: 'UPDATE_CONTINUOUS_CONTENT',
  UPDATE_PAGE_BOUNDARIES: 'UPDATE_PAGE_BOUNDARIES',
  ADD_PAGE_BREAK: 'ADD_PAGE_BREAK',
  REMOVE_PAGE_BREAK: 'REMOVE_PAGE_BREAK',
  SET_EDITOR_MODE: 'SET_EDITOR_MODE',
  SET_ZOOM_LEVEL: 'SET_ZOOM_LEVEL',
  ZOOM_IN: 'ZOOM_IN',
  ZOOM_OUT: 'ZOOM_OUT',
  RESET_ZOOM: 'RESET_ZOOM',
  UPDATE_PAGE_MARGINS: 'UPDATE_PAGE_MARGINS',
  // Undo/Redo actions
  RECORD_OPERATION: 'RECORD_OPERATION',
  UNDO: 'UNDO',
  REDO: 'REDO',
  CLEAR_UNDO_REDO: 'CLEAR_UNDO_REDO'
};

// Reducer
const documentReducer = (state, action) => {
  const now = new Date().toISOString();

  switch (action.type) {
    case ActionTypes.INITIALIZE_DOCUMENT: {
      const { initialContent = EMPTY_PARAGRAPH, pageSize = DEFAULT_PAGE_SIZE } = action.payload || {};
      const page = { ...createEmptyPage(0, pageSize), content: sanitizeContent(initialContent) };
      return buildInitialState({
        title: state.title,
        pageSize,
        pages: [page]
      });
    }

    case ActionTypes.UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        updatedAt: now
      };

    case ActionTypes.UPDATE_PAGE_CONTENT: {
      const { pageIndex, content } = action.payload;
      if (pageIndex < 0 || pageIndex >= state.pages.length) {
        return state;
      }

      const newPages = [...state.pages];
      newPages[pageIndex] = {
        ...newPages[pageIndex],
        content: sanitizeContent(content)
      };

      return {
        ...state,
        pages: newPages,
        updatedAt: now
      };
    }

    case ActionTypes.UPDATE_PAGES: {
      const payload = Array.isArray(action.payload)
        ? { pages: action.payload }
        : action.payload || {};

      const nextPages = withMinimumPage(payload.pages || [], state.pageSize);
      const pageBreaks = Array.isArray(payload.pageBreaks)
        ? payload.pageBreaks
        : generatePageBreaks(nextPages);

      return {
        ...state,
        pages: nextPages,
        activePage: Math.min(state.activePage, nextPages.length - 1),
        pageBreaks,
        totalPages: nextPages.length,
        updatedAt: now
      };
    }

    case ActionTypes.ADD_PAGE: {
      const insertIndex = typeof action.payload?.index === 'number'
        ? Math.min(Math.max(action.payload.index, 0), state.pages.length)
        : state.pages.length;

      const newPages = [...state.pages];
      newPages.splice(insertIndex, 0, createEmptyPage(insertIndex, state.pageSize));
      
      const updatedPages = newPages.map((page, index) => ({
        ...page,
        index,
        size: state.pageSize
      }));

      const pageBreaks = generatePageBreaks(updatedPages);

      return {
        ...state,
        pages: updatedPages,
        activePage: insertIndex,
        pageBreaks,
        totalPages: updatedPages.length,
        updatedAt: now
      };
    }

    case ActionTypes.DELETE_PAGE: {
      const pageIndex = action.payload;
      if (state.pages.length <= 1) {
        return state;
      }

      const newPages = [...state.pages];
      newPages.splice(pageIndex, 1);
      
      const updatedPages = newPages.map((page, index) => ({
        ...page,
        index,
        size: state.pageSize
      }));

      let newActivePage = state.activePage;
      if (newActivePage >= updatedPages.length) {
        newActivePage = updatedPages.length - 1;
      } else if (pageIndex <= newActivePage && newActivePage > 0) {
        newActivePage -= 1;
      }

      const pageBreaks = generatePageBreaks(updatedPages);

      return {
        ...state,
        pages: updatedPages,
        activePage: newActivePage,
        pageBreaks,
        totalPages: updatedPages.length,
        updatedAt: now
      };
    }

    case ActionTypes.SET_ACTIVE_PAGE: {
      const pageIndex = action.payload;
      
      // Early exit if same page
      if (pageIndex === state.activePage) {
        return state;
      }
      
      const maxPage = state.editorMode === 'continuous' 
        ? state.pageBoundaries.length 
        : state.pages.length;
      
      // Validate page index
      if (pageIndex < 0 || pageIndex >= maxPage) {
        return state;
      }
      
      return {
        ...state,
        activePage: pageIndex,
        updatedAt: now
      };
    }

    case ActionTypes.UPDATE_PAGE_SIZE: {
      const newSize = action.payload;
      
      // Early exit if size hasn't changed
      if (newSize === state.pageSize) {
        return state;
      }
      
      // Validate page size using getPageDimensions
      try {
        getPageDimensions(newSize);
      } catch {
        console.warn(`Invalid page size: ${newSize}`);
        return state;
      }
      
      const updatedPages = state.pages.map((page, index) => ({
        ...page,
        index,
        size: newSize
      }));

      const pageBreaks = generatePageBreaks(updatedPages);

      return {
        ...state,
        pageSize: newSize,
        pages: updatedPages,
        pageBreaks,
        updatedAt: now
      };
    }

    case ActionTypes.RESET_DOCUMENT:
      return buildInitialState();

    case ActionTypes.UPDATE_CONTINUOUS_CONTENT: {
      const newContent = sanitizeContent(action.payload);
      // Early exit if content hasn't changed
      if (newContent === state.continuousContent) {
        return state;
      }
      return {
        ...state,
        continuousContent: newContent,
        updatedAt: now
      };
    }

    case ActionTypes.UPDATE_PAGE_BOUNDARIES: {
      const boundaries = Array.isArray(action.payload) ? action.payload : [];
      
      // Early exit if boundaries haven't changed (deep comparison on length and first/last)
      if (boundaries.length === state.pageBoundaries.length && 
          boundaries.length > 0 &&
          boundaries[0].id === state.pageBoundaries[0]?.id &&
          boundaries[boundaries.length - 1].id === state.pageBoundaries[boundaries.length - 1]?.id) {
        return state;
      }
      
      const newActivePage = state.activePage >= boundaries.length 
        ? Math.max(0, boundaries.length - 1)
        : state.activePage;

      return {
        ...state,
        pageBoundaries: boundaries,
        totalPages: boundaries.length,
        activePage: newActivePage,
        updatedAt: now
      };
    }

    case ActionTypes.ADD_PAGE_BREAK: {
      const { position = 'end', pageIndex } = action.payload || {};
      const pageBreakTag = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      
      let newContent = state.continuousContent;

      if (position === 'end') {
        newContent = newContent + pageBreakTag + '<p><br></p>';
      } else if (typeof position === 'number') {
        const before = newContent.substring(0, position);
        const after = newContent.substring(position);
        newContent = before + pageBreakTag + after;
      } else if (typeof pageIndex === 'number' && typeof document !== 'undefined') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newContent;
        
        const pageBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
        
        if (pageIndex === 0 && pageBreaks.length === 0) {
          newContent = newContent + pageBreakTag + '<p><br></p>';
        } else if (pageIndex < pageBreaks.length) {
          const targetBreak = pageBreaks[pageIndex];
          const newBreak = document.createElement('page-break');
          newBreak.setAttribute('data-page-break', 'true');
          newBreak.setAttribute('style', 'display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;');
          
          const newParagraph = document.createElement('p');
          newParagraph.innerHTML = '<br>';
          
          targetBreak.parentNode.insertBefore(newBreak, targetBreak.nextSibling);
          newBreak.parentNode.insertBefore(newParagraph, newBreak.nextSibling);
          
          newContent = tempDiv.innerHTML;
        } else {
          newContent = newContent + pageBreakTag + '<p><br></p>';
        }
      }
      
      return {
        ...state,
        continuousContent: newContent,
        updatedAt: now
      };
    }

    case ActionTypes.REMOVE_PAGE_BREAK: {
      const { pageIndex } = action.payload || {};
      
      if (typeof pageIndex !== 'number' || typeof document === 'undefined') {
        return state;
      }
      
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = state.continuousContent;
      
      const pageBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
      
      if (pageBreaks[pageIndex]) {
        pageBreaks[pageIndex].remove();
      }
      
      const remainingBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
      remainingBreaks.forEach((breakEl, index) => {
        breakEl.setAttribute('data-page-number', String(index + 2));
      });
      
      return {
        ...state,
        continuousContent: tempDiv.innerHTML,
        updatedAt: now
      };
    }

    case ActionTypes.SET_EDITOR_MODE: {
      const newMode = action.payload;
      if (newMode === state.editorMode) {
        return state;
      }

      let newContent = state.continuousContent;
      let newPages = state.pages;

      if (newMode === 'continuous') {
        const allContent = state.pages
          .map(page => page.content)
          .filter(content => content && content !== EMPTY_PARAGRAPH)
          .join('\n');
        newContent = allContent || EMPTY_PARAGRAPH;
      } else {
        if (state.continuousContent && state.continuousContent !== EMPTY_PARAGRAPH) {
          newPages = [{ ...createEmptyPage(0, state.pageSize), content: state.continuousContent }];
        }
      }
      
      return {
        ...state,
        editorMode: newMode,
        continuousContent: newContent,
        pages: newPages,
        updatedAt: now
      };
    }

    case ActionTypes.SET_ZOOM_LEVEL: {
      const newZoomLevel = action.payload;
      
      // Validate zoom level is within bounds
      if (newZoomLevel < MIN_ZOOM || newZoomLevel > MAX_ZOOM) {
        console.warn(`Invalid zoom level: ${newZoomLevel}. Must be between ${MIN_ZOOM} and ${MAX_ZOOM}.`);
        return state;
      }
      
      // Early exit if zoom hasn't changed
      if (newZoomLevel === state.zoomLevel) {
        return state;
      }
      
      return {
        ...state,
        zoomLevel: newZoomLevel,
        updatedAt: now
      };
    }

    case ActionTypes.ZOOM_IN: {
      if (!checkCanZoomIn(state.zoomLevel)) {
        return state;
      }
      
      const newZoomLevel = state.zoomLevel + ZOOM_STEP;
      return {
        ...state,
        zoomLevel: newZoomLevel,
        updatedAt: now
      };
    }

    case ActionTypes.ZOOM_OUT: {
      if (!checkCanZoomOut(state.zoomLevel)) {
        return state;
      }
      
      const newZoomLevel = state.zoomLevel - ZOOM_STEP;
      return {
        ...state,
        zoomLevel: newZoomLevel,
        updatedAt: now
      };
    }

    case ActionTypes.RESET_ZOOM: {
      if (state.zoomLevel === DEFAULT_ZOOM) {
        return state;
      }
      
      return {
        ...state,
        zoomLevel: DEFAULT_ZOOM,
        updatedAt: now
      };
    }

    case ActionTypes.UPDATE_PAGE_MARGINS: {
      const newMargins = action.payload;
      
      // Early exit if margins haven't changed
      if (newMargins === state.pageMargins) {
        return state;
      }
      
      return {
        ...state,
        pageMargins: newMargins,
        updatedAt: now
      };
    }

    case ActionTypes.RECORD_OPERATION: {
      const { operation, inverseOperation } = action.payload;
      
      return {
        ...state,
        undoStack: [...state.undoStack, { operation, inverseOperation }],
        redoStack: [], // Clear redo stack when new operation is recorded
        canUndo: true,
        canRedo: false,
        updatedAt: now
      };
    }

    case ActionTypes.UNDO: {
      if (state.undoStack.length === 0) {
        return state;
      }

      const lastOperation = state.undoStack[state.undoStack.length - 1];
      const newUndoStack = state.undoStack.slice(0, -1);
      
      // Apply the inverse operation
      let newState = state;
      if (lastOperation.inverseOperation) {
        newState = documentReducer(state, lastOperation.inverseOperation);
      }

      return {
        ...newState,
        undoStack: newUndoStack,
        redoStack: [...state.redoStack, lastOperation],
        canUndo: newUndoStack.length > 0,
        canRedo: true,
        updatedAt: now
      };
    }

    case ActionTypes.REDO: {
      if (state.redoStack.length === 0) {
        return state;
      }

      const operationToRedo = state.redoStack[state.redoStack.length - 1];
      const newRedoStack = state.redoStack.slice(0, -1);
      
      // Apply the original operation
      let newState = state;
      if (operationToRedo.operation) {
        newState = documentReducer(state, operationToRedo.operation);
      }

      return {
        ...newState,
        undoStack: [...state.undoStack, operationToRedo],
        redoStack: newRedoStack,
        canUndo: true,
        canRedo: newRedoStack.length > 0,
        updatedAt: now
      };
    }

    case ActionTypes.CLEAR_UNDO_REDO: {
      return {
        ...state,
        undoStack: [],
        redoStack: [],
        canUndo: false,
        canRedo: false,
        updatedAt: now
      };
    }

    default:
      return state;
  }
};

// Context
const DocumentContext = createContext(null);

// Provider Component
export const DocumentProvider = ({ children, initialState = {} }) => {
  const [state, dispatch] = useReducer(documentReducer, buildInitialState(initialState));

  // Action creators wrapped in useCallback for performance
  const actions = useMemo(() => ({
    initializeDocument: (payload) => dispatch({ type: ActionTypes.INITIALIZE_DOCUMENT, payload }),
    updateTitle: (title) => dispatch({ type: ActionTypes.UPDATE_TITLE, payload: title }),
    updatePageContent: (payload) => dispatch({ type: ActionTypes.UPDATE_PAGE_CONTENT, payload }),
    updatePages: (payload) => dispatch({ type: ActionTypes.UPDATE_PAGES, payload }),
    addPage: (payload) => dispatch({ type: ActionTypes.ADD_PAGE, payload }),
    deletePage: (pageIndex) => dispatch({ type: ActionTypes.DELETE_PAGE, payload: pageIndex }),
    setActivePage: (pageIndex) => dispatch({ type: ActionTypes.SET_ACTIVE_PAGE, payload: pageIndex }),
    updatePageSize: (size) => dispatch({ type: ActionTypes.UPDATE_PAGE_SIZE, payload: size }),
    resetDocument: () => dispatch({ type: ActionTypes.RESET_DOCUMENT }),
    updateContinuousContent: (content) => dispatch({ type: ActionTypes.UPDATE_CONTINUOUS_CONTENT, payload: content }),
    updatePageBoundaries: (boundaries) => dispatch({ type: ActionTypes.UPDATE_PAGE_BOUNDARIES, payload: boundaries }),
    addPageBreak: (payload) => dispatch({ type: ActionTypes.ADD_PAGE_BREAK, payload }),
    removePageBreak: (payload) => dispatch({ type: ActionTypes.REMOVE_PAGE_BREAK, payload }),
    setEditorMode: (mode) => dispatch({ type: ActionTypes.SET_EDITOR_MODE, payload: mode }),
    setZoomLevel: (level) => dispatch({ type: ActionTypes.SET_ZOOM_LEVEL, payload: level }),
    zoomIn: () => dispatch({ type: ActionTypes.ZOOM_IN }),
    zoomOut: () => dispatch({ type: ActionTypes.ZOOM_OUT }),
    resetZoom: () => dispatch({ type: ActionTypes.RESET_ZOOM }),
    updatePageMargins: (margins) => dispatch({ type: ActionTypes.UPDATE_PAGE_MARGINS, payload: margins }),
    // Undo/Redo actions
    recordOperation: (operation, inverseOperation) => dispatch({ 
      type: ActionTypes.RECORD_OPERATION, 
      payload: { operation, inverseOperation } 
    }),
    undo: () => dispatch({ type: ActionTypes.UNDO }),
    redo: () => dispatch({ type: ActionTypes.REDO }),
    clearUndoRedo: () => dispatch({ type: ActionTypes.CLEAR_UNDO_REDO })
  }), []);

  const value = useMemo(() => ({
    state,
    actions,
    dispatch
  }), [state, actions]);

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};

// Custom hook to use document context
export const useDocument = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error('useDocument must be used within a DocumentProvider');
  }
  return context;
};

// Selector hooks for specific state values
export const useDocumentState = () => {
  const { state } = useDocument();
  return state;
};

export const useDocumentActions = () => {
  const { actions } = useDocument();
  return actions;
};

export default DocumentContext;
