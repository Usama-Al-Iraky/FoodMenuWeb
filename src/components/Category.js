import React from "react";
import { Col, Row } from "react-bootstrap";
import { LightSpeed } from "react-reveal";

const CategoryComp = ({ filterData, uniqueCate }) => {
  const btnAction = (type) => {
    filterData(type);
  };

  return (
    <Row className="w-100 m-auto">
      <Col sm="12" className="d-flex justify-content-center text-center mt-3 mb-5" >
        <LightSpeed>
        {
            uniqueCate.map((item) => {
                return (
                    <button className="category-btn px-2 py-0 mx-1" onClick={() => btnAction(item)} > {item} </button>
                );
            })
        }
        </LightSpeed>
      </Col>
    </Row>
  );
};

export default CategoryComp;
