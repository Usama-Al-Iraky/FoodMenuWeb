import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "./Navbar";
import HeaderComp from "./Header";
import CategoryComp from "./Category";
import MainComp from "./Main";
import MainData from "./MainData";

const Home = () => {
  // Main State
  const [itemsData, setItemsData] = useState(MainData);

  // Geting unique category to use for category buttons and filtring
  const uniqueCate = ["all", ...new Set(MainData.map((item) => item.category))];

  // Filter Functhion for category buttons
  const filterData = (cat) => {
    if (cat === "all") {
      setItemsData(MainData);
    } else {
      const newData = MainData.filter((item) => item.category === cat);
      setItemsData(newData);
    }
  };
  // Filter Functhion for search
  const searchData = (searchWeord) => {
    if (searchWeord !== "") {
      const newData = MainData.filter((item) => item.title.toLowerCase().split('').includes(searchWeord) === true);
      setItemsData(newData);
    }
  };

  return (
    <div className="font body">
      <NavbarComp searchData = {searchData} />
      <Container>
        <HeaderComp />
        <CategoryComp filterData={filterData} uniqueCate={uniqueCate} />
        <MainComp itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default Home;
