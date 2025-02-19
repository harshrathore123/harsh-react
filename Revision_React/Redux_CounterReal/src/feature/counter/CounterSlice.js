import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 0
};

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        inc:state=>{
            state.count++
        },
        dec:state=>{
            state.count--
        },
        reset:state=>{
            state.count = 0
        },
        incbyamount:(state,action)=>{
            state.count += Number(action.payload)
        }
    }
})

export const {inc,dec,reset,incbyamount} = CounterSlice.actions

export default CounterSlice.reducer