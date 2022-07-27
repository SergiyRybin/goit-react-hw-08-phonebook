import { useCallback } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "redux/auth";
// import { useLoginUserMutation } from "redux/slice";

export const Login = () => {
  const dispatch = useDispatch()
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
    (e) => {
      e.preventDefault();
     dispatch(loginUserThunk(form))
     
    },
    [dispatch, form]
  );

  return (
    <>
      <Container>
        <Form onSubmit={onSubmite}>
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

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};
