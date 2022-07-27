import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = (form) =>
  axios.post("https://connections-api.herokuapp.com/users/signup", form);
export const loginUser = (form) =>
  axios.post("https://connections-api.herokuapp.com/users/login", form);

export const createUserThunk = createAsyncThunk("signup", async (form) => {
  const { data } = await createUser(form);
  return true;
});

export const loginUserThunk = createAsyncThunk("login", async (form) => {
  const { data } = await loginUser(form);
  return data;
});

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const { filterContact } = authSlice.actions;

export default authSlice.reducer;
