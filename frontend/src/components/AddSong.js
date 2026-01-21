import api from "../api";

export default function AddSong() {
  const upload = async (e) => {
    const f = new FormData();
    f.append("song", e.target.files[0]);
    f.append("name", "Song");
    f.append("artist", "Artist");
    await api.post("/songs/upload", f);
  };
  return <input type="file" onChange={upload} />;
}
