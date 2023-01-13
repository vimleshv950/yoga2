import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import Layout from "../component/Layouts/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
      navigate("/signin");
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };
  

  return (
    <Layout>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>RESET YOUR PASSWORD</h4>
            {/* <h1>Contact With Me</h1> */}
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src="/image/contact.svg" alt="contact" />
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={onSubmitHandler}>
                <div className="input">
                  <span>ENTER YOUR EMAIL </span>
                  <input  type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                />
                </div>

                <button className="btn_shadow">
                  RESET YOUR PASSWORD <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
