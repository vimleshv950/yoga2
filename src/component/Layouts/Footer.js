import React from "react";

import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
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
            
            <FiYoutube />
          </button>
        </div>
      </div> 
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>  EurostarINN Hotel</span> Khajuraho 471606 MP India
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> +91 9425143823</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <Link to="/"> jamunamishra@yahoo.com</Link>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="logo">
        <img src="/image/logo.png" alt="logo" />
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
