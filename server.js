var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var email = require('emailjs');

var app = express();
var compiler = webpack(config);
var isDevelopment = (process.env.NODE_ENV !== 'production');

var emailServer  = email.server.connect({
   user:    "jhamm.business", 
   password:"neelyismywife", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

if(isDevelopment) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));  
}

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
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});