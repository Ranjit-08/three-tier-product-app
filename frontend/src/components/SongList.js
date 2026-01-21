import { useEffect, useState } from "react";
import API from "../api";

function SongList({ onSelect }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const res = await API.get("/songs");
      setSongs(res.data);
    } catch (err) {
      alert("Failed to load songs");
    }
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Songs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {songs.map((song) => (
          <div
            key={song._id}
            className="bg-gray-900 bg-opacity-50 p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{song.title}</div>
              <div className="text-gray-400 text-sm">Artist: Unknown</div>
            </div>

            <button
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
              onClick={() => onSelect(song.url, song.title)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList;
