import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./output.css";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
