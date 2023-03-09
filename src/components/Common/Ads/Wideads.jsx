import React from "react";
import { Link } from "react-router-dom";
import "./Wideads.css";
import ads_big from "../../../images/ads/wide big.png";

const Wideads = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-row text-center">
            <Link to={`/`} style={{ display: "inline-block", margin: "auto" }}>
              <img className="img-responsive" src={ads_big} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wideads;
