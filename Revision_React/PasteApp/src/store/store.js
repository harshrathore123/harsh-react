import {configureStore} from "@reduxjs/toolkit"
import pasteReducer from '../features/PasteSlice.js'
export const store = configureStore({
    reducer:pasteReducer,
})