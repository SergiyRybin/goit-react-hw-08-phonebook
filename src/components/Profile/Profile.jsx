import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "requestAxios/request";
import { getProfileState, getProfileLoading } from "selectors/selectors";

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
