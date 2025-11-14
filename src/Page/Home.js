import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const boxes = [
  {
    id: 1,
    title: "01. Success Architects",
    content:
      "Business consulting consultants provide expert advice and guide the businesses to help them improve their performance efficiency.",
  },
  {
    id: 2,
    title: "04. UI/Visual Design",
    content:
      "I’m proud of what I’ve accomplished and excited to share my journey with you.",
  },
  {
    id: 3,
    title: "07. Digital Marketing",
    content:
      "Helping brands grow online using SEO, social media, and paid campaigns to increase reach and engagement.",
  },
  {
    id: 4,
    title: "08. Strategy & Planning",
    content:
      "Helping brands plan effectively with clear strategies to maximize business outcomes.",
  },
  {
    id: 5,
    title: "08. Strategy & Planning",
    content:
      "Helping brands plan effectively with clear strategies to maximize business outcomes.",
  },
  {
    id: 6,
    title: "08. Strategy & Planning",
    content:
      "Helping brands plan effectively with clear strategies to maximize business outcomes.",
  },
];

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <div id="home" className="container my-5">
        <div className="row g-4">
          {boxes.map((box) => (
            <div key={box.id} className="col-12 col-md-6">
              <div className="p-4 bg-dark text-white rounded shadow rds box-border">
                <h4>{box.title}</h4>
                <p>{box.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="form-container my-5">
        <div className="form-header">
          <h1>Contact</h1>
        </div>

        <form className="contact-form" action="#" method="POST">
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What is this regarding?"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your inquiry or feedback..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
