import React from "react";

const Login = () => {
  const handleLogin = () => {
    // Hardcoded token (your token)
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNzY5MDg3MDYyLCJleHAiOjE3Njk2OTE4NjJ9.ctAep_vmgaVqxkgSaqGV78RWgMyGkKOwqSWOZKVo4MA"
    );

    // Redirect to Dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
