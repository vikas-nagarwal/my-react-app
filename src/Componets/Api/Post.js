import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Post() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].title); // First post title

        // Loop through all posts
        for (let i = 0; i < data.length; i++) {
          if (i % 2 === 0) {
            console.log(data[i].title); // Even index post titles
          }
        }
      });
  }, []);

  return (
    <div>
      <h1>Post Component</h1>
    </div>
  );
}

export default Post;
