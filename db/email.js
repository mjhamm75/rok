var email = require('emailjs');

module.exports = function sendEmail(username, password, message, emailAddress, cb) {
	email.server.connect({
		user:    username, 
		password:password, 
		host:    "smtp.gmail.com", 
		ssl:     true
	}).send({
		text:    message,
		from:    "you <" + emailAddress + ">", 
		to:      "someone <rootsofknowledgeproject@gmail.com>",
		subject: "ROK"
	}, function(err, message) {
		cb(err, message)
	});
}