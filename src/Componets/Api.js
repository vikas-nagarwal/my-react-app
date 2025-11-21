import React, { useState, useEffect } from "react";
import "../App.css";

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((user) => (
          <div key={user.id}>
            <h1>ID: {user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Username: {user.username}</h1>
            <h1>Email: {user.email}</h1>
            <h1>addresh: {user.address.street}</h1>
            <h1>suite: {user.address.suite}</h1>
            <h1>city: {user.address.city}</h1>
            <h1>zipcode: {user.address.zipcode}</h1>
            <h2>Latitude: {user.address.geo.lat}</h2>
            <h2>Longitude: {user.address.geo.lng}</h2>
            <h2>phone: {user.phone}</h2>
            <h2>website: {user.website}</h2>
            <h2>name: {user.company.name}</h2>
            <h2>name: {user.company.catchPhrase}</h2>
            <h2>name: {user.company.bs}</h2>

            <hr />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
