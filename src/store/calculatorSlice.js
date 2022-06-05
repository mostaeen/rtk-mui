import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const incrementAmount = createAction("calculator/incrementAmount");
export const decrementAmount = createAction("calculator/decrementAmount");

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState.calculator,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= state.value > 0 ? 1 : 0;
    },
    multiply: {
      reducer: (state, action) => {
        state.value *= action.payload;
      },
      prepare: (value) => ({ payload: value || 2 }) // Front-End protects from an empty value, but this shows that you can set a default value
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAmount, (state, action) => {
        state.value += action.payload;
      })
      .addCase(decrementAmount, (state, action) => {
        let newTotal = state.value - action.payload;
        state.value = newTotal < 0 ? 0 : newTotal;
      });
  }
});

export const {
  addTodo,
  removeTodo,
  increment,
  decrement,
  multiply
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
