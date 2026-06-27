import { test, expect } from '@playwright/test';



test('successful login with valid credentials', async ({ page }) => {
   
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.title')).toHaveText('Products');
});


test('failed login with invalid credentials', async ({ page }) => {
  
  await page.goto('/');
  await page.fill('#user-name', 'wrong_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


test('add product to cart shows badge count of 1', async ({ page }) => {
  
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.locator('.btn_inventory').first().click();  
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});