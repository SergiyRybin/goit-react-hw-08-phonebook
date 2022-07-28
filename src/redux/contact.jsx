// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getToken = (state) => state.auth.token;

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// export const getContact = () => axios.get("/users/current");


// export const getContactThunk = createAsyncThunk("profile", async (_, store) => {
//   const token = getToken(store.getState());
//   const { data } = await getContact(token);
//   return data;
// });

// export const contactSlice = createSlice({
//   name: "myValue",
//   initialState: {
//     filter: "",
//   },
//   reducers: {
//     filterContact(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(getContactThunk.pending, (state) => {
//       state.isLoginLoading = true;
//     })
//     .addCase(getContactThunk.fulfilled, (state, { payload }) => {
//       state.token = payload.token;
//       state.isLoginLoading = false;
//       state.error = null;
//     })
//     .addCase(getContactThunk.rejected, (state, action) => {
//       state.isLoginLoading = false;
//       state.loginError =
//         action.error.message === "Request failed with status code 400"
//           ? "Invalide password or username"
//           : "Somethig go wrong";
//     })}
// });