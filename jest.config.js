/* eslint-disable */
module.exports = {
	rootDir: ".",
	testPathIgnorePatterns: ["/.next/", "/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	moduleNameMapper: {
		"@styles/(.*)": "<rootDir>/styles/$1",
		"@components/(.*)": "<rootDir>/components/$1",
		"@assets/(.*)": "<rootDir>/assets/$1",
		"\\.(css|less|sass|scss)$": "<rootDir>/mocks/styles.js",
		"\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/mocks/files.js",
	},
};
