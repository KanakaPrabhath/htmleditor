import { describe, it, expect } from 'vitest';
import {
  FONT_SIZE_MAP,
  COMMON_FONT_SIZES,
  DEFAULT_FONT_SIZE,
  pointsToPixels,
  pixelsToPoints,
  getPixelValue,
  getPointValue,
  isValidFontSize
} from '../../lib/src/lib/editor/font-sizes';

describe('Font Sizes', () => {
  describe('Constants', () => {
    it('should have correct FONT_SIZE_MAP structure', () => {
      expect(FONT_SIZE_MAP).toBeDefined();
      expect(typeof FONT_SIZE_MAP).toBe('object');
      
      // Check specific conversions as per requirements
      expect(FONT_SIZE_MAP['7.5pt']).toEqual({ pt: 7.5, px: 10, label: '7.5' });
      expect(FONT_SIZE_MAP['9pt']).toEqual({ pt: 9, px: 12, label: '9' });
      expect(FONT_SIZE_MAP['10pt']).toEqual({ pt: 10, px: 13, label: '10' });
      expect(FONT_SIZE_MAP['12pt']).toEqual({ pt: 12, px: 16, label: '12' });
    });

    it('should have COMMON_FONT_SIZES array', () => {
      expect(Array.isArray(COMMON_FONT_SIZES)).toBe(true);
      expect(COMMON_FONT_SIZES.length).toBeGreaterThan(0);
      
      // Check structure of first item
      expect(COMMON_FONT_SIZES[0]).toHaveProperty('value');
      expect(COMMON_FONT_SIZES[0]).toHaveProperty('label');
      expect(COMMON_FONT_SIZES[0]).toHaveProperty('pt');
    });

    it('should have correct common font size conversions', () => {
      // 7.5 pt ≈ 10 px
      const size1 = COMMON_FONT_SIZES.find(s => s.pt === 7.5);
      expect(size1.value).toBe('10px');
      expect(size1.label).toBe('7.5');
      
      // 9 pt ≈ 12 px
      const size2 = COMMON_FONT_SIZES.find(s => s.pt === 9);
      expect(size2.value).toBe('12px');
      expect(size2.label).toBe('9');
      
      // 10 pt ≈ 13 px
      const size3 = COMMON_FONT_SIZES.find(s => s.pt === 10);
      expect(size3.value).toBe('13px');
      expect(size3.label).toBe('10');
      
      // 12 pt ≈ 16 px
      const size4 = COMMON_FONT_SIZES.find(s => s.pt === 12);
      expect(size4.value).toBe('16px');
      expect(size4.label).toBe('12');
    });

    it('should have default font size of 16px (12pt in Word)', () => {
      expect(DEFAULT_FONT_SIZE).toBe('16px');
    });
  });

  describe('pointsToPixels', () => {
    it('should convert points to pixels at 96 DPI', () => {
      // 1 pt = 96/72 px = 1.333... px
      expect(pointsToPixels(7.5)).toBe(10);  // 7.5 * 96/72 = 10
      expect(pointsToPixels(9)).toBe(12);    // 9 * 96/72 = 12
      expect(pointsToPixels(10)).toBe(13);   // 10 * 96/72 ≈ 13
      expect(pointsToPixels(11)).toBe(15);   // 11 * 96/72 ≈ 15
      expect(pointsToPixels(12)).toBe(16);   // 12 * 96/72 = 16
      expect(pointsToPixels(18)).toBe(24);   // 18 * 96/72 = 24
      expect(pointsToPixels(24)).toBe(32);   // 24 * 96/72 = 32
      expect(pointsToPixels(72)).toBe(96);   // 72 * 96/72 = 96
    });

    it('should round to nearest integer', () => {
      expect(Number.isInteger(pointsToPixels(7.5))).toBe(true);
      expect(Number.isInteger(pointsToPixels(10.5))).toBe(true);
    });
  });

  describe('pixelsToPoints', () => {
    it('should convert pixels to points at 96 DPI', () => {
      // px * 72/96 = pt
      expect(pixelsToPoints(10)).toBe(7.5);   // 10 * 72/96 = 7.5
      expect(pixelsToPoints(12)).toBe(9);     // 12 * 72/96 = 9
      expect(pixelsToPoints(13)).toBe(10);    // 13 * 72/96 ≈ 10
      expect(pixelsToPoints(16)).toBe(12);    // 16 * 72/96 = 12
      expect(pixelsToPoints(24)).toBe(18);    // 24 * 72/96 = 18
      expect(pixelsToPoints(96)).toBe(72);    // 96 * 72/96 = 72
    });

    it('should round to nearest 0.5', () => {
      const result = pixelsToPoints(10);
      expect(result % 0.5).toBe(0); // Should be multiple of 0.5
    });
  });

  describe('getPixelValue', () => {
    it('should return pixel value from point size', () => {
      expect(getPixelValue(7.5)).toBe('10px');
      expect(getPixelValue(9)).toBe('12px');
      expect(getPixelValue(10)).toBe('13px');
      expect(getPixelValue(12)).toBe('16px');
      expect(getPixelValue(18)).toBe('24px');
    });

    it('should handle unknown point sizes by calculating', () => {
      const result = getPixelValue(15);
      expect(result).toMatch(/^\d+px$/); // Should return a valid px value
    });
  });

  describe('getPointValue', () => {
    it('should return point value from pixel size', () => {
      expect(getPointValue('10px')).toBe(7.5);
      expect(getPointValue('12px')).toBe(9);
      expect(getPointValue('13px')).toBe(10);
      expect(getPointValue('16px')).toBe(12);
      expect(getPointValue('24px')).toBe(18);
    });

    it('should handle unknown pixel sizes by calculating', () => {
      const result = getPointValue('20px');
      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThan(0);
    });
  });

  describe('isValidFontSize', () => {
    it('should validate pixel sizes', () => {
      expect(isValidFontSize('10px')).toBe(true);
      expect(isValidFontSize('16px')).toBe(true);
      expect(isValidFontSize('24px')).toBe(true);
      expect(isValidFontSize('96px')).toBe(true);
    });

    it('should validate point sizes', () => {
      expect(isValidFontSize('7.5pt')).toBe(true);
      expect(isValidFontSize('12pt')).toBe(true);
      expect(isValidFontSize('18pt')).toBe(true);
      expect(isValidFontSize('72pt')).toBe(true);
    });

    it('should reject invalid sizes', () => {
      expect(isValidFontSize('')).toBe(false);
      expect(isValidFontSize(null)).toBe(false);
      expect(isValidFontSize(undefined)).toBe(false);
      expect(isValidFontSize('invalid')).toBe(false);
    });

    it('should reject sizes outside valid range', () => {
      expect(isValidFontSize('5px')).toBe(false);   // Too small (< 8px)
      expect(isValidFontSize('200px')).toBe(false); // Too large (> 144px)
      expect(isValidFontSize('4pt')).toBe(false);   // Too small (< 6pt)
      expect(isValidFontSize('120pt')).toBe(false); // Too large (> 108pt)
    });
  });

  describe('Integration', () => {
    it('should have consistent conversions', () => {
      COMMON_FONT_SIZES.forEach(({ value, pt }) => {
        const pixelValue = parseInt(value);
        const convertedPt = pixelsToPoints(pixelValue);
        
        // Allow small rounding differences
        expect(Math.abs(convertedPt - pt)).toBeLessThanOrEqual(0.5);
      });
    });

    it('should maintain reversibility', () => {
      const testPoints = [7.5, 9, 10, 11, 12, 14, 16, 18, 24, 36, 48, 72];
      
      testPoints.forEach(pt => {
        const px = pointsToPixels(pt);
        const backToPt = pixelsToPoints(px);
        
        // Allow small rounding differences
        expect(Math.abs(backToPt - pt)).toBeLessThanOrEqual(1);
      });
    });
  });
});
