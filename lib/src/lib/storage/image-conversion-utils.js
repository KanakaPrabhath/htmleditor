/**
 * Utility functions for converting between blob URLs and base64 images
 * Used for exporting/importing HTML content with embedded images
 */

import { getImage, saveImage } from './index-db.js';

/**
 * Converts a blob URL to a base64 data URL
 * @param {string} blobUrl - The blob URL to convert
 * @returns {Promise<string>} Promise resolving to base64 data URL
 */
export async function blobUrlToBase64(blobUrl) {
  try {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error converting blob URL to base64:', error);
    throw error;
  }
}

/**
 * Converts a base64 data URL to a Blob
 * @param {string} base64Url - The base64 data URL to convert
 * @returns {Promise<Blob>} Promise resolving to Blob
 */
export async function base64ToBlob(base64Url) {
  try {
    const response = await fetch(base64Url);
    return await response.blob();
  } catch (error) {
    console.error('Error converting base64 to blob:', error);
    throw error;
  }
}

/**
 * Converts all blob URLs in HTML to base64 data URLs
 * This is useful for exporting HTML content with embedded images
 * @param {string} html - HTML content with blob URLs
 * @returns {Promise<string>} Promise resolving to HTML with base64 data URLs
 */
export async function convertBlobUrlsToBase64(html) {
  if (!html) return html;
  
  // Create a temporary DOM to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  // Find all images with blob URLs
  const images = tempDiv.querySelectorAll('img[src^="blob:"]');
  
  // Convert each blob URL to base64
  const conversionPromises = Array.from(images).map(async (img) => {
    try {
      const blobUrl = img.getAttribute('src');
      const base64Url = await blobUrlToBase64(blobUrl);
      img.setAttribute('src', base64Url);
      // Remove data-key attribute as it's no longer needed for exported content
      img.removeAttribute('data-key');
    } catch (error) {
      console.error('Failed to convert image:', error);
      // Keep the original blob URL if conversion fails
    }
  });
  
  await Promise.all(conversionPromises);
  
  return tempDiv.innerHTML;
}

/**
 * Converts all base64 data URLs in HTML to blob URLs and stores them in IndexedDB
 * This is useful for importing HTML content with embedded images
 * @param {string} html - HTML content with base64 data URLs
 * @returns {Promise<string>} Promise resolving to HTML with blob URLs
 */
export async function convertBase64ToBlobUrls(html) {
  if (!html) return html;
  
  // Create a temporary DOM to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  // Find all images with base64 data URLs
  const images = tempDiv.querySelectorAll('img[src^="data:image/"]');
  
  // Convert each base64 URL to blob and store in IndexedDB
  const conversionPromises = Array.from(images).map(async (img) => {
    try {
      const base64Url = img.getAttribute('src');
      const blob = await base64ToBlob(base64Url);
      
      // Create a File object from the blob
      const mimeType = blob.type || 'image/png';
      const extension = mimeType.split('/')[1] || 'png';
      const fileName = `imported-image-${Date.now()}.${extension}`;
      const file = new File([blob], fileName, { type: mimeType });
      
      // Save to IndexedDB and get the key
      const key = await saveImage(file);
      const blobUrl = await getImage(key);
      
      if (blobUrl) {
        img.setAttribute('src', blobUrl);
        img.setAttribute('data-key', key);
      }
    } catch (error) {
      console.error('Failed to convert and store image:', error);
      // Keep the original base64 URL if conversion fails
    }
  });
  
  await Promise.all(conversionPromises);
  
  return tempDiv.innerHTML;
}

/**
 * Gets the blob from IndexedDB by key and converts it to base64
 * @param {string} key - Storage key for the image
 * @returns {Promise<string|null>} Promise resolving to base64 data URL or null
 */
export async function getImageAsBase64(key) {
  try {
    const blobUrl = await getImage(key);
    if (!blobUrl) return null;
    
    return await blobUrlToBase64(blobUrl);
  } catch (error) {
    console.error('Error getting image as base64:', error);
    return null;
  }
}
