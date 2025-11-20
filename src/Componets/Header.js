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
  FaBriefcase,
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
          <img src="/Image/logo.png" className="profile-img" />
        </div>

        {/* Scrollbar Container */}
        <div className="scroll-area">
          <nav className="menu">
            <ul>
              <li className="menu-item">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={200}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaHome /> <span>Introduction</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skillsect"
                  smooth={true}
                  duration={200}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaGift /> <span>MY Skill</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="work"
                  smooth={true}
                  duration={200}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaBriefcase /> <span>Work</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="qualification"
                  smooth={true}
                  duration={200}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaGift /> <span>qualification</span>
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="protefolio"
                  smooth={true}
                  duration={200}
                  offset={-80}
                  spy={true}
                  onClick={toggleMenu}
                >
                  <FaLayerGroup /> <span>Portfolio</span>
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={200}
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
