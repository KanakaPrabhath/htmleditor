import { test, expect } from '@playwright/test';

test.describe('Toolbar Indent/Outdent Buttons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForSelector('.continuous-content[contenteditable="true"]', { timeout: 10000 });
    await page.waitForTimeout(500);
  });

  test('should have indent and outdent buttons in toolbar', async ({ page }) => {
    // Check if indent/outdent buttons exist
    const indentButton = page.locator('button[title="Increase Indent (Tab)"]');
    const outdentButton = page.locator('button[title="Decrease Indent (Shift+Tab)"]');
    
    await expect(indentButton).toBeVisible();
    await expect(outdentButton).toBeVisible();
  });

  test('should indent selected paragraphs when clicking indent button', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');
    const indentButton = page.locator('button[title="Increase Indent (Tab)"]');

    // Type content
    await editor.click();
    await page.keyboard.type('First paragraph');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Second paragraph');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Third paragraph');

    // Select all content
    await page.keyboard.press('Control+a');

    // Click indent button
    await indentButton.click();

    // Verify content is indented
    const content = await editor.innerHTML();
    expect(content).toContain('data-indent-level="1"');
    expect(content).toContain('First paragraph');
    expect(content).toContain('Second paragraph');
    expect(content).toContain('Third paragraph');
  });

  test('should outdent selected paragraphs when clicking outdent button', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');
    const indentButton = page.locator('button[title="Increase Indent (Tab)"]');
    const outdentButton = page.locator('button[title="Decrease Indent (Shift+Tab)"]');

    // Type and indent content
    await editor.click();
    await page.keyboard.type('First paragraph');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Second paragraph');
    
    // Select all and indent
    await page.keyboard.press('Control+a');
    await indentButton.click();

    // Verify content is indented
    let content = await editor.innerHTML();
    expect(content).toContain('data-indent-level="1"');
    expect(content).toContain('First paragraph');
    expect(content).toContain('Second paragraph');

    // Now outdent
    await page.keyboard.press('Control+a');
    await outdentButton.click();

    // Verify indentation is removed
    content = await editor.innerHTML();
    expect(content).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;First paragraph');
    expect(content).not.toContain('&nbsp;&nbsp;&nbsp;&nbsp;Second paragraph');
    expect(content).toContain('First paragraph');
    expect(content).toContain('Second paragraph');
  });

  test('should insert indentation at cursor when no selection and clicking indent button', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');
    const indentButton = page.locator('button[title="Increase Indent (Tab)"]');

    // Type content
    await editor.click();
    await page.keyboard.type('Start of line');

    // Move cursor to start
    await page.keyboard.press('Home');

    // Click indent button
    await indentButton.click();

    // Type more text
    await page.keyboard.type('X');

    // Verify indentation was inserted
    const content = await editor.innerHTML();
    expect(content).toContain('data-indent-level="1"');
  });

  test('should preserve selection after clicking indent button', async ({ page }) => {
    const editor = page.locator('.continuous-content[contenteditable="true"]');
    const indentButton = page.locator('button[title="Increase Indent (Tab)"]');

    // Type content
    await editor.click();
    await page.keyboard.type('First line');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Second line');

    // Select all
    await page.keyboard.press('Control+a');

    // Click indent button
    await indentButton.click();

    // Check if selection is still active
    const selection = await page.evaluate(() => {
      const sel = window.getSelection();
      return {
        isCollapsed: sel.isCollapsed,
        text: sel.toString()
      };
    });

    expect(selection.isCollapsed).toBe(true);
    expect(selection.text).toBe('');
  });
});
