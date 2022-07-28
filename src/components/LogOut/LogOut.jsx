import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOutThunk } from "redux/auth";

export const LogOut = () => {
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(logOutThunk())
  },[dispatch])
  return null;
};
