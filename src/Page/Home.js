import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../wordhistory/css/wordhistory.css";

const collageInformation = () => {
  const collageName = "S.S. Jain Subodh PG College, Jaipur";
  const degree = "MCA - Master of Computer Applications";
  const year = 2019;
  const age = 26;

  // Status function
  function status() {
    let result = ""; // declare variable
    if (year >= 2019 && degree.includes("MCA")) {
      result = "I have completed my MCA degree.";
    } else if (year >= 2019) {
      result = "I have completed my degree.";
    } else if (year < 2019 && age >= 18) {
      result = "I am still pursuing my degree and eligible for internships.";
    } else {
      result = "I am still pursuing my degree.";
    }
    return result;
  }

  // Remarks based on age
  function remarks() {
    if (age < 20) {
      return "Young and energetic!";
    } else if (age >= 20 && age <= 25) {
      return "Experienced and skilled.";
    } else {
      return "Senior professional.";
    }
  }

  return {
    collageName,
    degree,
    year,
    age,
    status: status(),
    remarks: remarks(),
  };
};

// Call the function
const rescult = collageInformation();
console.log(rescult);

let sutdentdata = () => {
  let name = "vikas nagarwal";
  let age = 26;
  let id = 25;
  return { name, age, id };
};
let returss = sutdentdata();
console.log(sutdentdata());

let viks = () => {
  let name = "Hemant Koolwal";
  let age = 26;

  function details() {
    let nameStatus = "";
    if (name === "Hemant Koolwal") {
      nameStatus = "Correct name.";
    } else {
      nameStatus = "Wrong name.";
    }

    let voteStatus = "";
    if (age >= 18) {
      voteStatus = "You are eligible to vote.";
    } else {
      voteStatus = "You are not eligible to vote.";
    }

    return {
      name,
      age,
      nameStatus,
      voteStatus,
    };
  }

  return details();
};

const result = viks();
console.log(result);

const projects = [
  {
    title: "Project One",
    image: "https://via.placeholder.com/600x400",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "#",
  },

  {
    title: "Project Two",
    image: "https://via.placeholder.com/600x400",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "#",
  },
  {
    title: "Project Three",
    image: "https://via.placeholder.com/600x400",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "#",
  },
];

