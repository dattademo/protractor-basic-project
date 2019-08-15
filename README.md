# Protractor Basic Project

Developed with:
  - Javascript
  - Protractor
  - Jasmine

# How to run test?

  1. Clone this project
```sh
git clone https://github.com/dattademo/protractor-basic-framework.git
```
  ---------------------------
  	Running test from Console
	
	2.a. Install Node.js, link: https://nodejs.org/es/download/
  
	2.b. Go to the system terminal
 
	2.c. Browse to cloned project's root folder
  
	2.d. Run this command from the console: npm install -g protractor
  
	2.e. Run: webdriver-manager update

	2.f. Run: npm install

	2.g. Run: protractor conf.js --chrome

  ---------------------------
  	Select environment from console
	  Test env run: protractor conf.js --chrome --params.env=test
	  Prod env run: protractor conf.js --chrome --params.env=prod

	  Note: default setting: "test"
  
  ---------------------------
  	Select Test Suite
	  Available test suites:
	    Landing Pages test suite: protractor conf.js --chrome --suite=landingPages
	  	Login test suite: protractor conf.js --chrome --suite=login
	    Result test suite: protractor conf.js --chrome --suite=result

	  Note: all tests will be ran if no --suite parameter is added (protractor conf.js --chrome)

  ---------------------------
  	Browser
	  Chrome: protractor conf.js --chrome
	  Firefox: protractor conf.js --firefox
	  Both (parallel execution): protractor conf.js

