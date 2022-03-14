import React from "react";
import FilterByType from "../components/FilterByType";
import AllListings from "../components/AllListings";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../css/App.css";
const ListingPage = () => {
  const { params } = useParams();
  const [properties, setProperties] = useState([
    {
      _id: "",
      title: "",
      pricePerNight: 0,
      type: "",
      rules: "",
      amenities: [],
      location: "",
      photoURL: "",
      bestseller: "",
    },
  ]);

  useEffect(() => {
    var URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/properties/`;

    if (params !== undefined) {
      URL += `type/${params}`;
    }

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setProperties(json);
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <>
      <Header />
      <FilterByType onFilter={params} />
      <AllListings properties={properties} />
      <Footer />
    </>
  );
};

export default ListingPage;
