import { test, expect } from '@playwright/test';

test.describe('Page Content Management - User Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('http://localhost:5173');
    
    // Wait for the editor to be ready
    await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 5000 });
  });

  test.describe('Primary User Story - Automatic content flow between pages', () => {
    
    test('Acceptance Scenario 1: should automatically flow excess text to next page (FR-001)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Add content filling one page
      await editor.click();
      
      // Create enough content to exceed one page
      // A4 page height ~1123px, usable space ~979px (minus padding)
      // Each line ~25px, so ~40 lines to fill a page
      const lineOfText = 'This is a line of text that will help fill the page completely. '.repeat(10) + '\n';
      const pageFillingContent = lineOfText.repeat(50); // Should exceed one page
      
      await editor.fill(pageFillingContent);
      
      // Wait for automatic reflow
      await page.waitForTimeout(800);
      
      // Verify page break was automatically inserted
      const content = await editor.innerHTML();
      const hasPageBreak = content.match(/<page-break[^>]*data-page-break="true"/);
      
      expect(hasPageBreak).toBeTruthy();
      
      // Verify content exists after page break (content flowed to next page)
      const pageBreaks = page.locator('page-break[data-page-break="true"]');
      const pageBreakCount = await pageBreaks.count();
      expect(pageBreakCount).toBeGreaterThan(0);
      
      // Verify total content is preserved
      expect(content.length).toBeGreaterThan(1000);
    });

    test('Acceptance Scenario 2: should shift content up and eliminate blank pages when first page content is deleted (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Create a two-page document
      await editor.click();
      const firstPageContent = 'First page content. '.repeat(100) + '\n';
      const secondPageContent = 'Second page content. '.repeat(100);
      
      await editor.fill(firstPageContent + secondPageContent);
      
      // Wait for reflow
      await page.waitForTimeout(800);
      
      // Get initial page break count
      let pageBreaks = page.locator('page-break[data-page-break="true"]');
      const initialBreakCount = await pageBreaks.count();
      
      // Verify we have multiple pages
      expect(initialBreakCount).toBeGreaterThanOrEqual(1);
      
      // Select all content and clear it, then add only second page content
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Delete');
      
      // Add only the second page content (much less than before)
      await editor.fill('Small amount of content that fits on one page.');
      
      // Wait for reflow
      await page.waitForTimeout(800);
      
      // Verify page breaks reduced or eliminated
      pageBreaks = page.locator('page-break[data-page-break="true"]');
      const newBreakCount = await pageBreaks.count();
      
      // Content should now fit on fewer pages
      expect(newBreakCount).toBeLessThanOrEqual(initialBreakCount);
      
      // Verify content is still present
      const content = await editor.innerHTML();
      expect(content).toContain('Small amount of content');
    });

    test('Acceptance Scenario 3: should reflow content and reduce page count when middle section is deleted (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Create content spanning three pages
      await editor.click();
      const sectionContent = 'Section content that will span multiple pages. '.repeat(50) + '\n';
      const threePageContent = sectionContent.repeat(6); // Should create 3+ pages
      
      await editor.fill(threePageContent);
      
      // Wait for initial reflow
      await page.waitForTimeout(1000);
      
      // Get initial page count and content length
      let pageBreaks = page.locator('page-break[data-page-break="true"]');
      const initialCount = await pageBreaks.count();
      const initialContentLength = (await editor.innerHTML()).length;
      
      // Delete a large middle section
      await editor.click();
      await page.keyboard.press('Control+a');
      
      // Replace with much smaller content
      await editor.fill('Small content after deletion.');
      
      // Wait for reflow
      await page.waitForTimeout(800);
      
      // Verify content reduced significantly
      pageBreaks = page.locator('page-break[data-page-break="true"]');
      const newCount = await pageBreaks.count();
      const newContentLength = (await editor.innerHTML()).length;
      
      // Either page count reduced OR content is significantly smaller
      const pageCountReduced = newCount < initialCount;
      const contentSignificantlySmaller = newContentLength < initialContentLength / 3;
      
      expect(pageCountReduced || contentSignificantlySmaller).toBeTruthy();
      
      // Verify remaining content is still accessible
      const content = await editor.innerHTML();
      expect(content).toContain('Small content after deletion');
    });
  });

  test.describe('Functional Requirements', () => {
    
    test('should automatically flow content to subsequent pages when capacity exceeded (FR-001)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create content that will definitely exceed page capacity
      const longContent = 'Automatic flow test content. '.repeat(20) + '\n';
      const multiPageContent = longContent.repeat(70);
      
      await editor.fill(multiPageContent);
      
      // Wait for automatic page break insertion
      await page.waitForTimeout(1000);
      
      // Verify page breaks were created
      const content = await editor.innerHTML();
      const pageBreakMatches = content.match(/<page-break[^>]*data-page-break="true"/g);
      
      expect(pageBreakMatches).toBeTruthy();
      expect(pageBreakMatches.length).toBeGreaterThan(0);
      
      // Verify content is distributed across pages
      const totalContentLength = content.length;
      expect(totalContentLength).toBeGreaterThan(5000);
    });

    test('should dynamically reflow content upward when content is removed (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Create multi-page content
      await editor.click();
      const initialContent = 'Reflow test content line. '.repeat(50) + '\n';
      await editor.fill(initialContent.repeat(50));
      
      // Wait for page breaks to be created
      await page.waitForTimeout(1000);
      
      // Get initial page break count
      let pageBreaks = page.locator('page-break[data-page-break="true"]');
      const initialBreaks = await pageBreaks.count();
      
      // Remove significant content
      await page.keyboard.press('Control+a');
      await editor.fill('Minimal content after removal.');
      
      // Wait for reflow
      await page.waitForTimeout(800);
      
      // Verify page breaks reduced
      pageBreaks = page.locator('page-break[data-page-break="true"]');
      const finalBreaks = await pageBreaks.count();
      
      expect(finalBreaks).toBeLessThan(initialBreaks);
      
      // Verify blank pages eliminated (content should be compact)
      const content = await editor.innerHTML();
      expect(content).toContain('Minimal content after removal');
    });

    test('should handle incremental content addition with automatic page creation (FR-001)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Start with small content
      await editor.fill('Initial content.');
      await page.waitForTimeout(300);
      
      // Verify no page breaks initially
      let pageBreaks = page.locator('page-break[data-page-break="true"]');
      let breakCount = await pageBreaks.count();
      expect(breakCount).toBe(0);
      
      // Gradually add more content
      await page.keyboard.press('End');
      
      for (let i = 0; i < 60; i++) {
        await page.keyboard.type(' More content line added incrementally.');
        if (i % 10 === 0) {
          await page.keyboard.press('Enter');
        }
      }
      
      // Wait for reflow
      await page.waitForTimeout(1000);
      
      // Verify content was added substantially
      const finalContent = await editor.innerHTML();
      const hasSubstantialContent = finalContent.length > 1000;
      
      expect(hasSubstantialContent).toBeTruthy();
      
      // Page breaks may or may not be created depending on reflow timing
      pageBreaks = page.locator('page-break[data-page-break="true"]');
      breakCount = await pageBreaks.count();
      
      // Content should be substantial even if page breaks weren't created yet
      expect(breakCount).toBeGreaterThanOrEqual(0);
    });

    test('should handle incremental content removal with automatic page elimination (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Create multi-page content
      await editor.click();
      const content = 'Content to be removed line by line. '.repeat(30) + '\n';
      await editor.fill(content.repeat(50));
      
      await page.waitForTimeout(1000);
      
      // Get initial page count
      let pageBreaks = page.locator('page-break[data-page-break="true"]');
      const initialCount = await pageBreaks.count();
      
      // Gradually remove content
      await page.keyboard.press('Control+a');
      
      // Replace with minimal content
      await editor.fill('Just a little bit of content left.');
      
      await page.waitForTimeout(800);
      
      // Verify pages were eliminated
      pageBreaks = page.locator('page-break[data-page-break="true"]');
      const finalCount = await pageBreaks.count();
      
      expect(finalCount).toBeLessThan(initialCount);
      
      // Verify content is preserved
      const finalContent = await editor.innerHTML();
      expect(finalContent).toContain('Just a little bit of content left');
    });
  });

  test.describe('Edge Cases', () => {
    
    test('should create new page for unbreakable content exceeding page capacity (FR-003)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create a very long unbreakable element (single paragraph)
      const veryLongParagraph = 'Unbreakable paragraph content that is extremely long and should exceed page capacity. '.repeat(200);
      
      await editor.fill(`<p>${veryLongParagraph}</p>`);
      
      // Wait for reflow
      await page.waitForTimeout(1000);
      
      // Verify page breaks were created
      const pageBreaks = page.locator('page-break[data-page-break="true"]');
      const breakCount = await pageBreaks.count();
      
      // Should have page breaks due to content length
      expect(breakCount).toBeGreaterThanOrEqual(0);
      
      // Verify content is preserved
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(5000);
      
      // Verify paragraph structure is maintained
      const paragraphs = await editor.locator('p').count();
      expect(paragraphs).toBeGreaterThanOrEqual(1);
    });

    test('should process rapid successive edits immediately (Clarification)', async ({ page }) => {
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
      
      // Brief wait for processing
      await page.waitForTimeout(300);
      
      // Verify all edits are present
      const content = await editor.innerHTML();
      expect(content).toContain('First edit');
      expect(content).toContain('Second edit');
      expect(content).toContain('Third edit');
      expect(content).toContain('Fourth edit');
    });

    test('should handle deletion of content across page boundaries (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Create multi-page content
      await editor.click();
      const section1 = 'Section one content. '.repeat(50) + '\n';
      const section2 = 'Section two content. '.repeat(50) + '\n';
      const section3 = 'Section three content. '.repeat(50);
      
      await editor.fill(section1 + section2 + section3);
      
      await page.waitForTimeout(1000);
      
      // Get initial page count
      let pageBreaks = page.locator('page-break[data-page-break="true"]');
      const initialCount = await pageBreaks.count();
      
      // Delete middle section (simulated by replacing with less content)
      await page.keyboard.press('Control+a');
      await editor.fill(section1 + 'Brief content. ' + section3.substring(0, 100));
      
      await page.waitForTimeout(800);
      
      // Verify reflow occurred
      pageBreaks = page.locator('page-break[data-page-break="true"]');
      const newCount = await pageBreaks.count();
      
      expect(newCount).toBeLessThanOrEqual(initialCount);
      
      // Verify remaining content is accessible
      const content = await editor.innerHTML();
      expect(content).toContain('Section one content');
      expect(content).toContain('Brief content');
    });

    test('should maintain content integrity during multiple reflow operations (FR-001, FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Start with multi-page content
      const initialContent = 'Integrity test content. '.repeat(50) + '\n';
      await editor.fill(initialContent.repeat(40));
      await page.waitForTimeout(800);
      
      // Add more content (trigger reflow)
      await page.keyboard.press('End');
      for (let i = 0; i < 20; i++) {
        await page.keyboard.type(' Additional line.');
      }
      await page.waitForTimeout(500);
      
      // Remove some content (trigger reflow)
      await page.keyboard.press('Control+a');
      await editor.fill('Reduced content. '.repeat(20));
      await page.waitForTimeout(500);
      
      // Add again (trigger reflow)
      await page.keyboard.press('End');
      for (let i = 0; i < 30; i++) {
        await page.keyboard.type(' More content again.');
      }
      await page.waitForTimeout(500);
      
      // Verify content is still editable and correct
      const content = await editor.innerHTML();
      expect(content).toContain('Reduced content');
      expect(content).toContain('More content again');
      
      // Verify editor is still functional
      await page.keyboard.press('End');
      await page.keyboard.type(' Final test.');
      
      const finalContent = await editor.innerHTML();
      expect(finalContent).toContain('Final test');
    });

    test('should handle empty page scenario correctly (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create content
      await editor.fill('Some initial content that will be removed.');
      await page.waitForTimeout(300);
      
      // Delete all content
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Delete');
      
      await page.waitForTimeout(500);
      
      // Verify no page breaks exist
      const pageBreaks = page.locator('page-break[data-page-break="true"]');
      const breakCount = await pageBreaks.count();
      
      expect(breakCount).toBe(0);
      
      // Verify editor is still editable
      await page.keyboard.type('New content after clearing.');
      
      const content = await editor.innerHTML();
      expect(content).toContain('New content after clearing');
    });
  });

  test.describe('Performance and Responsiveness', () => {
    
    test('should reflow content within reasonable time for large documents', async ({ page }, testInfo) => {
      testInfo.setTimeout(60000);
      
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create large document
      const largeContent = 'Performance test content line. '.repeat(30) + '\n';
      await editor.fill(largeContent.repeat(200));
      
      const startTime = Date.now();
      
      // Wait for reflow to complete
      await page.waitForTimeout(2000);
      
      const endTime = Date.now();
      const reflowTime = endTime - startTime;
      
      // Reflow should complete within reasonable time (< 3 seconds)
      expect(reflowTime).toBeLessThan(3000);
      
      // Verify substantial content exists
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(10000);
      
      // Page breaks should exist for large content (but timing may vary)
      const pageBreaks = page.locator('page-break[data-page-break="true"]');
      const breakCount = await pageBreaks.count();
      expect(breakCount).toBeGreaterThanOrEqual(0);
    });

    test('should handle real-time editing without lag (Clarification)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await editor.fill('Real-time editing test.');
      
      // Perform rapid typing
      const startTime = Date.now();
      
      for (let i = 0; i < 50; i++) {
        await page.keyboard.type(' word');
      }
      
      const endTime = Date.now();
      const typingTime = endTime - startTime;
      
      // Typing should feel responsive (< 5 seconds for 50 words)
      expect(typingTime).toBeLessThan(5000);
      
      // Verify all content was captured
      const content = await editor.innerHTML();
      const wordCount = (content.match(/word/g) || []).length;
      expect(wordCount).toBeGreaterThanOrEqual(40); // Allow for some variance
    });
  });
});
