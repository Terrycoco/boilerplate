//setup for webpacks
var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [

    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true, //needed for react-router to work
    contentBase: './',
    hot: true  //enable hot module plugin
  },
  //set up for babel translator
  module: {
    loaders:
    [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=25000'
    }
    // },
    // { test: /\.css$/, loader: "style-loader!css-loader" }
  ]
  },
  resolve: {
    alias: {
      components: path.resolve( __dirname, 'src', 'components'),
      reducers: path.resolve( __dirname, 'src', 'reducers'),
      actions: path.resolve( __dirname, 'src', 'actions'),
      styles: path.resolve(__dirname,'src','styles'),
      images: path.resolve(__dirname,'src','images'),
      pages: path.resolve(__dirname,'src','pages')
    },
    extensions: ['','.js', '.jsx', 'css']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
