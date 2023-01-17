import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModel = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="box btn_shadow gallery">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModel} />
        </div>
      </div>

      {/* ----popup modal */}

      {modal && (
        <div className="modal gallery">
          <div className="overlay" onClick={toggleModel}>
            <div className="modal-content d_flex">
              <div className="modal-img gallery_high_img">
                <img src={props.image} alt="" />
                <button
                  className="close-modal btn_shadow"
                  onClick={toggleModel}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
