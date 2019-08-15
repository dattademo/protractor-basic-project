module.exports = {
    // A base URL for your application under test
    prodUrl: 'https://en.wikipedia.org',
    testUrl: 'https://es.wikipedia.org',

    // overrides jasmine's print method to report dot syntax for custom reports
    jasmineNodeOpts: {
        print: () => {},
        isVerbose: true,
        showColors: true,
        silent: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 500000,
        allScriptsTimeout: 30000,
        getPageTimeout: 30000,
    },
};
