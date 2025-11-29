import React from "react";
import { useEffect } from "react";
import "../../App.css";

function Unknown() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/unknown/2")
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
        
          {users.map((user) => 
      )}
    </div>
  );
}

export default Unknown;
