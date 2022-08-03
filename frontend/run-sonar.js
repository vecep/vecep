const scanner = require('sonarqube-scanner');

scanner(
	{
		serverUrl: 'http://localhost:9000',
		token: process.env.SONARQUBE_TOKEN,
		options: {
			'sonar.sources': './src',
			'sonar.exclusions':
				'**/__tests__/**,**/__mocks__/**,./src/reportWebVitals.js,./src/setupTests.js',
			'sonar.test.inclusions': './src/**/__tests__/**/*.test.jsx,./src/**/__tests__/**/*.test.js',
			'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
			'sonar.testExecutionReportPaths': 'reports/test-report.xml',
			'sonar.eslint.reportPaths': 'reports/eslint-report.json',
			'sonar.coverage.exclusions':
				'**/styles/**,**/assets/**,**/contexts/**,**/hooks/**,**/services/**,**/utils/**,**/__tests__/**,**/__mocks__/**,./src/reportWebVitals.js,./src/setupTests.js'
		}
	},
	() => process.exit()
);
