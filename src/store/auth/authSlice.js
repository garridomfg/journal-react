import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action);
    },
    logout: (state, action) => {
      console.log(action);
    },
    checkingCredentials: (state) => {
      console.log(state);
    },
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions;
