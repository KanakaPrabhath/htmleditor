/**
 * IndexedDB storage service for handling image persistence in the editor
 * Stores images as Blobs for better performance and memory efficiency
 * Uses Object URLs (blob://) instead of base64 data URLs for instant loading
 * Supports storing many large images without quota limitations
 */

const DB_NAME = 'html-editor-storage';
const DB_VERSION = 2; // Incremented for schema change
const STORE_NAME = 'images';

// Cache for blob URLs to avoid recreating them
const blobUrlCache = new Map();

/**
 * Generates a UUID v4 string for unique image keys
 * @returns {string} UUID string
 */
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Opens the IndexedDB database
 * @returns {Promise<IDBDatabase>} Promise resolving to database instance
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(new Error('Failed to open IndexedDB database'));
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Create object store if it doesn't exist
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const objectStore = db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        objectStore.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}

/**
 * Saves an image file to IndexedDB as a Blob
 * Note: Images should be optimized before calling this function
 * @param {File} file - Image file to store (should be ≤2MB and ≤1200px width)
 * @returns {Promise<string>} Promise resolving to storage key
 * @throws {Error} When image validation fails or storage operation fails
 */
export async function saveImage(file) {
  // Validate file type
  const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid image format. Supported formats: png, jpeg, gif, webp');
  }

  // Check file size (2MB limit for optimized images)
  if (file.size > 2 * 1024 * 1024) {
    throw new Error('Image exceeds maximum size of 2MB. Image should be optimized before storage.');
  }

  try {
    const db = await openDatabase();
    const key = `editor-image-${generateUUID()}`;
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const objectStore = transaction.objectStore(STORE_NAME);
    
    // Store as Blob instead of base64 data URL
    const imageData = {
      key,
      blob: file, // Store the file directly as a Blob
      size: file.size,
      type: file.type,
      name: file.name,
      timestamp: Date.now()
    };
    
    return new Promise((resolve, reject) => {
      const request = objectStore.add(imageData);
      
      request.onsuccess = () => {
        db.close();
        resolve(key);
      };
      
      request.onerror = () => {
        db.close();
        reject(new Error('Failed to save image to IndexedDB'));
      };
    });
  } catch (error) {
    throw new Error(`Failed to save image: ${error.message}`);
  }
}

/**
 * Retrieves an image from IndexedDB by key and returns a Blob URL
 * @param {string} key - Storage key for the image
 * @returns {Promise<string|null>} Promise resolving to blob URL (blob://) or null if not found
 */
export async function getImage(key) {
  // Check cache first
  if (blobUrlCache.has(key)) {
    return blobUrlCache.get(key);
  }

  try {
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.get(key);
      
      request.onsuccess = () => {
        db.close();
        const result = request.result;
        
        if (result && result.blob) {
          // Create blob URL from stored blob
          const blobUrl = URL.createObjectURL(result.blob);
          
          // Cache the blob URL
          blobUrlCache.set(key, blobUrl);
          
          resolve(blobUrl);
        } else {
          resolve(null);
        }
      };
      
      request.onerror = () => {
        db.close();
        reject(new Error('Failed to retrieve image from IndexedDB'));
      };
    });
  } catch (error) {
    console.error('Error getting image:', error);
    return null;
  }
}

/**
 * Deletes an image from IndexedDB and revokes its blob URL
 * @param {string} key - Storage key for the image
 * @returns {Promise<void>}
 */
export async function deleteImage(key) {
  try {
    // Revoke blob URL if cached
    if (blobUrlCache.has(key)) {
      URL.revokeObjectURL(blobUrlCache.get(key));
      blobUrlCache.delete(key);
    }

    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.delete(key);
      
      request.onsuccess = () => {
        db.close();
        resolve();
      };
      
      request.onerror = () => {
        db.close();
        reject(new Error('Failed to delete image from IndexedDB'));
      };
    });
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}

/**
 * Clears all editor images from IndexedDB and revokes all blob URLs
 * @returns {Promise<void>}
 */
export async function clearImages() {
  try {
    // Revoke all cached blob URLs
    blobUrlCache.forEach(url => URL.revokeObjectURL(url));
    blobUrlCache.clear();

    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.clear();
      
      request.onsuccess = () => {
        db.close();
        resolve();
      };
      
      request.onerror = () => {
        db.close();
        reject(new Error('Failed to clear images from IndexedDB'));
      };
    });
  } catch (error) {
    console.error('Error clearing images:', error);
  }
}

/**
 * Gets all stored image keys
 * @returns {Promise<string[]>} Promise resolving to array of image storage keys
 */
export async function getAllImageKeys() {
  try {
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.getAllKeys();
      
      request.onsuccess = () => {
        db.close();
        resolve(request.result || []);
      };
      
      request.onerror = () => {
        db.close();
        reject(new Error('Failed to get image keys from IndexedDB'));
      };
    });
  } catch (error) {
    console.error('Error getting image keys:', error);
    return [];
  }
}

/**
 * Revokes a blob URL for a specific image key
 * Useful for memory cleanup when images are removed from the editor
 * @param {string} key - Storage key for the image
 */
export function revokeBlobUrl(key) {
  if (blobUrlCache.has(key)) {
    URL.revokeObjectURL(blobUrlCache.get(key));
    blobUrlCache.delete(key);
  }
}

/**
 * Gets the blob URL from cache without accessing IndexedDB
 * @param {string} key - Storage key for the image
 * @returns {string|null} Cached blob URL or null if not in cache
 */
export function getCachedBlobUrl(key) {
  return blobUrlCache.get(key) || null;
}
