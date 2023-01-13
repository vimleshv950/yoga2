import Layout from "../component/Layouts/Layout";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import { FaEdit, FaArrowAltCircleRight } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import ListingItem from "../component/ListingItem";
import "../style/profile.css";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  //useeffect for getting data
  useEffect(() => {
    const fetchUserListings = async () => {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("useRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      // console.log(querySnap);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      console.log(listings);
      setListings(listings);
      setLoading(false);
    };
    fetchUserListings();
  }, [auth.currentUser.uid]);

  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    phone: auth.currentUser.phoneNumber,
  });
  const { name, email, phone } = formData;

  const logoutHandler = () => {
    auth.signOut();
    toast.success("Successfully Logout");
    navigate("/signin");
  };

  //onChange
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  //submit handler
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { name, phone });
        toast.success("User Updated!");
      }
    } catch (error) {
      console.log(error);
      toast("Something Went Wrong");
    }
  };

//delete handler
const onDelete = async (listingId) => {
  if (window.confirm("Are You Sure  want to delete ?")) {
    // await deleteDoc(doc, (db, "listings", listingId));
    await deleteDoc(doc(db, "listings", listingId));
    const updatedListings = listings.filter(
      (listing) => listing.id !== listingId
    );
    setListings(updatedListings);
    toast.success("Listing Deleted Successfully");
  }
};

  //edit handler
  const onEdit = (listingId) => {
    navigate(`/editlisting/${listingId}`);
  };

  return (
    <Layout>
      <section className="Contact profile" id="profile">
        <div className="container top">
          <div className="heading text-center">
            <h4>Profile</h4>
            <h1>Profile</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src="./image/profile.svg" alt="" />
                </div>
                {/* <div className="details">
                  <h1>Ranveer Vishwa</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eveniet, dignissimos harum.
                  </p>
                  <br />
                </div> */}
              </div>
            </div>

            <div className="right box_shodow">
              <form>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={onChange}
                      disabled={!changeDetails}
                    />
                  </div>
                  &nbsp;
                  &nbsp;
                  <div className="input row">
                    <span>EMAIL </span>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      onChange={onChange}
                      disabled={!changeDetails}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>PHONE </span>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={onChange}
                    disabled={!changeDetails}
                  />
                </div>
                <br />
                <span
                  className="btn-sec"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    changeDetails && onSubmit();
                    setChangeDetails((prevState) => !prevState);
                  }}
                >
                  Edit Details &nbsp;
                  {changeDetails ? (
                    <MdDoneOutline color="green" size={20} />
                  ) : (
                    <FaEdit color="black" size={20} />
                  )}
                </span>{" "}
                &nbsp; &nbsp; &nbsp;
                <button
                  onClick={logoutHandler}
                  className="btn_shadow btn-signin"
                >
                  <span className="btn-sec" style={{ cursor: "pointer" }}>
                    Logout
                  </span>
                </button>
              </form>
            </div>
          </div>
          <button className="btn_shadow btn-signin create_list">
            <Link to="/create-listing">
              <FaArrowAltCircleRight color="primary" /> &nbsp; Yoga or Ayurveda
              and Naturopathy
            </Link>
          </button>
        </div>

        <div className="container">
          <div className="heading text-center ">
            <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>

            {listings && listings?.length > 0 && (
              <div className="grid content">
                {listings.map((listing) => (
                  <ListingItem
                    className="profile-listing"
                    key={listing.id}
                    listing={listing.data}
                    id={listing.id}
                    onDelete={() => onDelete(listing.id)}
                    onEdit={() => onEdit(listing.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
