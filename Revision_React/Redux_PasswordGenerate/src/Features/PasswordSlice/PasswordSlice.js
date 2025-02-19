// src/redux/passwordSlice.js
import { createSlice } from "@reduxjs/toolkit";

const generatePassword = (length = 12) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

// let pass = "";
// let str = "abcdefghijklmnopqrstuvwxyzABCDEDFGHIJKLMNOPQRSTUVWXYZ";

// for (let i = 1; i <= length; i++) {
//     let random = Math.floor(Math.random() * str.length + 1);
//     pass += str.charAt(random);
// }
// return pass;
};

const passwordSlice = createSlice({
  name: "password",
  initialState: { Val: generatePassword() },
  reducers: {
    regenerate: (state, action) => {
      state.Val = generatePassword(action.payload || 12);
    },
  },
});

export const { regenerate } = passwordSlice.actions;
export default passwordSlice.reducer;
