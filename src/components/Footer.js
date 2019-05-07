import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://aboutme.google.com/u/0/?referer=gplus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google" />
          </a>
        </li>
      </ul>
      <h1 className="footer-logo">Logo</h1>
      <ul className="contact">
        <li>
          <a href="https://www.google.com/gmail/about/#">
            <i className="far fa-envelope" /> Email
          </a>
        </li>
        <li>
          <a href="https://www.google.com/gmail/about/#">
            <i className="fas fa-phone-volume" /> 555-555-5555
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
