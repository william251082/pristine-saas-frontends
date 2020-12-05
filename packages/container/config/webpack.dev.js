const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const devConfig = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 8079,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            }
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