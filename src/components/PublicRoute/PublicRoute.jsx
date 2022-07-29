import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAutenticated } from "selectors/selectors";

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(isAutenticated);
  console.log(isAuth);
  return isAuth ? (
    <Navigate
      to="/contacts"
      replace={true}
    />
  ) : (
    children
  );
};
