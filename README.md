# 新建文件
## 1. mkdir react-build
## 2. cd react-build
## 3. npm init 初始化填写项目信息 生成package.json

# 配置wenpack
## 1. npm install --save-dev webpack
## 2. 根据[webpack](https://www.webpackjs.com/concepts/)文档配置基础配置
## [注意] webpack 4.0以上必须安装webpack-cli 才可以运行webpack命令

# 配置babel
* babel-core 调用Babel的API进行转码
* babel-loader
* babel-preset-es2015 用于解析 ES6
* babel-preset-react 用于解析 JSX
* babel-preset-stage-0 用于解析 ES7 提案
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
###新建 .babelrc 文件