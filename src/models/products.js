const { knexClient } = require("../config/knex");

selectProductsByPrice = async ({ price }) => {
  try {
    return await knexClient("Productos").where("precio", "<", price);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  selectProductsByPrice,
};
