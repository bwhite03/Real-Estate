import React from "react";

const Header = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul>
        <li>About Us</li>
        <li>Login</li>
        <li className="register">Register</li>
      </ul>
      <i class="fas fa-bars" />
    </nav>
  );
};

export default Header;
