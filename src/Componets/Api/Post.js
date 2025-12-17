import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Post() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].title);
        // console.log(data[1].title);
        // console.log(data[3].body);
        // console.log(data[4].title);
        // console.log(data[4].body);
        console.log(data.slice(39, 60));
        return false;
      });
  }, []);

  return (
    <div>
      <h1>Post Component</h1>
    </div>
  );
}
export default Post;
