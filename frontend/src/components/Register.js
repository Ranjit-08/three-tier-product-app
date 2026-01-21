import { useState } from "react";
import API from "../api";

function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const register = async () => {
    try {
      await API.post("/auth/register", data);
      alert("Registered Successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="p-6 bg-white bg-opacity-10 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Create Account</h2>

      <input
        value={data.name}
        className="w-full p-3 rounded-lg bg-gray-800 mb-3"
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
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
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        onClick={register}
      >
        Register
      </button>
    </div>
  );
}

export default Register;
