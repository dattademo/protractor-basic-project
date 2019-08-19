import Base from './basePage.js';

export default class ResultPage extends Base {
	// this page contains the elements and methods from the Result Page
	constructor() {
		super();
		this.headerElement = this.byId("firstHeading");
		this.bodyElement = this.byId("bodyContent");
		this.infoboxElement = this.byClass("infobox");
		this.imageClassName = "image";
		this.biografiaElement = this.byId("Biografía");
		this.tocElement = this.byId("toc");
		this.seleccionElement = this.byId("Selección_nacional");
	}
}