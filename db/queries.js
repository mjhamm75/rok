module.exports = function(knex) {
	function donate(email, amount, transactionId) {
		return knex.table('donation').insert({
			email: email,
			amount: (amount/100),
			transaction_id: transactionId
		})
	}
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
			var id = path.id || path.path_id;
			return {
				path_id: parseInt(id),
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

	function updateSvgPaths(svgId, paths) {
		var formattedPaths = formatPaths(svgId, paths);
		return Promise.all(formattedPaths.map(function(path) {
			return knex.table('path')
				.where({
					path_id: path.path_id,
					svg_id: svgId
				})
				.update({
					amount: path.amount
				})
		}))
	}

	function updateSvgPathsPurchaser(selectedItems, email, transactionId) {
		return Promise.all(selectedItems.map(function(item) {
			getSvgByTitle(item.name)
				.then(function(svg) {
					return knex.table('path')
						.where({
							'path_id': item.id,
							'svg_id': svg[0].id
						})
						.update({
							customer: email,
							transaction_id: transactionId,
							purchase_date: new Date()
						})
				})
		}))
	}

	function updateSvgPath(svgId, pathId, email) {
		return knex.table('path')
			.where({
				path_id: pathId,
				svg_id: svgId
			})
			.update({
				customer: email
			})
	}

	function getSVG(svgId) {
		return knex.table('svg')
			.where({
				id: svgId
			});
	}

	function getSvgByTitle(title) {
		return knex.table('svg')
			.where({
				title: title
			})
	}

	function getSVGs() {
		return knex.select().table('svg');
	}

	function getPaths(title) {
		return knex.from('path')
			.innerJoin('svg', 'path.svg_id', 'svg.id')
			.where({
				'svg.title': title
			});
	}

	function getPanelsInfo() {
		return knex('svg')
			.join('path', 'svg.id', 'path.svg_id')
			.count('path.*')
			.sum('path.amount')
			.select('svg.title')
			.groupBy('svg.title')
	}

	return {
		getEmailAddress: getEmailAddress,
		checkForUsername: checkForUsername,
		createUser: createUser,
		createSVG: createSVG,
		donate: donate,
		insertSvgPaths: insertSvgPaths,
		getSVG: getSVG,
		getSVGs: getSVGs,
		getPanelsInfo: getPanelsInfo,
		getPaths: getPaths,
		getSvgByTitle: getSvgByTitle,
		updateSvgPath: updateSvgPath,
		updateSvgPaths: updateSvgPaths,
		updateSvgPathsPurchaser: updateSvgPathsPurchaser
	}
}
