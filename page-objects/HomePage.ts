import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async checkForConsentButton() {
    if (await this.page.locator('button:has-text("Consent")').isVisible()) {
      this.page.locator('button:has-text("Consent")').click();
    }
    else {
      return 0
    }
  }
}