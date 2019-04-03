const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),//入口
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
  }
}