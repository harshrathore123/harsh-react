import {configureStore} from "@reduxjs/toolkit";
import harshReducer from '../todoslice/todoslice';

export const store = configureStore({
    reducer:harshReducer
})