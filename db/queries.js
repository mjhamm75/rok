module.exports = function(knex) {
	function getEmailAddress() {
		return knex.select().table('email').orderBy('id', 'desc').first();
	}

	function checkForUsername(username) {
		return knex.select().table('users').first().where({
			username: username
		})
	}

	function createUser(username, encryptedPw) {
		return knex.table('users').insert({
			username: username,
			password: encryptedPw
		})
	}

	return {
		getEmailAddress: getEmailAddress,
		checkForUsername: checkForUsername,
		createUser: createUser
	}
}