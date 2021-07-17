const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	target: 'node',
	entry: `${__dirname}/src/server`,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	node: {
		__dirname: false,
		__filename: false,
	},
	optimization: {
		nodeEnv: false,
	},
	mode: isProduction ? 'production' : 'development',
	devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
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
