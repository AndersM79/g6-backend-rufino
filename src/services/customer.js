const { selectCustomerByCity } = require('../models/customer');

async function getCustomerByCity({ city }) {
    try {
        return await selectCustomerByCity({ city })
    } catch (error) {
        throw new Error('client not fund')
    }
}

module.exports = {
    getCustomerByCity
}