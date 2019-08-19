export default class Base {
	constructor() {
		this.el = element;
	}

	// Find element By
	byId(locator) {
		return this.el(by.id(locator));
	};
	byName(locator) {
		return this.el(by.name(locator));
	};
	byCss(locator) {
		return this.el(this.css(locator));
	}
	byClass(locator) {
		return this.el(by.className(locator));
	}
	byButtonText(text) {
		return this.el(by.buttonText(text));
	}
	byLinkText(text) {
		return this.el(by.linkText(text));
	};
	byTagName(tagName) {
		return this.el(by.tagName(tagName));
	};

	selectDropdownByValue(dropdownElement, elementValue) {
		dropdownElement.element(by.css("option[value='" + elementValue + "']")).click();
	};

	getSelectedElement(dropdownElement) {
		return dropdownElement.element(by.css('option:checked')).getText();
	};

}

