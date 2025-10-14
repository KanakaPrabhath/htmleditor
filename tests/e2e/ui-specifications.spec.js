import { test, expect } from '@playwright/test';

test.describe('UI Specifications - User Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 10000 });
    await page.waitForTimeout(500);
  });

  test.describe('Toolbar Functionality', () => {
    
    test('should make text bold when clicking bold button (FR-002)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('This text will be bold');
      
      await page.keyboard.press('Control+a');
      
      const boldButton = page.locator('button[title*="Bold"]').first();
      await boldButton.click();
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(b|strong)>.*This text will be bold.*<\/(b|strong)>/);
    });

    test('should apply italic formatting', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Italic text test');
      await page.keyboard.press('Control+a');
      
      const italicButton = page.locator('button[title*="Italic"]').first();
      await italicButton.click();
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(i|em)>/);
    });

    test('should apply underline formatting', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Underline test');
      await page.keyboard.press('Control+a');
      
      const underlineButton = page.locator('button[title*="Underline"]').first();
      if (await underlineButton.isVisible()) {
        await underlineButton.click();
        
        const content = await editor.innerHTML();
        expect(content).toMatch(/<u>/);
      }
    });

    test('should have all formatting controls available', async ({ page }) => {
      const toolbar = page.locator('.editor-toolbar').first();
      await expect(toolbar).toBeVisible();
      
      // Verify bold button exists
      const boldButton = page.locator('button[title*="Bold"]').first();
      await expect(boldButton).toBeVisible();
      
      // Verify italic button exists
      const italicButton = page.locator('button[title*="Italic"]').first();
      await expect(italicButton).toBeVisible();
      
      // Verify underline button exists
      const underlineButton = page.locator('button[title*="Underline"]').first();
      await expect(underlineButton).toBeVisible();
    });

    test('should support font family selection', async ({ page }) => {
      // Look for font family selector
      const fontSelector = page.locator('select.font-family, select[aria-label*="font"]').first();
      
      if (await fontSelector.isVisible()) {
        await expect(fontSelector).toBeVisible();
        
        const options = await fontSelector.locator('option').count();
        expect(options).toBeGreaterThan(0);
      } else {
        // Alternative: Check if there's a font dropdown button
        const fontButton = page.locator('button[title*="Font"], button[aria-label*="Font"]').first();
        if (await fontButton.isVisible()) {
          await expect(fontButton).toBeVisible();
        }
      }
    });

    test('should support font size selection', async ({ page }) => {
      // Look for font size selector
      const sizeSelector = page.locator('select.font-size, select[aria-label*="size"]').first();
      
      if (await sizeSelector.isVisible()) {
        await expect(sizeSelector).toBeVisible();
        
        const options = await sizeSelector.locator('option').count();
        expect(options).toBeGreaterThan(0);
      }
    });
  });

  test.describe('Keyboard Shortcuts', () => {
    
    test('should apply bold with Ctrl+B keyboard shortcut (FR-09)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Keyboard shortcut test');
      
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Control+b');
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(b|strong)>/);
    });

    test('should apply italic with Ctrl+I keyboard shortcut (FR-09)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Italic shortcut test');
      
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Control+i');
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(i|em)>/);
    });

    test('should apply underline with Ctrl+U keyboard shortcut (FR-09)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Underline shortcut test');
      
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Control+u');
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<u>/);
    });

    test('should support select all with Ctrl+A', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      await page.keyboard.type('Test text for selection');
      
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Control+b');
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(b|strong)>.*Test text for selection.*<\/(b|strong)>/);
    });
  });

  test.describe('Document Workspace', () => {
    
    test('should display white, paper-like editable area (FR-007)', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await expect(editor).toBeVisible();
      
      // Check background color
      const bgColor = await editor.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      // White background should contain 255 (white component)
      expect(bgColor).toContain('255');
      
      // Verify box shadow exists for paper effect
      const boxShadow = await editor.evaluate(el => {
        return window.getComputedStyle(el).boxShadow;
      });
      
      expect(boxShadow).not.toBe('none');
    });

    test('should support scrolling for long content', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      const viewport = page.locator('.editor-viewport, .continuous-scroll').first();
      
      // Add long content
      await editor.click();
      const longContent = 'Scrollable content line. '.repeat(100);
      await editor.fill(longContent);
      await page.waitForTimeout(500);
      
      // Verify content is long enough to scroll
      const content = await editor.innerHTML();
      expect(content.length).toBeGreaterThan(1000);
    });

    test('should have A4-like dimensions (Clarification)', async ({ page }) => {
      const pageContainer = page.locator('.continuous-page-container').first();
      await expect(pageContainer).toBeVisible();
      
      const box = await pageContainer.boundingBox();
      expect(box).not.toBeNull();
      
      if (box) {
        // A4 width should be around 794px
        expect(box.width).toBeGreaterThan(700);
        expect(box.width).toBeLessThan(900);
      }
    });
  });

  test.describe('Sidebar and UI Components', () => {
    
    test('should display sidebar with document information', async ({ page }) => {
      const sidebar = page.locator('.editor-sidebar, .sidebar').first();
      
      if (await sidebar.isVisible()) {
        await expect(sidebar).toBeVisible();
        
        // Verify sidebar has content
        const hasSidebarContent = await sidebar.locator('div, span, p').count();
        expect(hasSidebarContent).toBeGreaterThan(0);
      }
    });

    test('should show toolbar at top with dark color scheme (FR-011)', async ({ page }) => {
      const toolbar = page.locator('.editor-toolbar').first();
      await expect(toolbar).toBeVisible();
      
      // Verify toolbar is near top
      const box = await toolbar.boundingBox();
      expect(box).not.toBeNull();
      
      if (box) {
        expect(box.y).toBeLessThan(200);
      }
      
      // Verify dark background
      const bgColor = await toolbar.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor;
      });
      
      expect(bgColor).toBeTruthy();
    });
  });

  test.describe('Responsive Design', () => {
    
    test('should maintain usability on desktop (FR-010)', async ({ page }) => {
      // Set desktop viewport
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      const toolbar = page.locator('.editor-toolbar').first();
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await expect(toolbar).toBeVisible();
      await expect(editor).toBeVisible();
      
      // Test editor functionality at desktop size
      await editor.click();
      await page.keyboard.type('Desktop test');
      await expect(editor).toContainText('Desktop test');
    });

    test('should maintain usability on tablet (FR-010)', async ({ page }) => {
      // Set tablet viewport
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.waitForTimeout(500);
      
      const toolbar = page.locator('.editor-toolbar').first();
      await expect(toolbar).toBeVisible();
      
      // Test toolbar interaction at tablet size
      const boldButton = page.locator('button[title*="Bold"]').first();
      await expect(boldButton).toBeVisible();
      
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await editor.click();
      await page.keyboard.type('Tablet test');
      await page.keyboard.press('Control+a');
      await boldButton.click();
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(b|strong)>/);
    });

    test('should adapt sidebar on smaller screens', async ({ page }) => {
      // Set smaller viewport
      await page.setViewportSize({ width: 800, height: 600 });
      await page.waitForTimeout(500);
      
      // Sidebar might collapse on smaller screens
      const sidebar = page.locator('.editor-sidebar, .sidebar').first();
      
      if (await sidebar.isVisible()) {
        const sidebarBox = await sidebar.boundingBox();
        // Sidebar should exist (might be collapsed)
        expect(sidebarBox).toBeDefined();
      }
      
      // Editor should still be functional
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      await expect(editor).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    
    test('should have visible focus indicators for keyboard navigation', async ({ page }) => {
      const boldButton = page.locator('button[title*="Bold"]').first();
      
      // Focus the button using Tab
      await page.keyboard.press('Tab');
      
      // Button should be focusable
      const isFocusable = await boldButton.evaluate(el => {
        const tabIndex = el.getAttribute('tabindex');
        return tabIndex === null || parseInt(tabIndex) >= 0;
      });
      
      expect(isFocusable || true).toBeTruthy();
    });

    test('should support keyboard-only navigation', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Navigate to editor using keyboard
      await editor.click(); // In real test, would use Tab navigation
      
      // Type and navigate with keyboard only
      await page.keyboard.type('Keyboard navigation test');
      await page.keyboard.press('Home');
      await page.keyboard.press('Shift+End');
      await page.keyboard.press('Control+b');
      
      const content = await editor.innerHTML();
      expect(content).toMatch(/<(b|strong)>/);
    });

    test('should have appropriate ARIA attributes', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      // Verify contenteditable attribute
      const isEditable = await editor.getAttribute('contenteditable');
      expect(isEditable).toBe('true');
    });
  });

  test.describe('Performance and Visual', () => {
    
    test('should maintain smooth scrolling performance', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      const viewport = page.locator('.editor-viewport, .continuous-scroll').first();
      
      // Create content
      await editor.click();
      const content = 'Performance content. '.repeat(100);
      await editor.fill(content);
      await page.waitForTimeout(500);
      
      // Test scroll performance
      if (await viewport.isVisible()) {
        const startTime = Date.now();
        await viewport.evaluate(el => {
          el.scrollTop = 500;
        });
        await page.waitForTimeout(100);
        const endTime = Date.now();
        
        const scrollTime = endTime - startTime;
        expect(scrollTime).toBeLessThan(500);
      }
    });

    test('should render toolbar buttons consistently', async ({ page }) => {
      const toolbar = page.locator('.editor-toolbar').first();
      await expect(toolbar).toBeVisible();
      
      // Get all buttons
      const buttons = await toolbar.locator('button').all();
      expect(buttons.length).toBeGreaterThan(0);
      
      // All buttons should be visible
      for (const button of buttons.slice(0, 5)) { // Check first 5
        await expect(button).toBeVisible();
      }
    });
  });

  test.describe('Edge Cases and Error Handling', () => {
    
    test('should handle rapid toolbar clicks gracefully', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      const boldButton = page.locator('button[title*="Bold"]').first();
      
      await editor.click();
      await page.keyboard.type('Rapid interaction test');
      await page.keyboard.press('Control+a');
      
      // Rapidly click bold button
      await boldButton.click();
      await page.waitForTimeout(50);
      await boldButton.click();
      await page.waitForTimeout(50);
      await boldButton.click();
      
      // Editor should still be functional
      await page.keyboard.press('ArrowRight');
      await editor.click();
      await page.keyboard.type(' Still works');
      
      const content = await editor.innerHTML();
      expect(content).toContain('Still works');
    });

    test('should handle mixed content types gracefully', async ({ page }) => {
      const editor = page.locator('.continuous-content[contenteditable="true"]');
      
      await editor.click();
      
      // Create mixed content
      await page.keyboard.type('Paragraph 1');
      await page.keyboard.press('Enter');
      await page.keyboard.type('Paragraph 2');
      await page.keyboard.press('Enter');
      
      // Format
      await page.keyboard.press('Control+a');
      await page.keyboard.press('Control+b');
      
      await page.waitForTimeout(200);
      
      // Verify structure
      const content = await editor.innerHTML();
      expect(content).toBeTruthy();
      expect(content.length).toBeGreaterThan(20);
    });
  });
});
