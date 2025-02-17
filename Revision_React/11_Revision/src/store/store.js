import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/Todo";

export const store = configureStore({
    reducer: todoReducer
});