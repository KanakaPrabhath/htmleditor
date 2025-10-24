/**
 * Content normalization utilities
 * Handles comprehensive HTML content normalization including:
 * - Paragraphs, headings, lists, tables
 * - Images with alignment
 * - Font formatting and sizes
 * - Indentation
 * - Page breaks
 */

// Block-level elements that should not be wrapped in paragraphs
const BLOCK_ELEMENTS = [
  'P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'UL', 'OL', 'LI', 'TABLE', 'TBODY', 'TR', 'TD', 'TH', 'THEAD', 'TFOOT',
  'BLOCKQUOTE', 'PRE', 'HR', 'FIGURE', 'FIGCAPTION',
  'PAGE-BREAK'
];

// Inline formatting elements that should be preserved
const INLINE_FORMATTING_ELEMENTS = [
  'SPAN', 'STRONG', 'EM', 'B', 'I', 'U', 'S', 'STRIKE', 'DEL', 'INS',
  'SUB', 'SUP', 'MARK', 'SMALL', 'CODE', 'KBD', 'SAMP', 'VAR',
  'A', 'ABBR', 'CITE', 'DFN', 'TIME'
];

// Self-closing elements
const VOID_ELEMENTS = ['BR', 'HR', 'IMG', 'INPUT', 'PAGE-BREAK'];

/**
 * Escapes HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped HTML text
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Gets element attributes as a string
 * @param {HTMLElement} element - The element to get attributes from
 * @returns {string} Attributes string for HTML
 */
function getElementAttributes(element) {
  const attributes = [];
  for (let i = 0; i < element.attributes.length; i++) {
    const attr = element.attributes[i];
    // Preserve all attributes including style, class, data-*, align, etc.
    attributes.push(` ${attr.name}="${attr.value}"`);
  }
  return attributes.join('');
}

/**
 * Normalizes HTML content with comprehensive support for all content types
 * Handles: paragraphs, headings, images, lists, tables, indentation,
 * image alignment, fonts, font sizes, and page breaks
 * @param {string} htmlContent - The HTML content to normalize
 * @returns {string} Normalized HTML content with proper structure
 */
export function normalizeContent(htmlContent) {
  if (!htmlContent || typeof htmlContent !== 'string') {
    return '<p><br></p>';
  }

  const trimmed = htmlContent.trim();
  if (!trimmed) {
    return '<p><br></p>';
  }

  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = trimmed;

  // Process the content to ensure proper structure
  const normalizedContent = normalizeElement(tempDiv);

  return normalizedContent || '<p><br></p>';
}

/**
 * Removes nested paragraph tags from heading elements
 * @param {HTMLElement} headingElement - The heading element to clean
 * @returns {string} Cleaned inner HTML without nested paragraphs
 */
function removeNestedParagraphs(headingElement) {
  const clonedElement = headingElement.cloneNode(true);
  
  // Find all p tags that are direct children of the heading
  const nestedParagraphs = clonedElement.querySelectorAll(':scope > p');
  
  // Remove the p tags and move their content to the heading level
  nestedParagraphs.forEach(p => {
    // Move all child nodes of the p tag to the heading level
    while (p.firstChild) {
      clonedElement.insertBefore(p.firstChild, p);
    }
    // Remove the empty p tag
    p.remove();
  });
  
  return clonedElement.innerHTML;
}

/**
 * Checks if a paragraph element contains only block elements and should be unwrapped
 * @param {HTMLElement} paragraphElement - The paragraph element to check
 * @returns {boolean} True if the paragraph should be unwrapped
 */
function shouldUnwrapParagraph(paragraphElement) {
  const childElements = Array.from(paragraphElement.children);
  
  // If paragraph has no child elements, don't unwrap
  if (childElements.length === 0) {
    return false;
  }
  
  // Check if all child elements are block elements
  return childElements.every(child => BLOCK_ELEMENTS.includes(child.tagName));
}

/**
 * Unwraps block elements from inside a paragraph
 * @param {HTMLElement} paragraphElement - The paragraph element to unwrap
 * @returns {string} HTML string with block elements unwrapped
 */
function unwrapParagraphBlockElements(paragraphElement) {
  const blockElements = [];
  let hasNonBlockContent = false;
  
  Array.from(paragraphElement.childNodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();
      if (text) {
        hasNonBlockContent = true;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node;
      if (BLOCK_ELEMENTS.includes(element.tagName)) {
        blockElements.push(element.outerHTML);
      } else {
        hasNonBlockContent = true;
      }
    }
  });
  
  // If paragraph has non-block content, we shouldn't unwrap
  if (hasNonBlockContent) {
    return paragraphElement.outerHTML;
  }
  
  // Return unwrapped block elements
  return blockElements.join('');
}

/**
 * Normalizes an element and its children
 * @param {HTMLElement} container - Container element with content
 * @returns {string} HTML string with proper structure
 */
