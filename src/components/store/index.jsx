import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import selectReducer from "./selectSlice";

const store = configureStore({
  reducer: { counter: counterReducer, select: selectReducer},
});

export default store;