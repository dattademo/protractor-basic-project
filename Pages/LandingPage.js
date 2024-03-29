import Base from './BasePage.js';

export default class LandingPage extends Base {
	// this page contains the elements and methods from the Landing Page
	constructor() {
		super();
		this.mainLogo = this.byId("p-logo");
		this.headerElement = this.byId("firstHeading");
		this.navigationElement = this.byId("p-navigation");
		this.personalElement = this.byId("p-personal");
		this.simplesearchElement = this.byId("simpleSearch");
		
	}
}