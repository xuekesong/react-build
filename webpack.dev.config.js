const path = require('path')
const devServer = require('webpack-dev-server')
const webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/main.js')
  ],//入口
  output: { //输出到dist文件夹，输出文件名为‘bundle.js’
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components/'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}