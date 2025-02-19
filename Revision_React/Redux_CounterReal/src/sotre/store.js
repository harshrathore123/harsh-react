import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/CounterSlice'
export const store = configureStore({
reducer:counterReducer
});