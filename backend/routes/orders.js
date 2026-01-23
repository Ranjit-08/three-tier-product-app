const express = require("express");
const router = express.Router();
const orderModel = require("../models/orderModel");

router.post("/", (req, res) => {
  orderModel.createOrder(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Order placed successfully" });
  });
});

module.exports = router;
