import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Commentsapi() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log({ data });
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {users.map((item) => (
            <div>
              <h1 style={{ color: "green", fontSize: "10px" }}>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Commentsapi;
