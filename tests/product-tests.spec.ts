import { expect } from '@playwright/test';
import test from "../fixtures/pages";

test.describe("Add item to cart and assert if the price is correct", async () => {

    test('Test generated with codegen', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await page.getByText('Rs. 400 Men Tshirt Add to cart Rs. 400 Men Tshirt Add to cart View Product').hover();
        const productPrice = await page.getByRole('heading', { name: 'Rs. 400' }).nth(1).textContent();
        await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await page.getByRole('link', { name: 'View Cart' }).click();
        const expectedPrice = await page.getByText('Rs.').first().textContent();
        expect(expectedPrice).toEqual(productPrice)
    });

    test("Improved case", async ({ homePage, productsPage, cartPage }) => {
        await homePage.handleConsentPopup()
        await homePage.handleGoogleVignettePopup()

        await productsPage.navigateToPage("/products")

        const productPagePrice = await productsPage.getProductPrice("Men Tshirt")

        await productsPage.addProductToCart("Men Tshirt")
        await productsPage.continueShopping()
        await productsPage.addProductToCart("Blue Top")
        await productsPage.viewCart()

        const productCartPrice = await cartPage.getProductPrice("Men Tshirt")

        expect(productPagePrice?.trim()).toEqual(productCartPrice?.trim())
    })
})
