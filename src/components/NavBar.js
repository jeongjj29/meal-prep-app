import React from "react";
import { NavLink } from "react-router-dom/dist";

function NavBar() {
  return (
    <nav className="flex justify-center gap-4">
      <NavLink className="" to="/">
        Home
      </NavLink>
      <NavLink to="/new-meal">New Meal</NavLink>
    </nav>
  );
}

export default NavBar;
