import React from "react";
import Layout from "../component/Layouts/Layout";
import "../style/hero.css";
import { Typewriter } from "react-simple-typewriter";
import Portfolio_data from "../pages/blog/Blog_data";
import Card from "../pages/blog/Card";
import { useNavigate } from "react-router-dom";
import Resume from "../pages/resume/Resume";
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'

const Home = () => {


  const img1 =
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const img2 =
    "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80";

    const navigate = useNavigate();

  return (
    <Layout>
      <>
        {/* hero section start */}
        <section className="hero" id="home">
          <div className="container f_flex top">
          <div className="left top hero_left">
            <h3>WELCOME TO YOGA CLASSES</h3>
            <h1>
              Hi, I'm <span>Jamuna Mishra</span>
            </h1>
            <p>
              Adhyatma-Yoga is neither a new branch of Yoga nor a special school
              of it, but the name of associations established to practice and
              spread the path of yoga of Jamuna Mishra in
              <span>
                <Typewriter
                  words={[" Europe", " India"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>

            <div className="hero_btn d_flex hero_icons">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <FiFacebook />
                  </button>
                  <button className="btn_shadow">
                    <FiInstagram />
                  </button>
                  <button className="btn_shadow">
                    <FiTwitter />
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src="/image/yoga1.png" alt="" />
                </button>
                <button className="btn_shadow">
                  <img src="/image/yoga2.png" alt="" />
                </button>
                <button className="btn_shadow">
                  <img src="/image/yoga3.png" alt="" />
                </button>
              </div>
            </div>
          </div>
            <div className="right">
              <div className="right_img">
              <img src="/image/hero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* hero section end */}

        {/* ----------------------start */}
        <section className="Contact" id="contact">
          <div className="container top">
            <div className="heading text-center">
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <h1>Category</h1>
            </div>

            <div className="content d_flex">
              <div className="">
                <div className="imageContainer">
                  <img
                    src={img1}
                    alt="yoga"
                    style={{ width: "100%" }}
                  />
                  <button className="btn"onClick={() => navigate("/category/yoga")}>Yoga</button>
                </div>
              </div>

              <div className="">
                <div className="imageContainer">
                  <img
                    src={img1}
                    alt="ayurveda"
                    style={{ width: "100%" }}
                  />
                  <button className="btn" onClick={() => navigate("/category/ayurveda")}>Ayurveda</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ----------------------end */}

        {/* Resume section start */}

      <Resume/>
        {/* Resume section end */}
      </>
    </Layout>
  );
};

export default Home;
