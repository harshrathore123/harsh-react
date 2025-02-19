import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
   addToPaste:(state,action)=>{
    const pastevalue = action.payload;
    state.pastes.push(pastevalue);
    localStorage.setItem("pastes",
    JSON.stringify(state.pastes));

    toast("Paste Created Successfully")
    
   },

   updateToPaste:(state,action)=>{
    const paste = action.payload;
    const index = state.pastes.findIndex((item)=>
    item._id===paste._id);

    if(index>=0){
      state.pastes[index] = paste;

      localStorage.setItem("pastes",JSON.stringify(state.pastes));

      toast.success("Paste Updated");
    }
   },

   resetAllPastes:(state,action)=>{

    state.pastes = []

    localStorage.removeItem("pastes")

   },

   removeFromPastes:(state,action)=>{

    const pasteId = action.payload;

    const index = state.pastes.findIndex((item)=>
    item._id===pasteId)

    if(index>=0){
      state.pastes.splice(index,1);

      localStorage.setItem("pastes",JSON.stringify(state.pastes))

      toast.success("Paste Deleted");
    }

   }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPastes, removeFromPastes } = PasteSlice.actions

export default PasteSlice.reducer