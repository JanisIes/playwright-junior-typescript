import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class CartPage extends BasePage {
    readonly page: Page;
    readonly proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.proceedToCheckoutButton = this.page.getByText("Proceed To Checkout")
    }

    async getProductPrice(productName: string) {
        return await this.page.locator(`tr .cart_price:right-of(:has-text("${productName}"))`).first().textContent()
    }

    async clickProceedToCheckoutButton() {
        this.clickButton(this.proceedToCheckoutButton)
    }
}