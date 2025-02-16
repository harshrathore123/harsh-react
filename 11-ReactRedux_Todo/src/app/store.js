//step:1 configure store from redux toolkit

import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/TodoSlice";

export const store = configureStore({
   reducer: todoReducer
});

//step:2 Making reducer we will says that slices in redux toolkit
