import React from "react";
import Bigpostcomponents from "../../Common/Postcomponents/Bigpost/Bigpostcomponents";
import Midpostcomponents from "../../Common/Postcomponents/Midpost/Midpostcomponents";
import CategoryPostContainer from "./CategoryPostContainer";

const Recent_post_component = ({ blogs }) => {
  const categories = [
    "ইংলিশ প্রিমিয়ার লিগ",
    "লা লিগা",
    "বাংলাদেশ প্রিমিয়ার লিগ",
  ];

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="title">Recent posts</h2>
          </div>
        </div>

        <Bigpostcomponents blog={blogs[0]} />
        <Bigpostcomponents blog={blogs[1]} />

        <div className="clearfix visible-md visible-lg"></div>

        <Bigpostcomponents blog={blogs[2]} />

        <Bigpostcomponents blog={blogs[3]} />
      </div>
      {categories.map((item) => {
        return (
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">{item}</h2>
              </div>
            </div>

            <Midpostcomponents blog={blogs[0]} category={item} />
            <Midpostcomponents blog={blogs[1]} category={item} />
            <Midpostcomponents blog={blogs[2]} category={item} />
          </div>
        );
      })}

      {/* {categories.map((category) => {
        return (
          <CategoryPostContainer key={Math.random()} category={category} />
        );
      })} */}
    </>
  );
};

export default Recent_post_component;
