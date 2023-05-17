import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <h3 class="footer__title">Follow Us</h3>

      <div class="footer__social">
        <Link to="" class="footer__social-link">
          <i class="bx bxl-facebook"></i>
        </Link>
        <Link to="" class="footer__social-link">
          <i class="bx bxl-instagram"></i>
        </Link>
        <Link to="" class="footer__social-link">
          <i class="bx bxl-tiktok"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
