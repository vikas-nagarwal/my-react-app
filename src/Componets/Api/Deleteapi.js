import React, { useState } from "react";

function DeleteUser() {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    setMessage("Deleting...");

    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
    });

    if (response.status === 204) {
      setMessage("User deleted successfully!");
    } else {
      setMessage("Failed to delete user.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User ID: 2</h2>

      <button
        onClick={handleDelete}
        style={{
          backgroundColor: "red",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete User
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}

export default DeleteUser;
