const BasePage = require('./BasePage');

class InventoryPage extends BasePage {
  get inventoryContainer() {
    return $('#inventory_container');
  }

  get firstAddToCartButton() {
    return $('button[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  get cartLink() {
    return $('.shopping_cart_link');
  }

  get checkoutButton() {
    return $('#checkout');
  }

  get burgerMenuButton() {
    return $('#react-burger-menu-btn');
  }

  get resetAppStateLink() {
    return $('#reset_sidebar_link');
  }

  get logoutLink() {
    return $('#logout_sidebar_link');
  }

  async waitForInventoryPage() {
    await this.inventoryContainer.waitForDisplayed({ timeout: 20000 });
  }

  async addFirstItem() {
    await this.firstAddToCartButton.waitForDisplayed({ timeout: 10000 });
    await this.firstAddToCartButton.click();
  }

  async openCart() {
    await this.cartLink.waitForDisplayed({ timeout: 10000 });
    await this.cartLink.click();
  }

  async startCheckout() {
    await this.checkoutButton.waitForDisplayed({ timeout: 10000 });
    await this.checkoutButton.click();
  }

  async openBurgerMenu() {
    await this.burgerMenuButton.waitForDisplayed({ timeout: 10000 });
    await this.burgerMenuButton.click();
  }

  async resetAppState() {
    await this.resetAppStateLink.waitForDisplayed({ timeout: 10000 });
    await this.resetAppStateLink.click();
  }

  async logout() {
    await this.logoutLink.waitForDisplayed({ timeout: 10000 });
    await this.logoutLink.click();
  }
}

module.exports = new InventoryPage();
