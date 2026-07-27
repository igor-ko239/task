const loginPage = require('../pageobjects/LoginPage');
const inventoryPage = require('../pageobjects/InventoryPage');
const checkoutPage = require('../pageobjects/CheckoutPage');

describe('SauceDemo negative and edge case flow', () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it('UC-1: empty username and password shows the required username error', async () => {
    await loginPage.login('', '');
    await expect(await loginPage.getErrorText()).toContain('Username is required');
  });

  it('UC-1: username only shows the required password error', async () => {
    await loginPage.login('standard_user', '');
    await expect(await loginPage.getErrorText()).toContain('Password is required');
  });

  it('UC-1: checkout without postal code shows the required postal code error', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.waitForInventoryPage();
    await inventoryPage.addFirstItem();
    await inventoryPage.openCart();
    await inventoryPage.startCheckout();
    await checkoutPage.continueWithoutPostalCode('Jane', 'Doe', '');
    await expect(await checkoutPage.getErrorText()).toContain('Postal Code is required');
  });

  it('UC-2: performance glitch user can log in, load the app, reset state, and log out', async () => {
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await inventoryPage.waitForInventoryPage();
    await inventoryPage.openBurgerMenu();
    await inventoryPage.resetAppState();
    await inventoryPage.logout();
    await expect(loginPage.usernameInput).toBeDisplayed();
  });
});
