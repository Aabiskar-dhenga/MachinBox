import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import "./App.css";
import Test from "./components/Test";
import Product from "./pages/Product/Product";
import Privacypolicy from "./pages/Privacy Policy/Privacypolicy";
import Termsandcondition from "./pages/Terms and Condition/Termsandcondition";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termsandcondition" element={<Termsandcondition />} />
      </Routes>
    </div>
  );
};

export default App;
