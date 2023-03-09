import React from "react";
import { Link } from "react-router-dom";
import "./PostDetails.css";

const Heropart = ({ blog }) => {
  return (
    <div>
      <div id="post-header" class="page-header">
        <div
          class="page-header-bg"
          style={{
            backgroundImage: `url("${blog?.thumbnail}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          data-stellar-background-ratio="0.5"
        ></div>
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <div class="post-category">
                <Link to={`/`}>Lifestyle</Link>
              </div>
              <h1>{blog?.title}</h1>
              <ul class="post-meta">
                <li>
                  <Link to={`/`}>{blog?.author}</Link>
                </li>
                <li>{blog?.createdAt}</li>
                <li>
                  <i class="fa fa-eye"></i> 807
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropart;
