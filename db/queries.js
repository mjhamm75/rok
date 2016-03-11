module.exports = function(knex) {
	function getEmailAddress() {
		return knex.select().table('email').orderBy('id', 'desc').first();
	}

	return {
		getEmailAddress: getEmailAddress
	}
}