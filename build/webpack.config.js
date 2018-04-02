const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/js/main.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "js/[name].[chunkhash:8].js",
    publicPath: "/"
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
        use: extractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit:8192,
            outputPath: 'imgs/',  //相对于publicPath
            name: '[name].[ext]?[hash:8]'
          }
        }
      }
    ]
  },
  plugins: [
    new extractTextWebpackPlugin({
      filename: 'css/[name].[hash:8].css'
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    })
  ]
}