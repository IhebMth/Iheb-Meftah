import React, { useEffect, useState, ChangeEventHandler } from "react";
import "../css/NavBar.css";

import DarkMode  from '../components/DarkMode';
import StyleSwitcher from "../components/StyleSwitcher";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Change the Navbar on scroll and hover
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // add backGround to active Link
  const handleNavItemClick = (link) => {
    setActiveLink(link);
  };



  return (
    <>
      <nav
        className={`navbar ${
          isScrolled
            ? "scrolled navbar navbar-expand-lg "
            : "navbar navbar-expand-lg "
        }
      ${isScrolled && !isHovered ? "hide" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container-fluid">
          <div className="logo me-5">
            <a href="http://localhost:3000/">
              <h1 className="">Iheb</h1>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mx-4 mb-2 mb-lg-0">
              <li
                className={`nav-item ${activeLink === "home" ? "active" : ""}`}
              >
                <a
                  className="nav-link"
                  href="#home"
                  onClick={() => handleNavItemClick("home")}
                >
                  Home
                </a>
              </li>

              <li
                className={`nav-item ${activeLink === "about" ? "active" : ""}`}
              >
                <a
                  className="nav-link"
                  href="#about"
                  onClick={() => handleNavItemClick("about")}
                >
                  About
                </a>
              </li>

              <li
                className={`nav-item ${
                  activeLink === "resume" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#resume"
                  onClick={() => handleNavItemClick("resume")}
                >
                  Resume
                </a>
              </li>

              <li
                className={`nav-item ${
                  activeLink === "contact" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={() => handleNavItemClick("contact")}
                >
                  Contact
                </a>
              </li>

              <DarkMode />

            </ul>

          </div>

        </div>
      </nav>
      <StyleSwitcher />

    </>
  );
};

export default NavBar;
