import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="footer-icons">
        <li>
          <a href="#">
            <i class="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-google" />
          </a>
        </li>
      </ul>
      <h1 className="footer-logo">Logo</h1>
      <ul className="contact">
        <li>
          <a href="#">
            <i class="far fa-envelope" /> Email
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-phone-volume" /> 555-555-5555
          </a>
        </li>
      </ul>
      <p>
        Branch Out Realty Somerville Ave,
        <br />
        Somerville, MA 02143
      </p>
    </footer>
  );
};

export default Footer;
