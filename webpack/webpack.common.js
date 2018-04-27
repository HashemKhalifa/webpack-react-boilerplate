const webpack = require('webpack');
const commonPaths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
  ],
};

// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//   entry: ['react-hot-loader/patch', './src/index.jsx'],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ['babel-loader', 'eslint-loader'],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//       {
//         test: /\.(woff2|ttf|woff|eot)$/,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
//   output: {
//     path: `${__dirname}/build`,
//     filename: 'bundle.js',
//   },
//   plugins: [
//     new webpack.ProgressPlugin(),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: `${__dirname}/src/template.html`,
//     }),
//   ],
// };
