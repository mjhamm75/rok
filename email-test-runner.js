var path = require('path')
var templatesDir = path.join(__dirname, 'templates')
var emailTemplates = require('email-templates');
var knex = require('./config.js').knex;
var q = require('./db/queries.js')(knex);
var sendHtmlEmail = require('./db/helper.js').sendHtmlEmail;

emailTemplates(templatesDir, function(err, template) {

  // Render a single email with one template
  var locals = {
    name: 'Bobby',
    cardEnding: '4444',
    expDate: '10/88',
    glass: [
      {
        panel: 'A1',
        piece: 222,
        amount: '450'
      }
    ],
    total: 99
  };

  template('thank-you', locals, function(err, html, text) {
    q.getEmailAddress().then(function(user) {
        sendHtmlEmail('rootsofknowledgeproject@gmail.com', 'rootsofknowledge', 'jasonhamm.me@gmail.com', html, function(err, result) {
          if(err) console.log(err);
          console.log(result);
          // res.json({
          //   message: 'sent'
          // })
        });
    })
  });
});
