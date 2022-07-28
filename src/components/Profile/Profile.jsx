import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileLoading,
  getProfileState,
  getProfileThunk,
} from "redux/auth";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import MainForm from "components/MainForm/MainForm";

export const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfileState);
  const isloading = useSelector(getProfileLoading);
  

  useEffect(() => {
    dispatch(getProfileThunk());
  }, []);

  if (!profile || isloading) return;

  return (
    <>
      <Container className="mx-auto">
        <Card className="mx-auto" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{profile.name}</Card.Title>
            <Card.Text>{profile.email}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
