import React from "react";
import "./Div_2_main.css";
import Small_top_post from "./Small_top_post";
import Top_posts from "./Top_posts";

const Div_2_main = ({ blogs }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <Top_posts blogs={blogs.slice(0, 3)} />
          <Small_top_post blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default Div_2_main;
