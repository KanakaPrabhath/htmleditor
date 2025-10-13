/**
 * Paste utilities for processing pasted content in the HTML editor
 * Handles conversion of div tags to p tags and proper paragraph structure
 */

/**
 * Processes pasted HTML content to ensure proper paragraph structure
 * Converts div tags to p tags and handles line breaks appropriately
 * @param {string} htmlContent - The raw HTML content from clipboard
 * @returns {string} Processed HTML content with proper paragraph tags
 */
export function processPastedContent(htmlContent) {
  if (!htmlContent || typeof htmlContent !== 'string') {
    return htmlContent;
  }

  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  // Process the content to convert divs to ps and handle structure
  const processedContent = convertDivsToParagraphs(tempDiv);

  return processedContent;
}

/**
 * Converts div elements to p elements while preserving structure
 * @param {HTMLElement} container - Container element with pasted content
 * @returns {string} HTML string with divs converted to paragraphs
 */
function convertDivsToParagraphs(container) {
  const fragments = [];
  const childNodes = Array.from(container.childNodes);

  for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i];

    if (node.nodeType === Node.TEXT_NODE) {
      // Handle text nodes - wrap in p if not empty
      const text = node.textContent.trim();
      if (text) {
        // Check if this is a line break (multiple whitespace/newlines)
        if (text.match(/^\s*$/) && text.includes('\n')) {
          // Convert line breaks to paragraph breaks
          const lines = text.split('\n').filter(line => line.trim());
          if (lines.length > 0) {
            lines.forEach(line => {
              if (line.trim()) {
                fragments.push(`<p>${escapeHtml(line.trim())}</p>`);
              }
            });
          } else {
            // Just whitespace, add a line break
            fragments.push('<p><br></p>');
          }
        } else {
          fragments.push(`<p>${escapeHtml(text)}</p>`);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node;

      // Handle different element types
      if (element.tagName === 'DIV') {
        // Convert div to p, but process its children first
        const innerContent = convertDivsToParagraphs(element);
        if (innerContent.trim()) {
          fragments.push(`<p>${innerContent}</p>`);
        } else {
          fragments.push('<p><br></p>');
        }
      } else if (element.tagName === 'P') {
        // Keep p tags but process their content
        const innerContent = convertDivsToParagraphs(element);
        fragments.push(`<p>${innerContent}</p>`);
      } else if (element.tagName === 'BR') {
        // Handle line breaks - convert to paragraph break
        fragments.push('<p><br></p>');
      } else if (['SPAN', 'STRONG', 'EM', 'B', 'I', 'U', 'A'].includes(element.tagName)) {
        // Keep formatting tags but process their content
        const innerContent = convertDivsToParagraphs(element);
        const tagName = element.tagName.toLowerCase();
        const attributes = getElementAttributes(element);
        fragments.push(`<${tagName}${attributes}>${innerContent}</${tagName}>`);
      } else {
        // For other elements, keep them as-is but process children
        const innerContent = convertDivsToParagraphs(element);
        const tagName = element.tagName.toLowerCase();
        const attributes = getElementAttributes(element);
        fragments.push(`<${tagName}${attributes}>${innerContent}</${tagName}>`);
      }
    }
  }

  return fragments.join('');
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
 * Handles paste event for contenteditable
 * @param {ClipboardEvent} event - The paste event
 * @returns {string|null} Processed HTML content to insert, or null to allow default behavior
 */
export function handlePaste(event) {
  // Prevent default paste behavior
  event.preventDefault();

  // Get pasted content
  const clipboardData = event.clipboardData || window.clipboardData;
  if (!clipboardData) {
    return null;
  }

  // Try to get HTML content first, fall back to plain text
  let pastedContent = clipboardData.getData('text/html') || clipboardData.getData('text/plain');

  if (!pastedContent) {
    return null;
  }

  // If we got plain text, convert it to HTML with proper paragraph structure
  if (!clipboardData.getData('text/html')) {
    pastedContent = convertPlainTextToHtml(pastedContent);
  } else {
    // Process HTML content
    pastedContent = processPastedContent(pastedContent);
  }

  // Insert the processed content
  document.execCommand('insertHTML', false, pastedContent);

  return pastedContent;
}

/**
 * Converts plain text to HTML with proper paragraph structure
 * @param {string} text - Plain text content
 * @returns {string} HTML content with paragraphs
 */
function convertPlainTextToHtml(text) {
  if (!text) return '';

  // Split by double newlines (paragraph breaks) and single newlines
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());

  if (paragraphs.length === 0) {
    return '<p><br></p>';
  }

  return paragraphs.map(paragraph => {
    // Handle single lines within paragraphs
    const lines = paragraph.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      return '<p><br></p>';
    }

    // Join lines with line breaks, but wrap in paragraph
    const content = lines.map(line => escapeHtml(line.trim())).join('<br>');
    return `<p>${content}</p>`;
  }).join('');
}