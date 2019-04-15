# 新建文件
* 1. mkdir react-build
* 2. cd react-build
* 3. npm init 初始化填写项目信息 生成package.json

# 配置wenpack
* 1. npm install --save-dev webpack
* 2. npm install webpack-dev-server
* 3. 根据[webpack](https://www.webpackjs.com/concepts/)文档配置基础配置
* [注意] webpack 4.0以上必须安装webpack-cli 才可以运行webpack命令

# 配置babel
* babel-core 调用Babel的API进行转码
* babel-loader
* babel-preset-es2015 用于解析 ES6
* babel-preset-react 用于解析 JSX
* babel-preset-stage-0 用于解析 ES7 提案
* npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0  【(babel 6.0以上要安装 babel-loader@7)】
* 新建 .babelrc 文件

# 配置react
* npm install --save react react-dom react-router-dom

# 配置redux
* npm install --save redux
* npm install --save react-redux (监听 store)
* npm install --save redux-thunk (可让 action 创建函数除了返回 action 对象外，还可返回函数)
###监听 store (react-redux 提供了一个方法 connect)
* 容器组件就是使用 store.subscribe() 从 Redux state树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。connect() 方法做了性能优化来避免很多不必要的重复渲染。
* connect 接收两个参数，一个 mapStateToProps, 就是把 redux 的 state, 转为组件的 Props ,还有一个参数是 mapDispatchToprops, 就是把发射 actions 的方法 转为 Props 属性函数