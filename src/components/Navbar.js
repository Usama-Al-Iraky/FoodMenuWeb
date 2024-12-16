import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComp({searchData}) {

  const [searchValue, setSearchValue] = useState('')

  const searchAction = () => {
    searchData(searchValue)
    setSearchValue('')
  }

  return (
    <Row className="w-100 m-auto">
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="logo d-inline-block text-danger fw-bold fs-3">Rest</div>
            <div className="logo d-inline-block text-danger fw-bold fs-3">Aurant</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                className="me-2 search-input rounded-4 border-0 p-2 text-danger"
                aria-label="Search"
                onChange={(e)=> setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button className="btn-danger rounded-4" onClick={() => searchAction()} >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavbarComp;
