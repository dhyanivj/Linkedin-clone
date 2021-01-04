import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <h1>This is header </h1>

      <div className="header-left">
        <img src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png" />
        <div className="Header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-right"></div>
    </div>
  );
}

export default Header;
