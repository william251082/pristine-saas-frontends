const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');


const devConfig = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8079/'
    },
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
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8083/remoteEntry.js'
            },
            shared: packageJson.dependencies
        })
    ],
    resolve: {
      extensions: [ '*', '.tsx', '.ts', '.js', '.jsx' ]
    }
};

module.exports = merge(commonConfig, devConfig);