import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class ProductsPage extends BasePage {
  readonly page: Page;
  readonly viewCartLink: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.viewCartLink = this.page.getByRole('link', { name: 'View Cart' });
    this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
  }

  async hoverOnProduct(productName: string) {
    await this.page.locator(`.productinfo :has-text("${productName}")`).hover()
  }

  async addProductToCart(productName: string) {
    await this.page.locator(`.productinfo a:below(:has-text("${productName}"))`).first().click()
  }

  async getProductPrice(productName: string) {
    return await this.page.locator(`.productinfo h2:above(:has-text("${productName}"))`).first().textContent()
  }

  async viewCart() {
    await this.viewCartLink.click()
  }

  async continueShopping() {
    await this.continueShoppingButton.click()
  }

}