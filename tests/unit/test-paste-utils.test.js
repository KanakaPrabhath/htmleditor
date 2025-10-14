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

  it('should remove nested paragraph tags from heading elements', () => {
    const input = '<h1><p>Hello world</p></h1><p>Normal paragraph</p>';
    const expected = '<h1>Hello world</h1><p>Normal paragraph</p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should handle multiple headings with nested paragraphs', () => {
    const input = '<h1><p>Title 1</p></h1><h2><p>Title 2</p></h2><p>Content</p>';
    const expected = '<h1>Title 1</h1><h2>Title 2</h2><p>Content</p>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });

  it('should preserve formatting inside headings when removing nested paragraphs', () => {
    const input = '<h1><p>Hello <strong>world</strong></p></h1>';
    const expected = '<h1>Hello <strong>world</strong></h1>';
    expect(normalizeParagraphs(input)).toBe(expected);
  });
});