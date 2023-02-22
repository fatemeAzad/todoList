import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodo, getTodos } from "../services/service";

const initialState = {
  todoList: [],
};

export const fetchTodos = createAsyncThunk("fetch-todos", async () => {
  const response = await getTodos();

  const data = response.data;
  return data;
});
export const fetchTodo = createAsyncThunk("fetch-todo", async (todoId) => {
  const response = await getTodo(todoId);
  const data = response.data;
  return data;
});


const todosSlice=createSlice({
    name:"todosSlice",
    initialState,
    extraReducers:{
        [fetchTodos.fulfilled]:(state,action)=>{
           state.todoList.push(...action.payload)
          // state.todoList=action.payload
        },
       [fetchTodo.fulfilled]:(state,action)=>{
        state.todoList.push(...action.payload)
        // state.todoList=action.payload

       }
    },
   
})

export default todosSlice.reducer;