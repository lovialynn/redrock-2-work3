const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'js/[name].[contenthash].js',
    },
    module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../',
                }, // 文件打包至dist/css目录下，需配置 publicPath，以防等会引入图片出错
              },
              'css-loader',
              'less-loader',
            ],
          }
        ],
      },
    plugins: [ new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:8].css', // css 样式打包到 css 文件夹下面
      }),new CleanWebpackPlugin()]
  }