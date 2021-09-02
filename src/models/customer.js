const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1',
        database: 'postgres'
    }
});

async function selectCustomerByCity() {
    return await knex.select().from('test');
}

module.exports = {
    selectCustomerByCity,
}