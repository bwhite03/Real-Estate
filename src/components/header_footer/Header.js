import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul>
        <Link to="/" className="nav-link" exact="true">
          Home
        </Link>
        <Link to="/about" className="nav-link" exact="true">
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
