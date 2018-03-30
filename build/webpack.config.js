const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/home/js/main.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "[name].[chunkhash:8].js",
    publicPath: ""
  },
  devServer: {
    host: '0.0.0.0',
    open: true,
    overlay: {
      errors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.join(__dirname, '../tmp')
          },
        },
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ],
          // publicPath: config[currentEnv].publicPath
        })
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/home/index.html')
    }),
    new extractTextPlugin({
      filename: "static/css/[name].[contenthash:8].css"
    })
  ]
}