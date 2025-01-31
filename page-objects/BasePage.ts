import { Page, Locator, expect } from "@playwright/test";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPage(url: string) {
    await this.page.goto(url);
  }

  async assertPageUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertText(selector: Locator, text: string) {
    await expect(selector).toHaveText(text);
  }

  async clickButton(selector: Locator) {
    await selector.click();
  }

  async handleConsentPopup() {
    await this.page.addLocatorHandler(
      this.page.getByText("This site asks for consent to use your data"),
      async () => {
        await this.page.locator('button:has-text("Consent")').click();
      }
    )
  }

  async handleGoogleVignettePopup() {
    await this.page.addLocatorHandler(
      this.page.locator("#ad_position_box"),
      async () => {
        await this.page.getByLabel("Close ad").click();
      }
    )
  }
}