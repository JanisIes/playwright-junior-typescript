import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  readonly page: Page;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;


  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loginEmailInput = this.page.getByTestId("login-email")
    this.loginPasswordInput = this.page.getByTestId("login-password")
    this.loginButton = this.page.getByTestId("login-button");
  }

  async inputLoginData(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
  }

  async clickLoginButton() {
    await this.clickButton(this.loginButton)
  }

}