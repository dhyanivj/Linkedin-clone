import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>Vijay Dhyani</h2>
        <h4>vijay@gmail.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>who viewed you</p>
          <p className="sidebar-statNumber">254</p>
        </div>
        <div className="sidebar-stat">
          <p>views on post </p>
          <p className="sidebar_statNumber">5000</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent </p>
      </div>
    </div>
  );
}

export default sidebar;
