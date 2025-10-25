import React, { useState, useEffect, useMemo } from 'react';
import { useDocumentState } from '../../context/DocumentContext';
import { 
  FileText, 
  Hash, 
  FileCheck, 
  ChevronLeft, 
  ChevronRight,
  Heading1,
  Heading2,
  Heading3,
  List
} from 'lucide-react';
import './Sidebar.css';

/**
 * Extracts headings from HTML content
 * @param {string} htmlContent - The HTML content to parse
 * @param {number|null} pageNumber - The page number for headings, or null for continuous mode
 * @param {string} prefix - Prefix for heading IDs
 * @returns {Array} Array of heading objects
 */
const extractHeadings = (htmlContent, pageNumber, prefix = '') => {
  if (!htmlContent) return [];
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  return Array.from(headingElements).map((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    const text = heading.textContent.trim();
    return text ? {
      id: `${prefix}heading-${index}`,
      level,
      text,
      page: pageNumber || 1
    } : null;
  }).filter(Boolean);
};

/**
 * Calculates word count from HTML content
 * @param {string} htmlContent - The HTML content to parse
 * @returns {number} Word count
 */
const calculateWordCount = (htmlContent) => {
  if (!htmlContent) return 0;
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const text = tempDiv.textContent || tempDiv.innerText || '';
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

/**
 * Sidebar Component
 * Displays document information, outline, and word count
 * @param {Object} props
 * @param {boolean} props.isCollapsed - Whether sidebar is collapsed
 * @param {Function} props.onToggle - Callback for collapse toggle
 * @param {number} props.wordCount - Optional word count (for continuous mode)
 * @param {number} props.pageCount - Optional page count (for continuous mode)
 */
export const Sidebar = ({ isCollapsed, onToggle, wordCount: propWordCount, pageCount: propPageCount }) => {
  const documentState = useDocumentState();
  const { pages, activePage, continuousContent } = documentState;

  // Memoize word count and outline calculations for better performance
  const { wordCount, outline } = useMemo(() => {
    // Use prop values if provided (continuous mode)
    if (propWordCount !== undefined && propPageCount !== undefined) {
      return {
        wordCount: propWordCount,
        outline: extractHeadings(continuousContent, 1, 'continuous-')
      };
    }

    // Paged mode: Calculate from pages array
    let totalWords = 0;
    const headings = [];

    pages.forEach((page, pageIndex) => {
      totalWords += calculateWordCount(page.content);
      headings.push(...extractHeadings(page.content, pageIndex + 1, `page-${pageIndex}-`));
    });

    return { wordCount: totalWords, outline: headings };
  }, [pages, propWordCount, propPageCount, continuousContent]);

  const displayPageCount = propPageCount !== undefined ? propPageCount : pages.length;

  return (
    <aside 
      className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} 
      role="complementary"
      aria-label="Document information"
      data-testid="sidebar"
    >
      <div className="sidebar-header">
        <div className="sidebar-title">
          <FileText size={18} />
          <h2>Document Info</h2>
        </div>
        <button
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {!isCollapsed && (
        <div className="sidebar-content">
          <div className="sidebar-section">
            <h3>Statistics</h3>
            <div className="stat-item">
              <div className="stat-label">
                <FileCheck size={14} />
                <span>Pages:</span>
              </div>
              <span className="stat-value">{displayPageCount}</span>
            </div>
            <div className="stat-item" data-testid="word-count">
              <div className="stat-label">
                <Hash size={14} />
                <span>Words:</span>
              </div>
              <span className="stat-value">{wordCount.toLocaleString()}</span>
            </div>
            <div className="stat-item">
              <div className="stat-label">
                <FileText size={14} />
                <span>Active Page:</span>
              </div>
              <span className="stat-value">{activePage + 1}</span>
            </div>
          </div>

          {outline.length > 0 && (
            <div className="sidebar-section">
              <h3>
                <List size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Document Outline
              </h3>
              <div className="document-outline" data-testid="outline">
                {outline.map((heading) => {
                  const HeadingIcon = heading.level === 1 ? Heading1 : heading.level === 2 ? Heading2 : Heading3;
                  return (
                    <div 
                      key={heading.id}
                      className={`outline-item outline-level-${heading.level}`}
                      style={{ marginLeft: `${(heading.level - 1) * 12}px` }}
                    >
                      <HeadingIcon size={12} className="outline-icon" />
                      <span className="outline-text">{heading.text}</span>
                      <span className="outline-page">p.{heading.page}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
