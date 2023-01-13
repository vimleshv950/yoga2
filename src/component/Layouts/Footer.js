import React from "react";
import logo from "../../pic/logo.png";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "../../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left ">
        <p className="about">
          <span> About the company</span>Guruji Jamuna Prasad Mishra was born in Ragoli, Madhya Pradesh, and is descendant of an important Brahman family. His father, Sri Ram Ratan Mishra, was an honoured priest and prominent spiritual teacher. The family tradition goes way back in history for centuries, as this family were running the Gurukula...
        </p>
        <div className="icons button">
          <button className="btn_shadow" style={{marginRight:"20px"}}>
            <FiFacebook />
          </button>
          <button className="btn_shadow"  style={{marginRight:"20px"}}>
            <FiInstagram />
          </button>
          <button className="btn_shadow"  style={{marginRight:"20px"}}>
            <FiTwitter />
          </button>
        </div>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Street name and number</span> City, Country
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <Link to="/"> office@company.com</Link>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="menu">
          <Link to="/"> Home</Link> |<Link to="/"> About</Link> |
          <Link to="/"> Blog</Link> |<Link to="/"> Profile</Link>
        </p>
        <p className="name"> Onewonlabs &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
