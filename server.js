var webpack = require('webpack');
var path = require('path');
var express = require('express');

var PORT = process.env.PORT || 3000;
var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

if(isDevelopment) {
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(PORT, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`Listening at localhost:${PORT}`);
  });  
} else {
  var app = express();

  app.use(express.static(__dirname + '/public'));

  app.get('*', function(req, res) {
    res.sendFile('index.html', {
      root: static_path
    })  
  })

  app.listen(PORT, function(err) {
    console.log(`Listening at port: ${PORT}`);
  });
}