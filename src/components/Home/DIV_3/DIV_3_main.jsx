import React from "react";
import ALL_post from "./ALL_post";
import Aside_div_3 from "./Aside_div_3";
import "./DIV_3_main.css";

const DIV_3_main = ({ blogs }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <ALL_post blogs={blogs} />
            <Aside_div_3 />
          </div>
        </div>
      </div>
    </>
  );
};

export default DIV_3_main;
