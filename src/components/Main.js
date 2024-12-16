import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import NoData from "./NoData";
const MainComp = ({ itemsData }) => {
  return (
    <Row className="w-100 m-auto">
      <Zoom >
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            
              <Col key={item.id} sm="12">
                <div
                  style={{ width: "18rem" }}
                  className="d-flex flex-sm-column flex-md-row w-100 card-comp mb-4"
                >
                  <img src={item.imgUrl} className="card-comp-img me-3" />
                  <Card.Body>
                    <Card.Title className="d-flex mt-4 mb-4 fs-5 fw-bold justify-content-between">
                      <div className="text-dark ps-3">{item.title}</div>
                      <div className="pe-3 text-danger"> {item.price} </div>
                    </Card.Title>
                    <Card.Text className="text-black-50 px-3 pb-2">
                      {item.describtion}
                    </Card.Text>
                  </Card.Body>
                </div>
              </Col>

          );
        })
      ) : (
        <NoData/>
      )}
      </Zoom>
    </Row>
  );
};

export default MainComp;
