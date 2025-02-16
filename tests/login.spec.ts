// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();
test.describe('Login Functionality', () => {
  const baseURL = process.env.BASE_URL!;
  const validEmail = process.env.VALID_EMAIL!;
  const validPassword = process.env.VALID_PASSWORD!


  test('Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(validEmail, validPassword);

    // Assert that the user is redirected to the dashboard
    await expect(page).toHaveURL(`${baseURL}/purchases`);
  });

  test('Unsuccessful login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(validEmail, 'invalidPassword');

    // Assert that an error message is displayed
    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible();
  });

  test('Unsuccessful login with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('', '');

    // Assert that validation messages are displayed
    await expect(page.locator('text=Required').first()).toBeVisible();
    await expect(page.locator('text=Required').nth(1)).toBeVisible();
  });
  //Force fully fail testcase to check for fail report
  test('Fail this TC for Screenshot', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('test', '');

    // Assert that validation messages are displayed
    await expect(page.locator('text=Required').first()).toBeVisible();
    await expect(page.locator('text=Required').nth(1)).toBeVisible();
  });
});
