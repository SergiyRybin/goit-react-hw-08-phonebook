import { configureStore } from "@reduxjs/toolkit";
import { contactsApi,createUserApi, mySlice } from "./slice";
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [createUserApi.reducerPath]: createUserApi.reducer,
    filter: mySlice.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
