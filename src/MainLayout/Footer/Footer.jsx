import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sol tərəf - Logo və təsvir */}
        <div className="footer-left">
          <h2 className="footer-logo">Lunara</h2>
          <p className="footer-text">
            Reinventing the way of creating websites, we aim to create the most
            master-peaced WordPress theme available on the market.
          </p>
        </div>

        {/* Orta tərəf - Əlaqə məlumatları */}
        <div className="footer-center">
          <h4 className="footer-title">CONTACT US</h4>
          <p>202 Helga Springs Rd, Crawford, TN 38554</p>
          <p>
            Call Us: <strong>800.275.8777</strong>
          </p>
          <p>alex@company.com</p>
        </div>

        {/* Sağ tərəf - Email abunə */}
        <div className="footer-right">
          <h4 className="footer-title">SIGN UP FOR EMAIL UPDATES</h4>
          <div className="footer-subscribe">
            <input
              type="email"
              placeholder="Your e-mail address"
              className="footer-input"
            />
            <button className="footer-btn">Subscribe</button>
          </div>
          <p className="footer-note">
            Sign up with your email address to receive news and updates
          </p>
        </div>
      </div>

      <div className="foot">
      <div>
 <p className="footer-copy">Copyright ©2025 Mysta. All rights reserved.</p>
 </div>
      {/* Navigasiya linkləri */}
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Team</a>
        <a href="#">Shop</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
