const express = require('express');
const customerRoutes = require('./api/customer');

const app = express();
const port = 3000;

app.use('/customer', customerRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
