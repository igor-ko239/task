const BasePage = require('./BasePage');

class LoginPage extends BasePage {
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
    return $('.error-message-container.error');
  }

  async open() {
    await super.open();
    await this.usernameInput.waitForDisplayed({ timeout: 10000 });
  }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async getErrorText() {
    await this.errorMessage.waitForDisplayed({ timeout: 10000 });
    return this.errorMessage.getText();
  }
}

module.exports = new LoginPage();
