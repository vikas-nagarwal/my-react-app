import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../wordhistory/css/wordhistory.css";
import Api from "../Componets/Api.js";
import Product from "../Componets/Product.js";
import Logindata from "../Componets/Api/Logindata.js";
import DeleteUser from "../Componets/Api/Deleteapi.js";
import DelayApi from "../Componets/Api/Dealyapi.js";
import Unknown from "../Componets/Api/Unknown.js";
import Notfound from "../Componets/Api/Notfound.js";
// login design
function datascore() {
  let score = Number;
  if (score >= 90) {
    return "A grade";
  } else if (score >= 75) {
    return "B grade";
  } else if (score >= 50) {
    return "c grcaffde";
  } else {
    return "fail";
  }
}

console.log(datascore());

const user = { name: "Anmol", age: 25, country: "India" };
const { name, age } = user;
console.log(name, age); // 'Anmol'

let a = 40;
let b = 20;

// == (equal to)
console.log(10 == 20); // false
console.log(10 == "10"); // true

// === (equal value AND type)
console.log(10 === 10); // true
console.log(10 === "10"); // false

// != (not equal)
console.log(10 != 20); // true
console.log(10 != 10); // false

// !== (not equal OR type not equal)
console.log(10 !== 10); // false
console.log(10 !== "10"); // true
console.log(10 !== 20); // true

// > (greater than)
console.log(10 > 20); // false
console.log(20 > 10); // true

// < (less than)
console.log(10 < 20); // true
console.log(20 < 10); // false

// >= (greater than or equal to)
console.log(10 >= 10); // true
console.log(10 >= 20); // false

// <= (less than or equal to)
console.log(10 <= 10); // true
console.log(20 <= 10); // false
let y = 10;
y += 3;
console.log(y);
let number1 = 17;
let number2 = 573;
let remainder = number1 % number2;
console.log("Remainder:", remainder);

function vikas() {
  let a = 20;
  let b = 30;
  let add = a + b;
  let sub = a - b; // ✔ Difference added
  let mult = a * b;
  let div = a / b;
  return `Sum: ${add}, Difference: ${sub}, Product: ${mult}, Division: ${div}`;
}

console.log(vikas());

const schoolunifora = {
  rahul: 20,
  ajay: 25,
};
console.log(schoolunifora.rahul + schoolunifora.ajay);

const schoolfess = {
  rahul: 24,
  sohan: 25,

  check: function () {
    if (this.rahul < 23) {
      console.log("Rahul: true");
    } else {
      console.log("Rahul: false");
    }

    if (this.sohan < 23) {
      console.log("Sohan: true");
    } else {
      console.log("Sohan: false");
    }
  },
};

schoolfess.check();

// Remove duplicate values.
const numbecrs = [10, 20, 10, 30, 20, 40];
const uniqueNumbers = [...new Set(numbecrs)];
console.log(uniqueNumbers);

// Merge two arrays. (concat)
const numbdssfeddrs = ["vikas", "rohans", "sofhe", "dfe"];
const sss = [30, 10, 20, 5];
const childrsven = numbdssfeddrs.concat(sss);
console.log(childrsven);

// Merge two arrays. (concat)
const numbdeddrs = [30, 10, 20, 5];
const numbecddrs = [30, 10, 20, 5];
const children = numbdeddrs.concat(numbecddrs);
console.log(children);

// Sort number in ascending order.
const numbeddrs = [30, 10, 20, 5];
numbeddrs.sort((a, b) => a - b); // Ascending order
console.log(numbeddrs);

// Sort latter in ascending order.
const soetess = ["vikas", "ajay", "jacnu"];
soetess.sort();
console.log(soetess);

// Reverse the array. (reverse)
const reverss = ["vikas", "ajay", "janu"];
reverss.reverse();
console.log(reverss); // Output: ["janu", "ajay", "vikas"]

// Convert array to string. (join)
const nameeess = ["vikas", "ajay", "rahul"];
const namesString = nameeess.join(); // ya join(", ") agar comma ke saath chahiye
console.log(namesString);

// Check if a value exists in an array. (includes)
const namess = ["vikas", "ajay", "rahul"];
console.log(namess.includes("ajay")); // true
console.log(namess.includes("vikas")); // false
console.log(namess.includes("vcikas")); // false

const data = ["ajan", "mam", "dfdf"];
console.log(data);

// Remove the first element. (shift)
const first = ["vikas", "ajay", "rahul", "sanjay"];
first.shift();
console.log(first);

