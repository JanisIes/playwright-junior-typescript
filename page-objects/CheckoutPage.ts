import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class CheckoutPage extends BasePage {
    readonly page: Page;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.placeOrderButton = this.page.getByRole('link', { name: 'Place Order' });
    }

    async clickPlaceOrderButton() {
        this.clickButton(this.placeOrderButton)
    }
}