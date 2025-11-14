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

        <nav className="menu">
          <ul>
            {/* Home Scroll */}
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={50}
                offset={-80}
                spy={true}
                onClick={toggleMenu} // Close menu on click
              >
                <FaHome /> <span>Home</span>
              </ScrollLink>
            </li>

            {/* Features (non-scroll) */}
            <li>
              <FaGift /> <span>Features</span>
            </li>

            {/* Portfolio Scroll */}
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

            {/* Resume Scroll */}
            <li>
              <ScrollLink
                to="resume"
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                onClick={toggleMenu}
              >
                <FaFileAlt /> <span>Resume</span>
              </ScrollLink>
            </li>

            {/* Clients (non-scroll) */}
            <li>
              <FaUsers /> <span>Clients</span>
            </li>

            {/* Contact Scroll */}
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
    </>
  );
};

export default Header;
