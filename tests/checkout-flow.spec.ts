import test from "../fixtures/pages";

test.describe("Test checkout flow", async () => {

    test("Add item to cart, checkout and make a successfull purchase", async ({ homePage, loginPage, productsPage, cartPage, checkoutPage, paymentPage }) => {
        await homePage.handleConsentPopup()
        await homePage.handleGoogleVignettePopup()


        await loginPage.navigateToPage("/login")
        await loginPage.inputLoginData("user1@email.com", "password1")
        await loginPage.clickLoginButton()

        await productsPage.navigateToPage("/products")
        await productsPage.addProductToCart("Men Tshirt")
        await productsPage.viewCart()

        await cartPage.clickProceedToCheckoutButton()

        await checkoutPage.clickPlaceOrderButton()

        await paymentPage.inputPaymentDetails(
            "John Doe",
            "123123123",
            "321",
            "12",
            "2025"
        )
        await paymentPage.clickPayAndConfirmButton()
        await paymentPage.assertSuccessfulPayment("Order Placed!")
    })
})
