import { useCallback } from "react";
import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserThunk } from "requestAxios/request";
import { getRegisterError } from "selectors/selectors";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(getRegisterError);

  const [form, setForm] = useState({
    email: "",
    name: "",
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

      dispatch(createUserThunk(form));
      !error && navigate("/login");
    },
    [dispatch, error, form, navigate]
  );

  return (
    <>
      <Container className="mx-auto">
        <Form onSubmit={onSubmite} className="mx-auto">
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

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              value={form.name}
              placeholder="Enter name"
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
            Sign Up
          </Button>
        </Form>
      </Container>
    </>
  );
};

// email: "serhio123@mail.com"
// name: "ser"
// password: "1234567"
