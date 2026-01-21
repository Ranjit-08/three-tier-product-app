const fs = require("fs");
const s3 = require("../config/s3");
const Song = require("../models/songModel");

exports.uploadSong = (req, res) => {
  // If file is missing
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const fileStream = fs.createReadStream(req.file.path);

  s3.upload(
    {
      Bucket: process.env.S3_BUCKET,
      Key: req.file.originalname,
      Body: fileStream,
    },
    (err, data) => {
      if (err) {
        return res.status(500).json({ message: "S3 upload failed", error: err });
      }

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
};

exports.getSongs = (req, res) => {
  Song.getSongs((err, data) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    res.json(data);
  });
};
