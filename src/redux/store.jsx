import { configureStore } from "@reduxjs/toolkit";
import { contactsApi, createUserApi, mySlice } from "./slice";
import { authSlice } from "./auth";

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer,
    // [createUserApi.reducerPath]: createUserApi.reducer,
    filter: mySlice.reducer,
    auth: authSlice,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   contactsApi.middleware,
  //   // createUserApi.middleware,

  // ],
});
