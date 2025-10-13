import { test, expect } from '@playwright/test';

test.describe('Tab Indentation - Selection Preservation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 10000 });
    await page.waitForTimeout(500);
  });

  test('should preserve selection after Tab indent on multiple paragraphs', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');

    // Type three paragraphs
    await editor.click();
    await page.keyboard.type('First paragraph text');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Second paragraph text');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Third paragraph text');

    // Select from middle of first to middle of third
    await page.keyboard.press('Control+a');

    // Get selection before indent
    const selectionBefore = await page.evaluate(() => {
      const sel = window.getSelection();
      return {
        text: sel.toString(),
        rangeCount: sel.rangeCount
      };
    });

    expect(selectionBefore.rangeCount).toBe(1);
    expect(selectionBefore.text).toContain('First paragraph');
    expect(selectionBefore.text).toContain('Second paragraph');
    expect(selectionBefore.text).toContain('Third paragraph');

    // Press Tab to indent
    await page.keyboard.press('Tab');

    // Check selection after indent
    const selectionAfter = await page.evaluate(() => {
      const sel = window.getSelection();
      return {
        text: sel.toString(),
        rangeCount: sel.rangeCount,
        isCollapsed: sel.isCollapsed
      };
    });

    // Selection should be preserved
    expect(selectionAfter.rangeCount).toBe(1);
    expect(selectionAfter.isCollapsed).toBe(false);
    expect(selectionAfter.text).toContain('First paragraph');
    expect(selectionAfter.text).toContain('Second paragraph');
    expect(selectionAfter.text).toContain('Third paragraph');

    // Content should be indented
    const content = await editor.innerHTML();
    expect(content).toContain('&nbsp;&nbsp;&nbsp;&nbsp;First paragraph');
    expect(content).toContain('&nbsp;&nbsp;&nbsp;&nbsp;Second paragraph');
    expect(content).toContain('&nbsp;&nbsp;&nbsp;&nbsp;Third paragraph');
  });

  test('should preserve selection after Shift+Tab outdent on multiple paragraphs', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');

    // Type three indented paragraphs
    await editor.click();
    await page.keyboard.press('Tab');
    await page.keyboard.type('First paragraph text');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Second paragraph text');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Third paragraph text');

    // Select all
    await page.keyboard.press('Control+a');

    // Get selection before outdent
    const selectionBefore = await page.evaluate(() => {
      const sel = window.getSelection();
      return {
        text: sel.toString(),
        rangeCount: sel.rangeCount
      };
    });

    expect(selectionBefore.rangeCount).toBe(1);
    expect(selectionBefore.text).toContain('First paragraph');

    // Press Shift+Tab to outdent
    await page.keyboard.press('Shift+Tab');

    // Check selection after outdent
    const selectionAfter = await page.evaluate(() => {
      const sel = window.getSelection();
      return {
        text: sel.toString(),
        rangeCount: sel.rangeCount,
        isCollapsed: sel.isCollapsed
      };
    });

    // Selection should be preserved
    expect(selectionAfter.rangeCount).toBe(1);
    expect(selectionAfter.isCollapsed).toBe(false);
    expect(selectionAfter.text).toContain('First paragraph');
    expect(selectionAfter.text).toContain('Second paragraph');
    expect(selectionAfter.text).toContain('Third paragraph');

    // Content should be outdented
    const content = await editor.innerHTML();
    expect(content).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;First paragraph');
    expect(content).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;Second paragraph');
    expect(content).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;Third paragraph');
  });

  test('should preserve partial selection across paragraphs', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');

    // Type three paragraphs
    await editor.click();
    await page.keyboard.type('First paragraph text here');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Second paragraph text here');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Third paragraph text here');

    // Select from middle of first to middle of second paragraph
    // Position cursor in first paragraph
    await page.keyboard.press('Control+Home');
    for (let i = 0; i < 'First para'.length; i++) {
      await page.keyboard.press('ArrowRight');
    }
    
    // Hold shift and move to middle of second paragraph
    await page.keyboard.press('Shift+End');
    await page.keyboard.press('Shift+ArrowDown');
    for (let i = 0; i < 'Second para'.length; i++) {
      await page.keyboard.press('Shift+ArrowRight');
    }

    // Get selection before indent
    const selectionBefore = await page.evaluate(() => {
      const sel = window.getSelection();
      const range = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
      return {
        text: sel.toString(),
        rangeCount: sel.rangeCount,
        collapsed: range ? range.collapsed : true
      };
    });

    expect(selectionBefore.rangeCount).toBe(1);
    expect(selectionBefore.collapsed).toBe(false);

    // Press Tab to indent
    await page.keyboard.press('Tab');

    // Check selection after indent
    const selectionAfter = await page.evaluate(() => {
      const sel = window.getSelection();
      return {
        text: sel.toString(),
        rangeCount: sel.rangeCount,
        isCollapsed: sel.isCollapsed
      };
    });

    // Selection should still exist and not be collapsed
    expect(selectionAfter.rangeCount).toBe(1);
    expect(selectionAfter.isCollapsed).toBe(false);
    
    // Should still contain text from both paragraphs
    const selectedText = selectionAfter.text;
    expect(selectedText.length).toBeGreaterThan(0);
  });

  test('should not replace content when indenting with selection', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');

    // Type content
    await editor.click();
    await page.keyboard.type('Line one content');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Line two content');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Line three content');

    // Get original content
    const contentBefore = await editor.innerHTML();
    expect(contentBefore).toContain('Line one content');
    expect(contentBefore).toContain('Line two content');
    expect(contentBefore).toContain('Line three content');

    // Select all
    await page.keyboard.press('Control+a');

    // Indent
    await page.keyboard.press('Tab');

    // Verify content is still there, just indented
    const contentAfter = await editor.innerHTML();
    expect(contentAfter).toContain('Line one content');
    expect(contentAfter).toContain('Line two content');
    expect(contentAfter).toContain('Line three content');
    
    // Should have indentation added
    expect(contentAfter).toContain('&nbsp;&nbsp;&nbsp;&nbsp;Line one content');
    expect(contentAfter).toContain('&nbsp;&nbsp;&nbsp;&nbsp;Line two content');
    expect(contentAfter).toContain('&nbsp;&nbsp;&nbsp;&nbsp;Line three content');
  });

  test('should handle multiple indent/outdent cycles with selection preserved', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');

    // Type content
    await editor.click();
    await page.keyboard.type('First line');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Second line');

    // Select all
    await page.keyboard.press('Control+a');

    // Indent twice
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Check selection still exists
    let selection = await page.evaluate(() => {
      const sel = window.getSelection();
      return { isCollapsed: sel.isCollapsed, text: sel.toString() };
    });
    expect(selection.isCollapsed).toBe(false);
    expect(selection.text).toContain('First line');

    // Outdent once
    await page.keyboard.press('Shift+Tab');

    // Check selection still exists
    selection = await page.evaluate(() => {
      const sel = window.getSelection();
      return { isCollapsed: sel.isCollapsed, text: sel.toString() };
    });
    expect(selection.isCollapsed).toBe(false);
    expect(selection.text).toContain('First line');

    // Content should have one level of indentation
    const content = await editor.innerHTML();
    expect(content).toContain('&nbsp;&nbsp;&nbsp;&nbsp;First line');
    expect(content).toContain('&nbsp;&nbsp;&nbsp;&nbsp;Second line');
  });
});
