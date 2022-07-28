import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

let store;

export function setStore(appStore) {
  store = appStore;
}

/////Axios rec

axios.interceptors.request.use((config) => {
  const acessToken = getToken(store.getState());

  config.headers["Authorization"] = acessToken;
  return config;
});

export const createUser = (form) => axios.post("/users/signup", form);
export const loginUser = (form) => axios.post("/users/login", form);
export const getProfile = () => axios.get("/users/current");
//// Selectors

export const getToken = (state) => state.auth.token;
export const getProfileState = (state) => state.auth.profile;
export const getProfileLoading = (state)=> state.auth.isProfileLoading
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

////Slice auth

const initialState = {
  isLoginLoading: false,
  isProfileLoading: false,
  token: null,
  profile: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoginLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoginLoading = false;
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.isLoginLoading = false;
      })
      .addCase(getProfileThunk.pending, (state) => {
        state.isProfileLoading = true;
      })
      .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isProfileLoading = false;
        state.error = null;
      })
      .addCase(getProfileThunk.rejected, (state, { payload }) => {
        state.isProfileLoading = false;
      });
  },
});

export default authSlice.reducer;
