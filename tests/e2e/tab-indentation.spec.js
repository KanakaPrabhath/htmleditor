import { test, expect } from '@playwright/test';

test.describe('Tab Indentation - User Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 10000 });
    await page.waitForTimeout(500);
  });

  test.describe('Tab Key Handling', () => {
    test('should insert spaces when Tab is pressed at cursor', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');

      await editor.click();
      await page.keyboard.type('Line of text');
      await page.keyboard.press('Enter');
      await page.keyboard.type('Second line');
      await page.keyboard.press('Home'); // Go to start of second line
      await page.keyboard.press('Tab');

      const content = await editor.innerHTML();
      expect(content).toContain('&nbsp;&nbsp;&nbsp;&nbsp;Second line');
    });

    test('should handle Tab on indented text at cursor', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');

      await editor.click();
      await page.keyboard.type('First line');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');
      await page.keyboard.type('Indented line');
      await page.keyboard.press('Home'); // Go to start of indented line
      await page.keyboard.press('Tab');

      const content = await editor.innerHTML();
      expect(content).toMatch(/<p>First line<\/p><p>(&nbsp;){8}Indented line<\/p>/);
    });

    test('should indent selected paragraphs when Tab is pressed', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');

      await editor.click();
      await page.keyboard.type('First paragraph');
      await page.keyboard.press('Enter');
      await page.keyboard.type('Second paragraph');
      await page.keyboard.press('Enter');
      await page.keyboard.type('Third paragraph');

      // Select all content
      await page.keyboard.press('Control+a');

      const contentBefore = await editor.innerHTML();
      await page.keyboard.press('Tab');
      const contentAfter = await editor.innerHTML();

      // All paragraphs should now be indented
      expect(contentAfter).not.toBe(contentBefore);
      expect(contentAfter).toContain('data-indent-level="1"');
      expect(contentAfter).toContain('First paragraph');
      expect(contentAfter).toContain('Second paragraph');
      expect(contentAfter).toContain('Third paragraph');
    });

    test('should outdent selected paragraphs when Shift+Tab is pressed', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');

      await editor.click();
      await page.keyboard.press('Tab'); // Pre-indent the first paragraph
      await page.keyboard.type('First paragraph');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab'); // Pre-indent the second paragraph
      await page.keyboard.type('Second paragraph');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab'); // Pre-indent the third paragraph
      await page.keyboard.type('Third paragraph');

      // Select all content
      await page.keyboard.press('Control+a');

      const contentBefore = await editor.innerHTML();
      await page.keyboard.press('Shift+Tab');
      const contentAfter = await editor.innerHTML();

      // All indentation should be removed
      expect(contentAfter).not.toBe(contentBefore);
      expect(contentAfter).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;First paragraph');
      expect(contentAfter).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;Second paragraph');
      expect(contentAfter).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;Third paragraph');
      expect(contentAfter).toContain('First paragraph');
      expect(contentAfter).toContain('Second paragraph');
      expect(contentAfter).toContain('Third paragraph');
    });

    test('should not change content when Shift+Tab is pressed at cursor with no selection', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');

      await editor.click();
      await page.keyboard.type('Line of text');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');
      await page.keyboard.type('Indented line');

      // Try Shift+Tab at cursor position (no selection)
      await page.keyboard.press('Home'); // Go to start of indented line
      const contentBefore = await editor.innerHTML();
      await page.keyboard.press('Shift+Tab');
      const contentAfter = await editor.innerHTML();
      expect(contentAfter).toBe(contentBefore); // No change
    });
  });
});