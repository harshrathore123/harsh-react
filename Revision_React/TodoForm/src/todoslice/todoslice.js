import {createSlice} from "@reduxjs/toolkit";

export const todoslice = createSlice({
    name:"harsh",
    initialState:{
        todos:[
            {
                id:1,
                first:"harsh",
                second:"Rathore"
            }
        ]
    },
    reducers:{
        add:(state,action)=>{
            const todo={
                id:id+1,
                first:action.payload,
                second:action.payload
            }
            state.todos.push(todo);
    },

    del:(state,action)=>{
        state.todos = state.todos.filter((val)=>
        val.id!== action.payload)
    }

}
})


export const {add,del} = todoslice.actions

export default todoslice.reducer