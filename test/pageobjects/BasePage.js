class BasePage {
  async open(path = '') {
    await browser.url(`${browser.options.baseUrl}${path}`);
  }
}

module.exports = BasePage;
