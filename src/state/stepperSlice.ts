import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  step: number;
}

const initialState: CounterState = {
  step: 0,
};

export const stepperSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.step += 1;
    },
    decrement: (state) => {
      state.step -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = stepperSlice.actions;

export default stepperSlice.reducer;
