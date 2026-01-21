import React, { useEffect, useState } from "react";
import API from "../api";

function SongList({ onSelect }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    API.get("/songs").then((res) => setSongs(res.data));
  }, []);

  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <div key={song.id}>
          <span>{song.name} - {song.artist}</span>
          <button onClick={() => onSelect(song.url)}>Play</button>
        </div>
      ))}
    </div>
  );
}

export default SongList;
