import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { Login } from "../Login/Login";

import { Profile } from "components/Profile/Profile";
import { Container } from "react-bootstrap";
import style from "../App/App.module.css";
import { Register } from "../Register/Register";
import MainForm from "components/MainForm/MainForm";

const App = () => {
  return (
    <>
      <Container className="mx-auto">
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<MainForm />} />
      </Routes>
    </>
  );
};
export default App;
