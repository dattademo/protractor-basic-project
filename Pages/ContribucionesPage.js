import Base from './basePage.js';

export default class ContribucionesPage extends Base {
	constructor() {
		super();
		this.newbieContribCheckBox = this.byId("newbie");
		this.nameSpaceSelect = this.byId("namespace");
		this.searchButton = this.byClass("mw-submit");
		this.contribList = this.byClass("mw-contributions-list");
		this.contribListTitleClassName = "mw-contributions-title";
	}
	
}