## 环境
1、硬件系统 win7/win10  64bit
2、运行时环境 node.js
3、包管理器 npm
4、构建工具 webpack

## 起步
1、创建项目 npm init

2、使用 Webpack

  安装：
	  cnpm install webpack -g
    cnpm install webpack webpack-cli -D

  webpack.config.js
    默认的配置文件，用webpack直接打包
    entry
      在入口文件中演示DOM操作
    output
      output.path 必须是绝对路径

  配置启动命令    
    webpack --config webpack.config.js

  配置 mode属性，解决打包时的警告

3、两个plugin

  自动插入到html模板中去
    cnpm install html-webpack-plugin -D
    使用 title 选项
    使用 template 选项
    在index.html模板中使用<%= htmlWebpackPlugin.options.title %>获取动态的title值

  自动清理dist目录
    cnpm install clean-webpack-plugin -D
    注意：webpack指南中的用法，与其github上有很大差异，请以github文档为准



4、使用css样式

  安装：cnpm install style-loader css-loader -D

  rules 解析规则配置
    module.rules = [{test:/\.css$/,use:['style-loader','css-loader']}]

  支持sass：cnpm install sass-loader node-sass -D

5、别名配置
  ```
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
  ```

6、本地服务

  cnpm install webpack-dev-server -D
  启动：webpack-dev-server

  启动热更新：devServer.hot = true
  加两个插件：
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()

  静态资源目录设置：contentBase

7、区分生产与开发环境

  cnpm install cross-env -D

  配置npm script： cross-env NODE_ENV=development webpack-dev-server


8、js解析

  cnpm install babel-loader @babel/core -D

  在配置loaders时，要加 exclude: /node_modules/

9、ESLint检测配置

  cnpm install eslint eslint-loader -D
  在配置loader规则时，加上：
    exclude: /node_modules/
    enforce: 'pre'
  编写.eslintrc.json文件
  ```
  {
      "rules": {
          "semi": 2,
          "quotes": 0
      },
      "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module",
          "ecmaFeatures": {
              "jsx": true
          }
      }
  }
  ```
  开启errors浮层：devServer.overlay = { errors: true }
    测试：添加 "no-console":"error" 禁用console

10、使用react和react-dom
  cnpm install react react-dom -S
  cnpm install @babel/preset-react -D  // 支持jsx语法
  cnpm install @babel/preset-env -D  // 支持ES6及其最新语法

  编写配置文件.babelrc.json文件
  ```
  {
    "presets": ["@babel/preset-react", "@babel/preset-env"]
  }
  ```

  封装App.js根组件
  使用ReactDOM.render()把App根组件渲染到id=app的视图中去
