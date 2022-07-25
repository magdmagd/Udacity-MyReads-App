/*****************************Imports****************************** */
import React from "react";
import { NavLink } from "react-router-dom";


/**********************Coding**************************** */
const NavigateToHome = () => {
  return (
    <NavLink to="/" className="close-search">
      Close
    </NavLink>
  );
};

export default NavigateToHome;
