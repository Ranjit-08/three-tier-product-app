const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const song = require("../controllers/songController");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/upload", auth, upload.single("song"), song.uploadSong);
router.get("/", song.getSongs);

module.exports = router;
