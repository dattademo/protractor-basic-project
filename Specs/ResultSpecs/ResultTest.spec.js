import HomePage from "../../Pages/HomePage.js";
import ResultPage from "../../Pages/ResultPage.js";
const searchData = require('../../Data/searchData.json');

var homePage = new HomePage();
var resultPage = new ResultPage();

describe('Result Page Test', () => {
	it('Search Functionality', () => {
		homePage.searchInput.sendKeys(searchData.textToSearch);
		homePage.searchButton.click();
		expect(resultPage.headerElement.isDisplayed()).toBe(true, "Header Element is not visible");
		expect(resultPage.headerElement.getText()).toBe(searchData.resultHeader);
		expect(resultPage.bodyElement.isDisplayed()).toBe(true, "Body Element is not visible");
		expect(resultPage.infoboxElement.isDisplayed()).toBe(true, "Infobox Element is not visible");
		expect(resultPage.infoboxElement.element(by.className(resultPage.imageClassName)).isDisplayed()).toBe(true, "Image on InfoBox is NOT visible");
		expect(resultPage.biografiaElement.isDisplayed()).toBe(true, "Biografia Element is not visible");
		expect(resultPage.tocElement.isDisplayed()).toBe(true, "TOC Element is not visible");
		expect(resultPage.seleccionElement.isDisplayed()).toBe(true, "Seleccion Nacional Element is not visible");

	});
});