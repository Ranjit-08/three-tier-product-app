const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (email, password) VALUES (?,?)",
    [email, hash],
    () => res.json({ message: "Registered" })
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, results) => {
      if (!results.length) return res.status(401).json({ message: "User not found" });

      const valid = await bcrypt.compare(password, results[0].password);
      if (!valid) return res.status(401).json({ message: "Wrong password" });

      const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET);
      res.json({ token });
    }
  );
};
