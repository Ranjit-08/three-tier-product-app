const db = require("../config/db");

exports.getProducts = (cb) => {
  db.query("SELECT * FROM products", cb);
};
