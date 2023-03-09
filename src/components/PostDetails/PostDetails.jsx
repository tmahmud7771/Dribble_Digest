import React, { useEffect, useState } from "react";
import "./PostDetails.css";

import Header from "../Common/Header/Header";
import Heropart from "./Heropart";
import Bodypart from "./Bodypart";
import Midpostcomponents from "../Common/Postcomponents/Midpost/Midpostcomponents";
import Aside_part from "./Aside_part";
import Footer from "../Common/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import useCategories from "../../hooks/useCategories";

const PostDetails = () => {
  const [blog_id] = useSearchParams();
  const [blog, setBlog] = useState({});
  const blogId = blog_id.get("blogId");
  const { categories } = useCategories();

  const { getBlog } = useBlogs();

  useEffect(
    () => {
      getBlog(blogId).then((data) => setBlog(data));
    },
    { blog }
  );

  return (
    <>
      <Header />
      <Heropart blog={blog} />
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <Bodypart blog={blog} />
              <div>
                <div class="section-title">
                  <h3 class="title">Related Posts</h3>
                </div>
                <div class="row">
                  <Midpostcomponents blog={blog} />
                  <Midpostcomponents blog={blog} />
                  <Midpostcomponents blog={blog} />
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <Aside_part categories={categories} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
