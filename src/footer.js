import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="col-1">
            <ul className="unstyled-list">
              <li>
                <strong>Get to know us</strong>
              </li>
              <li>Careers</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Tours</li>
            </ul>
          </div>
          <div className="col-1">
            <ul className="unstyled-list">
              <li>
                <strong>Make Money with Us</strong>
              </li>
              <li>Sell products on Amazon</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>›See More Make Money with Us</li>
            </ul>
          </div>
          <div className="col-1">
            <ul className="unstyled-list">
              <li>
                <strong>Amazon Payment Products</strong>
              </li>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="col-1">
            <ul className="unstyled-list">
              <li>
                <strong>Amazon and COVID-19</strong>
              </li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </div>
          {/* <div className="rights">Copyright 2021, All Rights Reserved</div> */}
        </div>
      </footer>
    </>
  );
}
export default Footer;
