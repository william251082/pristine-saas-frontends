const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.ts',
  ouput: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: [ '*', '.tsx', '.ts', '.js', '.jsx', 'vue' ]
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-typescript"],
            plugins: ['@babel/plugin-transform-runtime', "@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"],
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
