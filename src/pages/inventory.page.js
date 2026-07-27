class InventoryPage {
    get burgerMenuButton() {
        return $('#react-burger-menu-btn');
    }

    get resetAppStateLink() {
        return $('#reset_sidebar_link');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    get cartIcon() {
        return $('.shopping_cart_link');
    }

    async open() {
        await browser.url('/inventory.html');
        await this.cartIcon.waitForDisplayed({ timeout: 10000 });
    }

    async openMenu() {
        await this.burgerMenuButton.waitForClickable({ timeout: 10000 });
        await this.burgerMenuButton.click();
        await this.resetAppStateLink.waitForDisplayed({ timeout: 10000 });
    }

    async resetAppState() {
        await this.openMenu();
        await this.resetAppStateLink.click();
    }

    async logout() {
        if (!await this.logoutLink.isDisplayed()) {
            await this.openMenu();
        }
        await this.logoutLink.click();
    }
}

module.exports = new InventoryPage();
