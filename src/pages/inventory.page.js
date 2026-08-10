class InventoryPage {
    BURGER_MENU_BUTTON_LOCATOR = '#react-burger-menu-btn';
    RESET_APP_STATE_LINK_LOCATOR = '#reset_sidebar_link';
    LOGOUT_LINK_LOCATOR = '#logout_sidebar_link';
    CART_ICON_LOCATOR = '.shopping_cart_link';

    get burgerMenuButton() {
        return $(this.BURGER_MENU_BUTTON_LOCATOR);
    }

    get resetAppStateLink() {
        return $(this.RESET_APP_STATE_LINK_LOCATOR);
    }

    get logoutLink() {
        return $(this.LOGOUT_LINK_LOCATOR);
    }

    get cartIcon() {
        return $(this.CART_ICON_LOCATOR);
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
