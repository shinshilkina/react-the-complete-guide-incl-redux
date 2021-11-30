import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggleShowCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   const count = action.count || 1;
//   if (action.type === "increment") {
//     return { counter: state.counter + count, showCounter: state.showCounter };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - count, showCounter: state.showCounter };
//   }
//   if (action.type === "toggleShowCounter") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
