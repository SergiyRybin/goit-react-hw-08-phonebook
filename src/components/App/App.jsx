import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Login } from "../Login/Login";

import { Profile } from "components/Profile/Profile";
import { Container } from "react-bootstrap";
import style from "../App/App.module.css";
import { Register } from "../Register/Register";
import MainForm from "components/MainForm/MainForm";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "components/PublicRoute/PublicRoute";
import { isAutenticated } from "redux/auth";
import { useSelector } from "react-redux";
import { LogOut } from "components/LogOut/LogOut";

const App = () => {
  const isAuth = useSelector(isAutenticated);
  const globalLink = () => {
    return (
      <>
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            Login
          </NavLink>
        </li>

        <li>
          <NavLink style={{ textDecoration: "none" }} to="/register">
            Register
          </NavLink>
        </li>
      </>
    );
  };

  const privateLink = () => {
    return (
      <>
        {/* <li>
          <NavLink style={{ textDecoration: "none" }} to="/contacts">
            Contacts
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink style={{ textDecoration: "none" }} to="/profile">
            Profile
          </NavLink>
        </li> */}
        <li>
          <NavLink style={{ textDecoration: "none" }} to="/logout">
            Logut
          </NavLink>
        </li>
        <li>Hello : <Profile/></li>
      </>
    );
  };

  return (
    <>
      <Container className="mx-auto">
        <ul className={style.NavBar}>
          {isAuth ? privateLink() : globalLink()}
        </ul>
      </Container>
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/contacts" element={<MainForm />} />
  
        <Route
          path="/logout"
          element={
            <PrivateRoute>
              <LogOut />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
     
    </>
  );
};
export default App;
