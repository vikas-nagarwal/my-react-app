import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

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

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="profile">
          <img src="Image/logo.png" alt="Profile" className="profile-img" />
        </div>

        {/* Scrollbar Container */}
        <div className="scroll-area">
          <nav className="menu">
            <ul>
              <li
                className="menu-item"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                  document
                    .querySelector("#about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaHome /> <span>Introduction</span>
              </li>

              <li>
                <ScrollLink
                  to="skillsect"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaGift /> <span>MY Skill</span>
                </ScrollLink>
              </li>

              {/* Work History */}
              <li>
                <FaGift /> <span>Work History</span>
              </li>

              {/* Qualification */}
              <li>
                <FaGift /> <span>Qualification</span>
              </li>

              {/* Correct Working Link */}
              <li>
                <Link
                  to={{
                    pathname: "/some/path",
                    search: "?query=string",
                    hash: "#hash",
                  }}
                >
                  <FaGift /> <span>Go To Page</span>
                </Link>
              </li>

              {/* Portfolio */}
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

              {/* Resume */}
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

              {/* Contact */}
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
