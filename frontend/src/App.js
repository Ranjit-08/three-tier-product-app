import { useState } from "react";
import Login from "./components/Login";
import AddSong from "./components/AddSong";

export default function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));
  if (!auth) return <Login setAuth={setAuth} />;
  return <AddSong />;
}
