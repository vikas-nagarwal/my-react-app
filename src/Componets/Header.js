import React, { useState } from "react";
import "../App.css";
import { Link as ScrollLink } from "react-scroll";
import {
  FaHome,
  FaGift,
  FaLayerGroup,
  FaFileAlt,
  FaUsers,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  let studentdata = {
    a: 5,
    b: 10,
    c: 15,
  };

  console.log(studentdata.c); // 15
  studentdata.c++;
  console.log(studentdata.c); // 16
  ++studentdata.c;
  console.log(studentdata.c); // 17
  studentdata.c--;
  console.log(studentdata.c); // 16

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="profile">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-img"
          />
        </div>
        {/* Scrollbar Container */}
        <div className="scroll-area">
          <nav className="menu">
            <ul>
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={50}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaHome /> <span>Introduction</span>
                </ScrollLink>
              </li>

              <li>
                <FaGift /> <span>Education</span>
              </li>
              <li>
                <FaGift /> <span>Education</span>
              </li>
              <li>
                <FaGift /> <span>Education</span>
              </li>

              <li>
                <ScrollLink
                  to="portfolio"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaLayerGroup /> <span>Portfolio</span>
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="resume"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaFileAlt /> <span>Skills</span>
                </ScrollLink>
              </li>

              <li>
                <FaUsers /> <span>Protfolio</span>
              </li>

              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={50}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaPhoneAlt /> <span>Contact</span>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
