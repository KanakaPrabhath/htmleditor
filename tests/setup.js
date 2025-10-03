import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock UUID for consistent testing
vi.mock('uuid', () => ({
  v4: vi.fn(() => 'test-uuid-' + Math.random().toString(36).substr(2, 9))
}));