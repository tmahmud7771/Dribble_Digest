import React from "react";
import { Link } from "react-router-dom";
import "./Bigpostcomponents.css";

const Bigpostcomponents = ({ blog }) => {
  return (
    <div className="col-md-6">
      <div className="post">
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
    </div>
  );
};

export default Bigpostcomponents;
