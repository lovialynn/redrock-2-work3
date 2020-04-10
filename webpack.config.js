const path = require('path')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = {
    entry: {
        index:'./src/index.js'
    },               // 入口文件
    output: {
        path:path.resolve(__dirname,'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],  
    module: {
        rules: [ {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: 'babel-loader',
      },
          {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  outputPath: 'images/',
                },
              },
            ],
          },
        ],
      },
}
module.exports = env => {
    if( env && env.production){
        return merge(commonConfig,prodConfig)
    }else {
        return merge(commonConfig, devConfig)
      }
} 