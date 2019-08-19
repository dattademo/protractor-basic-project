import Base from './basePage.js';

export default class LoginPage extends Base {
	// this page contains the elements and methods from the Login Page
	constructor() {
		super();
		this.userInput = this.byName("wpName");
		this.passwordInput = this.byName("wpPassword");
		this.loginButton = this.byName("wploginattempt");
	}
}