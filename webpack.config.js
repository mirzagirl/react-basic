const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js', // Adjust if your entry file is in a different location
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: '/', // Ensures proper routing for React Router
  },
  target: 'web',
  devServer: {
    port: 5000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true, // Redirects all requests to index.html for React Router
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Allows omitting extensions when importing
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /\.css$/, // For importing CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // For importing images
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'), // Generates an HTML file and injects the bundle
      filename: 'index.html', // Output file name
    }),
  ],
};
