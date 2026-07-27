const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');

describe('SauceDemo Negative & Edge Case Flow', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    describe('UC-1 Form Validation (Negative Testing)', () => {
        it('Login page is opened when the form with empty username and password is submitted, then error "Epic sadface: Username is required" is expected', async () => {
            await LoginPage.login('', '');

            await expect(LoginPage.errorMessage).toBeExisting();
            await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        });

        it('Login page is opened when the form with username standard_user and no password is submitted, then error "Epic sadface: Password is required" is expected', async () => {
            await LoginPage.login('standard_user', '');

            await expect(LoginPage.errorMessage).toBeExisting();
            await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        });

        it('Inventory is reached when standard_user logs in and the cart is opened, then checkout is continued without a postal code and error "Error: Postal Code is required" is expected', async () => {
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
        it('Inventory page is loaded when performance_glitch_user logs in, then app state is reset via the burger menu and logout is performed, and returning to the login page is expected', async () => {
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
