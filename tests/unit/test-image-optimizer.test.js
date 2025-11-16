import { describe, it, expect, beforeEach, vi } from 'vitest';
import { 
  optimizeImage, 
  shouldOptimizeImage, 
  formatFileSize,
  getOptimizationMessage,
  IMAGE_OPTIMIZATION_CONFIG
} from '../../lib/src/lib/storage/image-optimizer';

// Mock canvas and image
global.HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
  drawImage: vi.fn(),
  getImageData: vi.fn(() => ({
    data: new Uint8ClampedArray([255, 255, 255, 255])
  })),
  imageSmoothingEnabled: true,
  imageSmoothingQuality: 'high'
}));

global.HTMLCanvasElement.prototype.toBlob = vi.fn(function(callback, type, quality) {
  // Simulate blob creation with size based on quality
  const baseSize = this.width * this.height * 0.1;
  const size = Math.floor(baseSize * (quality || 0.9));
  const blob = new Blob(['x'.repeat(size)], { type: type || 'image/jpeg' });
  setTimeout(() => callback(blob), 10);
});

describe('Image Optimizer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('optimizeImage', () => {
    it('should resize image exceeding max width', async () => {
      // Create a mock large image file
      const largeImageData = new Uint8Array(100000);
      const file = new File([largeImageData], 'large.jpg', { type: 'image/jpeg' });
      
      // Mock Image to return dimensions exceeding max width
      const mockImage = {
        width: 2400,
        height: 1600,
        onload: null,
        onerror: null,
        src: ''
      };
      
      global.Image = vi.fn(() => mockImage);
      
      // Mock FileReader
      const mockReader = {
        onload: null,
        onerror: null,
        readAsDataURL: vi.fn(function() {
          this.onload({ target: { result: 'data:image/jpeg;base64,fake' } });
          setTimeout(() => mockImage.onload(), 10);
        })
      };
      
      global.FileReader = vi.fn(() => mockReader);
      
      const result = await optimizeImage(file);
      
      expect(result.wasOptimized).toBe(true);
      expect(result.wasResized).toBe(true);
      expect(result.width).toBe(IMAGE_OPTIMIZATION_CONFIG.maxWidth);
      expect(result.width).toBeLessThan(result.originalWidth);
    });

    it('should compress image exceeding 2MB', async () => {
      // Create a 3MB mock file
      const largeData = new Uint8Array(3 * 1024 * 1024);
      const file = new File([largeData], 'large.jpg', { type: 'image/jpeg' });
      
      const mockImage = {
        width: 800,
        height: 600,
        onload: null,
        onerror: null,
        src: ''
      };
      
      global.Image = vi.fn(() => mockImage);
      
      const mockReader = {
        onload: null,
        onerror: null,
        readAsDataURL: vi.fn(function() {
          this.onload({ target: { result: 'data:image/jpeg;base64,fake' } });
          setTimeout(() => mockImage.onload(), 10);
        })
      };
      
      global.FileReader = vi.fn(() => mockReader);
      
      const result = await optimizeImage(file);
      
      expect(result.optimizedSize).toBeLessThanOrEqual(IMAGE_OPTIMIZATION_CONFIG.maxSizeBytes);
      expect(result.wasCompressed).toBe(true);
    });

    it('should preserve aspect ratio when resizing', async () => {
      const file = new File([new Uint8Array(1000)], 'test.jpg', { type: 'image/jpeg' });
      
      const mockImage = {
        width: 1600,
        height: 900,
        onload: null,
        onerror: null,
        src: ''
      };
      
      global.Image = vi.fn(() => mockImage);
      
      const mockReader = {
        onload: null,
        onerror: null,
        readAsDataURL: vi.fn(function() {
          this.onload({ target: { result: 'data:image/jpeg;base64,fake' } });
          setTimeout(() => mockImage.onload(), 10);
        })
      };
      
      global.FileReader = vi.fn(() => mockReader);
      
      const result = await optimizeImage(file);
      
      const originalAspectRatio = mockImage.width / mockImage.height;
      const newAspectRatio = result.width / result.height;
      
      // Allow small floating point difference
      expect(Math.abs(originalAspectRatio - newAspectRatio)).toBeLessThan(0.01);
    });

    it('should not optimize images already under constraints', async () => {
      const file = new File([new Uint8Array(500 * 1024)], 'small.jpg', { type: 'image/jpeg' });
      
      const mockImage = {
        width: 800,
        height: 600,
        onload: null,
        onerror: null,
        src: ''
      };
      
      global.Image = vi.fn(() => mockImage);
      
      const mockReader = {
        onload: null,
        onerror: null,
        readAsDataURL: vi.fn(function() {
          this.onload({ target: { result: 'data:image/jpeg;base64,fake' } });
          setTimeout(() => mockImage.onload(), 10);
        })
      };
      
      global.FileReader = vi.fn(() => mockReader);
      
      const result = await optimizeImage(file);
      
      // Should not be resized (dimensions OK)
      expect(result.wasResized).toBe(false);
      expect(result.width).toBe(mockImage.width);
      expect(result.height).toBe(mockImage.height);
    });
  });

  describe('shouldOptimizeImage', () => {
    it('should return true for files over 2MB', async () => {
      const largeFile = new File([new Uint8Array(3 * 1024 * 1024)], 'large.jpg', { 
        type: 'image/jpeg' 
      });
      
      const result = await shouldOptimizeImage(largeFile);
      expect(result).toBe(true);
    });

    it('should check dimensions for files under 2MB', async () => {
      const file = new File([new Uint8Array(1 * 1024 * 1024)], 'test.jpg', { 
        type: 'image/jpeg' 
      });
      
      const mockImage = {
        width: 2000,
        height: 1500,
        onload: null,
        onerror: null,
        src: ''
      };
      
      global.Image = vi.fn(() => mockImage);
      
      const mockReader = {
        onload: null,
        onerror: null,
        readAsDataURL: vi.fn(function() {
          this.onload({ target: { result: 'data:image/jpeg;base64,fake' } });
          setTimeout(() => mockImage.onload(), 10);
        })
      };
      
      global.FileReader = vi.fn(() => mockReader);
      
      const result = await shouldOptimizeImage(file);
      expect(result).toBe(true); // Exceeds max width
    });
  });

  describe('formatFileSize', () => {
    it('should format bytes correctly', () => {
      expect(formatFileSize(0)).toBe('0 Bytes');
      expect(formatFileSize(1024)).toBe('1 KB');
      expect(formatFileSize(1024 * 1024)).toBe('1 MB');
      expect(formatFileSize(1536 * 1024)).toBe('1.5 MB');
    });
  });

  describe('getOptimizationMessage', () => {
    it('should return message for unoptimized image', () => {
      const result = {
        wasOptimized: false
      };
      
      expect(getOptimizationMessage(result)).toBe('Image inserted');
    });

    it('should return message for resized image', () => {
      const result = {
        wasOptimized: true,
        wasResized: true,
        wasCompressed: false,
        originalWidth: 2400,
        originalHeight: 1600,
        width: 1200,
        height: 800,
        originalSize: 3000000,
        optimizedSize: 3000000
      };
      
      const message = getOptimizationMessage(result);
      expect(message).toContain('resized');
      expect(message).toContain('2400×1600');
      expect(message).toContain('1200×800');
    });

    it('should return message for compressed image', () => {
      const result = {
        wasOptimized: true,
        wasResized: false,
        wasCompressed: true,
        originalWidth: 800,
        originalHeight: 600,
        width: 800,
        height: 600,
        originalSize: 3000000,
        optimizedSize: 1500000
      };
      
      const message = getOptimizationMessage(result);
      expect(message).toContain('compressed');
      expect(message).toContain('MB');
    });

    it('should return message for both resized and compressed', () => {
      const result = {
        wasOptimized: true,
        wasResized: true,
        wasCompressed: true,
        originalWidth: 2400,
        originalHeight: 1600,
        width: 1200,
        height: 800,
        originalSize: 5000000,
        optimizedSize: 1500000
      };
      
      const message = getOptimizationMessage(result);
      expect(message).toContain('resized');
      expect(message).toContain('compressed');
    });
  });

  describe('Configuration', () => {
    it('should have correct default constraints', () => {
      expect(IMAGE_OPTIMIZATION_CONFIG.maxWidth).toBe(1200);
      expect(IMAGE_OPTIMIZATION_CONFIG.maxHeight).toBe(1200);
      expect(IMAGE_OPTIMIZATION_CONFIG.maxSizeBytes).toBe(2 * 1024 * 1024);
      expect(IMAGE_OPTIMIZATION_CONFIG.initialQuality).toBe(0.9);
      expect(IMAGE_OPTIMIZATION_CONFIG.minQuality).toBe(0.6);
    });
  });
});
