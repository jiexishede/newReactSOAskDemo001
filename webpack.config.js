var path = require('path');

module.exports = {
  entry:'./src/app.js',
  devtool: 'source-map',//配置生成Source Maps，选择合适的选项  // 方便调试,  一定要加.
  output: {
    path:path.join(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath:'/build',
  },
  module: {
    loaders: [{
      test:/\.js$/,
      include:path.join(__dirname,'src'),
      loader: 'babel-loader',
    }, { test: /\.css$/, loader: "style-loader!css-loader" },



    ]
  }
}