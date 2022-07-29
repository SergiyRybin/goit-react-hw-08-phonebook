import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mySlice, contactsApi } from "./sliceContact";
import { authSlice } from "./authSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ['auth']
};
const rootReducer = combineReducers({
  filter: mySlice.reducer,
  auth: authSlice.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  thunk: true,
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware)
  
});

export const persistor = persistStore(store);

export default store;