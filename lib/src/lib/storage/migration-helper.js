/**
 * Migration helper for converting old base64 data URLs to Blob URLs
 * This helps users transition from the old storage format to the new one
 */

import { saveImage, getImage } from './index-db.js';

/**
 * Converts a base64 data URL to a Blob
 * @param {string} dataUrl - Base64 data URL
 * @returns {Blob} Blob object
 */
function dataUrlToBlob(dataUrl) {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new Blob([u8arr], { type: mime });
}

/**
 * Migrates an image element from data URL to blob URL
 * @param {HTMLImageElement} imgElement - Image element with data URL
 * @returns {Promise<boolean>} Success status
 */
export async function migrateImageElement(imgElement) {
  try {
    const src = imgElement.getAttribute('src');
    
    // Skip if already using blob URL
    if (src.startsWith('blob:')) {
      return true;
    }
    
    // Skip if not a data URL
    if (!src.startsWith('data:')) {
      return true;
    }
    
    // Convert data URL to Blob
    const blob = dataUrlToBlob(src);
    
    // Create a File object from the Blob
    const file = new File([blob], 'migrated-image.png', { type: blob.type });
    
    // Save using new blob storage
    const key = await saveImage(file);
    const blobUrl = await getImage(key);
    
    // Update image element
    imgElement.setAttribute('src', blobUrl);
    imgElement.setAttribute('data-key', key);
    
    return true;
  } catch (error) {
    console.error('Failed to migrate image:', error);
    return false;
  }
}

/**
 * Migrates all images in a content string from data URLs to blob URLs
 * @param {string} htmlContent - HTML content containing images
 * @returns {Promise<string>} Migrated HTML content
 */
export async function migrateContentImages(htmlContent) {
  // Create a temporary container
  const container = document.createElement('div');
  container.innerHTML = htmlContent;
  
  // Find all images
  const images = container.querySelectorAll('img[src^="data:"]');
  
  // Migrate each image
  for (const img of images) {
    await migrateImageElement(img);
  }
  
  return container.innerHTML;
}
