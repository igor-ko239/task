class LoginPage {
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('[data-test="error"]');
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
