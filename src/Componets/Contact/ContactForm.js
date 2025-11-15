import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subjects: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validation = () => {
    let tempErrors = {};

    if (!formData.fullname.trim())
      tempErrors.fullname = "Full Name is required";

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.subjects.trim()) tempErrors.subjects = "Subject is required";

    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.fullname && <p className="error">{errors.fullname}</p>}
      </div>

      {/* Email */}
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div className="input-group">
        <label>Subject</label>
        <input
          type="text"
          name="subjects"
          value={formData.subjects}
          onChange={handleChange}
          placeholder="Enter subject"
        />
        {errors.subjects && <p className="error">{errors.subjects}</p>}
      </div>

      {/* Message */}
      <div className="input-group">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};
