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

	function createSVG(title) {
		return knex.table('svg')
			.returning('id')
			.insert({
				title: title
			})
	}

	function formatPaths(svgId, paths) {
		return paths.map(function(path) {
			return {
				path_id: parseInt(path.id),
				svg_id: parseInt(svgId),
				amount: isNaN(parseFloat(path.amount)) ? null : parseFloat(path.amount)
			}
		});
	}

	function insertSvgPaths(svgId, paths) {
		var formattedPaths = formatPaths(svgId, paths);
		return knex.table('path')
			.insert(formattedPaths)
	}

	function getSVG(svgId) {
		return knex.table('svg')
			.where({
				id: svgId
			});
	}

	function getPaths(title) {
		return knex.from('path')
			.innerJoin('svg', 'path.svg_id', 'svg.id')
			.where({
				'svg.title': title
			});
	}

	return {
		getEmailAddress: getEmailAddress,
		checkForUsername: checkForUsername,
		createUser: createUser,
		createSVG: createSVG,
		insertSvgPaths: insertSvgPaths,
		getSVG: getSVG,
		getPaths: getPaths
	}
}
