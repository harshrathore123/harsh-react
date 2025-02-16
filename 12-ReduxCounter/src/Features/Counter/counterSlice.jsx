import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",//esse name se reducer banega
    initialState:{
        Value:0
    },
    reducers:{
        inc:state=>{
            state.Value++
        },

        reset:state=>{
            state.Value = 0
        },

        dec:state=>{
            state.Value--
        },

        incByAmount:(state,action)=>{
            state.Value += Number(action.payload)
        }

    }

})


export const {inc,dec,incByAmount,reset} = counterSlice.actions
export default counterSlice.reducer