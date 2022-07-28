import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAutenticated } from "redux/auth";

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(isAutenticated);

  return isAuth ? <Navigate to="/contacts" replace={true} /> : children;
};