function normalizeElement(container) {
  const fragments = [];
  const childNodes = Array.from(container.childNodes);

  for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i];

    if (node.nodeType === Node.TEXT_NODE) {
      // Handle text nodes - wrap in p if not empty
      const text = node.textContent.trim();
      if (text) {
        fragments.push(`<p>${escapeHtml(text)}</p>`);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node;
      const tagName = element.tagName;
      const lowerTagName = tagName.toLowerCase();
      const attributes = getElementAttributes(element);

      // Handle different element types
      if (tagName === 'DIV') {
        // Convert div content to proper structure
        const innerContent = normalizeElement(element);
        if (innerContent.trim()) {
          fragments.push(innerContent);
        } else {
          fragments.push('<p><br></p>');
        }
      } else if (tagName === 'P') {
        // Check if paragraph contains only block elements that should be unwrapped
        if (shouldUnwrapParagraph(element)) {
          fragments.push(unwrapParagraphBlockElements(element));
        } else {
          // Preserve paragraphs with all their attributes (style, class, etc.)
          fragments.push(element.outerHTML);
        }
      } else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(tagName)) {
        // Handle heading elements - remove any nested p tags, preserve attributes
        const headingContent = removeNestedParagraphs(element);
        fragments.push(`<${lowerTagName}${attributes}>${headingContent}</${lowerTagName}>`);
      } else if (tagName === 'BR') {
        // Handle line breaks - convert to paragraph break
        fragments.push('<p><br></p>');
      } else if (tagName === 'IMG') {
        // Preserve images with all attributes (src, alt, style, align, width, height, etc.)
        fragments.push(element.outerHTML);
      } else if (['UL', 'OL'].includes(tagName)) {
        // Preserve lists with proper structure
        fragments.push(normalizeList(element));
      } else if (tagName === 'LI') {
        // Preserve list items with attributes
        fragments.push(element.outerHTML);
      } else if (tagName === 'TABLE') {
        // Preserve tables with all structure and attributes
        fragments.push(normalizeTable(element));
      } else if (['TBODY', 'THEAD', 'TFOOT', 'TR', 'TD', 'TH'].includes(tagName)) {
        // Preserve table elements with attributes
        fragments.push(element.outerHTML);
      } else if (tagName === 'BLOCKQUOTE') {
        // Preserve blockquotes with attributes
        const innerContent = normalizeElement(element);
        fragments.push(`<blockquote${attributes}>${innerContent}</blockquote>`);
      } else if (tagName === 'PRE') {
        // Preserve preformatted text exactly as-is
        fragments.push(element.outerHTML);
      } else if (INLINE_FORMATTING_ELEMENTS.includes(tagName)) {
        // Preserve inline formatting elements with attributes (including font styles)
        fragments.push(element.outerHTML);
      } else if (tagName === 'PAGE-BREAK' || element.getAttribute('data-page-break') === 'true') {
        // Preserve page breaks as-is
        fragments.push(element.outerHTML);
      } else if (tagName === 'HR') {
        // Preserve horizontal rules
        fragments.push(element.outerHTML);
      } else if (tagName === 'FIGURE') {
        // Preserve figure elements (for images with captions)
        fragments.push(element.outerHTML);
      } else {
        // For any other elements, preserve them with their attributes
        if (VOID_ELEMENTS.includes(tagName)) {
          fragments.push(element.outerHTML);
        } else {
          const innerContent = normalizeElement(element);
          fragments.push(`<${lowerTagName}${attributes}>${innerContent}</${lowerTagName}>`);
        }
      }
    }
  }

  // If no content was processed, return empty string (let parent decide default)
  if (fragments.length === 0) {
    return '';
  }

  return fragments.join('');
}

/**
 * Normalizes list elements (UL/OL)
 * @param {HTMLElement} listElement - The list element to normalize
 * @returns {string} Normalized list HTML
 */
function normalizeList(listElement) {
  const tagName = listElement.tagName.toLowerCase();
  const attributes = getElementAttributes(listElement);
  const items = [];

  Array.from(listElement.children).forEach(child => {
    if (child.tagName === 'LI') {
      items.push(child.outerHTML);
    } else {
      // Wrap non-LI content in LI
      const content = normalizeElement(child);
      if (content.trim()) {
        items.push(`<li>${content}</li>`);
      }
    }
  });

  if (items.length === 0) {
    return `<${tagName}${attributes}><li><br></li></${tagName}>`;
  }

  return `<${tagName}${attributes}>${items.join('')}</${tagName}>`;
}

/**
 * Normalizes table elements
 * @param {HTMLElement} tableElement - The table element to normalize
 * @returns {string} Normalized table HTML
 */
function normalizeTable(tableElement) {
  // Preserve tables exactly as-is with all their attributes and structure
  // Tables are complex and should maintain their exact structure
  return tableElement.outerHTML;
}