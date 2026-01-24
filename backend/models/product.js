const db = require("../config/db");

exports.addProduct = (name, price, image, callback) => {
  const sql = "INSERT INTO products (name, price, image) VALUES (?, ?, ?)";
  db.query(sql, [name, price, image], callback);
};

exports.getProducts = (callback) => {
  db.query("SELECT * FROM products", callback);
};
