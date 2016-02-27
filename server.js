var webpack = require('webpack');
var path = require('path');
var express = require('express');
var mailer = require('express-mailer');

var PORT = process.env.PORT || 3000;
var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

if(isDevelopment) {
  console.log('DEV');
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
  console.log('PROD');
  var app = express();

  app.use(express.static(__dirname + '/public'));

  app.get('/heartbeat', function(req, res) {
    res.json({
      is: 'running'
    })
  });

  app.post('/email', function(req, res) {
    
    // mailer.extend(app, {
    //   from: 'no-reply@example.com',
    //   host: 'smtp.gmail.com', // hostname
    //   secureConnection: true, // use SSL
    //   port: 465, // port for secure SMTP
    //   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    //   auth: {
    //     user: 'jhamm.business@gmail.com',
    //     pass: 'test'
    //   }
    // });
  });
  
  app.get('*', function(req, res) {
    res.sendFile('index.html', {
      root: static_path
    })  
  })

  app.listen(PORT, function(err) {
    console.log(`Listening at port: ${PORT}`);
  });
}