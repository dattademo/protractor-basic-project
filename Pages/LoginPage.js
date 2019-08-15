import Base from './basePage.js';

export default class LoginPage extends Base {
	constructor() {
		super();
		this.userInput = this.byName("wpName");
		this.passwordInput = this.byName("wpPassword");
		this.loginButton = this.byName("wploginattempt");
	}
}