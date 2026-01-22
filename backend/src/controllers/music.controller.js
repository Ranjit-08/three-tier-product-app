const db = require("../config/db");

exports.getSongs = (req, res) => {
  db.query(
    "SELECT * FROM songs WHERE user_id=?",
    [req.user.id],
    (err, results) => res.json(results)
  );
};
