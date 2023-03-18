import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { GrCart } from "react-icons/gr";

export default function Nav() {
  return (
    <div>
      <nav className="navBar">
        <NavLink className={"navBarInfo"} to="/">
          Home
        </NavLink>
        <GrCart id="cart" />
      </nav>
    </div>
  );
}
