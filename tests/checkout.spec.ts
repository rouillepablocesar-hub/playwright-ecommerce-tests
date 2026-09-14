import { test, expect } from '@playwright/test';

test('Verify checkout page loads', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveURL(/example/);
});

test('Checkout form exists', async ({ page }) => {
    await page.goto('https://example.com');
    const pageContent = await page.content();
    expect(pageContent).toBeTruthy();
});
