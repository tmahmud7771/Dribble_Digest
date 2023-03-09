import React, { useEffect, useState } from "react";
import useBlogs from "../../hooks/useBlogs";
import useCategories from "../../hooks/useCategories";
import Wideads from "../Common/Ads/Wideads";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Div_1_main from "./DIV_1/Div_1_main";
import Div_2_main from "./DIV_2/Div_2_main";
import DIV_3_main from "./DIV_3/DIV_3_main";
import Hero_main from "./DIV_Hero/Hero_main";
import "./Home.css";

const Home = () => {
  const { blogs } = useBlogs();
  const { categories } = useCategories();
  console.log(categories);

  return (
    <>
      <Header categories={categories} />

      <Hero_main blogs={blogs.slice(0, 3)} />
      <Div_1_main blogs={blogs.slice(3, 7)} categories={categories} />
      <Wideads />
      <Div_2_main blogs={blogs.slice(0, 10)} />
      <DIV_3_main blogs={blogs.slice(0, 10)} />
      <Footer categories={categories} />
    </>
  );
};

export default Home;
