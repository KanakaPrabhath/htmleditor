/**
 * Image optimization utilities for the HTML editor
 * Automatically compresses and resizes images to meet size and dimension constraints
 */

/**
 * Configuration for image optimization
 */
export const IMAGE_OPTIMIZATION_CONFIG = {
  maxWidth: 1200,
  maxHeight: 1200,
  maxSizeBytes: 2 * 1024 * 1024, // 2MB
  initialQuality: 0.9,
  minQuality: 0.6,
  qualityStep: 0.05
};

/**
 * Optimizes an image file to meet size and dimension constraints
 * @param {File} file - Original image file
 * @param {Object} options - Optimization options
 * @returns {Promise<{file: File, width: number, height: number, originalSize: number, optimizedSize: number, wasOptimized: boolean}>}
 */
export async function optimizeImage(file, options = {}) {
  const config = { ...IMAGE_OPTIMIZATION_CONFIG, ...options };
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read image file'));
    };
    
    img.onload = async () => {
      try {
        let { width, height } = img;
        const originalWidth = width;
        const originalHeight = height;
        const aspectRatio = width / height;
        let wasResized = false;
        
        // Calculate new dimensions if image exceeds max dimensions
        if (width > config.maxWidth || height > config.maxHeight) {
          wasResized = true;
          if (width > height) {
            width = Math.min(width, config.maxWidth);
            height = width / aspectRatio;
          } else {
            height = Math.min(height, config.maxHeight);
            width = height * aspectRatio;
          }
          
          // Round to integers
          width = Math.round(width);
          height = Math.round(height);
        }
        
        // Create canvas and draw resized image
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        
        // Enable high-quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, width, height);
        
        // Determine output format (preserve PNG transparency, otherwise use JPEG)
        const outputType = file.type === 'image/png' && hasTransparency(ctx, width, height)
          ? 'image/png'
          : 'image/jpeg';
        
        // Compress to meet size constraint
        const optimizedBlob = await compressToSize(
          canvas,
          outputType,
          config.maxSizeBytes,
          config.initialQuality,
          config.minQuality,
          config.qualityStep
        );
        
        // Create optimized file
        const extension = outputType === 'image/png' ? '.png' : '.jpg';
        const fileName = file.name.replace(/\.[^/.]+$/, '') + extension;
        const optimizedFile = new File([optimizedBlob], fileName, { type: outputType });
        
        const wasCompressed = optimizedFile.size < file.size;
        
        resolve({
          file: optimizedFile,
          width,
          height,
          originalSize: file.size,
          optimizedSize: optimizedFile.size,
          wasOptimized: wasResized || wasCompressed,
          wasResized,
          wasCompressed,
          originalWidth,
          originalHeight
        });
      } catch (error) {
        reject(new Error(`Image optimization failed: ${error.message}`));
      }
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * Checks if an image has transparency
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {boolean} True if image has transparent pixels
 */
function hasTransparency(ctx, width, height) {
  try {
    // Sample pixels to check for transparency (not all pixels for performance)
    const sampleSize = 10;
    const stepX = Math.max(1, Math.floor(width / sampleSize));
    const stepY = Math.max(1, Math.floor(height / sampleSize));
    
    for (let y = 0; y < height; y += stepY) {
      for (let x = 0; x < width; x += stepX) {
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        // Check alpha channel (index 3)
        if (pixel[3] < 255) {
          return true;
        }
      }
    }
    
    return false;
  } catch (error) {
    // If we can't check, assume no transparency
    return false;
  }
}

/**
 * Compresses a canvas to meet size constraint by adjusting quality
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {string} outputType - Output MIME type
 * @param {number} maxSize - Maximum size in bytes
 * @param {number} initialQuality - Starting quality (0-1)
 * @param {number} minQuality - Minimum quality (0-1)
 * @param {number} qualityStep - Quality reduction step
 * @returns {Promise<Blob>} Compressed blob
 */
async function compressToSize(canvas, outputType, maxSize, initialQuality, minQuality, qualityStep) {
  let quality = initialQuality;
  let blob = null;
  
  // For PNG, try initial quality first
  if (outputType === 'image/png') {
    blob = await canvasToBlob(canvas, outputType, quality);
    
    // If PNG is too large, convert to JPEG
    if (blob.size > maxSize) {
      return compressToSize(canvas, 'image/jpeg', maxSize, initialQuality, minQuality, qualityStep);
    }
    
    return blob;
  }
  
  // For JPEG, iteratively reduce quality until size constraint is met
  while (quality >= minQuality) {
    blob = await canvasToBlob(canvas, outputType, quality);
    
    if (blob.size <= maxSize) {
      return blob;
    }
    
    quality -= qualityStep;
  }
  
  // If still too large at minimum quality, return best effort
  return blob;
}

/**
 * Converts canvas to blob
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {string} type - MIME type
 * @param {number} quality - Quality (0-1)
 * @returns {Promise<Blob>} Blob
 */
function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Failed to create blob from canvas'));
          return;
        }
        resolve(blob);
      },
      type,
      quality
    );
  });
}

/**
 * Checks if an image needs optimization
 * @param {File} file - Image file to check
 * @returns {Promise<boolean>} True if optimization is needed
 */
export async function shouldOptimizeImage(file) {
  // Always optimize if file exceeds 2MB
  if (file.size > IMAGE_OPTIMIZATION_CONFIG.maxSizeBytes) {
    return true;
  }
  
  // Check dimensions
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();
    
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    
    img.onload = () => {
      const needsResize = img.width > IMAGE_OPTIMIZATION_CONFIG.maxWidth || 
                         img.height > IMAGE_OPTIMIZATION_CONFIG.maxHeight;
      resolve(needsResize);
    };
    
    img.onerror = () => {
      resolve(false);
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * Format bytes to human-readable size
 * @param {number} bytes - Size in bytes
 * @returns {string} Formatted size string
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Gets optimization info message
 * @param {Object} result - Optimization result
 * @returns {string} Info message
 */
export function getOptimizationMessage(result) {
  if (!result.wasOptimized) {
    return 'Image inserted';
  }
  
  const parts = [];
  
  if (result.wasResized) {
    parts.push(`resized from ${result.originalWidth}×${result.originalHeight} to ${result.width}×${result.height}`);
  }
  
  if (result.wasCompressed) {
    parts.push(`compressed from ${formatFileSize(result.originalSize)} to ${formatFileSize(result.optimizedSize)}`);
  }
  
  return `Image optimized: ${parts.join(', ')}`;
}
