// pages/LoginPage.ts
import { Page } from 'playwright';

export class LoginPage {
  private page: Page;
  private emailInput = 'input[name="email"]';
  private passwordInput = 'input[name="password"]';
  private submitButton = 'button[type="submit"]';
  private errorMessage = 'text=Your email and/or password are incorrect';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demo.haroldwaste.com/');
  }

  async login(email: string, password: string) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }

   async getErrorMessage() {
     return this.page.locator(this.errorMessage);
   }
}
