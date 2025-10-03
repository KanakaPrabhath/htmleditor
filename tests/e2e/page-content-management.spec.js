import { test, expect } from '@playwright/test';

test.describe('Page Content Management - User Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 10000 });
    await page.waitForTimeout(500);
  });

  test.describe('Content Management', () => {
    
    test('should allow adding and editing large amounts of content', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create substantial content
      const paragraph = 'This is a paragraph with enough text to test content management. ';
      const largeContent = paragraph.repeat(100);
      
      await editor.fill(largeContent);
      await page.waitForTimeout(500);
      
      // Verify content was added
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(5000);
      expect(content).toContain('paragraph with enough text');
    });

    test('should handle content deletion gracefully', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Add content first
      await editor.click();
      await editor.fill('Content to be deleted. '.repeat(50));
      await page.waitForTimeout(300);
      
      const initialLength = (await editor.innerHTML()).length;
      expect(initialLength).toBeGreaterThan(500);
      
      // Delete all content
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Delete');
      await page.waitForTimeout(300);
      
      // Verify content was deleted
      const finalContent = await editor.innerHTML();
      expect(finalContent.length).toBeLessThan(initialLength);
      
      // Editor should still be functional
      await page.keyboard.type('New content after deletion');
      await expect(editor).toContainText('New content after deletion');
    });

    test('should handle partial content deletion', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Add structured content
      await editor.click();
      await editor.fill('Section 1. Section 2. Section 3.');
      await page.waitForTimeout(200);
      
      // Select and delete middle section (using keyboard navigation)
      await page.keyboard.press('Home');
      for (let i = 0; i < 11; i++) { // Move to "Section 2"
        await page.keyboard.press('ArrowRight');
      }
      
      // Select "Section 2. "
      for (let i = 0; i < 11; i++) {
        await page.keyboard.press('Shift+ArrowRight');
      }
      
      await page.keyboard.press('Delete');
      await page.waitForTimeout(200);
      
      // Verify partial deletion
      const content = await editor.innerHTML();
      expect(content).toContain('Section 1');
      expect(content).toContain('Section 3');
      expect(content).not.toContain('Section 2');
    });
  });

  test.describe('Content Flow and Editing', () => {
    
    test('should maintain content integrity during rapid edits', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await editor.fill('Initial content. '.repeat(20));
      await page.waitForTimeout(200);
      
      // Perform rapid successive edits
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('End');
        await page.keyboard.type(` Edit ${i}.`);
        await page.waitForTimeout(50);
      }
      
      // Verify all edits are present
      const content = await editor.innerHTML();
      expect(content).toContain('Initial content');
      expect(content).toContain('Edit 0');
      expect(content).toContain('Edit 4');
    });

    test('should handle incremental content addition', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await editor.fill('Initial content.');
      await page.waitForTimeout(200);
      
      // Add content incrementally
      for (let i = 0; i < 10; i++) {
        await page.keyboard.press('End');
        await page.keyboard.type(` Line ${i}.`);
        if (i % 3 === 0) {
          await page.keyboard.press('Enter');
        }
      }
      
      await page.waitForTimeout(300);
      
      // Verify incremental additions
      const content = await editor.innerHTML();
      expect(content).toContain('Initial content');
      expect(content).toContain('Line 0');
      expect(content).toContain('Line 9');
    });

    test('should process rapid successive edits immediately', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Perform rapid successive edits
      await editor.fill('First edit.');
      await page.waitForTimeout(100);
      
      await page.keyboard.press('End');
      await page.keyboard.type(' Second edit.');
      await page.waitForTimeout(100);
      
      await page.keyboard.press('End');
      await page.keyboard.type(' Third edit.');
      await page.waitForTimeout(100);
      
      await page.keyboard.press('End');
      await page.keyboard.type(' Fourth edit.');
      
      await page.waitForTimeout(300);
      
      // Verify all edits are present
      const content = await editor.innerHTML();
      expect(content).toContain('First edit');
      expect(content).toContain('Second edit');
      expect(content).toContain('Third edit');
      expect(content).toContain('Fourth edit');
    });
  });

  test.describe('Edge Cases', () => {
    
    test('should handle very long unbreakable content', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create a very long unbreakable string
      const veryLongParagraph = 'UnbreakableParagraphContentThatIsExtremelyLongAndShouldStillBeHandledCorrectly'.repeat(50);
      
      await editor.fill(`<p>${veryLongParagraph}</p>`);
      await page.waitForTimeout(500);
      
      // Verify content exists
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(1000);
      
      // Verify paragraph structure is maintained
      const paragraphs = await editor.locator('p').count();
      expect(paragraphs).toBeGreaterThanOrEqual(1);
    });

    test('should handle empty page scenario', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Add and then remove content
      await editor.fill('Some initial content');
      await page.waitForTimeout(200);
      
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Delete');
      await page.waitForTimeout(300);
      
      // Verify editor is still editable after emptying
      await page.keyboard.type('New content after clearing.');
      
      const content = await editor.innerHTML();
      expect(content).toContain('New content after clearing');
    });

    test('should maintain content structure with complex HTML', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create content with different structures
      await page.keyboard.type('Paragraph 1');
      await page.keyboard.press('Enter');
      await page.keyboard.type('Paragraph 2');
      await page.keyboard.press('Enter');
      
      // Select and format
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Control+b');
      
      await page.waitForTimeout(200);
      
      // Verify content structure
      const content = await editor.innerHTML();
      expect(content).toBeTruthy();
      expect(content.length).toBeGreaterThan(20);
      
      const paragraphs = await editor.locator('p').count();
      expect(paragraphs).toBeGreaterThanOrEqual(1);
    });

    test('should handle special characters and symbols', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      const specialContent = 'Special chars: @#$%^&*() <> [] {} | \\ / ~ `';
      await editor.fill(specialContent);
      await page.waitForTimeout(200);
      
      // Verify special characters are preserved
      await expect(editor).toContainText('@#$%');
      await expect(editor).toContainText('Special chars');
    });
  });

  test.describe('Performance and Responsiveness', () => {
    
    test('should handle large document efficiently', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create large document
      const largeContent = 'Performance test content line. '.repeat(300);
      
      const startTime = Date.now();
      await editor.fill(largeContent);
      await page.waitForTimeout(1000);
      const endTime = Date.now();
      
      const processingTime = endTime - startTime;
      expect(processingTime).toBeLessThan(2500);
      
      // Verify substantial content exists
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(8000);
    });

    test('should handle real-time editing without lag', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await editor.fill('Real-time editing test.');
      
      // Perform typing simulation
      const startTime = Date.now();
      
      for (let i = 0; i < 30; i++) {
        await page.keyboard.type(' word');
      }
      
      const endTime = Date.now();
      const typingTime = endTime - startTime;
      
      // Typing should feel responsive
      expect(typingTime).toBeLessThan(5000);
      
      // Verify all content was captured
      const content = await editor.innerHTML();
      const wordCount = (content.match(/word/g) || []).length;
      expect(wordCount).toBeGreaterThanOrEqual(25); // Allow some variance
    });
  });
});
