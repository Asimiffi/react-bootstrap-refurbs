import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from '../images/logo192.png'

const navbar = ({ isVisible }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-extended navbar-light">
        <div className="container-fluid">
          <img src={Logo} alt="" style={{width:'10%'}} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul
              className={
                isVisible ? "scroll" : "navbar-nav m-auto mb-lg-0"
              }
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/#services"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#why-us"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#book-us"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  Book Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
