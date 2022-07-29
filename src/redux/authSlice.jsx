import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  getProfileThunk,
  logOutThunk,
} from "requestAxios/request";

////Slice auth

const initialState = {
  isLoginLoading: false,
  isProfileLoading: false,
  token: null,
  profile: null,
  loginError: null,
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
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoginLoading = false;
        state.loginError =
          action.error.message === "Request failed with status code 400"
            ? "Invalide password or username"
            : "Somethig go wrong";
      })
      .addCase(getProfileThunk.pending, (state) => {
        state.isProfileLoading = true;
      })
      .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isProfileLoading = false;
        state.error = null;
      })
      .addCase(getProfileThunk.rejected, (state) => {
        state.isProfileLoading = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.token = null;
        state.loginError = null;
      });
  },
});

export default authSlice.reducer;
