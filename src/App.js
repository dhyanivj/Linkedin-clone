import React from "react";
import "./styles.css";
import Header from "./header";
import Sidebar from "./sidebar";

export default function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* feed */}
        {/* widget */}
      </div>
    </div>
  );
}
