import React from "react";
import "./Sidebar.scss";
import Menu from "./menu/Menu";
import Logo from "../../../images/hMusic.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Menu />
    </div>
  );
};

export default Sidebar;
