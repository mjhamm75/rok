var webpack = require('webpack');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var email = require('emailjs');

var emailServer  = email.server.connect({
   user:    "jhamm.business", 
   password:"neelyismywife", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

var PORT = process.env.PORT || 3000;
var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

if(isDevelopment) {
  console.log('DEV');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  })

  app.listen(PORT, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`Listening at localhost:${PORT}`);
  });  
} else {
  console.log('PROD');
  var app = express();

  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());

  app.get('/heartbeat', function(req, res) {
    res.json({
      is: 'running'
    })
  });

  app.post('/email', function(req, res) {
    var email = req.body.email;
    var message = req.body.message;
    emailServer.send({
      text:    message,
      from:    "you <" + email + ">", 
      to:      "someone <jasonhamm.me@gmail.com>",
      subject: "ROK"
    }, function(err, message) {
      if(err) console.log(err);

      res.json({
        message: 'sent'
      })
    });

    
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