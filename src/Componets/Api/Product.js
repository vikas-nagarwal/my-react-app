import React, { useState, useEffect } from "react";
import "../../App.css";

function Product() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => setUsers(json?.data || [])) // safe: if undefined, set empty array
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="Container">
      <h1>Users List</h1>

      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Product;
