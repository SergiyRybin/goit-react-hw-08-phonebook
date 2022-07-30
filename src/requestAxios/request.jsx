import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "selectors/selectors";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

let store;

export function setStore(appStore) {
  store = appStore;
}

axios.interceptors.request.use((config) => {
  const acessToken = getToken(store.getState());
  config.headers["Authorization"] = acessToken;
  return config;
});

export const createUser = (form) => axios.post("/users/signup", form);
export const loginUser = (form) => axios.post("/users/login", form);
export const getProfile = () => axios.get("/users/current");
export const logOut = () => axios.post("/users/logout");

///Thunk
export const createUserThunk = createAsyncThunk("signup", async (form) => {
  const { data } = await createUser(form);

  return data;
});

export const loginUserThunk = createAsyncThunk("login", async (form) => {
  const { data } = await loginUser(form);
  return data;
});

export const getProfileThunk = createAsyncThunk("profile", async (_, store) => {
  const token = getToken(store.getState());
  const { data } = await getProfile(token);
  return data;
});

export const logOutThunk = createAsyncThunk("logout", async () => {
  await logOut();
});
