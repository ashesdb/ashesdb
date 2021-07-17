const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const common = {
	mode: isProduction ? 'production' : 'development',
	devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: /node_modules/,
			},
		],
	},
};

module.exports = [
	{
		...common,
		target: 'node',
		entry: './src/server',
		output: {
			filename: 'index.js',
		},
		node: {
			__dirname: false,
			__filename: false,
		},
		optimization: {
			nodeEnv: false,
		},
	},
	{
		...common,
		target: 'web',
		entry: './src/client',
		output: {
			filename: 'public/assets/app.js',
		},
	},
];
