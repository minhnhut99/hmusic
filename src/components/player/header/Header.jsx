import React from "react";
import "./Header.scss";
import Logo from "../../../images/hMusic.png";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="pre-next-ctl">
        <span className="pre">
          <GrPrevious />
        </span>
        <span className="next">
          <GrNext />
        </span>
      </div>
    </div>
  );
};

export default Header;
