/**
 * Local storage service for handling image persistence in the editor
 * Stores images as base64 data URLs with size validation
 */

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
 * Saves an image file to browser local storage
 * @param {File} file - Image file to store
 * @returns {Promise<string>} Promise resolving to storage key
 * @throws {Error} When image validation fails or storage quota exceeded
 */
export function saveImage(file) {
  return new Promise((resolve, reject) => {
    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      reject(new Error('Invalid image format. Supported formats: png, jpeg, gif, webp'));
      return;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      reject(new Error('Image exceeds maximum size of 5MB'));
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      
      // Calculate base64 size (3 bytes for every 4 characters)
      const base64String = dataUrl.split(',')[1];
      const sizeInBytes = (base64String.length * 3) / 4;
      
      if (sizeInBytes > 5 * 1024 * 1024) {
        reject(new Error('Image exceeds maximum size of 5MB'));
        return;
      }

      try {
        const key = `editor-image-${generateUUID()}`;
        localStorage.setItem(key, dataUrl);
        resolve(key);
      } catch (error) {
        if (error.name === 'QuotaExceededError') {
          reject(new Error('Storage quota exceeded'));
        } else {
          reject(error);
        }
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading image file'));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Retrieves an image from local storage by key
 * @param {string} key - Storage key for the image
 * @returns {string|null} Data URL of the image or null if not found
 */
export function getImage(key) {
  return localStorage.getItem(key);
}

/**
 * Deletes an image from local storage
 * @param {string} key - Storage key for the image
 */
export function deleteImage(key) {
  localStorage.removeItem(key);
}

/**
 * Clears all editor images from local storage
 */
export function clearImages() {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('editor-image-')) {
      localStorage.removeItem(key);
    }
  });
}

/**
 * Gets all stored image keys
 * @returns {string[]} Array of image storage keys
 */
export function getAllImageKeys() {
  return Object.keys(localStorage).filter(key => 
    key.startsWith('editor-image-')
  );
}