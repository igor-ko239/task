exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 2,
  capabilities: [
    { browserName: 'firefox' },
    { browserName: 'MicrosoftEdge' },
  ],
  baseUrl: 'https://www.saucedemo.com/',
  services: ['selenium-standalone'],
  framework: 'mocha',
  before: async function () {
    const { expect } = require('@wdio/globals');
    global.expect = expect;
  },
};
