var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var express = require('express');
var favicon = require('serve-favicon');
var jwt = require('jsonwebtoken');
var path = require('path');
var templatesDir = path.join(__dirname, 'templates')
var emailTemplates = require('email-templates');
var async = require('async');
var knexLogger = require('knex-logger');
var uuid = require('node-uuid');

var app = express();

var isDevelopment = (process.env.ENVIRONMENT !== 'production');
console.log(process.env.ENVIRONMENT);
console.log(isDevelopment);
var secret = isDevelopment ? 'sk_test_RnzoumriAJCdG8l6PoYSFH0H' : process.env.stripe;
// var secret = 'sk_test_RnzoumriAJCdG8l6PoYSFH0H';
var stripe = require('stripe')(secret);

var PORT = process.env.PORT || 3000;

var knex = require('./config.js').knex;
var validate = require('./db/validate')(jwt, app);
var q = require('./db/queries.js')(knex);

app.set('superSecret', 'thisismysecretpassword')
app.use(favicon(__dirname + '/icon/favicon.ico'));
app.use(express.static('images'));
app.use('/svg-mapping', express.static('svg'));
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
        expiresIn: 7200
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
    amount: parseFloat(total),
    currency: "usd",
    source: token,
    description: "Donation"
  }, function(err, charge) {
    if (err) {
      res.json({
        charged: false
      })
    } else {
      q.donate(email, total, charge.id)
        .then(function(result) {
          emailTemplates(templatesDir, function(err, template) {
            var locals = {
              name: charge.source.name,
              cardEnding: charge.source.last4,
              expDate: charge.source.exp_month + '/' + charge.source.exp_year,
              total: (charge.amount/100).toFixed(2)
            };

            template('thank-you-donation', locals, function(err, html, text) {
              q.getEmailAddress().then(function(user) {
                  sendHtmlEmail('rootsofknowledgeproject@gmail.com', 'rootsofknowledge', email, html, function(err, result) {
                    if(err) console.log(err);
                    res.json({
                      charge: true
                    })
                  });
              })
            });
          });
        })
    }
  });
})

var sendHtmlEmail = require('./db/helper.js').sendHtmlEmail;
app.post('/charge', function(req, res) {
  var amount = req.body.amount;
  var email = req.body.email;
  var token = req.body.token;
  var selectedItems = req.body.selectedItems;
  var svgTitle = req.body.svgTitle;
  var charge = stripe.charges.create({
    amount: parseFloat(amount),
    currency: "usd",
    source: token,
    description: "Sponser Glass"
  }, function(err, charge) {
    if (err) {
      res.json({
        charged: false
      })
    } else {
      q.updateSvgPathsPurchaser(selectedItems, email, charge.id)
        .then(update => {
          emailTemplates(templatesDir, function(err, template) {

            var locals = {
              name: charge.source.name,
              cardEnding: charge.source.last4,
              expDate: charge.source.exp_month + '/' + charge.source.exp_year,
              glass: selectedItems,
              total: (amount/100).toFixed(2)
            };

            template('thank-you', locals, function(err, html, text) {
              q.getEmailAddress().then(function(user) {
                  sendHtmlEmail('rootsofknowledgeproject@gmail.com', 'rootsofknowledge', email, html, function(err, result) {
                    if(err) console.log(err);
                    res.json({
                      message: 'sent'
                    })
                  });
              })
            });
          });
        })
    }
  });
})

app.get('/test-email', (req, res) => {

  emailTemplates(templatesDir, function(err, template) {
    var amount = req.query.amount ? parseInt(req.query.amount) : 10000;
    var locals = {
      name: 'Test Tester',
      cardEnding: 8899,
      expDate: 9 + '/' + 10,
      total: (amount/100).toFixed(2)
    };

    template('thank-you-donation', locals, function(err, html, text) {
      q.getEmailAddress().then(function(user) {
          sendHtmlEmail('rootsofknowledgeproject@gmail.com', 'rootsofknowledge', req.query.email, html, function(err, result) {
            if(err) console.log(err);
            res.json({
              testComplete: true
            })
          });
      })
    });
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

app.get('/panels-info', validate, (req, res) => {
  Promise.all([q.getTotalPiecesPerPanel(), q.getUnpurchasedPiecesInfo() ])
    .then(values => {
      let totals = values[0].reduce((acc, curr) => {
        acc[curr.title] = {
          totalPieces: curr.count,
          totalAmount: curr.sum
        }
        return acc;
      }, {});

      let unpurchased = values[1].reduce((acc, curr) => {
        acc[curr.title] = {
          unpurchasedPieces: curr.count,
          unpurchasedAmount: curr.sum
        }
        return acc;
      }, {});

      for (const key of Object.keys(totals)) {
        if(unpurchased[key]) {
          totals[key].unpurchasedPieces = unpurchased[key].unpurchasedPieces,
          totals[key].unpurchasedAmount = unpurchased[key].unpurchasedAmount || 0
        } else {
          totals[key].unpurchasedPieces = 0,
          totals[key].unpurchasedAmount = 0
        }
      }

      res.json({
        panels: totals
      });
    })
})

app.post('/purchase-all', validate, (req, res) => {
  let transactionId = uuid.v1();
  q.purchaseAll(req.body.title, req.body.purchaserName, transactionId)
    .then(result => {
      res.json({
        is: 'purchased'
      });
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
