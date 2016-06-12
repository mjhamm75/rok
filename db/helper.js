var bcrypt = require('bcrypt-nodejs');
var email = require('emailjs');

function sendEmail(username, password, message, emailAddress, cb) {
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

function sendHtmlEmail(username, password, emailAddress, html, cb) {
	email.server.connect({
		user:    username,
		password:password,
		host:    "smtp.gmail.com",
		ssl:     true
	}).send({
		text:    '',
		from:    "<rootsofknowledgeproject@gmail.com>",
		to:      emailAddress,
		subject: "ROK",
		attachment: [{data: html, alternative:true}]
	}, function(err, message) {
		cb(err, message)
	});
}

function comparePasswords(pw1, pw2) {
	return bcrypt.compareSync(pw1, pw2);
}

module.exports = {
	sendEmail: sendEmail,
	sendHtmlEmail: sendHtmlEmail,
	comparePasswords: comparePasswords
}
