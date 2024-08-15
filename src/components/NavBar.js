import React from "react";
import { NavLink } from "react-router-dom/dist";
import MealForm from "./MealForm";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new-meal">New Meal</NavLink>
    </nav>
  );
}

export default NavBar;
