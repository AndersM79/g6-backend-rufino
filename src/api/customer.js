const express = require('express');
const router = express.Router();

const { getCustomerByCity } = require('../services/customer');

router.get('/getCity/:city', async function (req, res) {
    try {
        const city = req.params.city;
        const data = await getCustomerByCity({ city });
        console.log(data)
        res.send(data);
    } catch (error) {
        res.status(500).send('Error on get data');
    }
});

module.exports = router;
