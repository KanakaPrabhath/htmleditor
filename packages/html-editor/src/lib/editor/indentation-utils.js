/**
 * Indentation utilities for contenteditable editor
 * Handles tab indentation for selected text similar to Microsoft Word
 */

/**
 * Gets all block elements (paragraphs) that intersect with the current selection
 * @returns {Element[]} Array of block elements in the selection
 */
function getSelectedBlocks() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return [];

  const range = selection.getRangeAt(0);
  const blocks = new Set();

  // Find the contenteditable container
  let container = range.commonAncestorContainer;
  if (container.nodeType === Node.TEXT_NODE) {
    container = container.parentElement;
  }
  while (container && container.contentEditable !== 'true') {
    container = container.parentElement;
  }
  if (!container) return [];

  // Get all block elements in the container
  const allBlocks = container.querySelectorAll('p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table');

  // Find blocks that intersect with the selection
  allBlocks.forEach(block => {
    const blockRange = document.createRange();
    blockRange.selectNodeContents(block);

    if (range.intersectsNode(block)) {
      blocks.add(block);
    }
  });

  // If no blocks found but there are images in the selection, find their containers
  if (blocks.size === 0) {
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      const imgRange = document.createRange();
      imgRange.selectNode(img);

      if (range.intersectsNode(img)) {
        // Find the containing block element
        let container = img.parentElement;
        while (container && container !== container) {
          if (['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'BLOCKQUOTE', 'PRE'].includes(container.tagName)) {
            blocks.add(container);
            break;
          }
          container = container.parentElement;
        }
      }
    });
  }

  return Array.from(blocks);
}

/**
 * Removes leading indentation (&nbsp;&nbsp;&nbsp;&nbsp;) from a block element
 * Handles cases where indentation might be inside formatted text
 * @param {Element} block - The block element to outdent
 */
function removeLeadingIndentation(block) {
  // First try to remove from innerHTML if it's at the start (for backward compatibility and tests)
  if (block.innerHTML.startsWith('&nbsp;&nbsp;&nbsp;&nbsp;')) {
    block.innerHTML = block.innerHTML.replace(/^(&nbsp;){4}/, '');
    return;
  }

  // If not at the start of innerHTML, try to find it in text nodes
  try {
    // Walk through all text nodes in the block
    const walker = document.createTreeWalker(
      block,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node = walker.nextNode();
    while (node) {
      // Check if this text node starts with indentation
      const text = node.textContent;
      if (text.startsWith('\u00A0\u00A0\u00A0\u00A0')) { // \u00A0 is non-breaking space
        node.textContent = text.substring(4);
        break; // Only remove from the first text node that has indentation
      }
      node = walker.nextNode();
    }
  } catch (error) {
    // Fallback for environments without createTreeWalker (like tests)
    // Try regex replacement on innerHTML
    block.innerHTML = block.innerHTML.replace(/^(&nbsp;){4}/, '');
  }
}

/**
 * Indents or outdents selected paragraphs
 * @param {boolean} isOutdent - Whether to outdent (true) or indent (false)
 * @returns {boolean} True if operation was performed, false otherwise
 */
export function indentSelectedBlocks(isOutdent = false) {
  const blocks = getSelectedBlocks();
  if (blocks.length === 0) return false;

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return false;

  const originalRange = selection.getRangeAt(0);
  
  // Save the position of the selection relative to the container
  const firstBlock = blocks[0];
  const lastBlock = blocks[blocks.length - 1];
  
  // Store the index of each block in the DOM
  const blockIndices = blocks.map(block => {
    let index = 0;
    let sibling = block.previousSibling;
    while (sibling) {
      index++;
      sibling = sibling.previousSibling;
    }
    return { block, index, parent: block.parentElement };
  });

  // Modify the blocks
  blocks.forEach(block => {
    if (isOutdent) {
      // For outdent, remove leading indentation from text content
      removeLeadingIndentation(block);
    } else {
      // For indent, add indentation at the beginning
      block.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;' + block.innerHTML;
    }
  });

  // Restore selection by recreating range with the same blocks
  // Since we only modified innerHTML, the block elements themselves are still valid
  try {
    const newRange = document.createRange();
    
    // Helper function to get the deepest first text node
    const getFirstTextNode = (element) => {
      if (element.nodeType === Node.TEXT_NODE) {
        return element;
      }
      
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );
      return walker.nextNode();
    };
    
    // Helper function to get the deepest last text node
    const getLastTextNode = (element) => {
      if (element.nodeType === Node.TEXT_NODE) {
        return element;
      }
      
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      let lastNode = null;
      let currentNode = walker.nextNode();
      while (currentNode) {
        lastNode = currentNode;
        currentNode = walker.nextNode();
      }
      return lastNode;
    };
    
    // Set start of selection
    const firstTextNode = getFirstTextNode(firstBlock);
    if (firstTextNode) {
      newRange.setStart(firstTextNode, 0);
    } else {
      newRange.setStart(firstBlock, 0);
    }
    
    // Set end of selection
    const lastTextNode = getLastTextNode(lastBlock);
    if (lastTextNode) {
      newRange.setEnd(lastTextNode, lastTextNode.length);
    } else {
      newRange.setEnd(lastBlock, lastBlock.childNodes.length);
    }
    
    selection.removeAllRanges();
    selection.addRange(newRange);
  } catch (error) {
    // Fallback: select the entire range of modified blocks
    try {
      const fallbackRange = document.createRange();
      fallbackRange.setStartBefore(firstBlock);
      fallbackRange.setEndAfter(lastBlock);
      selection.removeAllRanges();
      selection.addRange(fallbackRange);
    } catch (fallbackError) {
      // If even the fallback fails, do nothing
      console.warn('Could not restore selection after indentation:', fallbackError);
    }
  }

  return true;
}

/**
 * Handles tab key press for indentation
 * @param {KeyboardEvent} event - The keydown event
 * @returns {boolean} True if event was handled, false otherwise
 */
export function handleTabIndentation(event) {
  if (event.key !== 'Tab') return false;

  event.preventDefault();

  const isOutdent = event.shiftKey;
  const selection = window.getSelection();

  // If there's a selection, try to indent/outdent the selected blocks
  if (selection && selection.rangeCount > 0 && !selection.getRangeAt(0).collapsed) {
    const success = indentSelectedBlocks(isOutdent);
    if (success) return true;
    // Fall through to cursor insertion if no blocks were found
  }

  // No selection or no blocks found - insert indentation at cursor (only for Tab, not Shift+Tab)
  if (!isOutdent) {
    document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
  }

  return true;
}