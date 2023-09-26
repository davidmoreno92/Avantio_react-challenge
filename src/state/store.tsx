import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from "./stepperSlice";

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
