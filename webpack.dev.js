const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output: {
      filename: 'js/[name].js',
    },
    module:{
        rules:[{
            test:/\.less$/,
            use: ['style-loader',
             'css-loader', 'less-loader',],

        }]
    },devServer: {
      contentBase: './dist',    //配置开发服务运行时的文件根目录
      port: 3000,       //端口
      hot: true, //是否启用热更新
      open: false, //是否自动打开浏览器
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
]
  };