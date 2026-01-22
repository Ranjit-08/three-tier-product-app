import Upload from "../components/Upload";
import Player from "../components/Player";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">🎵 My Music</h1>
      <Upload />
      <Player />
    </div>
  );
}
