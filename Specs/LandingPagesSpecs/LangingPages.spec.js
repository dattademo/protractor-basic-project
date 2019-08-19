var data = require('../../Data/landingPagesData');
var using = require('jasmine-data-provider');
import HomePage from "../../Pages/HomePage.js";
import LandingPage from "../../Pages/LandingPage.js";

var homePage = new HomePage();
var landingPage = new LandingPage();

describe('Landing Page Tests', () => {
	// This tests is using data provider
	// This let us run the same tests with different information on each iteration
	// Test goes down to the portal elements a click on each of the main elements
	// Once the landing page is loaded: main elements a verified on screen
	using(data, function (data, description) {
		it(description + ' Test', () => {
			homePage.clickOnPortalElement(data.linkText);
			expect(landingPage.headerElement.isDisplayed()).toBe(true, "Header Element is not visible");
			expect(landingPage.headerElement.getText()).toBe(data.title);
			expect(landingPage.mainLogo.isDisplayed()).toBe(true, "Logo Element is not visible");
			expect(landingPage.navigationElement.isDisplayed()).toBe(true, "Navigation Element is not visible");
			expect(landingPage.personalElement.isDisplayed()).toBe(true, "User Menu Element is not visible");
			expect(landingPage.simplesearchElement.isDisplayed()).toBe(true, "SimpleSearch Element is not visible");
		});
	});
});