import { useCallback } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "redux/auth";
// import { loginUser } from "redux/slice";
import { useLoginUserMutation } from "redux/slice";

export const Login = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [requestId, setRequestId] = useState("");

  // const data= useSelector(state=> state.users.mutations)
  // console.log(data[requestId]);


  // const [loginUser] = useLoginUserMutation();

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
      // console.log( loginUser(form));
    },
    // [form, loginUser]
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
