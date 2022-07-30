import { useCallback, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserThunk } from "requestAxios/request";
import { getLoginErrror, isAutenticated } from "selectors/selectors";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(isAutenticated);
  const error = useSelector(getLoginErrror);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = useCallback(
    (e) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setForm]
  );

  const onSubmite = useCallback(
    async (e) => {
      e.preventDefault();
      await dispatch(loginUserThunk(form));
      isAuth && navigate("/contacts");
    },
    [dispatch, form, isAuth, navigate]
  );

  return (
    <>
      <Container className="mx-auto">
        <Form className="mx-auto" onSubmit={onSubmite}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter email"
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={onChange}
            />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="success" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};
