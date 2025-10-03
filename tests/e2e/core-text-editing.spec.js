import { test, expect } from '@playwright/test';

test.describe('Core Text Editing - User Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 10000 });
    await page.waitForTimeout(500);
  });

  test.describe('Primary User Story - WYSIWYG text editing', () => {
    
    test('should provide a WYSIWYG interface for editing HTML content (FR-001)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await expect(editor).toBeVisible();
      
      await editor.click();
      await page.keyboard.type('Testing WYSIWYG editing');
      
      await expect(editor).toContainText('Testing WYSIWYG editing');
    });

    test('should support basic text formatting (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Format this text');
      await page.keyboard.press('Control+a');
      
      const boldButton = page.locator('button[title*="Bold"]').first();
      await boldButton.click();
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(b|strong)>.*Format this text.*<\/(b|strong)>/);
    });

    test('should allow adding substantial content', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await editor.click();
      
      const paragraph = 'This is a paragraph of text that demonstrates the editor can handle substantial content. ';
      await editor.fill(paragraph.repeat(50));
      await page.waitForTimeout(300);
      
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(1000);
      expect(content).toContain('paragraph of text');
    });

    test('should maintain content after multiple edits', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await editor.fill('First edit content');
      await page.waitForTimeout(200);
      
      await page.keyboard.press('End');
      await page.keyboard.type(' - Second edit');
      await page.waitForTimeout(200);
      
      await page.keyboard.press('Control+a');
      await editor.fill('Third edit replaces everything');
      
      await expect(editor).toContainText('Third edit replaces everything');
      const content = await editor.innerHTML();
      expect(content).not.toContain('First edit');
    });

    test('should handle empty and then filled content', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Delete');
      await page.waitForTimeout(200);
      
      await page.keyboard.type('New content after clearing');
      await expect(editor).toContainText('New content after clearing');
    });
  });

  test.describe('Functional Requirements', () => {
    
    test('should render content in A4 page format by default (FR-006)', async ({ page }) => {
      const pageContainer = page.locator('.continuous-page-container').first();
      await expect(pageContainer).toBeVisible();
      
      const box = await pageContainer.boundingBox();
      expect(box).not.toBeNull();
      
      if (box) {
        expect(box.width).toBeGreaterThan(700);
        expect(box.width).toBeLessThan(850);
      }
    });

    test('should provide a consistent toolbar (FR-008)', async ({ page }) => {
      const toolbar = page.locator('.editor-toolbar').first();
      await expect(toolbar).toBeVisible();
      
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await editor.click();
      await editor.fill('Some content. '.repeat(100));
      await page.waitForTimeout(300);
      
      await expect(toolbar).toBeVisible();
      
      const buttons = toolbar.locator('button');
      const buttonCount = await buttons.count();
      expect(buttonCount).toBeGreaterThan(0);
    });

    test('should support both keyboard and mouse input (FR-011)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Keyboard input test');
      await expect(editor).toContainText('Keyboard input test');
      
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Control+b');
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(b|strong)>/);
      
      await page.keyboard.press('Control+a');
      const italicButton = page.locator('button[title*="Italic"]').first();
      await italicButton.click();
      
      const contentAfter = await editor.innerHTML();
      expect(contentAfter).toMatch(/<(i|em)>/);
    });

    test('should be a standalone functional component', async ({ page }) => {
      const editorComponent = page.locator('.multi-page-editor').first();
      await expect(editorComponent).toBeVisible();
      
      const toolbar = page.locator('.editor-toolbar');
      const contentArea = page.locator('.continuous-content');
      
      await expect(toolbar).toBeVisible();
      await expect(contentArea).toBeVisible();
      
      await contentArea.click();
      await page.keyboard.type('Testing standalone functionality');
      await expect(contentArea).toContainText('Testing standalone functionality');
    });
  });

  test.describe('Edge Cases', () => {
    
    test('should handle very long single line of text', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await editor.click();
      
      const longLine = 'VeryLongWordThatKeepsGoing'.repeat(100);
      await editor.fill(longLine);
      await page.waitForTimeout(300);
      
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(1000);
      
      await page.keyboard.press('End');
      await page.keyboard.type(' End');
      await expect(editor).toContainText('End');
    });

    test('should handle rapid text input', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await editor.click();
      
      for (let i = 0; i < 20; i++) {
        await page.keyboard.type(`word${i} `);
      }
      
      const content = await editor.innerHTML();
      expect(content).toContain('word0');
      expect(content).toContain('word19');
    });

    test('should handle content with mixed formatting', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Normal text ');
      await page.keyboard.press('Control+b');
      await page.keyboard.type('bold text ');
      await page.keyboard.press('Control+b');
      await page.keyboard.press('Control+i');
      await page.keyboard.type('italic text ');
      await page.keyboard.press('Control+i');
      await page.keyboard.type('normal again');
      
      const content = await editor.innerHTML();
      expect(content).toContain('Normal text');
      expect(content).toContain('bold text');
      expect(content).toContain('italic text');
      expect(content).toMatch(/<(b|strong)>/);
      expect(content).toMatch(/<(i|em)>/);
    });

    test('should preserve editor functionality after page refresh', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await editor.fill('Content before refresh');
      await page.waitForTimeout(300);
      
      await page.reload();
      await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 5000 });
      
      const editorAfter = page.locator('.continuous-content[contenteditable="true"]');
      await expect(editorAfter).toBeVisible();
      
      await editorAfter.click();
      await page.keyboard.type('New content after reload');
      await expect(editorAfter).toContainText('New content after reload');
    });
  });

  test.describe('Performance', () => {
    
    test('should handle large content efficiently', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await editor.click();
      
      const largeContent = 'Performance test content. '.repeat(500);
      
      const startTime = Date.now();
      await editor.fill(largeContent);
      await page.waitForTimeout(500);
      const endTime = Date.now();
      
      const loadTime = endTime - startTime;
      expect(loadTime).toBeLessThan(2000);
      
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(5000);
    });

    test('should remain responsive during editing', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await editor.fill('Initial content. '.repeat(50));
      await page.waitForTimeout(200);
      
      const startTime = Date.now();
      
      for (let i = 0; i < 10; i++) {
        await page.keyboard.press('End');
        await page.keyboard.type(` Edit ${i}`);
      }
      
      const endTime = Date.now();
      const editTime = endTime - startTime;
      
      expect(editTime).toBeLessThan(3000);
      
      const content = await editor.innerHTML();
      expect(content).toContain('Edit 0');
      expect(content).toContain('Edit 9');
    });
  });

  test.describe('Accessibility', () => {
    
    test('should have proper contenteditable attributes', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      const isEditable = await editor.getAttribute('contenteditable');
      expect(isEditable).toBe('true');
    });

    test('should be keyboard navigable', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Navigate this text');
      
      await page.keyboard.press('Home');
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('ArrowRight');
      
      await page.keyboard.type('INSERT');
      await expect(editor).toContainText('INSERT');
    });
  });
});
