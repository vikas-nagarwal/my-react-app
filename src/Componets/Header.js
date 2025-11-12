import React from "react";
import "../Header.css";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
      <div className="inner-wrapper">
        <div className="logo-area">
          <a href="index.html">
            <img
              src="assets/images/logo/banner-user-image-04.png"
              alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
            />
          </a>
        </div>

        <nav id="sideNavs" className="mainmenu-nav navbar-example2 onepagenav">
          <ul className="primary-menu nav nav-pills">
            <li className="nav-item current">
              <a className="nav-link smoth-animation" href="#home">
                <i data-feather="home"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link smoth-animation" href="#features">
                <i data-feather="briefcase"></i> Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link smoth-animation" href="#portfolio">
                <i data-feather="layers"></i> Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link smoth-animation" href="#resume">
                <i data-feather="users"></i> Resume
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link smoth-animation" href="#clients">
                <i data-feather="user"></i> Clients
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link smoth-animation" href="#pricing">
                <i data-feather="shopping-cart"></i> Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link smoth-animation" href="#blog">
                <i data-feather="image"></i> Blog
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link smoth-animation" href="#contacts">
                <i data-feather="message-circle"></i> Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <div className="social-share-style-1">
            <span className="title">Find With Me</span>
            <div className="social-link">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
