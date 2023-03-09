import React from "react";
import { Link } from "react-router-dom";
import "./Ads.css";
import ads_potrait from "../../../images/ads/potrait.png";

const Ads = () => {
  return (
    <div className="aside-widget text-center">
      <Link to={`/`} style={{ display: "inline-block", margin: "auto" }}>
        <img className="img-responsive" src={ads_potrait} alt="" />
      </Link>
    </div>
  );
};

export default Ads;
