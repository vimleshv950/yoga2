import React, { useState, useEffect } from "react";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useParams } from "react-router-dom";
import Spinner from "../component/Spinner";

import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Layout from "../component/Layouts/Layout";

// config
SwiperCore.use([EffectCoverflow, Pagination]);

const Listing = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  const toggleModel = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layout>
      {/* 000000000000000000000 */}
      <div className="modal">
        <div className="overlay" onClick={toggleModel}>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <div className="card-header">
                {listing.imgUrls === undefined ? (
                  <Spinner />
                ) : (
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={true}
                    className="mySwipe"
                  >
                    {listing.imgUrls.map((url, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={listing.imgUrls[index]}
                          height={400}
                          width={400}
                          alt={listing.name}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>
                {listing.name}
                <label>
                  {" "}
                  {/* &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  <span>Categriy</span> */}
                  &nbsp;
                  {listing.type === "yoga" ? "Yoga" : "Ayurved"}
                </label>
              </h1>
              <p>{listing.details}</p>

              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  <Link
                    className="btn btn-success"
                    to={`/contact/${listing.useRef}?listingName=${listing.name}`}
                  >
                    Contact <i className="fas fa-chevron-right"></i>
                  </Link>
                </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModel}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 000000000000000000000 */}
    </Layout>
  );
};

export default Listing;
