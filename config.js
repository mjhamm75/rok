var connectionString = process.env.DATABASE_URL || 'postgres://rok:rok@localhost/rok';
var knex = require('knex')({
      client: 'pg',
      connection: connectionString,
      debug: false
  });

module.exports = {
	knex: knex
}