import path from 'path';
import type { UserConfig } from 'vite';

export default {
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 8700,
	},
} satisfies UserConfig;
