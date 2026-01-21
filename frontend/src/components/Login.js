import api from "../api";

export default function Login({ setAuth }) {
  const login = async () => {
    const res = await api.post("/auth/login", {
      email: "test@test.com",
      password: "1234",
    });
    localStorage.setItem("token", res.data.token);
    setAuth(true);
  };
  return <button onClick={login}>Login</button>;
}
