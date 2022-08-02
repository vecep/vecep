const scanner = require('sonarqube-scanner');

scanner(
	{
		serverUrl: 'http://localhost:9000',
		token: 'ec8d22d611b9a1714a4b2bee8192b8d9c1c439ad',
		options: {
			'sonar.sources': './src',
			'sonar.exclusions': '**/__tests__/**,**/__mocks__/**',
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
