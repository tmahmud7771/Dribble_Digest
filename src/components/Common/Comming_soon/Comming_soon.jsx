import React from "react";
import "./Comming_soon.css";
import logo from "../../../images/comming soon/animation.png";
import Wideads from "../Ads/Wideads";
import Header from "../Header/Header";

const Comming_soon = () => {
  return (
    <>
      <Header />
      <div className="logo-container">
        <div>
          <img src={logo} className="image_size" />
        </div>
      </div>
    </>
  );
};

export default Comming_soon;
