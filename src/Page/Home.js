import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const boxes = [
  {
    id: 1,
    title: "01. Success Architects",
    content:
      "Business consulting consultants provide expert advice and guide the businesses to help them their performance efficiency.",
  },
  {
    id: 2,
    title: "04. UI/Visual Design",
    content:
      "I’m proud of what I’ve accomplished and excited to share my journey with you. I’m proud of what I’ve accomplished and excited to.",
  },
  {
    id: 3,
    title: "07. Digital Marketing",
    content:
      "Helping brands grow online using SEO, social media, and paid campaigns to increase reach and engagement.",
  },
  {
    id: 4,
    title: "07. Digital Marketing",
    content:
      "Helping brands grow online using SEO, social media, and paid campaigns to increase reach and engagement.",
  },
];

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {boxes.map((box) => (
          <div key={box.id} className="col-12 col-md-6">
            <div className="p-4 bg-dark text-white rounded shadow rds">
              <h4>{box.title}</h4>
              <p>{box.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
