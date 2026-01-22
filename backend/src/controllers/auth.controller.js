const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // 1. Check if user already exists
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log("DB ERROR (check user exists):", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (result.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      // 2. Hash password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // 3. Insert new user
      db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, hashedPassword],
        (err, result) => {
          if (err) {
            console.log("DB ERROR (insert user):", err);
            return res.status(500).json({ message: "Database error" });
          }

          return res.status(200).json({ message: "Registered" });
        }
      );
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // 1. Check if user exists
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log("DB ERROR (login):", err);
        return res.status(500).json({ message: "Database error" });
      }

      // 2. If user not found
      if (!result || result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const user = result[0];

      // 3. Compare password
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // 4. Generate JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.status(200).json({
        message: "Login successful",
        token,
      });
    }
  );
};
