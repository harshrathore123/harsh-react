import {configureStore} from "@reduxjs/toolkit";
import passwordReducer from "../Features/PasswordSlice/PasswordSlice"
export const store = configureStore({
    reducer:passwordReducer
})