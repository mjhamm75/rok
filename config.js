var email = require('emailjs');

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

module.exports = {
	knex: knex,
	email: emailServer
}