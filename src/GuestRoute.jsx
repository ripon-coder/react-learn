import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const token = localStorage.getItem("token");

  // If token exists, redirect to dashboard
  return token ? <Navigate to="/" /> : children;
}
