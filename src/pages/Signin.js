import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../component/Layouts/Layout";
import "../style/signin.css";
import { BsFillEyeFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'
import OAuth from "../component/OAuth";

const Signin = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const { name, email, password, phone } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("login Success");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("invalid email password");
    }
  };

  return (
    <Layout>
      <section className="Contact signup" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>SIGNIN</h4>
            <h1>SIGN-IN</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                {/* <div className="img">
                  <img src="" alt="" />
                </div> */}
                <div className="details signin">
                  {/* <h1>RAnveer Vishwa</h1> */}
                  <p>
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet, dignissimos harum. */}
                  </p>
                  <br />
                  <h4>Sign-in with</h4>

                  <div className="button f_flex">
                    <button className="btn_shadow">
                     <FiFacebook />
                    </button>
                    <button className="btn_shadow">
                       <FiInstagram />
                    </button>
                    
                    <OAuth/>
                  </div>
                </div>
              </div>
            </div>

            <div className="right signin-form box_shodow">
              <form className="signin-form" onSubmit={loginHandler}>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    value={email}
                    onChange={onChange}
                    id="email"
                  />
                </div>
                <div className="input">
                  <span>PASSWORD </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={onChange}
                    id="password"
                  />
                </div>
                <div className="show-pass-forgot">
                  <span>
                    <BsFillEyeFill
                      className="eye"
                      size={18}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowPassword((prevState) => !prevState);
                      }}
                    />
                    &nbsp; show password
                  </span>
                  &nbsp; | &nbsp;{" "}
                  <Link to="/forgotpassword" className="link">
                    forgot Password
                  </Link>
                </div>

                <button type="submit" className="btn_shadow btn-signin">
                  SIGN IN <i className="fa fa-long-arrow-right"></i>
                </button>
              

                <div className="">
                  <span>New User</span>? &nbsp;{" "}
                  <Link to="/signup" className="">
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signin;
