import React from "react";
import movie from "../../assets/images/movie.svg";
import AppNavbarTabs from "./AppNavbarTabs";
import "./style.css";

const AppNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={movie} alt="main-img" />
      </div>

      <div className="navbar-tabs">
        <AppNavbarTabs />
      </div>
    </div>
  );
};

export default AppNavbar;
