/**
 * Content normalization utilities
 * Handles ensuring proper HTML structure and paragraph formatting
 */

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
    attributes.push(` ${attr.name}="${attr.value}"`);
  }
  return attributes.join('');
}

/**
 * Ensures HTML content has proper paragraph structure
 * Wraps loose text and converts divs to paragraphs
 * @param {string} htmlContent - The HTML content to normalize
 * @returns {string} HTML content with proper paragraph structure
 */
export function normalizeParagraphs(htmlContent) {
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

  // Process the content to ensure paragraph structure
  const normalizedContent = ensureParagraphStructure(tempDiv);

  return normalizedContent;
}

/**
 * Ensures all content in a container has proper paragraph structure
 * @param {HTMLElement} container - Container element with content
 * @returns {string} HTML string with proper paragraph structure
 */
function ensureParagraphStructure(container) {
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

      // Handle different element types
      if (element.tagName === 'DIV') {
        // Convert div content to proper paragraph structure
        const innerContent = ensureParagraphStructure(element);
        if (innerContent.trim()) {
          fragments.push(innerContent);
        } else {
          fragments.push('<p><br></p>');
        }
      } else if (element.tagName === 'P') {
        // Keep p tags as-is (don't process children recursively)
        fragments.push(element.outerHTML);
      } else if (element.tagName === 'BR') {
        // Handle line breaks - convert to paragraph break
        fragments.push('<p><br></p>');
      } else if (['SPAN', 'STRONG', 'EM', 'B', 'I', 'U', 'A'].includes(element.tagName)) {
        // Keep formatting tags but process their content
        const innerContent = ensureParagraphStructure(element);
        const tagName = element.tagName.toLowerCase();
        const attributes = getElementAttributes(element);
        fragments.push(`<${tagName}${attributes}>${innerContent}</${tagName}>`);
      } else if (element.tagName === 'PAGE-BREAK' || element.getAttribute('data-page-break') === 'true') {
        // Keep page breaks as-is, don't process their content
        fragments.push(element.outerHTML);
      } else {
        // For other elements, keep them as-is but process children
        const innerContent = ensureParagraphStructure(element);
        const tagName = element.tagName.toLowerCase();
        const attributes = getElementAttributes(element);
        fragments.push(`<${tagName}${attributes}>${innerContent}</${tagName}>`);
      }
    }
  }

  // If no content was processed, ensure we have at least one paragraph
  if (fragments.length === 0) {
    return '<p><br></p>';
  }

  return fragments.join('');
}