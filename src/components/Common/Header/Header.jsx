import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo_main from "../../../images/logo/Dribble-Digest.png";

const Header = ({ categories }) => {
  return (
    <header id="header">
      <div id="nav">
        <div id="nav-top">
          <div className="container">
            <div className="nav_top_bar">
              <div className="social_icon">
                <ul className="nav-social">
                  <li>
                    <Link to={`/`}>
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`}>
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`}>
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`}>
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <img src={logo_main} className="logo_size" />
              </div>

              <div className="">
                <div className="nav-btns">
                  <button className="aside-btn">
                    <i className="fa fa-bars"></i>
                  </button>
                  <button className="search-btn">
                    <i className="fa fa-search"></i>
                  </button>
                  <div id="nav-search">
                    <form>
                      <input
                        className="input"
                        name="search"
                        placeholder="Enter your search..."
                      />
                    </form>
                    <button className="nav-close search-close">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="nav-bottom">
          <div className="container">
            <ul className="nav-menu">
              <li className="">
                <Link to={`/`}>হোম</Link>
              </li>
              <li className="has-dropdown ">
                <Link to={`/category`}>ফুটবল লীগস</Link>
                <div className="dropdown">
                  <div className="dropdown-body">
                    <ul className="dropdown-list">
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
              </li>
              <li>
                <Link to={`/fixtures`}>ফিক্সচারস</Link>
              </li>
              <li>
                <Link to={`/allblogs`}>ব্লগস</Link>
              </li>
              <li>
                <Link to={`/videos`}>ভিডিও</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="nav-aside">
          <ul className="nav-aside-menu">
            <li>
              <Link to={`/`}>হোম</Link>
            </li>
            <li className="has-dropdown">
              <Link to={`/category`}>ক্যাটেগরীজ</Link>
              <ul className="dropdown">
                <li>
                  <Link to={`/`}>ক্যাটেগরীজ ১</Link>
                </li>
                <li>
                  <Link to={`/`}>ক্যাটেগরীজ ২</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`/about`}>এবাউট আস</Link>
            </li>
            <li>
              <Link to={`/contact`}>কন্টাক্টস</Link>
            </li>
            <li>
              <Link to={`/advertise`}>এডভারটাইয়স</Link>
            </li>
          </ul>
          <button className="nav-close nav-aside-close">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
