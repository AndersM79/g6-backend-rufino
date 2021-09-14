const express = require("express");
const router = express.Router();

const { getCustomerByCity } = require("../services/customer");

router.get("/getByCity/:city", async function (req, res) {
  try {
    const city = req.params.city;
    const data = await getCustomerByCity({ city });
    res.send(data);
  } catch (error) {
    res.status(500).send("Error on get data");
  }
});

module.exports = router;
