const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: ['react', 'react-dom']
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html'
        })
    ],
    resolve: {
      extensions: [ '*', '.tsx', '.ts', '.js', '.jsx' ]
    }
};

module.exports = merge(commonConfig, devConfig);