// Remove the last element. (pop)
const removes = ["vikas", "ajay", "rahul", "sanjay"];
removes.pop();
console.log(removes);

// Add a new element to the beginning. (unshift)
const unshiffted = ["vikas", "ajay", "rahul", "sanjay"];
unshiffted.unshift("rahul");
unshiffted.unshift("deepak");
console.log(unshiffted);

// Add a new element to the end of an array. (push)
const add = ["vikas", "ajay", "rahul", "sanjay"];
add.push("rahul");
console.log(add);
// Access the first and last element of an array.
const lengths = ["vikas", "ajay", "rahul", "sanjay"];
const f = lengths[0];
const last = lengths.at(-1);
console.log(f, last);

// Create an array of 5 numbers and print it.

let numbersarray = [10, 20, 30, 40, 50];
console.log(numbersarray);

// Find the length of an array.

const length = ["vikas", "ajay", "rahul", "sanjay"];
console.log(length.length);

// search array

const fruitdds = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitdds.includes("Mango")); // true
console.log(fruitdds);

const carsdara = () => {
  const car = ["honda", ["maruti", "suzuki"], "Volvo"];
  return car;
};
const carsss = carsdara();
carsss.splice(1, 2);
console.log(carsdara());

// Student numbers
let studentdata = [1, 2];
// Check even or odd
for (let i = 0; i < studentdata.length; i++) {
  if (studentdata[i] % 2 === 0) {
    console.log(studentdata[i] + " is even.");
  } else {
    console.log(studentdata[i] + " is odd.");
  }
}
// Students array
let students = [
  { name: "Amit", marks: 85 },
  { name: "Riya", marks: 72 },
  { name: "Rohan", marks: 58 },
  { name: "Sonu", marks: 95 },
  { name: "Vikas", marks: 45 },
];

// Print student grades
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let grade = "";

  if (student.marks >= 90 && student.marks <= 100) grade = "A+";
  else if (student.marks >= 75 && student.marks <= 89) grade = "A";
  else if (student.marks >= 60 && student.marks <= 74) grade = "B";
  else if (student.marks >= 50 && student.marks <= 59) grade = "C";
  else if (student.marks >= 0 && student.marks <= 49) grade = "F";

  console.log(student.name + " → " + grade);
}

// Numbers to check even/odd
let nuddms = [2, 7, 8, 13, 20, 21];
for (let i = 0; i < nuddms.length; i++) {
  console.log(nuddms[i]);
  if (nuddms[i] % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}

// Numbers to check size
let numbers = [5, 10, 15, 20, 25];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] < 10) {
    console.log("Small");
  } else if (numbers[i] === 10) {
    console.log("Equal");
  } else {
    console.log("Big");
  }
}

// Names specific messages
let names = ["Vikas", "Rahul", "Amit"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  if (names[i] === "Vikas") {
    console.log("Vikas ke sath ye kaam hoga!");
  } else if (names[i] === "Rahul") {
    console.log("Rahul ke sath ye kaam hoga!");
  } else if (names[i] === "Amit") {
    console.log("Amit ke sath ye kaam hoga!");
  } else {
    console.log("Unknown");
  }
}

// Fruits specific messages
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  if (fruits[i] === "Mango") {
    console.log("I love Mango");
  } else if (fruits[i] === "Banana") {
    console.log("I love Banana");
  } else if (fruits[i] === "Orange") {
    console.log("I love Orange");
  } else {
    console.log("Ye fruit special nahi hai");
  }
}

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
    status,
    remarks,
  };
};

// Call the function
const rescult = collageInformation();
console.log(rescult.status());
console.log(rescult.remarks());

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
  const [selectedUserId, setSelectedUserId] = useState(null);

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
      <div>
        <button onClick={handleClick}>Click Me</button>
        <p>{text}</p>
      </div>

      <div>
        <Unknown />
      </div>
      <Notfound />

      <DelayApi />
      <DeleteUser />
      <Logindata />
      <Product />
      <Api />
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

              <button
                onClick={() => setSelectedUserId(23)} // Invalid user → 404
                style={{ padding: "10px 20px", marginTop: "20px" }}
              >
                Show User
              </button>
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
                <p>Status: {rescult.status()}</p> // ✅ lowercase 's'
              </div>

              <div className="alert alert-success">
                <p>Remarks: {rescult.remarks()}</p> // ✅ lowercase
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
