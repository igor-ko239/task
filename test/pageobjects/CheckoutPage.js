const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
  get firstNameInput() {
    return $('#first-name');
  }

  get lastNameInput() {
    return $('#last-name');
  }

  get postalCodeInput() {
    return $('#postal-code');
  }

  get continueButton() {
    return $('#continue');
  }

  get errorMessage() {
    return $('.error-message-container.error');
  }

  async continueWithoutPostalCode(firstName, lastName, postalCode = '') {
    await this.firstNameInput.waitForDisplayed({ timeout: 10000 });
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
    await this.continueButton.click();
  }

  async getErrorText() {
    await this.errorMessage.waitForDisplayed({ timeout: 10000 });
    return this.errorMessage.getText();
  }
}

module.exports = new CheckoutPage();
