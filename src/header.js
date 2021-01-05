import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./header.css";
import HeaderOption from "./headerOption";

function Header() {
  return (
    <div className="Header">
      <div className="header-left">
        <img src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png" />
        <div className="Header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notification" />
        <HeaderOption
          avatar="https://avatars2.githubusercontent.com/u/60819264?s=460&u=1de0a5494437b8d07c44da0c08f70a652e400e2b&v=4"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
