import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/CounterSlice";

const store = configureStore({
  reducer: { todoRed: todoReducer },
});

export default store;
