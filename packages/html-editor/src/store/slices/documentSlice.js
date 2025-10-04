import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_PAGE_SIZE = 'A4';
const EMPTY_PARAGRAPH = '<p><br></p>';

const createEmptyPage = (index, size = DEFAULT_PAGE_SIZE) => ({
  id: uuidv4(),
  index,
  size,
  content: EMPTY_PARAGRAPH,
  images: [],
  isBreakPoint: false
});

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

const sanitizeContent = (html) => {
  if (typeof html !== 'string' || html.trim() === '') {
    return EMPTY_PARAGRAPH;
  }
  return html;
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
    // Continuous mode state
    editorMode: overrides.editorMode || 'continuous', // 'continuous' or 'paged'
    continuousContent: overrides.continuousContent || EMPTY_PARAGRAPH,
    pageBoundaries: overrides.pageBoundaries || []
  };
};

const initialState = buildInitialState();

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    initializeDocument: (state, action) => {
      const { initialContent = EMPTY_PARAGRAPH, pageSize = DEFAULT_PAGE_SIZE } = action.payload || {};
      const page = { ...createEmptyPage(0, pageSize), content: sanitizeContent(initialContent) };
      return buildInitialState({
        title: state.title,
        pageSize,
        pages: [page]
      });
    },

    updateTitle: (state, action) => {
      state.title = action.payload;
      state.updatedAt = new Date().toISOString();
    },

    updatePageContent: (state, action) => {
      const { pageIndex, content } = action.payload;
      if (pageIndex < 0 || pageIndex >= state.pages.length) {
        return;
      }

      state.pages[pageIndex].content = sanitizeContent(content);
      state.updatedAt = new Date().toISOString();
    },

    updatePages: (state, action) => {
      const payload = Array.isArray(action.payload)
        ? { pages: action.payload }
        : action.payload || {};

      const nextPages = withMinimumPage(payload.pages || [], state.pageSize);
      state.pages = nextPages;
      state.activePage = Math.min(state.activePage, nextPages.length - 1);
      state.pageBreaks = Array.isArray(payload.pageBreaks)
        ? payload.pageBreaks
        : nextPages.slice(0, -1).map((_, index) => ({
            id: `auto-break-${index}`,
            pageNumber: index + 1
          }));
      state.totalPages = nextPages.length;
      state.updatedAt = new Date().toISOString();
    },

    addPage: (state, action) => {
      const insertIndex = typeof action.payload?.index === 'number'
        ? Math.min(Math.max(action.payload.index, 0), state.pages.length)
        : state.pages.length;

      state.pages.splice(insertIndex, 0, createEmptyPage(insertIndex, state.pageSize));
      state.pages = state.pages.map((page, index) => ({
        ...page,
        index,
        size: state.pageSize
      }));

      state.activePage = insertIndex;
      state.pageBreaks = state.pages.slice(0, -1).map((_, index) => ({
        id: `auto-break-${index}`,
        pageNumber: index + 1
      }));
      state.totalPages = state.pages.length;
      state.updatedAt = new Date().toISOString();
    },

    deletePage: (state, action) => {
      const pageIndex = action.payload;
      if (state.pages.length <= 1) {
        return;
      }

      state.pages.splice(pageIndex, 1);
      state.pages = state.pages.map((page, index) => ({
        ...page,
        index,
        size: state.pageSize
      }));

      if (state.activePage >= state.pages.length) {
        state.activePage = state.pages.length - 1;
      } else if (pageIndex <= state.activePage && state.activePage > 0) {
        state.activePage -= 1;
      }

      state.pageBreaks = state.pages.slice(0, -1).map((_, index) => ({
        id: `auto-break-${index}`,
        pageNumber: index + 1
      }));
      state.totalPages = state.pages.length;
      state.updatedAt = new Date().toISOString();
    },

    setActivePage: (state, action) => {
      const pageIndex = action.payload;
      if (pageIndex >= 0 && pageIndex < state.pages.length && pageIndex !== state.activePage) {
        state.activePage = pageIndex;
        state.updatedAt = new Date().toISOString();
      }
    },

    updatePageSize: (state, action) => {
      const newSize = action.payload;
      state.pageSize = newSize;
      state.pages = state.pages.map((page, index) => ({
        ...page,
        index,
        size: newSize
      }));
      state.pageBreaks = state.pages.slice(0, -1).map((_, index) => ({
        id: `auto-break-${index}`,
        pageNumber: index + 1
      }));
      state.updatedAt = new Date().toISOString();
    },

    resetDocument: () => buildInitialState(),

    // Continuous mode actions
    updateContinuousContent: (state, action) => {
      state.continuousContent = sanitizeContent(action.payload);
      state.updatedAt = new Date().toISOString();
    },

    updatePageBoundaries: (state, action) => {
      state.pageBoundaries = action.payload || [];
      state.totalPages = state.pageBoundaries.length;
      state.updatedAt = new Date().toISOString();
    },

    // Manual page operations for continuous mode
    addPageBreak: (state, action) => {
      const { position = 'end', pageIndex } = action.payload || {};
      
      // Create page break tag
      const pageBreakTag = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      
      if (position === 'end') {
        // Add page break at the end
        state.continuousContent = state.continuousContent + pageBreakTag + '<p><br></p>';
      } else if (typeof position === 'number') {
        // Insert at specific position (character index)
        const before = state.continuousContent.substring(0, position);
        const after = state.continuousContent.substring(position);
        state.continuousContent = before + pageBreakTag + after;
      } else if (typeof pageIndex === 'number') {
        // Insert page break after a specific page
        if (typeof document !== 'undefined') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = state.continuousContent;
          
          const pageBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
          
          if (pageIndex === 0 && pageBreaks.length === 0) {
            // First page, add at end
            state.continuousContent = state.continuousContent + pageBreakTag + '<p><br></p>';
          } else if (pageIndex < pageBreaks.length) {
            // Insert after the specified page break
            const targetBreak = pageBreaks[pageIndex];
            const newBreak = document.createElement('page-break');
            newBreak.setAttribute('data-page-break', 'true');
            newBreak.setAttribute('style', 'display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;');
            
            const newParagraph = document.createElement('p');
            newParagraph.innerHTML = '<br>';
            
            targetBreak.parentNode.insertBefore(newBreak, targetBreak.nextSibling);
            newBreak.parentNode.insertBefore(newParagraph, newBreak.nextSibling);
            
            state.continuousContent = tempDiv.innerHTML;
          } else {
            // Add at end
            state.continuousContent = state.continuousContent + pageBreakTag + '<p><br></p>';
          }
        }
      }
      
      state.updatedAt = new Date().toISOString();
    },

    removePageBreak: (state, action) => {
      const { pageIndex } = action.payload || {};
      
      if (typeof pageIndex !== 'number') {
        return;
      }
      
      // Create a temporary div to parse HTML
      if (typeof document !== 'undefined') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = state.continuousContent;
        
        // Find all page breaks
        const pageBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
        
        // Remove the page break at the specified index
        // For first page (pageIndex 0), we remove the first page break
        if (pageBreaks[pageIndex]) {
          pageBreaks[pageIndex].remove();
        }
        
        // Renumber all remaining page breaks
        const remainingBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
        remainingBreaks.forEach((breakEl, index) => {
          // Page number is index + 2 (page 1 has no break, first break creates page 2)
          breakEl.setAttribute('data-page-number', String(index + 2));
        });
        
        state.continuousContent = tempDiv.innerHTML;
        state.updatedAt = new Date().toISOString();
      }
    },

    setEditorMode: (state, action) => {
      const newMode = action.payload;
      if (newMode !== state.editorMode) {
        state.editorMode = newMode;
        
        // Convert content between modes
        if (newMode === 'continuous') {
          // Merge all pages into continuous content
          const allContent = state.pages
            .map(page => page.content)
            .filter(content => content && content !== EMPTY_PARAGRAPH)
            .join('\n');
          state.continuousContent = allContent || EMPTY_PARAGRAPH;
        } else {
          // Split continuous content into pages (will be handled by reflow)
          if (state.continuousContent && state.continuousContent !== EMPTY_PARAGRAPH) {
            state.pages = [{ ...createEmptyPage(0, state.pageSize), content: state.continuousContent }];
          }
        }
        
        state.updatedAt = new Date().toISOString();
      }
    },

    // Bulk page operations
    insertPageAt: (state, action) => {
      const { pageIndex, content = EMPTY_PARAGRAPH } = action.payload || {};
      
      if (typeof pageIndex !== 'number' || pageIndex < 0) {
        return;
      }

      // In continuous mode, insert a page break at the appropriate position
      if (state.editorMode === 'continuous') {
        if (typeof document !== 'undefined') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = state.continuousContent;
          
          const pageBreaks = tempDiv.querySelectorAll('page-break, [data-page-break="true"]');
          const pageBreakTag = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          
          if (pageIndex === 0) {
            // Insert at beginning
            state.continuousContent = content + pageBreakTag + state.continuousContent;
          } else if (pageIndex >= pageBreaks.length) {
            // Insert at end
            state.continuousContent = state.continuousContent + pageBreakTag + content;
          } else {
            // Insert at specific position
            const targetBreak = pageBreaks[pageIndex - 1];
            const newContent = document.createElement('div');
            newContent.innerHTML = content;
            
            const newBreak = document.createElement('page-break');
            newBreak.setAttribute('data-page-break', 'true');
            newBreak.setAttribute('style', 'display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;');
            
            targetBreak.parentNode.insertBefore(newContent, targetBreak.nextSibling);
            targetBreak.parentNode.insertBefore(newBreak, newContent.nextSibling);
            
            state.continuousContent = tempDiv.innerHTML;
          }
        }
      }
      
      state.updatedAt = new Date().toISOString();
    },

    movePageTo: (state, action) => {
      const { fromIndex, toIndex } = action.payload || {};
      
      if (typeof fromIndex !== 'number' || typeof toIndex !== 'number') {
        return;
      }

      if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) {
        return;
      }

      // In continuous mode, we need to rearrange content between page breaks
      if (state.editorMode === 'continuous' && typeof document !== 'undefined') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = state.continuousContent;
        
        const pageBreaks = Array.from(tempDiv.querySelectorAll('page-break, [data-page-break="true"]'));
        
        // Extract page content segments
        const segments = [];
        let currentNode = tempDiv.firstChild;
        let currentSegment = [];
        
        while (currentNode) {
          const isPageBreak = currentNode.nodeType === 1 && 
            (currentNode.tagName.toLowerCase() === 'page-break' || 
             currentNode.getAttribute('data-page-break') === 'true');
          
          if (isPageBreak) {
            segments.push(currentSegment);
            currentSegment = [];
          } else {
            currentSegment.push(currentNode.cloneNode(true));
          }
          
          currentNode = currentNode.nextSibling;
        }
        
        // Add last segment
        if (currentSegment.length > 0) {
          segments.push(currentSegment);
        }
        
        // Validate indices
        if (fromIndex >= segments.length || toIndex >= segments.length) {
          return;
        }
        
        // Move the segment
        const [movedSegment] = segments.splice(fromIndex, 1);
        segments.splice(toIndex, 0, movedSegment);
        
        // Rebuild content
        const newContent = [];
        segments.forEach((segment, index) => {
          segment.forEach(node => newContent.push(node.outerHTML || node.textContent));
          if (index < segments.length - 1) {
            newContent.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }
        });
        
        state.continuousContent = newContent.join('');
      }
      
      state.updatedAt = new Date().toISOString();
    },

    duplicatePage: (state, action) => {
      const { pageIndex } = action.payload || {};
      
      if (typeof pageIndex !== 'number' || pageIndex < 0) {
        return;
      }

      // In continuous mode, duplicate content of a specific page
      if (state.editorMode === 'continuous' && typeof document !== 'undefined') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = state.continuousContent;
        
        const pageBreaks = Array.from(tempDiv.querySelectorAll('page-break, [data-page-break="true"]'));
        
        // Extract page content
        let pageContent = [];
        let currentNode = tempDiv.firstChild;
        let currentPageIndex = 0;
        
        while (currentNode) {
          const isPageBreak = currentNode.nodeType === 1 && 
            (currentNode.tagName.toLowerCase() === 'page-break' || 
             currentNode.getAttribute('data-page-break') === 'true');
          
          if (isPageBreak) {
            if (currentPageIndex === pageIndex) {
              break;
            }
            currentPageIndex++;
            pageContent = [];
          } else if (currentPageIndex === pageIndex) {
            pageContent.push(currentNode.cloneNode(true));
          }
          
          currentNode = currentNode.nextSibling;
        }
        
        // Insert duplicated content
        if (pageContent.length > 0 && pageIndex < pageBreaks.length) {
          const targetBreak = pageBreaks[pageIndex];
          const pageBreakTag = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          
          const contentHTML = pageContent.map(node => node.outerHTML || node.textContent).join('');
          const duplicateContent = contentHTML + pageBreakTag;
          
          const wrapper = document.createElement('div');
          wrapper.innerHTML = duplicateContent;
          
          let insertAfter = targetBreak;
          Array.from(wrapper.children).forEach(child => {
            insertAfter.parentNode.insertBefore(child.cloneNode(true), insertAfter.nextSibling);
            insertAfter = insertAfter.nextSibling;
          });
          
          state.continuousContent = tempDiv.innerHTML;
        }
      }
      
      state.updatedAt = new Date().toISOString();
    }
  }
});

export const {
  initializeDocument,
  updateTitle,
  updatePageContent,
  updatePages,
  addPage,
  deletePage,
  setActivePage,
  updatePageSize,
  resetDocument,
  updateContinuousContent,
  updatePageBoundaries,
  addPageBreak,
  removePageBreak,
  setEditorMode,
  insertPageAt,
  movePageTo,
  duplicatePage
} = documentSlice.actions;

export default documentSlice.reducer;