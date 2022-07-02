import React from "react";
import "./HomePage.scss";
import Content from "./content/Content";
import Header from "./header/Header";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <Content />
    </div>
  );
};

export default HomePage;
