const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devServer: {
    static: [
        {
            directory: path.join(__dirname, 'public'),
        },
      ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/i,
        loader: 'csv-loader',
        options: {
            header: true,
            skipEmptyLines: true
        }
      },
    ],
  },
};