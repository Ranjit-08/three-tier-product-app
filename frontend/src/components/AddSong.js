import { useState } from "react";
import API from "../api";

function AddSong() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const addSong = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("song", file);

    try {
      await API.post("/songs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Song uploaded successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add New Song</h2>

      <input
        value={title}
        className="w-full p-3 rounded-lg bg-gray-800 mb-3"
        placeholder="Song Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
        className="w-full mb-3"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        onClick={addSong}
      >
        Upload
      </button>
    </div>
  );
}

export default AddSong;
