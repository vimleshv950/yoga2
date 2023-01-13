import logo from "../../pic/logo.png";
import "../../style/header.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // when scroll header at top
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  // toggle menu
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navlink">
            {/* <ul className="link f_flex uppercase"> */}

            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/feature">feature</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog">blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about">about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile">profile</NavLink>
              </li>

              <li>
              <NavLink to="/signin">
                <button className="home-btn">SIGN IN</button>
                </NavLink>
              </li>
              <li>
              <NavLink to="/signup">
                <button className="home-btn">SIGN UP</button>
                </NavLink>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
