import React from "react";
import { Link } from "react-router-dom";
import "./Midpostcomponents.css";

const Midpostcomponents = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div className="post post-sm">
        <Link className="post-img" to={`/PostDetails?blogId=${blog?._id}`}>
          <img src={blog?.thumbnail} alt="" />
        </Link>
        <div className="post-body">
          <div className="post-category">
            <Link to={`/`}>{blog?.category}</Link>
          </div>
          <h3 className="post-title title-sm">
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
    </div>
  );
};

export default Midpostcomponents;
