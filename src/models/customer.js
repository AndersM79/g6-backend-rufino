const { knexClient } = require("../config/knex");

async function selectCustomerByCity({ city }) {
  try {
    return await knexClient("Cliente").where("direccion", "like", `%${city}%`);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  selectCustomerByCity,
};
