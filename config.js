var connectionString = process.env.PG_CONNECTION_STRING || 'postgres://rok:rok@localhost/rok';
var knex = require('knex')({
      client: 'pg',
      connection: connectionString,
      debug: false
  });

module.exports = {
	knex: knex
}