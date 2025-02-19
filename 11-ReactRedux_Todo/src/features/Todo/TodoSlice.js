import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

//CreateSlice is method it is the big version of reducer
//nenoid is method which is creating the unique id

//step:1 initial state

const initialState = {
    todos:[
        {
            id:1,
            text:"Hello World"
        }
    ]
}

export const TodoSlice = createSlice({
name:"todo",
initialState,
reducers:{
    //property and functioon only come in reducer
    addTodo:(state,action)=>{

        const todo ={
            id:nanoid(),
            text: action.payload
        }
       state.todos.push(todo)
    },
    deleteTodo:(state,action)=>{
        state.todos = state.todos.filter((val)=>
            val.id !== action.payload
        )
    }

}  
})

export const {addTodo,deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer