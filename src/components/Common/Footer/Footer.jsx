import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo_main from "../../../images/logo/Dribble-Digest.png";

const Footer = ({ categories }) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-widget">
              <div className="footer-logo image_align">
                <Link to={`/`} className="logo">
                  <img src={logo_main} className="size_logo" alt="" />
                </Link>
              </div>
              <p>
                আমার স্পোর্টস ব্লগ সাইট সম্পর্কে 100 লাইনের বিষয়বস্তু: আমি
                বিশ্বাস করি যে আমার স্পোর্টস ব্লগ সাইটটি আপনাদের সামগ্রিক আশ্রয়
              </p>
              <ul className="contact-social">
                <li>
                  <Link to={`/`} className="social-facebook">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="social-twitter">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="social-google-plus">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="social-instagram">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Categories</h3>
              <div className="category-widget">
                <ul>
                  {categories?.map((item) => {
                    return (
                      <li>
                        <Link to={`/`}>{item?.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Tags</h3>
              <div className="tags-widget">
                <ul>
                  <li>
                    <Link to={`/`}>Social</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Newsletter</h3>
              <div className="newsletter-widget">
                <form>
                  <p>
                    Nec feugiat nisl pretium fusce id velit ut tortor pretium.
                  </p>
                  <input
                    className="input"
                    name="newsletter"
                    placeholder="Enter Your Email"
                  />
                  <button className="primary-button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom row">
          <div className="col-md-6 col-md-push-6">
            <ul className="footer-nav">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/`}>About Us</Link>
              </li>
              <li>
                <Link to={`/`}>Contacts</Link>
              </li>
              <li>
                <Link to={`/`}>Advertise</Link>
              </li>
              <li>
                <Link to={`/`}>Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-md-pull-6">
            <div className="footer-copyright">
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | by <Link to={`/`}></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
