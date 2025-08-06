import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash,FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Login.css";
import { apiFetch } from "../../../api.js";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [option, setOption] = useState({ loading: false,showPassword:false });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function handleLogin(e) {
    e.preventDefault();
    if (email === "" || password === "") return;

    setOption({ ...option, loading: true });

    apiFetch("login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        setOption({ ...option, loading: false });

        if (res.data.token) {
          setEmail("");
          setPassword("");
          login(res.token);
          toast.success("Login successful!");
          navigate("/");
        } else {
          toast.error("Invalid credentials");
        }
      })
      .catch((err) => {
        setOption({ ...option, loading: false });
        toast.error("Something went wrong");
        console.error(err);
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
              <div className="password-wrapper">
                <input
                  required
                  type={option.showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <div
                  className="iconPassword"
                  onClick={() => setOption({...option, showPassword: !option.showPassword})}
                >
                  {option.showPassword ? <FaEyeSlash/> : <FaRegEye />}
                </div>
              </div>

              <Link className="forgot_password">Forgot Password</Link>
              <button style={option.loading ? {backgroundColor:"gray"}: {}} disabled={option.loading} type="submit">
                {option.loading ? "Loading..." : "Login"}
              </button>
              <p className="signin_text">Don't have an account?  <Link>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
