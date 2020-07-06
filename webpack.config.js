var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var webpack = require('webpack')

// console.log('webpack', webpack)
var env = process.env.NODE_ENV

console.log('env -----', env)

var config = {
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
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']}
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}

// 开发环境
if (env == 'development') {
  config.mode = 'development'
  config.devServer = {
    host: 'localhost',
    port: 8000,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, './public'),
    overlay: {
      errors: true
    }
  }
  // 热更新插件
  config.plugins.push(new webpack.NamedModulesPlugin())
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  // ESLint检测
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: ['eslint-loader']
  })
}

module.exports = config
