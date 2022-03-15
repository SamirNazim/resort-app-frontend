import React from "react";
import { Image, Row, Container, Col } from "react-bootstrap";
const ListingFull = (props) => {
  return (
 

<div className="listing-preview-container">
<Container>
  <Row>
    <Col xs={2}>
      <b>Name:</b> {props.property.data?.title}
    </Col>
    <Col xs={4}>
      <b>Price per Night:</b> ${props.property.data?.pricePerNight}
    </Col>
    <Col xs={6}>
      <b>Location:</b> {props.property.data?.location}
    </Col>

    <Row>
      <Col>
        <b>Description:</b> {props.property.data?.description}
      </Col>

      <Col>
        <Image roundedCircle={true} src={props.property.data?.photoURL} alt="" />
      </Col>
    </Row>
    <Row>
      <Col>
        <b>Type:</b> {props.property.data?.type}
      </Col>
    </Row>
  </Row>
</Container>
</div>
  );
};

export default ListingFull;
