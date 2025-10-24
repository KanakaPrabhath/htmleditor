/**
 * Unit tests for zoom utilities
 */

import { describe, it, expect } from 'vitest';
import {
  ZOOM_LEVELS,
  DEFAULT_ZOOM,
  MIN_ZOOM,
  MAX_ZOOM,
  ZOOM_STEP,
  canZoomIn,
  canZoomOut,
  getNextZoomLevel,
  getPreviousZoomLevel,
  isValidZoomLevel,
  getZoomMultiplier
} from '../../lib/src/lib/editor/zoom-utils';

describe('Zoom Utils', () => {
  describe('constants', () => {
    it('should have correct zoom levels', () => {
      expect(ZOOM_LEVELS).toEqual([50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200]);
    });

    it('should have default zoom of 100', () => {
      expect(DEFAULT_ZOOM).toBe(100);
    });

    it('should have min zoom of 50', () => {
      expect(MIN_ZOOM).toBe(50);
    });

    it('should have max zoom of 200', () => {
      expect(MAX_ZOOM).toBe(200);
    });

    it('should have zoom step of 5', () => {
      expect(ZOOM_STEP).toBe(5);
    });
  });

  describe('canZoomIn', () => {
    it('should return true when below max zoom', () => {
      expect(canZoomIn(100)).toBe(true);
      expect(canZoomIn(175)).toBe(true);
    });

    it('should return false when at max zoom', () => {
      expect(canZoomIn(200)).toBe(false);
    });

    it('should return false when above max zoom', () => {
      expect(canZoomIn(250)).toBe(false);
    });
  });

  describe('canZoomOut', () => {
    it('should return true when above min zoom', () => {
      expect(canZoomOut(100)).toBe(true);
      expect(canZoomOut(75)).toBe(true);
    });

    it('should return false when at min zoom', () => {
      expect(canZoomOut(50)).toBe(false);
    });

    it('should return false when below min zoom', () => {
      expect(canZoomOut(25)).toBe(false);
    });
  });

  describe('getNextZoomLevel', () => {
    it('should return next zoom level when zooming in', () => {
      expect(getNextZoomLevel(100)).toBe(105);
      expect(getNextZoomLevel(125)).toBe(130);
      expect(getNextZoomLevel(195)).toBe(200);
    });

    it('should return current zoom when at max', () => {
      expect(getNextZoomLevel(200)).toBe(200);
    });
  });

  describe('getPreviousZoomLevel', () => {
    it('should return previous zoom level when zooming out', () => {
      expect(getPreviousZoomLevel(100)).toBe(95);
      expect(getPreviousZoomLevel(125)).toBe(120);
      expect(getPreviousZoomLevel(55)).toBe(50);
    });

    it('should return current zoom when at min', () => {
      expect(getPreviousZoomLevel(50)).toBe(50);
    });
  });

  describe('isValidZoomLevel', () => {
    it('should return true for valid zoom levels', () => {
      expect(isValidZoomLevel(50)).toBe(true);
      expect(isValidZoomLevel(100)).toBe(true);
      expect(isValidZoomLevel(200)).toBe(true);
    });

    it('should return false for invalid zoom levels', () => {
      expect(isValidZoomLevel(25)).toBe(false); // Below minimum
      expect(isValidZoomLevel(52)).toBe(true); // Valid (between 50-200)
      expect(isValidZoomLevel(250)).toBe(false); // Above maximum
    });
  });

  describe('getZoomMultiplier', () => {
    it('should return correct multiplier for zoom levels', () => {
      expect(getZoomMultiplier(100)).toBe(1.0);
      expect(getZoomMultiplier(50)).toBe(0.5);
      expect(getZoomMultiplier(200)).toBe(2.0);
      expect(getZoomMultiplier(150)).toBe(1.5);
    });

    it('should handle edge cases', () => {
      expect(getZoomMultiplier(0)).toBe(0);
      expect(getZoomMultiplier(25)).toBe(0.25);
    });
  });
});
