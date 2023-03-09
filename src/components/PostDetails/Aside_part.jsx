import React from "react";
import Ads from "../Common/Ads/Ads";
import ADS_BOTTOM from "../Common/Ads/ADS_BOTTOM";
import Categories_component from "../Common/Categories/Categories_component";
import Instaapi_component from "../Common/Instaapi/Instaapi_component";
import Newsletter_component from "../Common/Newsletter/Newsletter_component";
import Popular_post_component from "../Common/Popular_post/Popular_post_component";
import Social_media from "../Common/Social_followers/Social_media";

const Aside_part = ({ categories }) => {
  return (
    <>
      <Ads />
      <Social_media />
      <Categories_component categories={categories} />
      <Newsletter_component />
      {/* <Popular_post_component /> */}
      {/* <Instaapi_component /> */}
      {/* <ADS_BOTTOM /> */}
    </>
  );
};

export default Aside_part;
