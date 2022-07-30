import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAddContactMutation } from "redux/sliceContact";
import { logOutThunk } from "requestAxios/request";

export const LogOut = () => {
  const [addContact] = useAddContactMutation();
  
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(logOutThunk())
    addContact(null)
  
  },[addContact, dispatch])
  return null;
};
