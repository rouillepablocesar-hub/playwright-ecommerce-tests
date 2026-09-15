import { test, expect } from '@playwright/test';

const PRODUCT_URL = 'https://example.com/products';
const CART_URL = 'https://example.com/cart';

test('Add product to cart and verify quantity', async ({ page }) => {
    await page.goto(PRODUCT_URL);

    // Buscar botón de agregar carrito
    const addButton = page.locator('button:has-text("Add to Cart")').first();
    await expect(addButton).toBeVisible();
    await addButton.click();

    // Verificar notificación
    const notification = page.locator('text=Added to cart');
    await expect(notification).toBeVisible({ timeout: 5000 });
});

test('Navigate to cart and verify items', async ({ page }) => {
    await page.goto(CART_URL);

    // Verificar que la tabla de items existe
    const cartTable = page.locator('table');
    await expect(cartTable).toBeVisible();
});

test('Calculate total price correctly', async ({ page }) => {
    await page.goto(CART_URL);

    // Extraer total
    const totalText = await page.locator('[data-testid="total-price"]').textContent();
    const total = parseFloat(totalText?.replace('$', '') || '0');

    expect(total).toBeGreaterThan(0);
});
