import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const filteredUsers = data.filter(
          (user) =>
            !(user.id === 2 || user.id === 3) ||
            !user.email.includes("@gmail.com")
        );
        const filteredData = data.filter((user) => {
          // Agar ID 2 ya 3 ho aur email Gmail hai → remove
          if (
            (user.id === 2 || user.id === 3) &&
            user.email.includes("@gmail.com")
          ) {
            return false; // remove
          }
          return true; // baki sab include
        });

        setUsers(filteredData);
      });
  }, []); // <-- yahan useEffect ka closing parenthesis aur array dependency

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary fw-bold">User List</h2>
      ddd
      <div className="row hhhjh">
        {users.map((item) => (
          <div className="col-4 mb-4 jjjj" key={item.id}>
            <div className="card shadow-sm p-3">
              <h5 className="fw-bold">ID: {item.id}</h5>
              <h5>Name: {item.name}</h5>
              <p className="mb-1">Email: {item.email}</p>

              <h6 className="mt-3 fw-bold text-secondary">Address</h6>
              <p className="mb-1">Street: {item.address.street}</p>
              <p className="mb-1">Suite: {item.address.suite}</p>
              <p className="mb-1">City: {item.address.city}</p>
              <p className="mb-1">Zip: {item.address.zipcode}</p>

              <h6 className="mt-3 fw-bold text-secondary">Geo Location</h6>
              <p className="mb-1">Lat: {item.address.geo.lat}</p>
              <p className="mb-0">Lng: {item.address.geo.lng}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
