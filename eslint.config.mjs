import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import ts from 'typescript-eslint';

export default [
	js.configs.recommended,
	...ts.configs.recommended,
	prettierRecommended,
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
		plugins: {
			prettier,
		},
		rules: {
			'no-console': ['error', { allow: ['error', 'info'] }],
			'prettier/prettier': 'error',
		},
	},
];