const qulification = [
  {
    title: "04. MCA - S.S. Jain Subodh PG College, Jaipur",
    description:
      "Master of Computer Applications (2017-2019), Full Time, 78% marks.",
  },
  {
    title: "05. BCA - S.S. Jain Subodh PG College, Jaipur",
    description:
      "Bachelor of Computer Applications (2014-2017), Full Time, 78% marks.",
  },
];

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

  const workHistory = [
    {
      company: "SixStep Solutions",
      role: "Software Developer",
      duration: "2023 - Present",
      description:
        "Contributing to innovative web and software solutions, improving system performance, and collaborating with cross-functional teams.",
    },
    {
      company: "Dotsquares",
      role: "Software Developer",
      duration: "2021 - 2023",
      description:
        "Worked on various projects, honed skills in React and JavaScript, and collaborated with talented teams to deliver high-quality solutions.",
    },
  ];

  return (
    <>
      {/* <div className="container mt-5">
        <div className="row d-flex justify-content-center p-4 bg-light rounded shadow">
          <div className="col-sm-6 col-12">
            <h2>User Details</h2>
            <p>
              <strong>College:</strong> {result.collageName}
            </p>
            <p>
              <strong>Degree:</strong> {result.degree}
            </p>
            <p>
              <strong>Year:</strong> {result.year}
            </p>
            <p>
              <strong>Age:</strong> {result.age}
            </p>
            <p>
              <strong>Status:</strong> {result.status}
            </p>
            <p>
              <strong>Remarks:</strong> {result.remarks}
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="container">
        <div className="row d-flex justify-content-center mt-5 p-4 bg-light rounded shadow">
          <div className="col-sm-6 col-12">
            <h2>User Details</h2>
            <p>
              <strong>Name:</strong> {result.name}
            </p>
          </div>

          <div className="col-sm-6 col-12">
            <p>
              <strong>Age:</strong> {result.age}
            </p>
            <p>
              <strong>Name Status:</strong> {result.nameStatus}
            </p>
            <p>
              <strong>Vote Status:</strong> {result.voteStatus}
            </p>
          </div>
        </div>
      </div> */}
      {/* about section */}
      <div id="about" className="hero-section position-relative py-5">
        <div className="stars"></div>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="profile-wrap mx-auto mb-4">
                <div className="circle"></div>
                <img
                  src="Image\logo.png"
                  alt="profile"
                  className="rounded-circle profile-img"
                />
              </div>

              {/* Text */}
              <h1 className="nameTitle">I'm Hemant Koolwal!</h1>

              <h2 className="roleTitle">
                <span className="roleText">Software Engineer</span>
              </h2>

              <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8">
                  <p className="container">
                    Hi, I'm Hemant Koolwal! I'm a passionate software developer
                    based in Jaipur, Rajasthan, India. With a strong background
                    in ASP.NET, .NET Core, MVC, SQL Server, and front-end
                    technologies like jQuer
                  </p>
                </div>
                <div className="col-12 col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
      <div id="skillsect" className="skillsModern py-5">
        <div className="container">
          <h2 className="skillsHeading text-center mb-5">
            My <span>Skills</span>
          </h2>

          <div className="skillsWrapper">
            {[
              { icon: "bx bx-code-alt", name: ".NET" },
              { icon: "bx bx-layer", name: ".NET Core" },
              { icon: "bx bxl-angular", name: "Angular" },
              { icon: "bx bx-cube", name: "C#" },
              { icon: "bx bx-data", name: "SQL Server" },
              { icon: "bx bxl-nodejs", name: "Node JS" },
              { icon: "bx bxl-mongodb", name: "MongoDB" },
              { icon: "bx bxl-html5", name: "HTML" },
              { icon: "bx bxl-css3", name: "CSS" },
              { icon: "bx bxl-bootstrap", name: "Bootstrap" },
              { icon: "bx bxl-jquery", name: "jQuery" },
              { icon: "bx bxl-hubspot", name: "HubSpot" },
            ].map((skill, index) => (
              <div className="skillBox" key={index}>
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* profile section */}
      <div id="work" className="container mt-5">
        <h1 className="text-center mb-4">Work History</h1>
        <div className="row">
          {workHistory.map((job, index) => (
            <div key={index} className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4 className="card-title text-white">{job.company}</h4>
                  <h6 className="text-white">{job.role}</h6>
                  <p className="text-white">{job.duration}</p>
                  <p className="card-text text-white">{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
      <div id="contact" className="contactSuperSection">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-12 col-lg-5 mb-5">
              <h2 className="superHeading">
                Let’s <span>Work Together</span>
              </h2>

              <p className="superText">
                Have an idea, project, or opportunity? I’m here to help you
                build something amazing. Reach out and let’s turn your vision
                into reality.
              </p>

              <div className="superInfoBox">
                <i className="bx bx-mail-send"></i>
                <div>
                  <h5>Email</h5>
                  <p>contact@example.com</p>
                </div>
              </div>

              <div className="superInfoBox">
                <i className="bx bx-phone"></i>
                <div>
                  <h5>Phone</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="superInfoBox">
                <i className="bx bx-map"></i>
                <div>
                  <h5>Location</h5>
                  <p>Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-12 col-lg-7">
              <div className="superFormCard">
                <h3 className="formMainTitle">Send a Message</h3>

                <form className="superForm">
                  <div className="floatingGroup">
                    <input type="text" required />
                    <label>Full Name</label>
                  </div>

                  <div className="floatingGroup">
                    <input type="email" required />
                    <label>Email Address</label>
                  </div>

                  <div className="floatingGroup">
                    <input type="text" required />
                    <label>Subject</label>
                  </div>

                  <div className="floatingGroup textareaGroup">
                    <textarea required></textarea>
                    <label>Your Message</label>
                  </div>

                  <button className="superBtn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* qualification section */}
      <div id="qualification">
        <section className="qualification-section py-5">
          <div className="container">
            <div className="row g-4">
              {/* Heading */}
              <h3 className="text-center text-white fw-bold mb-3">
                <span className="qual-gradient">Qualification</span>
              </h3>

              {/* Paragraph */}
              <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                  <p className="text-center text-light">
                    Passionate about crafting efficient and scalable software
                    solutions that deliver real value. Dedicated to continuous
                    learning and improvement in every project.
                  </p>
                </div>
              </div>

              {/* Cards */}
              {qulification.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="qual-box p-4 rounded-4 shadow-lg text-white">
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="mb-0 opacity-75">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* work section */}

      <div id="protefolio">
        <section id="portfolio" className="px-10 py-20 bg-gray-50">
          <h2 className="text-3xl font-bold text-orange-500 mb-3">Portfolio</h2>
          <p className="text-gray-600 mb-10">
            Some of my recent design & development work.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-4 text-orange-500 font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-4 rounded-4 border-0">
              <h3 className="text-center mb-3 text-primary fw-bold">
                College Information
              </h3>

              <hr />

              <p>
                <strong>🏫 College Name:</strong> {rescult.collageName}
              </p>
              <p>
                <strong>🎓 Degree:</strong> {rescult.degree}
              </p>
              <p>
                <strong>📅 Year:</strong> {rescult.year}
              </p>
              <p>
                <strong>👤 Age:</strong> {rescult.age}
              </p>

              <div className="alert alert-info mt-3">
                <strong>Status:</strong> {rescult.status}
              </div>

              <div className="alert alert-success">
                <strong>Remarks:</strong> {rescult.remarks}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
