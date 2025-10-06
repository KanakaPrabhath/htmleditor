/**
 * Tests for margin-utils.js
 */

import { describe, it, expect } from 'vitest';
import {
  CSS_DPI,
  inchesToPixels,
  pixelsToInches,
  MARGIN_PRESETS,
  DEFAULT_MARGIN_PRESET,
  getMarginPixels,
  getTotalVerticalMargins,
  getTotalHorizontalMargins,
  getMarginPresetNames,
  getMarginPresetLabel,
  isValidMarginPreset
} from '../../packages/html-editor/src/lib/editor/margin-utils.js';

describe('margin-utils', () => {
  describe('Constants', () => {
    it('should have CSS_DPI set to 96', () => {
      expect(CSS_DPI).toBe(96);
    });

    it('should have DEFAULT_MARGIN_PRESET defined', () => {
      expect(DEFAULT_MARGIN_PRESET).toBeDefined();
      expect(DEFAULT_MARGIN_PRESET).toBe('NARROW');
    });

    it('should have MARGIN_PRESETS object with expected presets', () => {
      expect(MARGIN_PRESETS).toBeDefined();
      expect(MARGIN_PRESETS.NORMAL).toBeDefined();
      expect(MARGIN_PRESETS.NARROW).toBeDefined();
      expect(MARGIN_PRESETS.MODERATE).toBeDefined();
      expect(MARGIN_PRESETS.WIDE).toBeDefined();
    });
  });

  describe('Conversion functions', () => {
    it('should convert inches to pixels correctly', () => {
      expect(inchesToPixels(1)).toBe(96);
      expect(inchesToPixels(0.5)).toBe(48);
      expect(inchesToPixels(2)).toBe(192);
    });

    it('should convert pixels to inches correctly', () => {
      expect(pixelsToInches(96)).toBe(1);
      expect(pixelsToInches(48)).toBe(0.5);
      expect(pixelsToInches(192)).toBe(2);
    });
  });

  describe('getMarginPixels', () => {
    it('should return correct pixel values for NORMAL preset', () => {
      const margins = getMarginPixels('NORMAL');
      expect(margins.top).toBe(96);
      expect(margins.bottom).toBe(96);
      expect(margins.left).toBe(96);
      expect(margins.right).toBe(96);
    });

    it('should return correct pixel values for NARROW preset', () => {
      const margins = getMarginPixels('NARROW');
      expect(margins.top).toBe(48);
      expect(margins.bottom).toBe(48);
      expect(margins.left).toBe(48);
      expect(margins.right).toBe(48);
    });

    it('should return correct pixel values for MODERATE preset', () => {
      const margins = getMarginPixels('MODERATE');
      expect(margins.top).toBe(96);
      expect(margins.bottom).toBe(96);
      expect(margins.left).toBe(72); // 0.75 * 96
      expect(margins.right).toBe(72);
    });

    it('should return correct pixel values for WIDE preset', () => {
      const margins = getMarginPixels('WIDE');
      expect(margins.top).toBe(96);
      expect(margins.bottom).toBe(96);
      expect(margins.left).toBe(192); // 2 * 96
      expect(margins.right).toBe(192);
    });

    it('should fallback to default preset for invalid preset name', () => {
      const margins = getMarginPixels('INVALID');
      const defaultMargins = getMarginPixels(DEFAULT_MARGIN_PRESET);
      expect(margins).toEqual(defaultMargins);
    });

    it('should use default preset when no preset name provided', () => {
      const margins = getMarginPixels();
      const narrowMargins = getMarginPixels('NARROW');
      expect(margins).toEqual(narrowMargins);
    });
  });

  describe('getTotalVerticalMargins', () => {
    it('should return sum of top and bottom margins for NORMAL', () => {
      const total = getTotalVerticalMargins('NORMAL');
      expect(total).toBe(192); // 96 + 96
    });

    it('should return sum of top and bottom margins for NARROW', () => {
      const total = getTotalVerticalMargins('NARROW');
      expect(total).toBe(96); // 48 + 48
    });
  });

  describe('getTotalHorizontalMargins', () => {
    it('should return sum of left and right margins for NORMAL', () => {
      const total = getTotalHorizontalMargins('NORMAL');
      expect(total).toBe(192); // 96 + 96
    });

    it('should return sum of left and right margins for WIDE', () => {
      const total = getTotalHorizontalMargins('WIDE');
      expect(total).toBe(384); // 192 + 192
    });
  });

  describe('getMarginPresetNames', () => {
    it('should return array of all preset names', () => {
      const names = getMarginPresetNames();
      expect(names).toContain('NORMAL');
      expect(names).toContain('NARROW');
      expect(names).toContain('MODERATE');
      expect(names).toContain('WIDE');
      expect(Array.isArray(names)).toBe(true);
    });
  });

  describe('getMarginPresetLabel', () => {
    it('should return correct label for NORMAL preset', () => {
      const label = getMarginPresetLabel('NORMAL');
      expect(label).toBe('Normal (1")');
    });

    it('should return correct label for NARROW preset', () => {
      const label = getMarginPresetLabel('NARROW');
      expect(label).toBe('Narrow (0.5")');
    });

    it('should return "Unknown" for invalid preset', () => {
      const label = getMarginPresetLabel('INVALID');
      expect(label).toBe('Unknown');
    });
  });

  describe('isValidMarginPreset', () => {
    it('should return true for valid preset names', () => {
      expect(isValidMarginPreset('NORMAL')).toBe(true);
      expect(isValidMarginPreset('NARROW')).toBe(true);
      expect(isValidMarginPreset('MODERATE')).toBe(true);
      expect(isValidMarginPreset('WIDE')).toBe(true);
    });

    it('should return false for invalid preset names', () => {
      expect(isValidMarginPreset('INVALID')).toBe(false);
      expect(isValidMarginPreset('')).toBe(false);
      expect(isValidMarginPreset(null)).toBe(false);
      expect(isValidMarginPreset(undefined)).toBe(false);
    });
  });

  describe('MARGIN_PRESETS structure', () => {
    it('should have all required properties for each preset', () => {
      Object.keys(MARGIN_PRESETS).forEach(presetKey => {
        const preset = MARGIN_PRESETS[presetKey];
        expect(preset.name).toBeDefined();
        expect(preset.label).toBeDefined();
        expect(typeof preset.top).toBe('number');
        expect(typeof preset.bottom).toBe('number');
        expect(typeof preset.left).toBe('number');
        expect(typeof preset.right).toBe('number');
      });
    });

    it('should have positive margin values', () => {
      Object.keys(MARGIN_PRESETS).forEach(presetKey => {
        const preset = MARGIN_PRESETS[presetKey];
        expect(preset.top).toBeGreaterThan(0);
        expect(preset.bottom).toBeGreaterThan(0);
        expect(preset.left).toBeGreaterThan(0);
        expect(preset.right).toBeGreaterThan(0);
      });
    });
  });
});
