import React from "react";
import Recent_post_component from "./Recent_post_component";
import "./Div_1_main.css";
import Ads from "../../Common/Ads/Ads";
import Newsletter_component from "../../Common/Newsletter/Newsletter_component";
import Categories_component from "../../Common/Categories/Categories_component";

const Div_1_main = ({ blogs, categories }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Recent_post_component blogs={blogs} />
            </div>
            <div className="col-md-4">
              <Ads />
              <Newsletter_component />
              <Categories_component categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Div_1_main;
