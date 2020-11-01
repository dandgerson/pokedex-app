const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV

console.log({ NODE_ENV: process.env.NODE_ENV })

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
  },

  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // mode: 'local',
                localIdentName: '[name]_[local]_[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            }
          },
          'sass-loader',
        ],
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],

  devServer: {
    port: 3000,
    open: false,
    hot: true,
    // publicPath: path.resolve(__dirname, 'dist'),
  },
}
