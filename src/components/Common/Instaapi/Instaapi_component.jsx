import React from "react";
import { Link } from "react-router-dom";
import "./Instaapi.css";
import insta_photo from "../../../images/instalogo/insta_post.png";

const Instaapi_component = () => {
  return (
    <div className="aside-widget">
      <div className="section-title">
        <h2 className="title">Instagram</h2>
      </div>
      <div className="galery-widget">
        <ul>
          <li>
            <Link to={`/`}>
              <img src={insta_photo} className="insta_post_pading" alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <img src={insta_photo} className="insta_post_pading" alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <img src={insta_photo} className="insta_post_pading" alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <img src={insta_photo} className="insta_post_pading" alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <img src={insta_photo} className="insta_post_pading" alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <img src={insta_photo} className="insta_post_pading" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instaapi_component;
