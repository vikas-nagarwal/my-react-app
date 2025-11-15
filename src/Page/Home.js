import React, { useState } from "react";
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
  // ✅ State inside component
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subjects: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Capitalize first letter of each word
  const capitalizeName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // ✅ Full Name validation logic
  const validateFullName = (name) => {
    const trimmedName = name.trim();

    if (!trimmedName) return "Full Name is required";
    else if (trimmedName.length < 3)
      return "Name must have at least 3 characters";
    else if (trimmedName.length > 40)
      return "Name must not exceed 40 characters";
    else if (/\d/.test(trimmedName)) return "Name must not contain numbers";
    else if (/[^a-zA-Z\s]/.test(trimmedName))
      return "Name must contain only letters and spaces";
    else if (/^\s|\s$/.test(name))
      return "No leading or trailing spaces allowed";
    else if (/\s{2,}/.test(trimmedName))
      return "Multiple consecutive spaces not allowed";
    else if (/^([A-Za-z])\1+$/.test(trimmedName))
      return "Repeated same character is not allowed";
    else if (trimmedName.length === 1)
      return "Name must contain more than one letter";
    else if (/^(Mr|Dr)\.?\s/.test(trimmedName))
      return "Special patterns like 'Mr. Rahul' are not allowed";
    return "correct";
  };

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullname") {
      const capitalized = capitalizeName(value);
      setFormData({ ...formData, [name]: capitalized });

      // Live validation
      setErrors({ ...errors, fullname: validateFullName(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Full form validation
  const validation = () => {
    let tempErrors = {};

    // Full Name
    const fullNameError = validateFullName(formData.fullname);
    if (fullNameError) tempErrors.fullname = fullNameError;

    // Email
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";

    // Subject
    if (!formData.subjects.trim()) tempErrors.subjects = "Subject is required";

    // Message
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
      setFormData({ fullname: "", email: "", subjects: "", message: "" });
      setErrors({});
    }
  };

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
      <div id="" contact className="section-header my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {/* Left Side Text */}
            <div className="col-12 col-md-6">
              <div id="contact" className="form-container my-1">
                <p>
                  loeram*% Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut.
                </p>
              </div>
              <div id="contact" className="form-container my-1">
                <p>
                  loeram*% Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut.
                </p>
              </div>
              <div id="contact" className="form-container my-1">
                <p>
                  loeram*% Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut.
                </p>
              </div>
            </div>

            {/* Right Side Contact Form */}
            <div className="col-12 col-md-6">
              <div id="contact" className="form-container my-1">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
