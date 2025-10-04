/**
 * Standalone PageManager Example
 * 
 * This example demonstrates how to use PageManager component
 * in an external app WITHOUT using the full editor or DocumentProvider.
 * 
 * Perfect for apps that want page management UI but handle
 * content rendering and state themselves.
 */

import React, { useState } from 'react';
import { PageManager, PAGE_DIMENSIONS } from '@prabhath-tharaka/html-editor';
import '@prabhath-tharaka/html-editor/styles';

function StandalonePageManagerExample() {
  // Your app's state - NO DocumentProvider needed!
  const [pages, setPages] = useState([
    { id: 'page-0', pageNumber: 1, top: 0, height: PAGE_DIMENSIONS.A4.height }
  ]);
  const [activePage, setActivePage] = useState(0);
  const [pageSize, setPageSize] = useState('A4');
  const [content, setContent] = useState('<p>Your content here...</p>');

  // Your app's logic for navigation
  const handleNavigate = (pageIndex) => {
    setActivePage(pageIndex);
    console.log(`Navigated to page ${pageIndex + 1}`);
    
    // Your custom logic: scroll, focus, etc.
    const element = document.getElementById(`page-${pageIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Your app's logic for adding pages
  const handleAddPage = () => {
    const dimensions = PAGE_DIMENSIONS[pageSize] || PAGE_DIMENSIONS.A4;
    const lastPage = pages[pages.length - 1];
    const newPage = {
      id: `page-${pages.length}`,
      pageNumber: pages.length + 1,
      top: lastPage.top + lastPage.height + 20, // 20px gap between pages
      height: dimensions.height
    };
    
    setPages([...pages, newPage]);
    setActivePage(pages.length); // Navigate to new page
    console.log(`Added page ${newPage.pageNumber}`);
  };

  // Your app's logic for deleting pages
  const handleDeletePage = (pageIndex) => {
    if (pages.length <= 1) {
      alert('Cannot delete the only page');
      return;
    }
    
    const newPages = pages.filter((_, idx) => idx !== pageIndex);
    
    // Renumber pages
    const renumberedPages = newPages.map((page, idx) => ({
      ...page,
      id: `page-${idx}`,
      pageNumber: idx + 1
    }));
    
    setPages(renumberedPages);
    
    // Adjust active page if needed
    if (activePage >= renumberedPages.length) {
      setActivePage(renumberedPages.length - 1);
    } else if (pageIndex <= activePage && activePage > 0) {
      setActivePage(activePage - 1);
    }
    
    console.log(`Deleted page ${pageIndex + 1}`);
  };

  // Your app's logic for page size changes
  const handlePageSizeChange = (newSize) => {
    const newDimensions = PAGE_DIMENSIONS[newSize] || PAGE_DIMENSIONS.A4;
    
    // Update all pages with new dimensions
    const updatedPages = pages.map((page, idx) => ({
      ...page,
      height: newDimensions.height,
      top: idx * (newDimensions.height + 20)
    }));
    
    setPageSize(newSize);
    setPages(updatedPages);
    console.log(`Changed page size to ${newSize}`);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Your custom content area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        <h1>My Custom Document Editor</h1>
        <p>Active Page: {activePage + 1} of {pages.length}</p>
        <p>Page Size: {pageSize}</p>
        
        {/* Render your pages */}
        {pages.map((page, idx) => (
          <div
            key={page.id}
            id={page.id}
            style={{
              width: PAGE_DIMENSIONS[pageSize].width,
              height: page.height,
              margin: '20px auto',
              padding: '60px 72px',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: idx === activePage ? '2px solid #0066cc' : '1px solid #ddd',
              cursor: 'pointer'
            }}
            onClick={() => handleNavigate(idx)}
          >
            <h2>Page {page.pageNumber}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        ))}
      </div>
      
      {/* PageManager Component - COMPLETELY STANDALONE */}
      <div style={{ width: '250px', borderLeft: '1px solid #ddd' }}>
        <PageManager
          pageBoundaries={pages}
          activePage={activePage}
          pageSize={pageSize}
          onNavigate={handleNavigate}
          onAddPage={handleAddPage}
          onDeletePage={handleDeletePage}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
}

export default StandalonePageManagerExample;
