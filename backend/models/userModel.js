const db = require("../config/db");

exports.createUser = (user, cb) => {
  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [user.name, user.email, user.password],
    cb
  );
};

exports.findUser = (email, cb) => {
  db.query("SELECT * FROM users WHERE email=?", [email], cb);
};
