import { faPray } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from 'react-scroll'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link smooth={true} to='' className="navbar-brand" href="#">
          <img src="./handi.png" className="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
    <span class="navbar-toggler-icon"></span>
</button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link offset={-100} smooth={true} to='home' className="nav-link" >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-80} smooth={true} to='about' className="nav-link" >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-80} smooth={true} to='services' className="nav-link" >
                Proficiencies
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-80} smooth={true} to='experience' className="nav-link" >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-80} smooth={true} to='portfolio' className="nav-link" >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-80} smooth={true} to='contact'  className="nav-link" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
