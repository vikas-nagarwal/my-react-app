import React, { useEffect, useState } from "react";
import "../../App.css";

function Unknown() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/unknown/2")
      .then((res) => res.json())
      .then((json) => setUsers([json.data])) // convert single object into array
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Users List</h1>

      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4">
              <div className="card p-3 mt-3 shadow-sm">
                <h3>{user.name}</h3>
                <p>
                  <strong>Year:</strong> {user.year}
                </p>
                <p>
                  <strong>Color:</strong> {user.color}
                </p>
                <p>
                  <strong>Pantone:</strong> {user.pantone_value}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Unknown;
