import React, { useState } from "react";

const Signupapi = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in"); // Default example
  const [password, setPassword] = useState("pistol"); // Default example
  const [responseMsg, setResponseMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // 🔴 Email validation
    if (!email) {
      setResponseMsg("Email required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setResponseMsg("Enter a valid email address");
      return;
    }

    // 🔴 Password validation
    if (!password) {
      setResponseMsg("Password required");
      return;
    }

    if (password.length < 6) {
      setResponseMsg("Password must be at least 6 characters");
      return;
    }
    try {
      const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres_2eb0261795144183afefa1db80a78375",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg(`Signup Successful! Token: ${data.token}`);
      } else {
        setResponseMsg(`Error: ${data.error}`);
      }
    } catch (err) {
      setResponseMsg("Something went wrong!");
    }
  };

  return (
    <div>
      <h2>Signup Example</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Signup</button>
      </form>

      {responseMsg && <p>{responseMsg}</p>}
    </div>
  );
};

export default Signupapi;
