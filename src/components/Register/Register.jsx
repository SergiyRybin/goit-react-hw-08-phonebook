import { useCallback } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createUser, createUserThunk } from "redux/auth";
import { useAddUserMutation } from "redux/slice";
import style from "../Register/Register.module.css";

export const Register = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  // const [addUser] = useAddUserMutation();

  const onChange = useCallback(
    (e) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setForm]
  );

  const onSubmite = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(createUserThunk(form))
      
      // addUser(form);
    },
    [dispatch, form]
  );

  return (
    <>
      <Container  >
        <Form onSubmit={onSubmite} className={style.Form}>
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

          <Button variant="primary" type="submit">
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