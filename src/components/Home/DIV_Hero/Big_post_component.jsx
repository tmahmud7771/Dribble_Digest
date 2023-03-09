import React from "react";
import { Link } from "react-router-dom";

const Big_post_component = ({ blog }) => {
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
      <div className="post-body text_index">
        <div className="post-category">
          <Link to={`/PostDetails?blogId=${blog?._id}`}>{blog?.category}</Link>
        </div>
        <h3 className="post-title title-lg">
          <Link to={`/PostDetails?blogId=${blog?._id}`}>{blog?.title}</Link>
        </h3>
        <ul className="post-meta">
          <li>
            <Link to={`/PostDetails?blogId=${blog?._id}`}>{blog?.author}</Link>
          </li>
          <li>{blog?.createdAt}</li>
        </ul>
      </div>
    </div>
  );
};

export default Big_post_component;
