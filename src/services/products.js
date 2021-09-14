const { selectProductsByPrice } = require("../models/products");

const getProductByPrice = async ({ price }) => {
  try {
    const result = await selectProductsByPrice({ price });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getProductByPrice,
};
