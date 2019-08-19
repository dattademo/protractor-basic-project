import Base from './BasePage.js';
import { browser } from 'protractor';

export default class HomePage extends Base {
	constructor() {
		super();
		this.loginButton = this.byId("pt-login");
		this.logOutButton = this.byId("pt-logout");
		this.userPageButton  = this.byId("pt-userpage");
		this.contribButton  = this.byId("pt-anoncontribs");
		this.anonymousUserPageButton  = this.byId("pt-anonuserpage");
		this.searchInput = this.byId("searchInput");
		this.searchButton = this.byId("searchButton");
		this.mainPortElement = this.byId("main-port");

	}

	clickOnPortalElement (element){
		var currentElement = this.mainPortElement.element(by.linkText(element));
		browser.executeScript("arguments[0].scrollIntoView();", currentElement.getWebElement());
		currentElement.click();
	}
}