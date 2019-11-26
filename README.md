# Protractor Basic Project

Developed with:
  - Javascript
  - Protractor
  - Jasmine

# How to run test?

  1. Clone this project
```sh
git clone git@github.com:dattademo/protractor-basic-project.git
```
  ---------------------------
  	Running test from Console
	
	2.a. Install Node.js, link: https://nodejs.org/es/download/
  
	2.b. Go to the system terminal
 
	2.c. Browse to cloned project's root folder
  
	2.d. Run this command from the console: npm install -g protractor
  
	2.e. Run: webdriver-manager update

	2.f. Run: npm install

	2.g. Run: protractor conf.js

  ---------------------------
  	Select environment from console
	  Test env run: protractor conf.js --params.env=test
	  Prod env run: protractor conf.js --params.env=prod

	  Note: default setting: "test"
  
  ---------------------------
  	Select Test Suite
	  Available test suites:
 	    Contribution Page test suite: protractor conf.js --suite=contribution
	    Landing Pages test suite: protractor conf.js  --suite=landingPages
 	    Login test suite: protractor conf.js --suite=login
	    Result test suite: protractor conf.js --suite=result

	  Note: no --suite parameter will run all test cases (protractor conf.js)

  ---------------------------
  	Browser
	  Chrome: protractor conf.js --browser=chrome
	  Firefox: protractor conf.js --browser=firefox

	  Default: chrome
