import React from "react";
import { NavLink } from "react-router-dom/dist";
import "../index.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink className="navBarLink" to="/">
        Home
      </NavLink>
      <NavLink className="navBarLink" to="/new-meal">
        Add New Meal
      </NavLink>
    </nav>
  );
}

export default NavBar;
