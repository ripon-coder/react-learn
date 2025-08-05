import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
import { apiFetch } from "../../../api.js";

export default function Login() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (email === "" || password === "") return;
    setLoad(true);
    apiFetch("login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.data.token) {
        setEmail("");
        setPassword("");
        setLoad(false);
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    });
  }

  return (
    <div className="dark">
      <div className="mainLoginForm">
        <div className="loginForm">
          <div className="loginFields">
            <h1>Login</h1>
            <form className="loginInputsection" onSubmit={handleLogin}>
              <label>Email</label>
              <input
                required
                type="text"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <p className="forgot_password">Forgot Password</p>
              <button disabled={load} type="submit">{load ? "Loading..." : "Login"}</button>
              <p className="signin_text">Don't have an account? Register</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
