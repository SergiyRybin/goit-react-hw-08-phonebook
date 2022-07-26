import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { Login } from "./Login/Login";
import MainFrom from "./MainForm/MainForm";
import { Register } from "./Register/Register";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" />
      </Routes>
      {/* <MainFrom /> */}
    </>
  );
};
export default App;
