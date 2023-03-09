import React from "react";
import { Link } from "react-router-dom";
import Randompostcomponents from "../../Common/Postcomponents/Randompost/Randompostcomponents";

const ALL_post = ({ blogs }) => {
  return (
    <div className="col-md-8">
      {blogs.map((item) => {
        return <Randompostcomponents blog={item} />;
      })}

      <div className="section-row loadmore text-center">
        <Link to={`/`} className="primary-button">
          Load More
        </Link>
      </div>
    </div>
  );
};

export default ALL_post;
