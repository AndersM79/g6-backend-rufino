const express = require("express");
const router = express.Router();

const { getProductByPrice } = require("../services/products");
const { validateSession } = require("../middlewares/authentication");

router.use(validateSession);

router.get("/getByPrice/:price", async (req, res) => {
  // get product data by price
  try {
    const price = req.params.price;
    const result = await getProductByPrice({ price });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
