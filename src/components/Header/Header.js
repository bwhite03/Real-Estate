import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul>
        <NavLink to="/" className="nav-link" exact="true">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" exact="true">
          About Us
        </NavLink>
        <NavLink to="/" className="nav-link" exact="true">
          Login
        </NavLink>
        <NavLink to="/" className="nav-link register" exact="true">
          Register
        </NavLink>
      </ul>
      <i class="fas fa-bars" />
    </nav>
  );
};

export default Header;
