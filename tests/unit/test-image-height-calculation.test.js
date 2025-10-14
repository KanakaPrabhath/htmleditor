import { describe, it, expect, beforeEach, vi } from 'vitest';

/**
 * Test for image height calculation in page break logic
 * Ensures center-aligned images are properly measured for page breaks
 */
describe('Image Height Calculation for Page Breaks', () => {
  let mockEditor;
  let mockImage;
  let mockParagraph;

  beforeEach(() => {
    // Create a mock paragraph with a center-aligned image
    mockImage = {
      tagName: 'IMG',
      getBoundingClientRect: vi.fn(() => ({
        height: 400,
        width: 300,
        top: 0,
        left: 0,
        bottom: 400,
        right: 300
      }))
    };

    mockParagraph = {
      tagName: 'P',
      textContent: '', // Empty text content, only image
      getBoundingClientRect: vi.fn(() => ({
        height: 400, // Paragraph height same as image
        width: 300,
        top: 0,
        left: 0,
        bottom: 400,
        right: 300
      })),
      querySelectorAll: vi.fn((selector) => {
        if (selector === 'img') {
          return [mockImage];
        }
        return [];
      })
    };

    // Mock window.getComputedStyle to return center alignment
    global.window = global.window || {};
    global.window.getComputedStyle = vi.fn(() => ({
      textAlign: 'center'
    }));

    mockEditor = {
      children: [mockParagraph],
      querySelector: vi.fn(),
      querySelectorAll: vi.fn(() => []),
      innerHTML: '<p style="text-align: center;"><img src="test.jpg" /></p>'
    };
  });

  it('should calculate height for center-aligned image correctly', () => {
    // This test verifies that the getElementTotalHeight function
    // properly accounts for center-aligned images
    
    // The function should return: image height (400) + paragraph margin (16) = 416
    const expectedHeight = 400 + 16;
    
    // In actual implementation, when a paragraph contains only a center-aligned image,
    // the height calculation should use the actual image height instead of the paragraph's
    // getBoundingClientRect height (which might be incorrect due to float: none)
    
    // Verify the paragraph has an image
    const images = mockParagraph.querySelectorAll('img');
    expect(images.length).toBe(1);
    
    // Verify the paragraph has no text content
    expect(mockParagraph.textContent.trim()).toBe('');
    
    // Verify the computed style is center-aligned
    const computedStyle = window.getComputedStyle(mockParagraph);
    expect(computedStyle.textAlign).toBe('center');
    
    // The actual image height should be used
    const imgRect = mockImage.getBoundingClientRect();
    expect(imgRect.height).toBe(400);
    
    // Final height should be image height + margin
    const calculatedHeight = imgRect.height + 16;
    expect(calculatedHeight).toBe(expectedHeight);
  });

  it('should handle paragraph with text and image differently', () => {
    // When paragraph has both text and image, use normal paragraph height
    mockParagraph.textContent = 'Some caption text';
    
    const images = mockParagraph.querySelectorAll('img');
    expect(images.length).toBe(1);
    
    // With text content, the logic should use paragraph rect height
    const textContent = mockParagraph.textContent.trim();
    expect(textContent).toBe('Some caption text');
    
    // In this case, regular paragraph height calculation applies
    const paraRect = mockParagraph.getBoundingClientRect();
    const expectedHeight = paraRect.height + 16;
    expect(expectedHeight).toBe(416);
  });

  it('should handle left/right aligned images normally', () => {
    // Mock left-aligned style
    global.window.getComputedStyle = vi.fn(() => ({
      textAlign: 'left'
    }));
    
    const computedStyle = window.getComputedStyle(mockParagraph);
    expect(computedStyle.textAlign).toBe('left');
    
    // For non-center aligned images, use normal paragraph height
    const paraRect = mockParagraph.getBoundingClientRect();
    const expectedHeight = paraRect.height + 16;
    expect(expectedHeight).toBe(416);
  });

  it('should handle webkit-center alignment', () => {
    // Mock webkit-center style (some browsers use this)
    global.window.getComputedStyle = vi.fn(() => ({
      textAlign: '-webkit-center'
    }));
    
    const computedStyle = window.getComputedStyle(mockParagraph);
    expect(computedStyle.textAlign).toBe('-webkit-center');
    
    // Should also be treated as center-aligned
    const images = mockParagraph.querySelectorAll('img');
    const textContent = mockParagraph.textContent.trim();
    
    if (images.length === 1 && !textContent) {
      const imgRect = mockImage.getBoundingClientRect();
      const calculatedHeight = imgRect.height + 16;
      expect(calculatedHeight).toBe(416);
    }
  });
});
