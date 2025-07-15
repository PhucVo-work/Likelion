import { configureStore } from "@reduxjs/toolkit";
import { PhonesApi } from "../services/apiSlice";

export const store = configureStore({
  reducer: {
    [PhonesApi.reducerPath]: PhonesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PhonesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
