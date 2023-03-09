import React from "react";
import { Link } from "react-router-dom";

import ads_small from "../../../images/ads/wide_small.png";
const ADS_BOTTOM = () => {
  return (
    <div className="aside-widget text-center">
      <Link to={`/`} style={{ display: "inline-block", margin: "auto" }}>
        <img className="img-responsive" src={ads_small} alt="" />
      </Link>
    </div>
  );
};

export default ADS_BOTTOM;
