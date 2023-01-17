import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../component/Layouts/Layout";
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'
import "../style/signup.css";
import {doc, setDoc, serverTimestamp} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import OAuth from "../component/OAuth";




const auth = getAuth();

const Signup = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });
      const formDataCopy ={...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp=serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      toast.success('signup Successfully')
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
    }
  };

  return (
    <Layout>
      <section className="Contact signup" id="contact">
        <div className="container top">
        <div className="heading text-center">
            <h4>SIGNUP</h4>
            <h1>SIGN-UP</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <div className="details">
                  {/* <h1>Ranveer Vishwa</h1> */}
                  <p>
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet, dignissimos harum. */}
                  </p>
                  <br />
                  <h4>Sign-up with</h4>

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

            <div className="right box_shodow">
              <form onSubmit={onSubmitHandler}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      value={name}
                      id="name"
                      onChange={onChange}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="phone"
                      value={phone}
                      onChange={onChange}
                      id="phone"
                    />
                  </div>
                </div>
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
                <button className="btn_shadow">
                  SIGN UP <i className="fa fa-long-arrow-right"></i>
                </button>
                <span className="ms-4">Already User ?</span> &nbsp;
                <Link to="/signin">Login Here</Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
