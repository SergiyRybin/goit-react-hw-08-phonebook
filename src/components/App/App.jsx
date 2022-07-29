import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { Login } from "../Login/Login";
import { LogOut } from "components/LogOut/LogOut";
import MainForm from "components/MainForm/MainForm";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { Profile } from "components/Profile/Profile";
import { PublicRoute } from "components/PublicRoute/PublicRoute";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { isAutenticated } from "selectors/selectors";
import { Register } from "../Register/Register";

const App = () => {
  const isAuth = useSelector(isAutenticated);
  const globalLink = () => {
    return (
      <>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Brand>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              Login
            </NavLink>
            <NavLink style={{ textDecoration: "none", marginLeft: "10px" }} to="/register">
              Register
            </NavLink>
          </Navbar.Brand>
        </Navbar.Collapse>

       
      </>
    );
  };

  const privateLink = () => {
    return (
      <>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
            Signed in as: <Profile />
          </Navbar.Text>
          <Navbar.Brand>
            <NavLink
              style={{ textDecoration: "none", marginLeft: "10px" }}
              to="/logout"
            >
              Logout
            </NavLink>
          </Navbar.Brand>
        </Navbar.Collapse>
      </>
    );
  };

  return (
    <>
      <Container className="mx-auto">
        <Navbar>{isAuth ? privateLink() : globalLink()}</Navbar>
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
