import React from "react";
import Comming_soon from "../Common/Comming_soon/Comming_soon";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Bigpostcomponents from "../Common/Postcomponents/Bigpost/Bigpostcomponents";
import Aside_part from "./Aside_part";
import "./Category.css";
import Category_hero from "./Category_hero";

const Category = () => {
  return (
    <>
      {/* <Header />
      <Category_hero />
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <Bigpostcomponents />
              <Bigpostcomponents />
              <Bigpostcomponents />
              <Bigpostcomponents />
              <Bigpostcomponents />
              <Bigpostcomponents />
              <Bigpostcomponents />
              <Bigpostcomponents />
            </div>
            <div class="col-md-4">
              <Aside_part />
            </div>
          </div>
        </div>
      </div>
      <Footer /> */}
      <Comming_soon />
    </>
  );
};

export default Category;
