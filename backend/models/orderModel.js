const db = require("../config/db");

exports.createOrder = (data, cb) => {
  const sql = "INSERT INTO orders SET ?";
  db.query(sql, data, cb);
};
