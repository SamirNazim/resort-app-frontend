import React from "react";
import { Image, Row, Container, Col } from "react-bootstrap";
const ListingPreview = (props) => {
  return (
    <div className="listing-preview-container">
      <Container>
        <Row>
          <Col xs={2}>
            <b>Name:</b> {props.title}
          </Col>
          <Col xs={4}>
            <b>Price per Night:</b> ${props.pricePerNight}
          </Col>
          <Col xs={6}>
            <b>Location:</b> {props.location}
          </Col>

          <Row>
            <Col>
              <b>Description:</b> {props.description}
            </Col>

            <Col>
              <Image roundedCircle={true} src={props.photoURL} alt="" />
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Type:</b> {props.type}
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default ListingPreview;
