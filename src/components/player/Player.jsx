import React from "react";
import "./Player.scss";
import Sidebar from "./sidebar/Sidebar";
import HomePage from "./homePage/HomePage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
const Player = () => {
  return (
    <div className="player-container">
      <Header />
      <Sidebar />
      <HomePage className="homepage" />
      <Footer />
    </div>
  );
};

export default Player;
