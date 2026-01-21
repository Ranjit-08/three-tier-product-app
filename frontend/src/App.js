import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [url, setUrl] = useState("");
  const [songTitle, setSongTitle] = useState("");

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-xl">
          <div className="grid grid-cols-2 gap-8">
            <Register />
            <Login onLogin={() => setLoggedIn(true)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="flex">
          <Sidebar
            onLogout={() => {
              localStorage.removeItem("token");
              setLoggedIn(false);
            }}
          />

          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <AddSong />
              </div>

              <div className="lg:col-span-2">
                <SongList
                  onSelect={(songUrl, title) => {
                    setUrl(songUrl);
                    setSongTitle(title);
                  }}
                />
                <Player url={url} title={songTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default App;
