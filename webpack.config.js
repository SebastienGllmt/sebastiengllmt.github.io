const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]",
              },
              importLoaders: 1,
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL)
      }
    }),
    new InterpolateHtmlPlugin({
      'PUBLIC_URL': process.env.PUBLIC_URL
    })]
};