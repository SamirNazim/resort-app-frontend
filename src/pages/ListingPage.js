import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListingFull from "../components/ListingFull";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      description: "",
      location: "",
      photoURL: "",
      bestseller: "",
    },
  ]);

  useEffect(() => {
    var URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/properties/id/${params}`;

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
      <ListingFull property={properties} />
      <Footer />
    </>
  );
};

export default ListingPage;
