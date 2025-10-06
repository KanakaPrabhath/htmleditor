import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock UUID for consistent testing
vi.mock('uuid', () => ({
  v4: vi.fn(() => 'test-uuid-' + Math.random().toString(36).substr(2, 9))
}));

// Mock getBoundingClientRect for testing element dimensions
const mockGetBoundingClientRect = vi.fn(() => ({
  height: 20, // Assume 20px height for paragraphs
  width: 400, // Assume reasonable width
  top: 0,
  left: 0,
  bottom: 20,
  right: 400,
  x: 0,
  y: 0,
  toJSON: () => ({})
}));

Element.prototype.getBoundingClientRect = mockGetBoundingClientRect;
HTMLElement.prototype.getBoundingClientRect = mockGetBoundingClientRect;