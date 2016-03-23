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

	function createSVG(title, svg) {
		return knex.table('svg')
			.returning('id')
			.insert({
				title: title,
				svg: svg
			})
	}

	function formatPaths(svgId, paths) {
		return paths.map(function(path) {
			return {
				svg_id: parseInt(svgId),
				path_id: parseInt(path.id),
				amount: isNaN(parseFloat(path.amount)) ? null : parseFloat(path.amount)
			}
		});
	}

	function insertSvgPaths(svgId, paths) {
		var formattedPath = formatPaths(svgId, paths);
		return knex.table('path')
			.insert(formattedPath)
	}

	return {
		getEmailAddress: getEmailAddress,
		checkForUsername: checkForUsername,
		createUser: createUser,
		createSVG: createSVG,
		insertSvgPaths: insertSvgPaths
	}
}