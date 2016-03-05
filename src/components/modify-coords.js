var coords = require('./coords');

var result = coords.map((coord, i) => {
	return {
		id: i,
		coords: coord,
		amount: i * 10
	}
})

console.log(result);