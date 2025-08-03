import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Mycarousel from "./components/carousel/Mycarousel";
import Category from "./components/category/Category";
function App() {
  return (
    <>
        <Navbar />
        <Mycarousel/>
        <Category/>
    </>
  );
}

export default App;
