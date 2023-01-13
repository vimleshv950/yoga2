import React, { useState, useEffect } from "react";
import Layout from "../component/Layouts/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../style/contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); //eslint-disable-line
  const params = useParams();

  useEffect(() => {
    const getContact = async () => {
      const docRef = doc(db, "users", params.contactId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data());
      } else {
        toast.error("Unble to fetch data");
      }
    };
    getContact();
  }, [params.contactId]);

  return (
    <Layout>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
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
            {contact !== "" && (
              <form>
                <div className="f_flex">
                  <div className="input row">
                   {/* <h1> Person Name :</h1> */}
                    &nbsp;
                    <h1 style={{ color: "#470d21" }}>{contact?.name}</h1>
                    <br />
                  </div>
                </div>

                <div className="input">
                  <h4>YOUR MESSAGE </h4>
                  <br />
                  <textarea
                    cols="30"
                    rows="10"
                    value={message}
                    id="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <a
                  href={`mailto:${contact.email}?Subject=${searchParams.get(
                    "listingName"
                  )}&body=${message}`}
                >
                  <button className="btn_shadow">
                    SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                  </button>
                </a>
              </form>
                   )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
