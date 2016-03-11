var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var express = require('express');
var favicon = require('serve-favicon');
var jwt = require('jsonwebtoken');
var path = require('path');

var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var PORT = process.env.PORT = 3000;

var knex = require('./config.js').knex;
var validate = require('./passport/validate')(jwt, app);
var q = require('./db/queries.js')(knex);


app.set('superSecret', 'thisismysecretpassword')
app.use(favicon(__dirname + '/icon/favicon.ico'));
app.use(bodyParser.json());
app.use(express.static('images'));

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

var sendEmail = require('./db/email.js');
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