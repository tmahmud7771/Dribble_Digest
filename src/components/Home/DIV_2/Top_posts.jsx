import React from "react";
import Top_big_post_component from "../../Common/Postcomponents/TOP_BIG_POST/Top_big_post_component";

const Top_posts = ({ blogs }) => {
  return (
    <>
      <div className="row">
        {blogs.map((item) => {
          return <Top_big_post_component blog={item} />;
        })}
      </div>
    </>
  );
};

export default Top_posts;
