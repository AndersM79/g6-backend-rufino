const express = require("express");
const cors = require("cors");

const customerRoutes = require("./api/customer");
const productsRoutes = require("./api/products");

const app = express();
const port = 3000;

app.use(cors());
app.use("/customer", customerRoutes);
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
