import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class PaymentPage extends BasePage {
    readonly page: Page;
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvcInput: Locator;
    readonly expirationMonthInput: Locator;
    readonly expirationYearInput: Locator;
    readonly payAndConfirmButton: Locator;
    readonly successfulOrderMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.nameOnCardInput = this.page.getByTestId("name-on-card");
        this.cardNumberInput = this.page.getByTestId("card-number");
        this.cvcInput = this.page.getByTestId("cvc");
        this.expirationMonthInput = this.page.getByTestId("expiry-month");
        this.expirationYearInput = this.page.getByTestId("expiry-year");
        this.payAndConfirmButton = this.page.getByTestId("pay-button");
        this.successfulOrderMessage = this.page.getByTestId("order-placed");
    }

    async inputPaymentDetails(nameOnCard: string, cardNumber: string, cvc: string, expirationMonth: string, expirationYear: string) {
        await this.nameOnCardInput.fill(nameOnCard);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expirationMonthInput.fill(expirationMonth);
        await this.expirationYearInput.fill(expirationYear);
    }

    async clickPayAndConfirmButton() {
        this.clickButton(this.payAndConfirmButton)
    }

    async assertSuccessfulPayment(messageText: string) {
        await this.assertText(this.successfulOrderMessage, messageText)
        // ORDER PLACED!
    }
}