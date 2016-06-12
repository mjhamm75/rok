var path = require('path')
var templatesDir = path.join(__dirname, 'templates')
var emailTemplates = require('email-templates');

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
    console.log(html)
  });
});
