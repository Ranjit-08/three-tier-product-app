const db = require("../config/db");

exports.addSong = (song, cb) => {
  db.query(
    "INSERT INTO songs (name,artist,url,user_id) VALUES (?,?,?,?)",
    [song.name, song.artist, song.url, song.user_id],
    cb
  );
};

exports.getSongs = (cb) => {
  db.query("SELECT * FROM songs", cb);
};
