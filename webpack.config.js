const path = require('path')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    index: './src/index.ts',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  },

  output: {
    libraryTarget: 'commonjs2'
  },

  devtool: 'sourcemap',
}
