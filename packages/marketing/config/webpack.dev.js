const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        })
    ],
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
};

module.exports = merge(commonConfig, devConfig);