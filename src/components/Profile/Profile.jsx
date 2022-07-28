import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileLoading,
  getProfileState,
  getProfileThunk,
} from "redux/auth";
// import Card from "react-bootstrap/Card";
// import { Container } from "react-bootstrap";
// import MainForm from "components/MainForm/MainForm";

export const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(getProfileState);
  const isloading = useSelector(getProfileLoading);

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  if (!profile || isloading) return;

  return (
    <>
      {profile.name} {profile.email}
    </>
  );
};
