import React, { useEffect, useState } from "react";
import Layout from "../component/Layouts/Layout";
import Spinner from "../component/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import ListingItem from "../component/ListingItem";

const Category = () => {
  const [listing, setListing] = useState("");
  const [lastFetchListing, setLastFetchListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  //fetch listing
  useEffect(() => {
    const fetchListing = async () => {
      try {
        //refrence
        const listingsRef = collection(db, "listings");
        //query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(2)
        );
        //execute query
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListing(listings);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Unble to fetch data");
      }
    };
    //func call
    fetchListing();
  }, [params.categoryName]);

  //loadmore pagination func
  const fetchLoadMoreListing = async () => {
    try {
      //refrence
      const listingsRef = collection(db, "listings");
      //query
      const q = query(
        listingsRef,
        where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(10)
      );
      //execute query
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListing((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Unble to fetch data");
    }
  };

  return (
    <Layout>
      <div className="mt-3 container-fluid">
      <div className="heading text-center">
            <h4>{params.categoryName === "yoga" ? "Yoga is a mirror to look at ourselves from within" : "The great thing about Ayurveda is that its treatments always yield side benefits, not side effects."}</h4>
            
            <h1>{params.categoryName === "yoga" ? "Yoga" : "Ayurveda"}</h1>
          </div>
       
        {loading ? (
          <Spinner />
        ) : listing && listing.length > 0 ? (
          <>
            <div className="grid">
              {listing.map((list) => (
                <ListingItem listing={list.data} id={list.id} key={list.id} />
              ))}
            </div>
          </>
        ) : (
          <p>No Listing For {params.categoryName} </p>
        )}
      </div>

      <div className="d-flex align-items-center justify-content-center mb-4 mt-4">
        {lastFetchListing && (
          <button
            className="btn btn-primary text-center"
            onClick={fetchLoadMoreListing}
          >
            load more
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Category;
