class CheckoutPage {
    FIRST_NAME_INPUT_LOCATOR = '#first-name';
    LAST_NAME_INPUT_LOCATOR = '#last-name';
    POSTAL_CODE_INPUT_LOCATOR = '#postal-code';
    CONTINUE_BUTTON_LOCATOR = '#continue';
    ERROR_MESSAGE_LOCATOR = '[data-test="error"]';

    get firstNameInput() {
        return $(this.FIRST_NAME_INPUT_LOCATOR);
    }

    get lastNameInput() {
        return $(this.LAST_NAME_INPUT_LOCATOR);
    }

    get postalCodeInput() {
        return $(this.POSTAL_CODE_INPUT_LOCATOR);
    }

    get continueButton() {
        return $(this.CONTINUE_BUTTON_LOCATOR);
    }

    get errorMessage() {
        return $(this.ERROR_MESSAGE_LOCATOR);
    }

    async continueCheckout(firstName = '', lastName = '', postalCode = '') {
        await this.firstNameInput.waitForDisplayed({ timeout: 10000 });
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }
}

module.exports = new CheckoutPage();
