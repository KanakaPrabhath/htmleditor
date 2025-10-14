/**
 * Paste utilities for processing pasted content in the HTML editor
 * Handles conversion of div tags to p tags and proper paragraph structure
 */

import { normalizeContent } from './content-normalize-utils.js';

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

  // Use the comprehensive normalizeContent function for proper HTML structure
  return normalizeContent(htmlContent);
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
    // Process HTML content using comprehensive normalization
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