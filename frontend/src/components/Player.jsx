import { useEffect, useState } from "react";
import API from "../api/api";

export default function Player() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    API.get("/music").then(res => setSongs(res.data));
  }, []);

  return songs.map(song => (
    <div key={song.id} className="bg-white text-black p-3 rounded mb-2">
      <p>{song.title}</p>
      <audio controls src={song.url}></audio>
    </div>
  ));
}
