import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHearts } from "react-icons/gi";
import { ImLibrary } from "react-icons/im";
import { AiFillFolderAdd } from "react-icons/ai";
import "./Menu.scss";
const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu-home">
        <span className="icon">
          <FaHome />
        </span>
        <span className="menu-home-text">Home</span>
      </li>
      <li className="menu-search">
        <span className="icon">
          <FaSearch />
        </span>
        <span className="menu-home-text">Search</span>
      </li>
      <li className="menu-lib">
        <span className="icon">
          <ImLibrary />
        </span>
        <span className="menu-home-text">Youre Library</span>
      </li>
      <li className="menu-playlist">
        <span className="icon">
          <AiFillFolderAdd />
        </span>
        <span className="menu-home-text">Create Playlist</span>
      </li>
      <li className="menu-like">
        <span className="icon">
          <GiHearts />
        </span>
        <span className="menu-home-text">Liked Songs</span>
      </li>
    </ul>
  );
};

export default Menu;
