import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Mycarousel from "./components/carousel/Mycarousel";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
        <Navbar />
        <Mycarousel/>
        <Category/>
        <Footer/>
    </>
  );
}

export default App;
