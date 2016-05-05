var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var express = require('express');
var favicon = require('serve-favicon');
var jwt = require('jsonwebtoken');
var path = require('path');
var async = require('async');
var knexLogger = require('knex-logger');

var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
// var secret = isDevelopment ? 'sk_test_RnzoumriAJCdG8l6PoYSFH0H' : process.env.stripe;
var secret = 'sk_test_RnzoumriAJCdG8l6PoYSFH0H';
var stripe = require('stripe')(secret);

var PORT = process.env.PORT || 3000;

var knex = require('./config.js').knex;
var validate = require('./db/validate')(jwt, app);
var q = require('./db/queries.js')(knex);

app.set('superSecret', 'thisismysecretpassword')
app.use(favicon(__dirname + '/icon/favicon.ico'));
app.use(express.static('images'));
app.use('/assets', express.static('public'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));

if(isDevelopment) {
  console.log("DEV");
  app.use(knexLogger(knex));
  var webpack = require('webpack');
  var config = require('./webpack.config.js');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  console.log("PROD");
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

app.post('/donate', function(req, res) {
  var total = req.body.total;
  var email = req.body.email;
  var token = req.body.token;
  var charge = stripe.charges.create({
    amount: total,
    currency: "usd",
    source: token,
    description: "Donation"
  }, function(err, charge) {
    console.log(err);
    console.log(charge);
    if (err && err.type === 'StripeCardError') {
      res.json({
        charged: false
      })
    } else {
      q.donate(email, total)
        .then(function(result) {
          res.json({
            charge: true
          })
        })
    }
  });
})

app.post('/charge', function(req, res) {
  var amount = req.body.amount;
  var email = req.body.email;
  var token = req.body.token;
  var selectedItems = req.body.selectedItems;
  var svgTitle = req.body.svgTitle;
  var charge = stripe.charges.create({
    amount: amount, // amount in cents, again
    currency: "usd",
    source: token,
    description: "Sponser Glass"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      res.json({
        charged: false
      })
    } else {
      q.updateSvgPathsPurchaser(selectedItems, email)
        .then(update => {
          res.json({
            charged: true
          })
        })
    }
  });
})

app.get('/svgs', validate, function(req, res) {
  q.getSVGs().then(function(svgs) {
    res.json({
      svgs: svgs
    })
  });
})

app.post('/svg', validate, function(req, res) {
  var svg = req.body.svg;
  var title = req.body.title;
  var paths = req.body.paths;
  q.createSVG(title).then(function(svgId) {
    q.insertSvgPaths(svgId, paths).then(function(result) {
      res.json({
        is: 'inserted'
      })
    })
  })
})

app.get('/svg/:id', function(req, res) {
  var id = req.params.id;
  async.parallel([
    function(callback) {
      q.getSVG(id).then(function(svg) {
          callback(null, svg[0]);
      })
    },
    function(callback) {
      q.getPaths(id).then(function(paths) {
        callback(null, paths)
      })
    }
  ], function(err, results) {
    res.json({
      // svg: results[0],
      paths: results[1]
    })
  });
})

app.get('/paths/:svgTitle', function(req, res) {
  var title = req.params.svgTitle;
  q.getPaths(title).then(paths => {
    res.json({
      paths
    })
  })
})

app.post('/paths/:svgTitle', validate, function(req, res) {
  q.getSvgByTitle(req.params.svgTitle)
    .then(svg => {
      q.updateSvgPaths(svg[0].id, req.body.paths)
        .then(result => {
          res.json({
            is: 'updated'
          })
        })
    })
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
