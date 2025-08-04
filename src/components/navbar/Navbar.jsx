import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <div className="desktop-menu">
          <Link to="/">Home</Link>
          <Link to="/quizzes">Ongoing Quizzes</Link>
          <Link to="/quizzes">Upcoming Quizzes</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/quizzes" onClick={() => setIsOpen(false)}>Ongoing Quizzes</Link>
        <Link to="/quizzes" onClick={() => setIsOpen(false)}>Upcoming Quizzes</Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
      </div>
    </nav>
  );
}