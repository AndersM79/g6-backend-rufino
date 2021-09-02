const {knexClient}  = require('../config/knex');

async function selectCustomerByCity() {
    return await knexClient.select().from('test');
}

module.exports = {
    selectCustomerByCity,
}