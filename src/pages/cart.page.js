class CartPage {
    get checkoutButton() {
        return $('#checkout');
    }

    async open() {
        await this.checkoutButton.waitForDisplayed({ timeout: 10000 });
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();
