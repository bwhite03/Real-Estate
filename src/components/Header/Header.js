import React from "react";

const Header = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul>
        <li>About Us</li>
        <li>Agents</li>
        <li>Login</li>
        <li className="register">Register</li>
      </ul>
    </nav>
  );
};

export default Header;
