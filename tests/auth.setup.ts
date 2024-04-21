import { test as setup } from "@playwright/test";
import HomePage from "../page-objects/HomePage";
import LoginPage from "../page-objects/LoginPage";

const authFile = ".auth/user.json";

setup("Sign in with email", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await loginPage.navigateToPage("/login")
    await loginPage.inputLoginData("user1@email.com", "password1")
    await loginPage.clickLoginButton()
    await homePage.assertPageUrl("/");

    await page.context().storageState({ path: authFile });
});