const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

router.get("/", (req, res) => {
  productModel.getProducts((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;
