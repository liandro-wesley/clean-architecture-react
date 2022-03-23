const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@data': path.join(__dirname, './src/data'),
      '@domain': path.join(__dirname, './src/domain'),
      '@infra': path.join(__dirname, './src/infra'),
      '@protocols': path.join(__dirname, './src/data/protocols'),
      '@presentation': path.join(__dirname, './src/presentation'),
      '@erros': path.join(__dirname, './src/domain/errors')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
      publicPath: './public'
    },
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
}
