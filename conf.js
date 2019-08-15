/* eslint no-use-before-define: 0 */
'use strict';
require("babel-register");
const HTMLReport = require('protractor-html-reporter');
const {
    SpecReporter,
} = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');
const FailFast = require('protractor-fail-fast');
const fs = require('fs-extra');
const envFile = require('./Config/environment.js');
const browsers = require('./Config/browsers.js');
var baseUrl;

exports.config = {

    params: {
        env: "test",
    },
    disableChecks: true,
    directConnect: true,
    // Jasmine options
    framework: 'jasmine2',
    // overrides jasmine's print method to report dot syntax for custom reports
    jasmineNodeOpts: envFile.jasmineNodeOpts,

    specs: ['./Specs/*/*.spec.js'],

    suites: {
        completeRegression: './Specs/*/*.spec.js',
        landingPages: './Specs/LandingPagesSpecs/*.spec.js',
        result: './Specs/ResultSpecs/*.spec.js',
        login: './Specs/LoginSpecs/*.spec.js'
    },

    onPrepare: () => {
        const environment = jasmine.getEnv();
        environment.addReporter(FailFast.init());
        // for non-angular page
        browser.ignoreSynchronization = true;
        // maximize browser
        browser.driver.manage().window().maximize();

        beforeEach(function () {
            // Base url for application
            baseUrl = eval("envFile." + browser.params.env + "Url");
            browser.get(baseUrl);
        })


        environment.addReporter(new SpecReporter({
            spec: {
                displayStacktrace: false,
                displayDuration: true,
            },
        }));
        // Generate XML report
        environment.addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/',
            filePrefix: 'xmlresults',
        }));

        // Take ScreeShoot if failed
        environment.addReporter({

            specDone: function (result) {
                try {
                    if (result.status == 'failed') {
                        browser.getCapabilities().then(function (caps) {
                            let browserName = caps.get('browserName');
                            var pgnFileName = ('./reports/screenshots/' + browserName + '-' + result.fullName + '.png');
                            browser.takeScreenshot().then(function (png) {
                                let stream = fs.createWriteStream(pgnFileName);
                                stream.write(new Buffer.from(png, 'base64'));
                                stream.end();
                            });
                        });
                    }
                } catch (error) {
                    console.log("File not saved");
                }

            },
        });
    },

    // HTMLReport called once tests are finished
    onComplete: () => {
        let browserName;
        let browserVersion;
        const capsPromise = browser.getCapabilities();

        capsPromise.then((caps) => {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            const testConfig = {
                reportTitle: `Automation Framework for ${baseUrl}`,
                outputPath: './reports',
                screenshotPath: 'screenshots/',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
            };

            new HTMLReport().from('./reports/xmlresults.xml', testConfig);
        });
    },
    onCleanUp: () => {
        FailFast.clean();
    },
};

if (process.argv[3] === '--chrome') {
    exports.config.capabilities = browsers.chrome;
} else if (process.argv[3] === '--firefox') {
    exports.config.capabilities = browsers.firefox;
} else {
    exports.config.multiCapabilities = [
        browsers.chrome,
        browsers.firefox,
    ];
}


