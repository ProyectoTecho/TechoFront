import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
  reducer: {
    user: userReducer,
  },
});

export default store;
