import "./Login.css";
import loginImg from "../../assets/login.jpg";
export default function Login() {
  return (
    <>
      <div className="dark">
        <div className="mainLoginForm">
          <div className="loginForm">
            <div className="loginFields">
              <h1>Login</h1>
              <div className="loginInputsection">
                <label>Email</label>
                <input type="text" placeholder="Enter your email" />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
                <p className="forgot_password">Forgot Password</p>
                <button>Login</button>
                <p className="signin_text">Don't have an account? Register</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
