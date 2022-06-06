import React from "react";
import { Outlet } from "react-router-dom";
import Products from "../components/Products/Products";

const Home = () => {
  return <div>{/* Code here */}
  {/* <Products/> */}
  <Outlet/>
  </div>;
};

export default Home;
