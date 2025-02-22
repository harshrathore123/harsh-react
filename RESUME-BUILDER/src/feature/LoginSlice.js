import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {

    logindetail:localStorage.getItem("logindetail")
    ? JSON.parse(localStorage.getItem("logindetail"))
    : []

}

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login:(state,action)=>{
                      state.logindetail.push(action.payload)
            localStorage.setItem("logindetail",JSON.stringify(state.logindetail));
        toast("Login Successfully")
        }

    },
})

export const {login} = LoginSlice.actions

export default LoginSlice.reducer