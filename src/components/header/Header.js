import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <h1>Real Estate</h1>
      </div>
      <ul>
        <Link to="/" className="nav-link" exact="true">
          Home
        </Link>
        <Link to="/" className="nav-link" exact="true">
          About Us
        </Link>
        <Link to="/" className="nav-link" exact="true">
          Login
        </Link>
        <Link to="/" className="nav-link register" exact="true">
          Register
        </Link>
      </ul>
      <i className="fas fa-bars" />
    </nav>
  );
};

export default Header;
