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
var baseUrl;

exports.config = {
    // env parameter will get the desired env URL from config-> environment.js
    // test URL is set by default
    params: {
        env: "test",
    },

    // avoid annoying messages on console log
    disableChecks: true,
    
    // this command starts a standalone server to avoid starting a dedicated server on an extra terminal
    directConnect: true,
    
    // Jasmine options
    framework: 'jasmine2',
    // overrides jasmine's print method to report dot syntax for custom reports
    jasmineNodeOpts: envFile.jasmineNodeOpts,

    // run all the specs under Spec folder
    specs: ['./Specs/*/*.spec.js'],

    // run specific spec files in order to set different strategies
    suites: {
        completeRegression: './Specs/*/*.spec.js',
        landingPages: './Specs/LandingPagesSpecs/*.spec.js',
        contribPage: './Specs/ContributionSpecs/*.spec.js',
        result: './Specs/ResultSpecs/*.spec.js',
        login: './Specs/LoginSpecs/*.spec.js'
    },

    onPrepare: () => {
        
        beforeEach(function () {
            // Base url for application
            baseUrl = eval("envFile." + browser.params.env + "Url");
            // go to base URL
            browser.get(baseUrl);
        });

        browser.ignoreSynchronization = true;
         // maximize browser
        browser.driver.manage().window().maximize();
        
        //Jasmine set initialization 
        const environment = jasmine.getEnv();
        //add spec reporter
        environment.addReporter(new SpecReporter({
            spec: {
                displayDuration: false,
            },
        }));
        // Generate XML report
        environment.addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/',
            filePrefix: 'xmlresults',
        }));

        // Take Screeshoot if failed
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
        browser.getCapabilities().then((caps) => {
            const testConfig = {
                reportTitle: `Automation Framework for ${baseUrl}`,
                outputPath: './reports',
                screenshotPath: 'screenshots/',
                testBrowser: caps.get('browserName'),
                browserVersion: caps.get('version'),
                screenshotsOnlyOnFailure: true,
            };
           new HTMLReport().from('./reports/xmlresults.xml', testConfig);
        });
    },

};