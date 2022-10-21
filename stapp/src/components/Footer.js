import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>My World</h4>
            <div className="list-unstyled">
              <li>342-420-6969</li>
              <li>Chandigarh, India</li>
              <li>123 Sector-17</li>
            </div>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Quick Links</h4>
            <ui className="list-unstyled">
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/About">About Us</Link></li>
              <li> <Link to="/Contact">Contact</Link></li>
              <li> <Link to="/Login">Login</Link></li>
              <li> <Link to="/Signup">Signup</Link></li>
              <li> <Link to="/StudentDetails">Details</Link></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            {/* <h4>WELL ANOTHER COLUMN</h4> */}
            <ui className="list-unstyled">
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Cookie Settings</li>
              <li>Sitemap</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MY WORLD | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;