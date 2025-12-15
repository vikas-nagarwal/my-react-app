import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../wordhistory/css/wordhistory.css";
import Logindata from "../Componets/Api/Logindata"; // ✅ CORRECT
import DelayApi from "../Componets/Api/Dealyapi"; // ✅ CORRECT
import Githubapi from "../Componets/Api/Githubapi.js";
import Product from "../Componets/Api/Product.js";

const Home = () => {
  return (
    <>
      <Logindata />
      <Githubapi />
      <DelayApi />
      <Product />

      <h1>Home Page</h1>
    </>
  );
};

export default Home;
