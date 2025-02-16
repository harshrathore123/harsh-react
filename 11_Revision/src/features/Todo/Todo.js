import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const Todo = createSlice({
name:"todo",
initialState:{
    todos:[
        {
            id:1,
            text:"Hello World"
        }
    ]
},
reducers:{
    addTodo(state,action){

        const todo = {
            id:nanoid(),
            text:action.payload
        }
        
        state.todos.push(todo)
    },
    deleteTodo(state,action){
        state.todos=state.todos.filter((val)=>
            val.id !== action.payload)
    },
}
})

export const {addTodo,deleteTodo} = Todo.actions;

export default Todo.reducer