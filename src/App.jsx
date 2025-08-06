import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";

import Navbar from "./components/navbar/Navbar";
import Mycarousel from "./components/carousel/Mycarousel";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Quizlist from "./components/quiz-list/Quizlist";
import Quiz from "./components/quiz/Quiz";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <><Mycarousel /> <Category /></>}/>
        <Route path="/quiz-list/:id" element={<Quizlist/>}/>
        <Route path="/quiz/:id" element={<PrivateRoute><Quiz/></PrivateRoute>}/>
        <Route path="/login" element={ <GuestRoute><Login/></GuestRoute>}/>
        <Route path="*" element={ <><h1>404 Page</h1></>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
