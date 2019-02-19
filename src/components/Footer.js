import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <h1 className="footerLogo">Logo</h1>

      <div className="contact">
        <h1>Contact</h1>
        <a href="#">info@email.com</a>
        <a href="#">333-333-3333</a>
        <ul>
          <li>
            <a href="#">
              <i class="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-google-plus-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-tumblr-square" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
