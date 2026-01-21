const multer = require("multer");
const fs = require("fs");
const s3 = require("../config/s3");
const Song = require("../models/songModel");

const upload = multer({ dest: "uploads/" });

exports.uploadSong = [
  upload.single("song"),
  (req, res) => {
    const fileStream = fs.createReadStream(req.file.path);

    s3.upload(
      {
        Bucket: process.env.S3_BUCKET,
        Key: req.file.originalname,
        Body: fileStream,
      },
      (err, data) => {
        Song.addSong(
          {
            name: req.body.name,
            artist: req.body.artist,
            url: data.Location,
            user_id: req.user.id,
          },
          () => res.json({ message: "Song uploaded" })
        );
      }
    );
  },
];

exports.getSongs = (req, res) => {
  Song.getSongs((err, data) => res.json(data));
};
