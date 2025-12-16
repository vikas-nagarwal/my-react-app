import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Header from "./Componets/Header";
import Login from "./Componets/Api/Logindata";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "250px",
            backgroundColor: "#111",
            minHeight: "100vh",
          }}
        >
          <Header />
        </div>

        <div style={{ flex: 1, padding: "20px", backgroundColor: "#fff" }}>
          <Routes>
            {/* Home as default route */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
