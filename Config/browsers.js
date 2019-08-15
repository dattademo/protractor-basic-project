export const chrome = {
	name: 'Chrome',
	browserName: process.env.TEST_BROWSER_NAME || 'chrome',
	screenshots: {
		path: '',
		enabled: true,
	},
	chromeOptions: {
		args: [
			'--disable-gpu',
			'--disable-infobars',
			'--disable-extensions',
			'--identityManagement',
			'--disableChecks',
		],
	},
};

export const firefox = {
	name: 'Firefox',
	browserName: process.env.TEST_BROWSER_NAME || 'firefox',
	screenshots: {
		path: '',
		enabled: true,
	},
	'moz:firefoxOptions': {
		args: [
			'--safe-mode',
			// '--headless',
			'--disable-gpu',
			'--private',
		],
	},
};
