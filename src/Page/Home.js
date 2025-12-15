import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../wordhistory/css/wordhistory.css";
// import Logindata from "../Componets/Api/Logindata"; // ✅ CORRECT
import Signupdata from "../Componets/Api/Signupapi"; // ✅ CORRECT

const Home = () => {
  return (
    <>
      <Signupdata /> {/* 👈 Correct way to render component */}
    </>
  );
};

export default Home;
