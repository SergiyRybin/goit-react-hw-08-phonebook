import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileState, getProfileThunk } from "redux/auth";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfileState);

  useEffect(() => {
    dispatch(getProfileThunk());
  }, []);

  if(!profile) return

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>{profile.email}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
