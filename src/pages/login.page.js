class LoginPage {
    USERNAME_INPUT_LOCATOR = '#user-name';
    PASSWORD_INPUT_LOCATOR = '#password';
    LOGIN_BUTTON_LOCATOR = '#login-button';
    ERROR_MESSAGE_LOCATOR = '[data-test="error"]';

    get usernameInput() {
        return $(this.USERNAME_INPUT_LOCATOR);
    }

    get passwordInput() {
        return $(this.PASSWORD_INPUT_LOCATOR);
    }

    get loginButton() {
        return $(this.LOGIN_BUTTON_LOCATOR);
    }

    get errorMessage() {
        return $(this.ERROR_MESSAGE_LOCATOR);
    }

    async open() {
        await browser.url('/');
        await this.usernameInput.waitForDisplayed({ timeout: 10000 });
    }

    async login(username, password) {
        await this.usernameInput.waitForDisplayed({ timeout: 10000 });
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
