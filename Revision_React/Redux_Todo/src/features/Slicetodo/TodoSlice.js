import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';


const initialState = {
    todos:[
        {
            id:1,
            first:"Hello",
            last:"React Redux"
        }
    ]
}
export const TodoSlice = createSlice({
name:"todo",
initialState,
reducers:{
    add:(state,action)=>{
        const todo ={
            id:nanoid(),
            first:action.payload,
            last: action.payload
        }
        state.todos.push(todo);
    },

    del:(state,action)=>{
        state.todos = state.todos.filter((val)=>(
            val.id!== action.payload
        ))
    }
}
});

export const {add,del} = TodoSlice.actions

export default TodoSlice.reducer

