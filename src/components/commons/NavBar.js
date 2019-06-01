/* eslint-disable */

import React from "react";
import { NavLink } from "react-router-dom";
import myFunction from "../../assets/js/main";
import mascot from "../../assets/svg/mascot.svg";

const Navbar = () => (
  <div className="topnav" id="myTopnav">
    <NavLink to="/" id="link" className="active">
      <img src={mascot} alt="mascot-logo" className="logo" />
    </NavLink>
    <NavLink to="/about" id="link" className="right-link">
      About
    </NavLink>
    <NavLink to="/search" id="link" className="right-link">
      <i className="fas fa-search" />
    </NavLink>
    <a
      href="javascript:void(0);"
      className="icon right-link"
      onClick={myFunction}
    >
      <i className="fa fa-bars" />
    </a>
  </div>
);

export default Navbar;
