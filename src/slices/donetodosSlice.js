
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDoneTodos } from './../services/service';
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    doneTodos:[]
}

export const  fetchDoneTodos=createAsyncThunk("doneTodos",
    async()=>{
        const response=getDoneTodos();
        const data=(await response).data;
        return data;
    }
)
const doneTodosSlice=createSlice({
    name:"doneTodosSlice",
    initialState,
    extraReducers:{
        [fetchDoneTodos.fulfilled]:(state,action)=>{
            state.doneTodos.push(...action.payload)
        }
    }

})
export default doneTodosSlice.reducer;