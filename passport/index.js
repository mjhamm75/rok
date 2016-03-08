var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, knex) {

	// =========================================================================
	// passport session setup ==================================================
	// =========================================================================
	// required for persistent login sessions
	// passport needs ability to serialize and unserialize users out of session

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		console.log(user.id + " was seralized");
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		console.log(id + "is deserialized");
		knex.select().table('users').where({
				username: username,
				password: password
			}).first().then(function(res) {
				if(!res) {
					return done(null, false, req.flash('loginMessage'), 'No user found');
				}
				return done(null, res);
			}).catch(function(err) {
				return done(err)
			})
	});

	passport.use('local-login', new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password',
			passReqToCallback: true // allows us to pass back the entire request to the callback
		},
		function(req, username, password, done) { // callback with email and password from our form
			// find a user whose email is the same as the forms email
			// we are checking to see if the user trying to login already exists
			
			knex.select().table('users').where({
				username: username,
				password: password
			}).first().then(function(res) {
				if(!res) {
					return done(null, false, req.flash('loginMessage'), 'No user found');
				}
				return done(null, res);
			}).catch(function(err) {
				return done(err)
			})

			// User.findOne({
			// 	'local.email': email
			// }, function(err, user) {
			// 	// if there are any errors, return the error before anything else
			// 	if (err)
			// 		return done(err);

			// 	// if no user is found, return the message
			// 	if (!user)
			// 		return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

			// 	// if the user is found but the password is wrong
			// 	if (!user.validPassword(password))
			// 		return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

			// 	// all is well, return successful user
			// 	return done(null, user);
			// });

		}));

}