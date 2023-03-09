import React from "react";
import { Link } from "react-router-dom";
import "./Popular_post.css";

const Popular_post_component = () => {
  return (
    <div className="aside-widget">
      <div className="section-title">
        <h2 className="title">Popular Posts</h2>
      </div>

      <div className="post post-widget">
        <Link className="post-img" href="blog-post.html">
          <img src="./img/widget-3.jpg" alt="" />
        </Link>
        <div className="post-body">
          <div className="post-category">
            <Link to={`/`}>Lifestyle</Link>
          </div>
          <h3 className="post-title">
            <Link to={`/`}>
              Ne bonorum praesent cum, labitur persequeris definitionem quo cu?
            </Link>
          </h3>
        </div>
      </div>

      <div className="post post-widget">
        <Link className="post-img" href="blog-post.html">
          <img src="./img/widget-2.jpg" alt="" />
        </Link>
        <div className="post-body">
          <div className="post-category">
            <Link to={`/`}>Technology</Link>
            <Link to={`/`}>Lifestyle</Link>
          </div>
          <h3 className="post-title">
            <Link to={`/`}>
              Mel ut impetus suscipit tincidunt. Cum id ullum laboramus
              persequeris.
            </Link>
          </h3>
        </div>
      </div>

      <div className="post post-widget">
        <Link className="post-img" href="blog-post.html">
          <img src="./img/widget-4.jpg" alt="" />
        </Link>
        <div className="post-body">
          <div className="post-category">
            <Link to={`/`}>Health</Link>
          </div>
          <h3 className="post-title">
            <Link to={`/`}>
              Postea senserit id eos, vivendo periculis ei qui
            </Link>
          </h3>
        </div>
      </div>

      <div className="post post-widget">
        <Link className="post-img" href="blog-post.html">
          <img src="./img/widget-5.jpg" alt="" />
        </Link>
        <div className="post-body">
          <div className="post-category">
            <Link to={`/`}>Health</Link>
            <Link to={`/`}>Lifestyle</Link>
          </div>
          <h3 className="post-title">
            <Link to={`/`}>
              Sed ut perspiciatis, unde omnis iste natus error sit
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Popular_post_component;
