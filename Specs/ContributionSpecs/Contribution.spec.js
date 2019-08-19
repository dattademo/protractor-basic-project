import HomePage from "../../Pages/HomePage.js";
import LoginPage from "../../Pages/LoginPage.js";
import ContribPage from "../../Pages/ContribucionesPage.js";
const contribData = require('../../Data/contribData.json');

var homePage = new HomePage();
var loginPage = new LoginPage();
var contribPage = new ContribPage();

describe('Contributions Page tests', () => {

	it('Verify Namespace filter', () => {

		homePage.contribButton.click();
		contribPage.newbieContribCheckBox.click();
		contribPage.selectDropdownByValue(contribPage.nameSpaceSelect, contribData.value);
		contribPage.searchButton.click();

		var contribList = element.all(by.className(contribPage.contribListTitleClassName));
		contribList.each(function (item) {
			expect(item.getAttribute('title')).toContain(contribData.visibleText);
		});
	});
});