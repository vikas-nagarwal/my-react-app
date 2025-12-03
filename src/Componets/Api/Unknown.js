import React, { useEffect, useState } from "react";
import "../../App.css";

function Unknown() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // console.log("USEEFFECT CHAL GAYA");
    fetch("https://reqres.in/api/unknown") // API call
      .then((res) => res.json()) // JSON me convert

      .then((json) => {
        setData(json.data);
        console.log(json.data); // ✅ yaha console me data dikhega
      })
      .catch((err) => console.error(err)); // agar error aaye
  }, []);

  return null;
}
export default Unknown;
