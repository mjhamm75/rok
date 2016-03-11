var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');

var app = express();

var validate = require('./passport/validate')(jwt, app);
var isDevelopment = (process.env.NODE_ENV !== 'production');
var PORT = process.env.PORT || 3000;

var knex = require('./config').knex;
var email = require('./config').email;

app.set('superSecret', 'thisismysecretpassword')
app.use(favicon(__dirname + '/icon/favicon.ico'));
app.use(express.static('public'));
app.use(express.static('images'));
app.use(bodyParser.json());

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
      console.log("token: ", token)
      res.json({
        token: token
      })
    } else {
      res.json({
        invalid: 'credentials'
      })
    }
  })
});

var q = require('./db/queries.js')(knex);
app.get('/username', validate, function(req, res) {
  q.validateUsername(req.query.username).then(function(user) {
    res.json({
      count: !user ? 0 : 1
    })
  });
})

app.post('/create-user', validate, function(req, res) {
  var encryptePw = bcrypt.hashSync(req.body.password);
  q.validateUsername(req.query.username).then(function(result) {
    if(result.length === 0) {
      q.insertNewUser(username.encryptePw).then(function(result) {
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

if(isDevelopment) {
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.js');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));  
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening on PORT: ' + PORT);
});