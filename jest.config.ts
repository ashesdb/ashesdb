export default {
	collectCoverageFrom: [
		'packages/*/src/**/*.{ts,tsx}',
	],
	coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	preset: 'ts-jest',
	restoreMocks: false,
	testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/*.{ts,tsx}'],
};
