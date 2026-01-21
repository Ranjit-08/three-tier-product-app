const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  User.createUser(
    { ...req.body, password: hashed },
    () => res.json({ message: "Registered" })
  );
};

exports.login = (req, res) => {
  User.findUser(req.body.email, async (err, result) => {
    if (!result.length) return res.status(401).json({ message: "Invalid" });

    const valid = await bcrypt.compare(req.body.password, result[0].password);
    if (!valid) return res.status(401).json({ message: "Invalid" });

    const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET);
    res.json({ token });
  });
};
