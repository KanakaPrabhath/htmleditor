import { describe, it, expect } from 'vitest';
import { normalizeContent } from '../../lib/src/lib/editor/content-normalize-utils.js';

describe('normalizeContent', () => {
  it('should wrap plain text in paragraph tags', () => {
    const input = 'Hello world';
    const expected = '<p>Hello world</p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should convert div tags to paragraph tags', () => {
    const input = '<div>Hello</div><div>World</div>';
    const expected = '<p>Hello</p><p>World</p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should handle empty content', () => {
    const input = '';
    const expected = '<p><br></p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should handle whitespace-only content', () => {
    const input = '   ';
    const expected = '<p><br></p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should preserve existing paragraph tags', () => {
    const input = '<p>Hello</p><p>World</p>';
    const expected = '<p>Hello</p><p>World</p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should handle mixed content with page breaks', () => {
    const input = 'Text<page-break data-page-break="true"></page-break>More text';
    const expected = '<p>Text</p><page-break data-page-break="true"></page-break><p>More text</p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should handle nested formatting in paragraphs', () => {
    const input = '<p>Hello <strong>world</strong></p>';
    const expected = '<p>Hello <strong>world</strong></p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should remove nested paragraph tags from heading elements', () => {
    const input = '<h1><p>Hello world</p></h1><p>Normal paragraph</p>';
    const expected = '<h1>Hello world</h1><p>Normal paragraph</p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should handle multiple headings with nested paragraphs', () => {
    const input = '<h1><p>Title 1</p></h1><h2><p>Title 2</p></h2><p>Content</p>';
    const expected = '<h1>Title 1</h1><h2>Title 2</h2><p>Content</p>';
    expect(normalizeContent(input)).toBe(expected);
  });

  it('should preserve formatting inside headings when removing nested paragraphs', () => {
    const input = '<h1><p>Hello <strong>world</strong></p></h1>';
    const expected = '<h1>Hello <strong>world</strong></h1>';
    expect(normalizeContent(input)).toBe(expected);
  });

  // Additional tests for comprehensive content support
  it('should preserve images with alignment attributes', () => {
    const input = '<img src="test.jpg" alt="Test" align="right" width="200" height="100">';
    expect(normalizeContent(input)).toContain('src="test.jpg"');
    expect(normalizeContent(input)).toContain('align="right"');
    expect(normalizeContent(input)).toContain('width="200"');
  });

  it('should preserve lists with proper structure', () => {
    const input = '<ul><li>Item 1</li><li>Item 2</li></ul>';
    expect(normalizeContent(input)).toContain('<ul>');
    expect(normalizeContent(input)).toContain('<li>Item 1</li>');
    expect(normalizeContent(input)).toContain('<li>Item 2</li>');
  });

  it('should preserve ordered lists', () => {
    const input = '<ol><li>First</li><li>Second</li></ol>';
    expect(normalizeContent(input)).toContain('<ol>');
    expect(normalizeContent(input)).toContain('<li>First</li>');
  });

  it('should preserve tables with structure', () => {
    const input = '<table><tr><td>Cell 1</td><td>Cell 2</td></tr></table>';
    const result = normalizeContent(input);
    expect(result).toContain('<table>');
    expect(result).toContain('<td>Cell 1</td>');
  });

  it('should preserve font styling attributes', () => {
    const input = '<span style="font-family: Arial; font-size: 16px;">Styled text</span>';
    const result = normalizeContent(input);
    expect(result).toContain('font-family: Arial');
    expect(result).toContain('font-size: 16px');
  });

  it('should preserve paragraph indentation styles', () => {
    const input = '<p style="margin-left: 40px;">Indented paragraph</p>';
    const result = normalizeContent(input);
    expect(result).toContain('margin-left: 40px');
  });

  it('should preserve blockquotes', () => {
    const input = '<blockquote>Quote text</blockquote>';
    const result = normalizeContent(input);
    expect(result).toContain('<blockquote>');
  });

  it('should handle horizontal rules', () => {
    const input = '<p>Before</p><hr><p>After</p>';
    const result = normalizeContent(input);
    expect(result).toContain('<hr>');
  });

  it('should preserve preformatted text', () => {
    const input = '<pre>Code block\n  with indents</pre>';
    const result = normalizeContent(input);
    expect(result).toContain('<pre>');
  });

  it('should handle complex nested structures', () => {
    const input = '<div><h1>Title</h1><p>Text with <strong>bold</strong> and <em>italic</em></p><ul><li>Item</li></ul></div>';
    const result = normalizeContent(input);
    expect(result).toContain('<h1>Title</h1>');
    expect(result).toContain('<strong>bold</strong>');
    expect(result).toContain('<em>italic</em>');
    expect(result).toContain('<ul>');
  });
});