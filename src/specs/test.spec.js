const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');

describe('SauceDemo Negative & Edge Case Flow', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    describe('UC-1 Form Validation (Negative Testing)', () => {
        it('UC-1: Attempt to login with empty Username and Password and verify error "Username is required"', async () => {
            await LoginPage.login('', '');

            await expect(LoginPage.errorMessage).toBeExisting();
            await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        });

        it('UC-1: Attempt to login with Username only and verify error "Password is required"', async () => {
            await LoginPage.login('standard_user', '');

            await expect(LoginPage.errorMessage).toBeExisting();
            await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        });

        it('UC-1: Login with standard_user, go to Checkout, and continue without postal code to verify checkout error', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
            await InventoryPage.cartIcon.waitForDisplayed({ timeout: 10000 });
            await InventoryPage.cartIcon.click();

            await CartPage.open();
            await CheckoutPage.continueCheckout('First', 'Last', '');

            await expect(CheckoutPage.errorMessage).toBeExisting();
            await expect(CheckoutPage.errorMessage).toHaveText('Error: Postal Code is required');
        });
    });

    describe('UC-2 Handling Latency (Wait Strategies)', () => {
        it('UC-2: Login with performance_glitch_user, handle built-in delay, reset app state via burger menu, and logout', async () => {
            await LoginPage.login('performance_glitch_user', 'secret_sauce');

            await InventoryPage.cartIcon.waitForDisplayed({ timeout: 20000 });
            await expect(InventoryPage.cartIcon).toBeExisting();

            await InventoryPage.resetAppState();
            await expect(InventoryPage.logoutLink).toBeExisting();

            await InventoryPage.logout();
            await expect(LoginPage.loginButton).toBeExisting();
        });
    });
});
