const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/js/main.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "[name].[hash:8].js",
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
        exclude: [path.join(__dirname, '../node_modules')]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    })
  ]
}