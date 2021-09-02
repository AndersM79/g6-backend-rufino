const knex = require('knex');

const config = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1',
        database: 'postgres'
    }
};

const knexClient = knex(config);

module.exports = {
    knexClient
}