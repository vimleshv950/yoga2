import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
// import "../../App.css";
import { useNavigate } from "react-router-dom";
import Layout from "../component/Layouts/Layout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "../component/Spinner";
// import { AiOutlineFileAdd } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "../style/createlisting.css";

const CreateListing = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    type: "yoga",
    name: "",
    details: "",
    images: {},
  });

  const { name, details, type, images } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        setFormData({
          ...formData,
          useRef: user.uid,
        });
      });
    } else {
      navigate("/signin");
    }

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  //mutate func
  const onChangeHandler = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    //files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    //text/booleans/number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  //form submit
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (images > 2) {
      setLoading(false);
      toast.error("Max 2 Images can be selected");
      return;
    }

    //store images to firebase storage
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("uplloas is" + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("upload is paused");
                break;
              case "running":
                console.log("upload is runnning");
            }
          },
          (error) => {
            reject(error);
          },
          //success
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };
    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });
    console.log(imgUrls);

    //save form data
    const formDataCopy = {
      ...formData,
      imgUrls,

      timestamp: serverTimestamp(),
    };

    delete formDataCopy.images;

    const docRef = await addDoc(collection(db, "listings"), formDataCopy);
    toast.success("Listing Created!");
    setLoading(false);
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  };

  return (
    <Layout>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>Create</h4>
            <h1>Create your list</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src="/image/contact.svg" alt="contact" />
                </div>
              </div>
            </div>
            {/* 222222 */}
            {/* <div class="button">
              <input type="radio" id="a25" name="check-substitution-2" />
              <label class="btn btn-default" for="a25">
                Læg i kurv
              </label>
            </div>
            <div class="button">
              <input type="radio" id="a50" name="check-substitution-2" />
              <label class="btn btn-default" for="a50">
                Læg i kurv
              </label>
            </div> */}

            {/* 222222 */}
            <div className="right box_shodow">
              <form onSubmit={onSubmit}>
                {/* yoga ayurveda button */}
                <div className="create-listing-form flex-row ">
                  <div className="wrapper">
                    <div className="wrapper_btn text-center">
                      <input
                        type="radio"
                        name="type"
                        onChange={onChangeHandler}
                        id="yoga"
                        value="yoga"
                        defaultChecked
                      />
                      <label htmlFor="yoga" className="option yoga">
                        Yoga
                      </label>
                    </div>
                    <div className="wrapper_btn text-center">
                      <input
                        type="radio"
                        name="type"
                        value="ayurveda"
                        onChange={onChangeHandler}
                        id="ayurveda"
                      />
                      <label htmlFor="ayurveda" className="option ayurveda">
                        Ayurveda
                      </label>
                    </div>
                  </div>
                </div>

             <br />
             <br />
             
                <div className="input">
                  <span>NAME </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="input">
                  <span>DETAILS</span>
                  <textarea
                    className="form-control"
                    id="details"
                    value={details}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="input">
                  <span>SELECT IMAGE : </span>
                  <input
                    type="file"
                    className="form-control"
                    id="images"
                    name="images"
                    onChange={onChangeHandler}
                    max="2"
                    accept=".jpg,.png,.jpeg"
                    multiple
                    required
                  />
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateListing;
