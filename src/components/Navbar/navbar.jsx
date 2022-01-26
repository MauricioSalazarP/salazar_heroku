/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar = ({ lr, nr, theme }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
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
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src="/img/logo-dark.png" alt="logo" />
              ) : (
                <img ref={lr} src="/img/logo-light.png" alt="logo" />
              )
            ) : (
              <img ref={lr} src="/img/logo-light.png" alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
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
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                INICIO
              </span>
              <div className="dropdown-menu">
                <Link href="/homepage/home1-dark">
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href="/homepage/home2-dark">
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href="/homepage/home5-dark">
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href="/homepage/home4-dark">
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href="/homepage/home3-dark">
                  <a className="dropdown-item">Corporate Business</a>
                </Link>

                <Link href="/homepage/home6-dark">
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href="/homepage/home7-dark">
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href="/homepage/home8-dark">
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about/about-dark">
                <a className="nav-link">Nosotros</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portafolio
              </span>
              <div className="dropdown-menu">
                <Link href="/showcase/showcase-dark">
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href="/showcase4/showcase4-dark">
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href="/showcase3/showcase3-dark">
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href="/works/works-dark">
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href="/works2/works2-dark">
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href="/works3/works3-dark">
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Servicios
              </span>
              <div className="dropdown-menu">
                <Link href="/blog/blog-dark">
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href="/blog-list/blog-list-dark">
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href="/blog-grid/blog-grid-dark">
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href="/blog-details/blog-details-dark">
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
