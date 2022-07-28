import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAutenticated } from "redux/auth";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isAutenticated);

  return isAuth ? children : <Navigate to="/login" replace={true} />;
};
