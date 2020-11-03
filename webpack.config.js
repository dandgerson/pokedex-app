const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV } = process.env

console.log({ NODE_ENV: process.env.NODE_ENV })

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },

  mode: NODE_ENV || 'development',

  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?modules',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // mode: 'local',
                localIdentName: '[name]_[local]_[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|ttf|otf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
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
