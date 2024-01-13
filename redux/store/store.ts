import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../slices";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;