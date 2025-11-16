import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { saveImage, getImage, deleteImage, clearImages, revokeBlobUrl, getCachedBlobUrl } from '../../lib/src/lib/storage/index-db';

// Mock IndexedDB
const mockIndexedDB = {
  open: vi.fn(),
  databases: new Map()
};

// Mock URL.createObjectURL and URL.revokeObjectURL
const mockBlobUrls = new Map();
let blobUrlCounter = 0;

global.URL.createObjectURL = vi.fn((blob) => {
  const url = `blob:http://localhost/${++blobUrlCounter}`;
  mockBlobUrls.set(url, blob);
  return url;
});

global.URL.revokeObjectURL = vi.fn((url) => {
  mockBlobUrls.delete(url);
});

describe('Blob URL Image Storage', () => {
  beforeEach(() => {
    // Reset mocks
    mockBlobUrls.clear();
    blobUrlCounter = 0;
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await clearImages();
  });

  it('should create blob URL instead of base64', async () => {
    // Create a mock image file
    const imageBlob = new Blob(['fake image data'], { type: 'image/png' });
    const imageFile = new File([imageBlob], 'test.png', { type: 'image/png' });

    // Save image
    const key = await saveImage(imageFile);
    expect(key).toMatch(/^editor-image-/);

    // Get image - should return blob URL
    const url = await getImage(key);
    expect(url).toMatch(/^blob:/);
    expect(URL.createObjectURL).toHaveBeenCalled();
  });

  it('should cache blob URLs to avoid recreating them', async () => {
    const imageBlob = new Blob(['fake image data'], { type: 'image/png' });
    const imageFile = new File([imageBlob], 'test.png', { type: 'image/png' });

    const key = await saveImage(imageFile);
    
    // First call - creates blob URL
    const url1 = await getImage(key);
    const createCallCount1 = URL.createObjectURL.mock.calls.length;

    // Second call - should use cached URL
    const url2 = await getImage(key);
    const createCallCount2 = URL.createObjectURL.mock.calls.length;

    expect(url1).toBe(url2);
    expect(createCallCount2).toBe(createCallCount1); // No additional call
  });

  it('should get cached blob URL without database access', async () => {
    const imageBlob = new Blob(['fake image data'], { type: 'image/png' });
    const imageFile = new File([imageBlob], 'test.png', { type: 'image/png' });

    const key = await saveImage(imageFile);
    await getImage(key); // Cache the URL

    // Get from cache
    const cachedUrl = getCachedBlobUrl(key);
    expect(cachedUrl).toMatch(/^blob:/);
  });

  it('should revoke blob URL when deleting image', async () => {
    const imageBlob = new Blob(['fake image data'], { type: 'image/png' });
    const imageFile = new File([imageBlob], 'test.png', { type: 'image/png' });

    const key = await saveImage(imageFile);
    await getImage(key); // Create blob URL

    // Delete image
    await deleteImage(key);

    expect(URL.revokeObjectURL).toHaveBeenCalled();
    expect(getCachedBlobUrl(key)).toBeNull();
  });

  it('should handle larger images (increased limit to 10MB)', async () => {
    // Create a 7MB mock file (would fail with old 5MB limit)
    const largeData = new Uint8Array(7 * 1024 * 1024);
    const largeBlob = new Blob([largeData], { type: 'image/jpeg' });
    const largeFile = new File([largeBlob], 'large.jpg', { type: 'image/jpeg' });

    // Should not throw
    const key = await saveImage(largeFile);
    expect(key).toBeTruthy();
  });

  it('should reject files over 10MB', async () => {
    // Create an 11MB mock file
    const tooLargeData = new Uint8Array(11 * 1024 * 1024);
    const tooLargeBlob = new Blob([tooLargeData], { type: 'image/png' });
    const tooLargeFile = new File([tooLargeBlob], 'toolarge.png', { type: 'image/png' });

    // Should throw error
    await expect(saveImage(tooLargeFile)).rejects.toThrow('exceeds maximum size of 10MB');
  });

  it('should validate image file types', async () => {
    const invalidBlob = new Blob(['data'], { type: 'text/plain' });
    const invalidFile = new File([invalidBlob], 'test.txt', { type: 'text/plain' });

    await expect(saveImage(invalidFile)).rejects.toThrow('Invalid image format');
  });

  it('should clear all images and revoke all blob URLs', async () => {
    // Create multiple images
    const imageBlob1 = new Blob(['image 1'], { type: 'image/png' });
    const imageBlob2 = new Blob(['image 2'], { type: 'image/jpeg' });
    const file1 = new File([imageBlob1], 'test1.png', { type: 'image/png' });
    const file2 = new File([imageBlob2], 'test2.jpg', { type: 'image/jpeg' });

    const key1 = await saveImage(file1);
    const key2 = await saveImage(file2);
    
    await getImage(key1);
    await getImage(key2);

    // Clear all
    await clearImages();

    expect(URL.revokeObjectURL).toHaveBeenCalledTimes(2);
    expect(getCachedBlobUrl(key1)).toBeNull();
    expect(getCachedBlobUrl(key2)).toBeNull();
  });

  it('should manually revoke blob URL', async () => {
    const imageBlob = new Blob(['fake image data'], { type: 'image/png' });
    const imageFile = new File([imageBlob], 'test.png', { type: 'image/png' });

    const key = await saveImage(imageFile);
    await getImage(key);

    // Manually revoke
    revokeBlobUrl(key);

    expect(URL.revokeObjectURL).toHaveBeenCalled();
    expect(getCachedBlobUrl(key)).toBeNull();
  });
});
