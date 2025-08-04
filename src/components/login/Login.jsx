import { useState } from "react";
import "./Login.css";
import { apiFetch } from "../../../api.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    apiFetch("login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.data.token) {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", res.data.token);
        console.log("Login success");
      } else {
        console.error("Login failed", res.data);
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
                type="text"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <p className="forgot_password">Forgot Password</p>
              <button type="submit">Login</button>
              <p className="signin_text">Don't have an account? Register</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
