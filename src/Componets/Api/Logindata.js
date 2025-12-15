import React, { useState } from "react";
import "../../App.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const correctPassword = "cityslicka";
  const handleLogin = async (e) => {
    e.preventDefault();
    // -------- Validation --------
    if (!email) {
      setError("Please enter your email");
      return;
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }
    if (password !== correctPassword) {
      setError("Incorrect password! Please try again.");
      return;
    }

    setError("");

    // ---------- API Call ----------
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // setToken(data.token);
        // alert("Login Successful! Token: " + data.token);

        setToken(data.token);

        window.location.href = "https://www.coderssphere.com";
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
        onSubmit={handleLogin}
      >
        <h2 className="text-center mb-4">Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password (8 chars only)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        {token && (
          <p className="mt-3 text-success text-center">Token: {token}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
