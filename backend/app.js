const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;
