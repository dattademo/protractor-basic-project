import HomePage from "../../Pages/HomePage.js";
import LoginPage from "../../Pages/LoginPage.js";
const userData = require('../../Data/userData.json');

var homePage = new HomePage();
var loginPage = new LoginPage();

describe('Login Page tests', () => {
	it('Successful Login', () => {
		homePage.loginButton.click();
		loginPage.userInput.sendKeys(userData.username);
		loginPage.passwordInput.sendKeys(userData.password);
		loginPage.loginButton.click();
		expect(homePage.userPageButton.isDisplayed()).toBe(true, "Userpage Button is not Displayed");
	});

});