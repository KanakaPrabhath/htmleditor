/**
 * Unit tests for image conversion utilities
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  blobUrlToBase64,
  base64ToBlob,
  convertBlobUrlsToBase64,
  convertBase64ToBlobUrls,
  getImageAsBase64
} from '../../lib/src/lib/storage/image-conversion-utils.js';

// Mock the storage functions
vi.mock('../../lib/src/lib/storage/index-db.js', () => ({
  saveImage: vi.fn(),
  getImage: vi.fn()
}));

// Sample base64 image (1x1 red pixel PNG)
const SAMPLE_BASE64_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';

describe('Image Conversion Utils', () => {
  describe('base64ToBlob', () => {
    it('should convert base64 data URL to Blob', async () => {
      const blob = await base64ToBlob(SAMPLE_BASE64_PNG);
      
      expect(blob).toBeInstanceOf(Blob);
      expect(blob.type).toBe('image/png');
      expect(blob.size).toBeGreaterThan(0);
    });

    it('should handle invalid base64 gracefully', async () => {
      await expect(base64ToBlob('invalid-data')).rejects.toThrow();
    });
  });

  describe('blobUrlToBase64', () => {
    it('should convert blob URL to base64 data URL', async () => {
      // Create a blob from base64
      const blob = await base64ToBlob(SAMPLE_BASE64_PNG);
      const blobUrl = URL.createObjectURL(blob);
      
      // Convert blob URL back to base64
      const base64Result = await blobUrlToBase64(blobUrl);
      
      expect(base64Result).toContain('data:image/png;base64,');
      expect(base64Result).toBeTruthy();
      
      // Cleanup
      URL.revokeObjectURL(blobUrl);
    });

    it('should handle invalid blob URL gracefully', async () => {
      await expect(blobUrlToBase64('blob:invalid-url')).rejects.toThrow();
    });
  });

  describe('convertBlobUrlsToBase64', () => {
    it('should convert blob URLs in HTML to base64', async () => {
      // Create a blob and blob URL
      const blob = await base64ToBlob(SAMPLE_BASE64_PNG);
      const blobUrl = URL.createObjectURL(blob);
      
      // Create HTML with blob URL
      const htmlWithBlob = `<p>Test</p><img src="${blobUrl}" data-key="test-key" alt="test" />`;
      
      // Convert
      const result = await convertBlobUrlsToBase64(htmlWithBlob);
      
      expect(result).toContain('data:image/png;base64,');
      expect(result).not.toContain('blob:');
      expect(result).not.toContain('data-key'); // data-key should be removed
      
      // Cleanup
      URL.revokeObjectURL(blobUrl);
    });

    it('should handle HTML with multiple blob images', async () => {
      const blob1 = await base64ToBlob(SAMPLE_BASE64_PNG);
      const blob2 = await base64ToBlob(SAMPLE_BASE64_PNG);
      const blobUrl1 = URL.createObjectURL(blob1);
      const blobUrl2 = URL.createObjectURL(blob2);
      
      const htmlWithBlobs = `
        <img src="${blobUrl1}" data-key="key1" />
        <p>Middle content</p>
        <img src="${blobUrl2}" data-key="key2" />
      `;
      
      const result = await convertBlobUrlsToBase64(htmlWithBlobs);
      
      expect(result).toContain('data:image/png;base64,');
      expect(result).not.toContain('blob:');
      expect(result).not.toContain('data-key');
      
      // Cleanup
      URL.revokeObjectURL(blobUrl1);
      URL.revokeObjectURL(blobUrl2);
    });

    it('should preserve non-blob images', async () => {
      const htmlWithMixed = `
        <img src="https://example.com/image.png" alt="external" />
        <img src="${SAMPLE_BASE64_PNG}" alt="base64" />
      `;
      
      const result = await convertBlobUrlsToBase64(htmlWithMixed);
      
      expect(result).toContain('https://example.com/image.png');
      expect(result).toContain('data:image/png;base64,');
    });

    it('should handle empty HTML', async () => {
      const result = await convertBlobUrlsToBase64('');
      expect(result).toBe('');
    });

    it('should handle HTML with no images', async () => {
      const html = '<p>Just text content</p>';
      const result = await convertBlobUrlsToBase64(html);
      expect(result).toBe(html);
    });
  });

  describe('convertBase64ToBlobUrls', () => {
    beforeEach(async () => {
      // Reset mocks
      vi.clearAllMocks();
      
      // Setup mock implementations
      const { saveImage, getImage } = await import('../../lib/src/lib/storage/index-db.js');
      saveImage.mockResolvedValue('mock-key-123');
      getImage.mockResolvedValue('blob:mock-blob-url');
    });

    it('should convert base64 images to blob URLs', async () => {
      const htmlWithBase64 = `<p>Test</p><img src="${SAMPLE_BASE64_PNG}" alt="test" />`;
      
      const result = await convertBase64ToBlobUrls(htmlWithBase64);
      
      expect(result).toContain('blob:mock-blob-url');
      expect(result).toContain('data-key="mock-key-123"');
      expect(result).not.toContain('data:image/png;base64,');
    });

    it('should handle multiple base64 images', async () => {
      const htmlWithMultiple = `
        <img src="${SAMPLE_BASE64_PNG}" alt="img1" />
        <p>Content</p>
        <img src="${SAMPLE_BASE64_PNG}" alt="img2" />
      `;
      
      const { saveImage } = await import('../../lib/src/lib/storage/index-db.js');
      saveImage
        .mockResolvedValueOnce('key-1')
        .mockResolvedValueOnce('key-2');
      
      const { getImage } = await import('../../lib/src/lib/storage/index-db.js');
      getImage
        .mockResolvedValueOnce('blob:url-1')
        .mockResolvedValueOnce('blob:url-2');
      
      const result = await convertBase64ToBlobUrls(htmlWithMultiple);
      
      expect(result).toContain('blob:url-1');
      expect(result).toContain('blob:url-2');
      expect(result).toContain('data-key="key-1"');
      expect(result).toContain('data-key="key-2"');
      expect(saveImage).toHaveBeenCalledTimes(2);
    });

    it('should preserve non-base64 images', async () => {
      const htmlWithMixed = `
        <img src="https://example.com/image.png" alt="external" />
        <img src="${SAMPLE_BASE64_PNG}" alt="base64" />
      `;
      
      const result = await convertBase64ToBlobUrls(htmlWithMixed);
      
      expect(result).toContain('https://example.com/image.png');
      expect(result).toContain('blob:mock-blob-url');
    });

    it('should handle empty HTML', async () => {
      const result = await convertBase64ToBlobUrls('');
      expect(result).toBe('');
    });

    it('should handle HTML with no images', async () => {
      const html = '<p>Just text content</p>';
      const result = await convertBase64ToBlobUrls(html);
      expect(result).toBe(html);
    });

    it('should handle storage failures gracefully', async () => {
      const { saveImage } = await import('../../lib/src/lib/storage/index-db.js');
      saveImage.mockRejectedValue(new Error('Storage error'));
      
      const htmlWithBase64 = `<img src="${SAMPLE_BASE64_PNG}" alt="test" />`;
      
      // Should not throw, but keep original base64
      const result = await convertBase64ToBlobUrls(htmlWithBase64);
      expect(result).toContain('data:image/png;base64,');
    });
  });

  describe('getImageAsBase64', () => {
    it('should retrieve image from storage and convert to base64', async () => {
      const { getImage } = await import('../../lib/src/lib/storage/index-db.js');
      
      // Create a mock blob URL
      const blob = await base64ToBlob(SAMPLE_BASE64_PNG);
      const blobUrl = URL.createObjectURL(blob);
      getImage.mockResolvedValue(blobUrl);
      
      const result = await getImageAsBase64('test-key');
      
      expect(result).toContain('data:image/png;base64,');
      expect(getImage).toHaveBeenCalledWith('test-key');
      
      // Cleanup
      URL.revokeObjectURL(blobUrl);
    });

    it('should return null when image not found', async () => {
      const { getImage } = await import('../../lib/src/lib/storage/index-db.js');
      getImage.mockResolvedValue(null);
      
      const result = await getImageAsBase64('non-existent-key');
      
      expect(result).toBeNull();
    });

    it('should handle errors gracefully', async () => {
      const { getImage } = await import('../../lib/src/lib/storage/index-db.js');
      getImage.mockRejectedValue(new Error('Storage error'));
      
      const result = await getImageAsBase64('error-key');
      
      expect(result).toBeNull();
    });
  });
});
