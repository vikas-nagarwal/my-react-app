import React, { useEffect, useState } from "react";
import "../../App.css";

function UserCardWith404() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Change user ID to 2 for valid user or 23 for invalid
    fetch("https://reqres.in/api/users/23")
      .then((res) => {
        if (!res.ok) throw new Error("User Not Found");
        return res.json();
      })
      .then((json) => setUser(json.data))
      .catch(() => setError(true));
  }, []);

  // 404 Page UI
  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "#ff4d4f",
        }}
      >
        <h1 style={{ fontSize: "100px" }}>404</h1>
        <h2>User Not Found</h2>
        <p>The user you are looking for does not exist.</p>
      </div>
    );
  }

  // While fetching, show nothing (optional)
  if (!user) return null;

  // Valid user card
  return (
    <div className="container mt-4">
      <h1>Users List</h1>
      <div className="col-md-4">
        <div className="card p-3 mt-3 shadow-sm text-center">
          <img
            src={user.avatar}
            alt="avatar"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <h3 className="mt-3">
            {user.first_name} {user.last_name}
          </h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCardWith404;
