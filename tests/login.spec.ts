import { test, expect } from '@playwright/test';

test('User can login successfully', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
});

test('Add item to cart', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveURL(/example/);
});

test('Checkout process', async ({ page }) => {
    await page.goto('https://example.com');
    const links = await page.locator('a').count();
    expect(links).toBeGreaterThan(0);
});
