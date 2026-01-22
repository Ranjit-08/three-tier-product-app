const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = require("../config/s3");
const auth = require("../middleware/authMiddleware");
const db = require("../config/db");

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    key: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

router.post("/upload", auth, upload.single("song"), (req, res) => {
  db.query(
    "INSERT INTO songs (user_id, title, url) VALUES (?,?,?)",
    [req.user.id, req.file.originalname, req.file.location],
    () => res.json({ message: "Uploaded" })
  );
});

router.get("/", auth, (req, res) => {
  db.query(
    "SELECT * FROM songs WHERE user_id=?",
    [req.user.id],
    (err, results) => res.json(results)
  );
});

module.exports = router;   // ✅ THIS LINE IS CRITICAL
