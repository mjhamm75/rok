
module.exports = function(knex) {
	
	function validateUsername(username) {
		return knex.select().table('users').first().where({
			username: username
		})
	}

	function insertNewUser(username, encryptedPw) {
		return knex.table('users').insert({
			username: username,
			password: encryptedPw
		})
	}

	return {
		validateUsername: validateUsername		
	}
}