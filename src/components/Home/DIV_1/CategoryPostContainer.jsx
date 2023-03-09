import React, { useEffect, useState } from "react";
import useBlogs from "../../../hooks/useBlogs";
import Midpostcomponents from "../../Common/Postcomponents/Midpost/Midpostcomponents";

const CategoryPostContainer = ({ category }) => {
  const [categoryBlogs, setCategoryBlogs] = useState([]);
  const { getCategoryBlogs } = useBlogs();

  useEffect(() => {
    getCategoryBlogs(category.title).then((res) => {
      setCategoryBlogs(res);
    });
  }, [category, categoryBlogs]);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          <h2 className="title">{category.title}</h2>
        </div>
      </div>

      {categoryBlogs.map((blog) => {
        return <Midpostcomponents key={Math.random()} blog={blog} />;
      })}
    </div>
  );
};

export default CategoryPostContainer;
