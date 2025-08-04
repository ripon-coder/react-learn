import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <>
      <div className="gray-dark">
        <div className="navbar container">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>Ongoing Quizzes</li>
              <li>Upcoming Quizzes</li>
              <li>Register</li>
              <li><Link to="login">Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
