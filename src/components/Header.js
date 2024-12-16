import React from "react";
import { Col, Row } from "react-bootstrap";

const HeaderComp = () => {
  return (
    <Row className="w-100 m-auto" >
      <Col sm="12" className="justify-content-center text-center">
        <div className="mt-4 mb-2 fs-4 m-auto pb-2 fw-bold header-title" >Food Menu</div>
      </Col>
    </Row>
  );
};

export default HeaderComp;
