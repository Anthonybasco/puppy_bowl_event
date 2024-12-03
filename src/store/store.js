import { configureStore } from "@reduxjs/toolkit";

// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
import { api } from "./api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
const store = configureStore();

export default store;
