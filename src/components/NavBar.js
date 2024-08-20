import React from "react";
import { NavLink } from "react-router-dom/dist";

function NavBar() {
  return (
    <nav className="flex justify-center gap-4">
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
