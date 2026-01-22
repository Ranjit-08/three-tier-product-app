import API from "../api/api";

export default function Upload() {
  const upload = async (e) => {
    const form = new FormData();
    form.append("song", e.target.files[0]);
    await API.post("/music/upload", form);
    alert("Uploaded!");
  };

  return <input type="file" onChange={upload} className="mb-4" />;
}
