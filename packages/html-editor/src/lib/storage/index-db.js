/**
 * IndexedDB storage service for handling image persistence in the editor
 * Stores images as base64 data URLs with better scalability than localStorage
 * Supports storing many large images without quota limitations
 */

const DB_NAME = 'html-editor-storage';
const DB_VERSION = 1;
const STORE_NAME = 'images';

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
 * Saves an image file to IndexedDB
 * @param {File} file - Image file to store
 * @returns {Promise<string>} Promise resolving to storage key
 * @throws {Error} When image validation fails or storage operation fails
 */
export function saveImage(file) {
  return new Promise((resolve, reject) => {
    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      reject(new Error('Invalid image format. Supported formats: png, jpeg, gif, webp'));
      return;
    }

    // Check file size (5MB limit per image - can be increased as needed)
    if (file.size > 5 * 1024 * 1024) {
      reject(new Error('Image exceeds maximum size of 5MB'));
      return;
    }

    const reader = new FileReader();
    
    reader.onload = async (event) => {
      const dataUrl = event.target.result;
      
      // Calculate base64 size (3 bytes for every 4 characters)
      const base64String = dataUrl.split(',')[1];
      const sizeInBytes = (base64String.length * 3) / 4;
      
      if (sizeInBytes > 5 * 1024 * 1024) {
        reject(new Error('Image exceeds maximum size of 5MB'));
        return;
      }

      try {
        const db = await openDatabase();
        const key = `editor-image-${generateUUID()}`;
        
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const objectStore = transaction.objectStore(STORE_NAME);
        
        const imageData = {
          key,
          dataUrl,
          size: sizeInBytes,
          type: file.type,
          timestamp: Date.now()
        };
        
        const request = objectStore.add(imageData);
        
        request.onsuccess = () => {
          db.close();
          resolve(key);
        };
        
        request.onerror = () => {
          db.close();
          reject(new Error('Failed to save image to IndexedDB'));
        };
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading image file'));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Retrieves an image from IndexedDB by key
 * @param {string} key - Storage key for the image
 * @returns {Promise<string|null>} Promise resolving to data URL of the image or null if not found
 */
export async function getImage(key) {
  try {
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.get(key);
      
      request.onsuccess = () => {
        db.close();
        const result = request.result;
        resolve(result ? result.dataUrl : null);
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
 * Deletes an image from IndexedDB
 * @param {string} key - Storage key for the image
 * @returns {Promise<void>}
 */
export async function deleteImage(key) {
  try {
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
 * Clears all editor images from IndexedDB
 * @returns {Promise<void>}
 */
export async function clearImages() {
  try {
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
