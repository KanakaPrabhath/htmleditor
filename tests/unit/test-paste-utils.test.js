import { describe, it, expect } from 'vitest';
import { normalizeParagraphs } from '../../packages/html-editor/src/lib/editor/content-normalize-utils.js';

describe('normalizeParagraphs', () => {
  it('should wrap plain text in paragraph tags', () => {
    const input = 'Hello world';
    const expected = '<p>Hello world</p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should convert div tags to paragraph tags', () => {
    const input = '<div>Hello</div><div>World</div>';
    const expected = '<p>Hello</p><p>World</p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should handle empty content', () => {
    const input = '';
    const expected = '<p><br></p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should handle whitespace-only content', () => {
    const input = '   ';
    const expected = '<p><br></p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should preserve existing paragraph tags', () => {
    const input = '<p>Hello</p><p>World</p>';
    const expected = '<p>Hello</p><p>World</p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should handle mixed content with page breaks', () => {
    const input = 'Text<page-break data-page-break="true"></page-break>More text';
    const expected = '<p>Text</p><page-break data-page-break="true"></page-break><p>More text</p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should handle nested formatting in paragraphs', () => {
    const input = '<p>Hello <strong>world</strong></p>';
    const expected = '<p>Hello <strong>world</strong></p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });
});