const browserName = process.env.WDIO_BROWSER?.toLowerCase();
const allCapabilities = [
    {
        browserName: 'firefox'
    },
    {
        browserName: 'MicrosoftEdge'
    }
];

let capabilities = allCapabilities;
let services = ['geckodriver', 'edgedriver'];

if (browserName === 'firefox') {
    capabilities = [allCapabilities[0]];
    services = ['geckodriver'];
} else if (browserName === 'edge' || browserName === 'microsoftedge') {
    capabilities = [allCapabilities[1]];
    services = ['edgedriver'];
}

exports.config = {
    runner: 'local',
    specs: ['./src/specs/**/*.spec.js'],
    exclude: [],
    maxInstances: 2,
    capabilities,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services,
    framework: 'mocha',
    reporters: [
        'spec',
        ['junit', {
            outputDir: './reports/junit-results',
            outputFileFormat: (options) => `results-${options.cid}.xml`
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
