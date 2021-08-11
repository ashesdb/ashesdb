export default {
	collectCoverageFrom: [
		'packages/*/src/**/*.{ts,tsx}',
	],
	coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
		"packages/app/src/app/utils": {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	preset: 'ts-jest',
	restoreMocks: false,
	setupFilesAfterEnv: [
		'<rootDir>/jest.setup.ts',
	],
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/*.{ts,tsx}'],
};
