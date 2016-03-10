var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var email = require('emailjs');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');

var app = express();

var validate = require('./passport/validate')(jwt, app);

var isDevelopment = (process.env.NODE_ENV !== 'production');
var PORT = process.env.PORT || 3000;

var connectionString = process.env.DATABASE_URL || 'postgres://rok:rok@localhost/rok';
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

app.set('superSecret', 'thisismysecretpassword')
app.use(favicon(__dirname + '/icon/favicon.ico'));
app.use(bodyParser.json());

if(isDevelopment) {
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));  
}

app.use(express.static('images'));

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

app.post('/log-in', function(req, res) {
  knex.select().table('users').first().where({
    username: req.body.username
  }).then(function(user) {
    if(user && bcrypt.compareSync(req.body.password, user.password)) {
      var token = jwt.sign(user, app.get('superSecret'), {
        expiresIn: 3600
      });
      res.json({
        token: token
      })
    } else {
      console.log("Invalid credentials")
    }
  })
});

app.get('/username', validate, function(req, res) {
  var username = req.query.username;
  knex.select().table('users').first().where({
    username: username
  }).then(function(user) {
    var count = !user ? 0 : 1
    res.json({
      count: count
    })
  });
})

app.post('/create-user', validate, function(req, res) {
  var username = req.body.username;
  console.log(username)
  var pw = req.body.password;
  var encryptePw = bcrypt.hashSync(pw);
  knex.table('users').where({
    username: username
  }).then(function(result) {
    if(result.length === 0) {
      knex.table('users').insert({
        username: username,
        password: encryptePw
      }).then(function(result) {
        res.sendStatus(200);
      }).catch(function(err) {
        res.sendStatus(403);
      })
    } else {
      res.sendStatus(403);
    }
  });
})

app.get('/heartbeat', function(req, res) {
  res.json({
    is: 'beating'
  })
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + PORT);
});