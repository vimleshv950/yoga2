import React from "react";
import { Link } from "react-router-dom";
// import { FaBed, FaBath } from "react-icons/fa";
// import { GiTakeMyMoney } from "react-icons/gi";
// import '../style/blog.css'

const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="content">
            <div className="box btn_shadow">
              <Link to={`/category/${listing.type}/${id}`}>
                <div className="img">
                  <img
                    src={listing.imgUrls[0]}
                    alt={listing.name}
                    height={200}
                  />
                </div>

                <div className="category d_flex">
                  <span>{listing.name}</span>
                </div>

                <div className="title">
                  <h2>{listing.details}</h2>
                  <a href="popup" className="arrow">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </Link>

              <div className="button f_flex mtop">
                {onDelete && (
                  <button
                    className="btn_shadow"
                    onClick={() => onDelete(listing.id)}
                  >
                    DELETE
                  </button>
                )}
                {onEdit && (
                  <button
                    className="btn_shadow"
                    onClick={() => onEdit(listing.id)}
                  >
                    EDIT
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingItem;
