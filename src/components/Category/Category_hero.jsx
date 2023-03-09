import React from "react";
import { Link } from "react-router-dom";

const Category_hero = () => {
  return (
    <div id="post-header" class="page-header">
      <div
        class="page-header-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597600599980-d528ba24fe9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        }}
        data-stellar-background-ratio="0.5"
      ></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <div class="post-category">
              <Link to={`/`}>Lifestyle</Link>
            </div>
            <h1>
              Mel ut impetus suscipit tincidunt. Cum id ullum laboramus
              persequeris.
            </h1>
            <ul class="post-meta">
              <li>
                <Link to={`/`}>John Doe</Link>
              </li>
              <li>20 April 2018</li>
              <li>
                <i class="fa fa-eye"></i> 807
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category_hero;
