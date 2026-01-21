import { useState } from "react";
import API from "../api";

function Login({ onLogin }) {
  const [data, setData] = useState({ email: "", password: "" });

  const login = async () => {
    try {
      const res = await API.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-6 bg-white bg-opacity-10 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        value={data.email}
        className="w-full p-3 rounded-lg bg-gray-800 mb-3"
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        value={data.password}
        type="password"
        className="w-full p-3 rounded-lg bg-gray-800 mb-3"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button
        className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
