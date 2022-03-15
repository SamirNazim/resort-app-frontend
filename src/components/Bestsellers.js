// Import Swiper React components

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Container, Col } from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Bestsellers() {
  const [bestseller, setBestSeller] = useState([{}]);


  useEffect(() => {
    const URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/properties/bestsellers`;

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
          
        setBestSeller(json);
        
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className="property-type-container">
        <h1>Bestsellers</h1>
        <Row>
          {bestseller.data?.map((type) => (
            <Col>
              <Link style={{ textDecoration: "none" }} to={`listings/property/${type._id}`}>
                {" "}
                <Image roundedCircle={true} src={type.photoURL} alt="" />{" "}
                <h3>{type.title}</h3>
                <h4>${type.pricePerNight} <p>{type.location}</p></h4>
              </Link>{" "}
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Bestsellers;
