class CartPage {
    CHECKOUT_BUTTON_LOCATOR = '#checkout';

    get checkoutButton() {
        return $(this.CHECKOUT_BUTTON_LOCATOR);
    }

    async proceedToCheckout() {
        await this.checkoutButton.waitForDisplayed({ timeout: 10000 });
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();
