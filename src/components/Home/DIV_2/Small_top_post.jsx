import React from "react";
import Smallpostcomponents from "../../Common/Postcomponents/Smallpost/Smallpostcomponents";

const Small_top_post = ({ blogs }) => {
  return (
    <>
      <div className="row">
        {[0, 1, 2].map((item) => {
          return (
            <div className="col-md-4">
              <Smallpostcomponents blog={blogs[item]} />
              <Smallpostcomponents blog={blogs[item]} />
              <Smallpostcomponents blog={blogs[item]} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Small_top_post;
