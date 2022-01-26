/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { Link } from "react-scroll";
import link from 'next/link'
/* eslint-disable @next/next/no-img-element */

const NavbarArch = ({ navbarRef, theme }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes) {
          if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
          }
          if (item.childNodes[1]) {
            item.childNodes[1].classList.remove("show");
          } 
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <a className="logo" href="#">
          {theme ? (
            theme === "themeL" ? (
              <img src="/img/logo-dark.png" alt="logo" />
            ) : (
              <img src="/img/logo-light.png" alt="logo" />
            )
          ) : (
            <img src="/img/logo-light.png" alt="logo" />
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
              >
                Inicio
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/homepage/home1-dark">
                  Main Home
                </a>
                <a className="dropdown-item" href="/homepage/home2-dark">
                  Creative Agency
                </a>
                <a className="dropdown-item" href="/homepage/home5-dark">
                  Digital Agency
                </a>
                <a className="dropdown-item" href="/homepage/home4-dark">
                  Business One Page
                </a>
                <a className="dropdown-item" href="/homepage/home3-dark">
                  Corporate Business
                </a>
                <a className="dropdown-item" href="/homepage/home6-dark">
                  Modern Agency
                </a>
                <a className="dropdown-item" href="/homepage/home7-dark">
                  Freelancer
                </a>
                <a className="dropdown-item" href="/homepage/home8-dark">
                  Architecture
                </a>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="team-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials-archo"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="blog-archo"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-archo"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
