// Import Swiper React components

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Row, Container, Col } from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PropertyType() {
  const [propertyType, setPropertyType] = useState([]);

  const imagePick = (title) => {
    switch (title.toLowerCase()) {
      case "resort":
        return "https://www.planetware.com/wpimages/2021/07/maldives-best-all-inclusive-resorts-hurawalhi-island-resort-villa.jpg";
      case "apartment":
        return "https://www.torontorentals.com/blog/wp-content/uploads/66isabella-1024x691.jpg";
      case "hotel":
        return "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg";
      case "condo":
        return "https://i0.wp.com/theroyalparis.ca/wp-content/uploads/2020/11/The-Royal-Paris-Background.jpg?fit=1920%2C1159&ssl=1";
      default:
        return "https://vitalizemagazine.com/wp-content/uploads/2019/05/shutterstock_521163331-1.jpg";
    }
  };
  useEffect(() => {
    const URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/properties/type`;

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setPropertyType(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className="property-type-container">
        <h1>Property Types</h1>
        <Row>
          {propertyType.data?.map((type) => (
            <Col>
              <Link style={{ textDecoration: "none" }} to={`listings/${type}`}>
                {" "}
                <Image roundedCircle={true} src={imagePick(type)} alt="" />{" "}
                <h3>{type}</h3>
              </Link>{" "}
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default PropertyType;
