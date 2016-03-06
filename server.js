var path = require('path');
var express = require('express');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var email = require('emailjs');

var app = express();
var compiler = webpack(config);
var isDevelopment = (process.env.NODE_ENV !== 'production');

var connectionString = process.env.PG_CONNECTION_STRING || 'postgres://rok:rok@localhost/rok';
var knex = require('knex')({
      client: 'pg',
      connection: connectionString,
      debug: false
  });

var emailServer  = email.server.connect({
   user:    "rootsofknowledgeproject", 
   password:"rootsofknowledge", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

app.use(favicon(__dirname + '/icon/favicon.ico'));
app.use(bodyParser.json());

if(isDevelopment) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));  
}

app.post('/email', function(req, res) {
	var emailAddress = req.body.email;
  var message = req.body.message;
  knex.select().table('email').orderBy('id', 'desc').first().then(function(result) {
      email.server.connect({
         user:    result.username, 
         password:result.password, 
         host:    "smtp.gmail.com", 
         ssl:     true
      }).send({
        text:    message,
        from:    "you <" + emailAddress + ">", 
        to:      "someone <rootsofknowledgeproject@gmail.com>",
        subject: "ROK"
      }, function(err, message) {
        if(err) console.log(err);
        res.json({
          message: 'sent'
        })
      });
  })
})

require('./passport')(passport, knex);


app.use(session({secret: 'ihopethisworks'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.post('/log-in', passport.authenticate('local-login'), function(req, res) {
  var user = req.user;
  res.json(user);
});

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