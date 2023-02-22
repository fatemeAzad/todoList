import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../slices/todoListSlice";
import doneTodosReducer from '../slices/donetodosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    doneTodos:doneTodosReducer
  },
});

export default store;
