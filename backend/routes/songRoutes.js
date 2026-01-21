const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const song = require("../controllers/songController");

router.post("/upload", auth, song.uploadSong);
router.get("/", song.getSongs);

module.exports = router;
