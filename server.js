var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var express = require('express');
var favicon = require('serve-favicon');
var jwt = require('jsonwebtoken');
var path = require('path');

var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var PORT = process.env.PORT || 3000;

var knex = require('./config.js').knex;
var validate = require('./db/validate')(jwt, app);
var q = require('./db/queries.js')(knex);

app.set('superSecret', 'thisismysecretpassword')
app.use(favicon(__dirname + '/icon/favicon.ico'));
app.use(bodyParser.json());
app.use(express.static('images'));
app.use(express.static('public'));

if(isDevelopment) {
  var webpack = require('webpack');
  var config = require('./webpack.config.js');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));  
}

var sendEmail = require('./db/helper.js').sendEmail;
app.post('/email', function(req, res) {
  q.getEmailAddress().then(function(user) {
      sendEmail(user.username, user.password, req.body.message, req.body.email, function(err, result) {
        if(err) console.log(err);
        res.json({
          message: 'sent'
        })
      });
  })
})

var comparePasswords = require('./db/helper.js').comparePasswords;
app.post('/log-in', function(req, res) {  
  q.checkForUsername(req.body.username).then(function(user) {
    if(user && comparePasswords(req.body.password, user.password)) {
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
  q.checkForUsername(req.query.username).then(function(user) {
    res.json({
      count: !user ? 0 : 1
    })
  });
})

app.post('/create-user', validate, function(req, res) {
  var username = req.body.username;
  var encryptePw = bcrypt.hashSync(req.body.password);
  q.checkForUsername(username).then(function(result) {
    if(!result || result.length === 0) {
      q.createUser(username, encryptePw).then(function(result) {
        res.sendStatus(200);
      }).catch(function(err) {
        res.sendStatus(403);
      })
    } else {
      res.sendStatus(403);
    }
  });
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening on PORT:' + PORT);
});