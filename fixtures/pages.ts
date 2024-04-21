import { test as baseTest } from "@playwright/test";
import BasePage from "../page-objects/BasePage";
import HomePage from "../page-objects/HomePage";
import ProductsPage from "../page-objects/ProductsPage";
import CartPage from "../page-objects/CartPage";
import LoginPage from "../page-objects/LoginPage";
import CheckoutPage from "../page-objects/CheckoutPage";
import PaymentPage from "../page-objects/PaymentPage";

type Pages = {
  basePage: BasePage;
  homePage: HomePage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
};

const test = baseTest.extend<Pages>({
  basePage: async ({ page }, use) => await use(new BasePage(page)),
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  productsPage: async ({ page }, use) => await use(new ProductsPage(page)),
  cartPage: async ({ page }, use) => await use(new CartPage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  checkoutPage: async ({ page }, use) => await use(new CheckoutPage(page)),
  paymentPage: async ({ page }, use) => await use(new PaymentPage(page)),
});

export default test;