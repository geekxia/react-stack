var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),  // path必须是绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react stack',
      template: path.resolve(__dirname, './public/index.html')
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
