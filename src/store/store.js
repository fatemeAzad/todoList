import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../slices/todoListSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
