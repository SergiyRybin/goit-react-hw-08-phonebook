import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { Login } from "../Login/Login";
// import MainFrom from "./MainForm/MainForm";
import { Register } from "../Register/Register";
import style from "../App/App.module.css";
import { Container } from "react-bootstrap";
import { Profile } from "components/Profile/Profile";

const App = () => {
  return (
    <>
      <Container>
        <ul className={style.NavBar}>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/contacts">
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/profile">
             Profile
            </NavLink>
          </li>
        </ul>
      </Container>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contacts" />
      </Routes>
      {/* <MainFrom /> */}
    </>
  );
};
export default App;
