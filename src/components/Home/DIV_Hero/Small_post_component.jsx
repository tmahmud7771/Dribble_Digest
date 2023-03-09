import React from "react";
import { Link } from "react-router-dom";

const Small_post_component = ({ blog }) => {
  return (
    <div className="post post-thumb">
      <div className="overlay_image">
        <div className="overlay_image_content">
          <Link className="post-img" to={`/PostDetails?blogId=${blog?._id}`}>
            <img src={blog?.thumbnail} alt="" />
          </Link>
        </div>
      </div>
      <Link className="post-img" to={`/PostDetails?blogId=${blog?._id}`}>
        <img src={blog?.thumbnail} alt="" />
      </Link>
      <div className="post-body">
        <div className="post-category">
          <Link to={`/`}>{blog?.category}</Link>
        </div>
        <h3 className="post-title">
          <Link to={`/`}>{blog?.title}</Link>
        </h3>
        <ul className="post-meta">
          <li>
            <Link to={`/`}>{blog?.author}</Link>
          </li>
          <li>{blog?.createdAt}</li>
        </ul>
      </div>
    </div>
  );
};

export default Small_post_component;
