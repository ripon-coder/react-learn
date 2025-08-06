import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
export default function GuestRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/" /> : children;
}
