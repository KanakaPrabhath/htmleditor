import React from 'react';
import { useDocumentState } from '../../context/DocumentContext';
import PageManager from './PageManager';

/**
 * PageManagerConnected - Context-connected wrapper for PageManager
 * 
 * This component connects the standalone PageManager to the DocumentContext
 * Used internally by ContentEditableEditor when showPageManager is true
 * 
 * External apps can use:
 * 1. PageManager directly with their own state/callbacks
 * 2. This PageManagerConnected if they're using DocumentProvider
 */
const PageManagerConnected = ({ 
  onNavigate, 
  onAddPage, 
  onDeletePage, 
  onPageSizeChange 
}) => {
  const { pageBoundaries, activePage, pageSize } = useDocumentState();

  return (
    <PageManager
      pageBoundaries={pageBoundaries}
      activePage={activePage}
      pageSize={pageSize}
      onNavigate={onNavigate}
      onAddPage={onAddPage}
      onDeletePage={onDeletePage}
      onPageSizeChange={onPageSizeChange}
    />
  );
};

export default PageManagerConnected;
