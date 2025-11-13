import React from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaGift,
  FaLayerGroup,
  FaFileAlt,
  FaUsers,
  FaTag,
  FaBlog,
} from "react-icons/fa";

export const Header = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://via.placeholder.com/150" // 👉 yahan apni image ka link lagao
          alt="Profile"
          className="profile-img"
        />
      </div>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/Home">
              <FaBlog /> <span>Home</span>
            </Link>
          </li>

          <li>
            <FaGift /> <span>Features</span>
          </li>
          <li>
            <FaLayerGroup /> <span>Portfolio</span>
          </li>
          <li>
            <FaFileAlt /> <span>Resume</span>
          </li>
          <li>
            <FaUsers /> <span>Clients</span>
          </li>

          <li>
            <Link to="/Home">
              <FaBlog /> <span>Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
