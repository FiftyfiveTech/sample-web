import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createRootReducers from "./combineReducer";

export const store = configureStore({
  reducer: createRootReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
