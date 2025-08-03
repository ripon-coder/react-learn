import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Mycarousel from "./components/carousel/Mycarousel";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Quizlist from "./components/quiz-list/Quizlist";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={ <><Mycarousel /> <Category /></>}/>
        <Route path="/quiz-list/:id" element={ <><Quizlist/></>}/>
        <Route path="/quiz/:id" element={ <><Quiz/></>}/>
        <Route path="*" element={ <><h1>404 Page</h1></>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
