import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;
  readonly loginLink: Locator;
  readonly testCasesLink: Locator;
  readonly apiTestingLink: Locator;
  readonly tutorialsLink: Locator;
  readonly contactLink: Locator;
  readonly logoutLink: Locator;
  readonly deleteAccountLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.homeLink = this.page.getByRole('link', { name: 'Home' });
    this.productsLink = this.page.getByRole('link', { name: 'Products' });
    this.cartLink = this.page.getByRole('link', { name: 'Cart' });
    this.loginLink = this.page.getByRole('link', { name: 'Signup / Login' });
    this.testCasesLink = this.page.getByRole('link', { name: 'Test Cases' });
    this.apiTestingLink = this.page.getByRole('link', { name: 'API Testing' });
    this.tutorialsLink = this.page.getByRole('link', { name: 'Video Tutorials' });
    this.contactLink = this.page.getByRole('link', { name: 'Contact us' });
    this.logoutLink = this.page.getByRole('link', { name: 'Logout' });
    this.deleteAccountLink = this.page.getByRole('link', { name: 'Delete Account' });
  }

  async clickHomeLink() {
    await this.clickButton(this.homeLink)
  }

  async clickProductsLink() {
    await this.clickButton(this.productsLink)
  }

  async clickCartLink() {
    await this.clickButton(this.cartLink)
  }

  async clickLoginLink() {
    await this.clickButton(this.loginLink)
  }

  async clickTestCasesLink() {
    await this.clickButton(this.testCasesLink)
  }

  async clickApiTestingLink() {
    await this.clickButton(this.apiTestingLink)
  }

  async clickTutorialsLink() {
    await this.clickButton(this.tutorialsLink)
  }

  async clickContactLink() {
    await this.clickButton(this.contactLink)
  }

  async clickLogoutLink() {
    await this.clickButton(this.logoutLink)
  }

  async clickDeleteAccountLink() {
    await this.clickButton(this.deleteAccountLink)
  }

}